import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './entities/products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async createProduct(data: any) {
    const product = new this.productModel(data);
    return product.save();
  }

  async getAllProducts() {
    return this.productModel.find().exec();
  }

  async getProductById(id: string) {
    return this.productModel.findById(id).exec();
  }

  async updateProduct(id: string, data: any) {
    return this.productModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteProduct(id: string) {
    return this.productModel.findByIdAndDelete(id).exec();
  }
}
