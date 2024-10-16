import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/products.entity';
import { ProductController } from './products.controller';
import { ProductService } from './products.service';
import { AuthModule } from 'src/users/auth.module';
import { UserModule } from 'src/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  forwardRef(() => AuthModule), 
  forwardRef(() => UserModule),
],
  controllers: [ProductController],
  providers: [ProductService, MongooseModule],
})
export class ProductModule {}