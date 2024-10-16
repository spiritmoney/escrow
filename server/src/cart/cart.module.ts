import { MongooseModule } from "@nestjs/mongoose";
import { forwardRef, Module } from '@nestjs/common';
import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
import { Cart, CartSchema } from "./entities/cart.entity";
import { AuthModule } from "src/users/auth.module";
import { UserModule } from "src/users/users.module";
import { ProductService } from "src/products/products.service";
import { ProductModule } from "src/products/products.module";
import { Product, ProductSchema } from "src/products/entities/products.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
    ]),
    forwardRef(() => AuthModule),
    forwardRef(() => UserModule),
    forwardRef(() => ProductModule), 
  ],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
