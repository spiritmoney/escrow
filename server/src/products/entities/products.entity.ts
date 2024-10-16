import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  findById(productId: string) {
    throw new Error('Method not implemented.');
  }

  @Prop({ type: String, required: true })
  name: string; // Name of the product

  @Prop({ type: Number, required: true })
  price: number; // Price of the product

  @Prop({ type: Number, required: true })
  stock: number; // Stock quantity of the product

  @Prop({ type: String, required: true })
  description: string; // Description of the product

  @Prop({ type: String, default: '' })
  imageUrl?: string; // Optional: URL for the product image

  @Prop({ type: String, default: '' })
  category?: string; // Optional: Category for the product
}

export const ProductSchema = SchemaFactory.createForClass(Product);
