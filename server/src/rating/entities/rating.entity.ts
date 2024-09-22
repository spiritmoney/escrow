import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose'; // Import Types from mongoose
import { TransactionEntity } from 'src/transactions/entities/transactions.entity';
import { User } from 'src/users/entities/users.entity';

@Schema({ timestamps: true })
export class Rating extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true }) // Use Types.ObjectId
  ratedUser: User;

  @Prop({ type: Types.ObjectId, ref: 'TransactionEntity', required: true }) // Use Types.ObjectId
  transaction: TransactionEntity;

  @Prop({ type: Number, required: true })
  rating: number;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);