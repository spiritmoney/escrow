import { Controller, Get, Post, Param, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './products.service';
import { Product } from './entities/products.entity';
import { ProductsGuard } from './products.guard';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}


  @UseGuards(ProductsGuard)
  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  // GET /products/:id - Fetch a product by ID
  @UseGuards(ProductsGuard)

  @Get(':id')
  async getProductById(@Param('id') productId: string): Promise<Product> {
    return this.productService.getProductById(productId);
  }

  // POST /products - Create a new product
  @UseGuards(ProductsGuard)

  @Post()
  async createProduct(@Body() createProductDto: any): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }

  // PUT /products/:id - Update an existing product
  @UseGuards(ProductsGuard)

  @Put(':id')
  async updateProduct(
    @Param('id') productId: string,
    @Body() updateProductDto: any,
  ): Promise<Product> {
    return this.productService.updateProduct(productId, updateProductDto);
  }

  // DELETE /products/:id - Delete a product
  @UseGuards(ProductsGuard)

  @Delete(':id')
  async deleteProduct(@Param('id') productId: string): Promise<void> {
    return this.productService.deleteProduct(productId);
  }
}
