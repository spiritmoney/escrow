import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose'; // Import Types from mongoose
import { User } from 'src/users/entities/users.entity';
import { Product } from 'src/products/entities/products.entity';
import { Escrow } from 'src/escrow/entities/escrow.entity';

@Schema({ timestamps: true })
export class TransactionEntity extends Document {
  
  @Prop({ type: Types.ObjectId, ref: 'User', required: true }) // Use Types.ObjectId
  buyer: User;

  @Prop({ type: Types.ObjectId, ref: 'Product', required: true }) // Use Types.ObjectId
  product: Product;

  @Prop({ required: true })
  amount: string;

  @Prop({ default: 'Pending' })
  status: string;

  @Prop({ type: Types.ObjectId, ref: 'Escrow', required: false }) // Use Types.ObjectId
  escrow?: Escrow;
}

export const TransactionSchema = SchemaFactory.createForClass(TransactionEntity);
