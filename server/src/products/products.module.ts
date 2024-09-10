import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { ProductEntity } from "./entities/products.entity";
import { ProductController } from "./products.controller";
import { ProductService } from "./products.service";



@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity])],
    controllers: [ProductController],
    providers: [ProductService],
  })

  
  export class ProductModule {}