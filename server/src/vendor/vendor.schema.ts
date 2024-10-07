import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/entities/users.entity';

export enum ProductCategory {
  ELECTRONICS = 'Electronics',
  HEALTHCARE = 'Healthcare',
}

@Schema()
export class Vendor extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ required: true, enum: ProductCategory })
  category: ProductCategory;

  @Prop({ required: true })
  businessName: string;

  @Prop({ default: [] })
  productListings: string[];

  @Prop()
  earnings: number;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
