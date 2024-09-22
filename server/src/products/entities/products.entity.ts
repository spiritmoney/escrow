import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/entities/users.entity';

@Schema({ timestamps: true }) // Adds createdAt and updatedAt automatically
export class Product extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: string;

  @Prop({ type: String, ref: 'User', required: true }) // Reference to User model
  seller: User;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
