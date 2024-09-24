import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(@Body() body: any) {
    return this.productService.createProduct(body);
  }

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() body: any) {
    return this.productService.updateProduct(id, body);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
