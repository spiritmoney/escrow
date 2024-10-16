import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './entities/products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private productModel: Model<Product>,
  ) {}

  // Fetch all products
  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  // Fetch a product by ID
  async getProductById(productId: string): Promise<Product> {
    const product = await this.productModel.findById(productId).exec();
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  // Create a new product
  async createProduct(createProductDto: any): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  // Update product details
  async updateProduct(productId: string, updateProductDto: any): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      productId,
      updateProductDto,
      { new: true },
    ).exec();

    if (!updatedProduct) {
      throw new NotFoundException('Product not found');
    }
    return updatedProduct;
  }

  // Delete a product
  async deleteProduct(productId: string): Promise<void> {
    const result = await this.productModel.findByIdAndDelete(productId).exec();
    if (!result) {
      throw new NotFoundException('Product not found');
    }
  }
}
