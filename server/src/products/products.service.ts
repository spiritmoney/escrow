import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(data: any) {
    const product = this.productRepository.create(data);
    return this.productRepository.save(product);
  }

  async getAllProducts() {
    return this.productRepository.find();
  }

  // Updated getProductById method
  async getProductById(id: number) {
    return this.productRepository.findOne({
      where: { id }, // Updated to use the 'where' clause
    });
  }

  // Updated updateProduct method
  async updateProduct(id: number, data: any) {
    await this.productRepository.update(id, data);
    return this.productRepository.findOne({
      where: { id }, // Updated to use the 'where' clause
    });
  }

  async deleteProduct(id: number) {
    return this.productRepository.delete(id);
  }
}
