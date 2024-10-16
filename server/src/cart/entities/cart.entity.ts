import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Cart extends Document {
  findOne(arg0: { userId: string }) {
    throw new Error('Method not implemented.');
  }
  findOneAndUpdate(
    arg0: { userId: string; 'items.productId': string },
    arg1: { $set: { 'items.$.quantity': number } },
    arg2: { new: boolean },
  ) {
    throw new Error('Method not implemented.');
  }
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: string; // Reference to the User

  @Prop({
    type: [
      { productId: { type: Types.ObjectId, ref: 'Product' }, quantity: Number },
    ],
    default: [],
  })
  items: { productId: string; quantity: number }[]; // Products in the cart

  @Prop({ default: 0 })
  total: number; // Total cost of all items in the cart
}

export const CartSchema = SchemaFactory.createForClass(Cart);
