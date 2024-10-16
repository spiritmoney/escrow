import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "src/products/entities/products.entity";
import { UserService } from "src/users/users.service";
import { Vendor } from "src/vendor/vendor.schema";
import { VendorService } from "src/vendor/vendor.service";
import { AddToCartDto, UpdateCartDto } from "./cart.dto";
import { Cart } from "./entities/cart.entity";

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<Cart>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    private readonly userService: UserService,
    @InjectModel(Vendor.name) private readonly vendorService: VendorService,
  ) {}

  // Helper method to calculate total cart price
  private calculateTotal(cart): number {
    return cart.items.reduce((acc, item) => {
      const price = isNaN(item.productId.price) ? 0 : item.productId.price;
      const quantity = isNaN(item.quantity) ? 0 : item.quantity;
      return acc + price * quantity;
    }, 0);
  }

  private async validateUser(userId: string): Promise<any> {
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  private async checkVendorProduct(user: any, productId: string): Promise<void> {
    if (user.isVendor) {
      const isValidProduct = await this.vendorService.validateProductForVendor(user, productId);
      if (!isValidProduct) {
        throw new NotFoundException('Invalid product for this vendor');
      }
    } else {
      const product = await this.productModel.findById(productId);
      if (!product) {
        throw new NotFoundException('Product not found.');
      }
    }
  }

  async findCartByUser(userId: string): Promise<Cart> {
    try {
      const user = await this.validateUser(userId);
      const cart = await this.cartModel
        .findOne({ userId })
        .populate('items.productId');
      if (!cart) {
        throw new NotFoundException('Cart not found for the user.');
      }
      return cart;
    } catch (error) {
      throw new BadRequestException(`Error finding cart: ${error.message}`);
    }
  }

  async addToCart(userId: string, addToCartDto: AddToCartDto): Promise<Cart> {
    try {
      const { productId, quantity } = addToCartDto;

      // Validate user
      const user = await this.validateUser(userId);

      // Check if user is a vendor and validate product accordingly
      await this.checkVendorProduct(user, productId);

      // Find or create the user's cart
      let cart = await this.cartModel.findOne({ userId });
      if (!cart) {
        cart = new this.cartModel({ userId, items: [] });
      }

      // Add or update product in the cart
      const existingProductIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId,
      );
      if (existingProductIndex !== -1) {
        cart.items[existingProductIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }

      // Calculate total and save cart
      cart.total = this.calculateTotal(cart);
      if (isNaN(cart.total)) {
        throw new BadRequestException('Total amount calculation failed.');
      }

      return await cart.save();
    } catch (error) {
      throw new BadRequestException(`Error adding to cart: ${error.message}`);
    }
  }

  async updateCart(userId: string, updateCartDto: UpdateCartDto): Promise<Cart> {
    try {
      const { productId, quantity } = updateCartDto;

      // Validate user
      const user = await this.validateUser(userId);

      // Check if user is a vendor and validate product accordingly
      await this.checkVendorProduct(user, productId);

      // Update product quantity in the cart
      const cart = await this.cartModel
        .findOneAndUpdate(
          { userId, 'items.productId': productId },
          { $set: { 'items.$.quantity': quantity } },
          { new: true },
        )
        .populate('items.productId');

      if (!cart) {
        throw new NotFoundException('Cart not found.');
      }

      // Recalculate total and save cart
      cart.total = this.calculateTotal(cart);
      if (isNaN(cart.total)) {
        throw new BadRequestException('Total amount calculation failed.');
      }

      return await cart.save();
    } catch (error) {
      throw new BadRequestException(`Error updating cart: ${error.message}`);
    }
  }

  async removeFromCart(userId: string, productId: string): Promise<Cart> {
    try {
      // Validate user
      const user = await this.validateUser(userId);

      // Check if user is a vendor and validate product accordingly
      await this.checkVendorProduct(user, productId);

      const cart = await this.cartModel
        .findOneAndUpdate(
          { userId },
          { $pull: { items: { productId } } },
          { new: true },
        )
        .populate('items.productId');

      if (!cart) {
        throw new NotFoundException('Cart not found.');
      }

      // Recalculate total and save cart
      cart.total = this.calculateTotal(cart);
      if (isNaN(cart.total)) {
        throw new BadRequestException('Total amount calculation failed.');
      }

      return await cart.save();
    } catch (error) {
      throw new BadRequestException(`Error removing from cart: ${error.message}`);
    }
  }

  async clearCart(userId: string): Promise<Cart> {
    try {
      // Validate user
      const user = await this.validateUser(userId);

      const cart = await this.cartModel.findOneAndUpdate(
        { userId },
        { $set: { items: [], total: 0 } }, // Reset the cart and total to 0
        { new: true },
      );

      if (!cart) {
        throw new NotFoundException('Cart not found.');
      }

      return await cart.save();
    } catch (error) {
      throw new BadRequestException(`Error clearing cart: ${error.message}`);
    }
  }
}
