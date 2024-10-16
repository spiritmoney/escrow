import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './entities/cart.entity';
import { AddToCartDto, UpdateCartDto } from './cart.dto';
import { Product } from 'src/products/entities/products.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<Cart>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  // Helper method to calculate total cart price
  private calculateTotal(cart): number {
    return cart.items.reduce((acc, item) => {
      const price = isNaN(item.productId.price) ? 0 : item.productId.price;
      const quantity = isNaN(item.quantity) ? 0 : item.quantity;
      return acc + price * quantity;
    }, 0);
  }

  async findCartByUser(userId: string): Promise<Cart> {
    if (!userId) {
      throw new BadRequestException('User ID is required.');
    }
    
    const cart = await this.cartModel
      .findOne({ userId })
      .populate('items.productId');
    if (!cart) {
      throw new NotFoundException('Cart not found for the user.');
    }
    return cart;
  }

  async addToCart(userId: string, addToCartDto: AddToCartDto): Promise<Cart> {
    const { productId, quantity } = addToCartDto;

    // Validate userId
    if (!userId) {
      throw new BadRequestException('User ID is required.');
    }

    // Validate productId
    const product = await this.productModel.findById(productId);
    if (!product) {
      throw new NotFoundException('Product not found.');
    }

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
      // Update quantity if product exists in cart
      cart.items[existingProductIndex].quantity += quantity;
    } else {
      // Add new product to cart
      cart.items.push({ productId, quantity });
    }

    // Calculate total and save cart
    cart.total = this.calculateTotal(cart);
    if (isNaN(cart.total)) {
      throw new BadRequestException('Total amount calculation failed.');
    }
    return cart.save();
  }

  async updateCart(
    userId: string,
    updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    const { productId, quantity } = updateCartDto;

    // Validate userId
    if (!userId) {
      throw new BadRequestException('User ID is required.');
    }

    // Validate productId
    const product = await this.productModel.findById(productId);
    if (!product) {
      throw new NotFoundException('Product not found.');
    }

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
    return cart.save();
  }

  async removeFromCart(userId: string, productId: string): Promise<Cart> {
    if (!userId) {
      throw new BadRequestException('User ID is required.');
    }

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
    return cart.save();
  }

  async clearCart(userId: string): Promise<Cart> {
    if (!userId) {
      throw new BadRequestException('User ID is required.');
    }

    const cart = await this.cartModel.findOneAndUpdate(
      { userId },
      { $set: { items: [], total: 0 } }, // Reset the cart and total to 0
      { new: true },
    );

    if (!cart) {
      throw new NotFoundException('Cart not found.');
    }

    return cart.save();
  }
}
