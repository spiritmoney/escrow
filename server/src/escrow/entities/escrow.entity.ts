import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TransactionEntity } from 'src/transactions/entities/transactions.entity';

@Schema({ timestamps: true }) // Automatically adds createdAt and updatedAt
export class Escrow extends Document {
  @Prop({ required: true })
  seller: string;

  @Prop({ required: true })
  verifier: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  amount: string;

  @Prop({ default: 'Pending' })
  status: string;

  @Prop({ nullable: true })
  winner?: string;

  @Prop({ nullable: true })
  arbitrator?: string;

  @Prop({ type: String, ref: 'TransactionEntity', required: true }) // Reference to Transaction model
  transaction: TransactionEntity;
}

export const EscrowSchema = SchemaFactory.createForClass(Escrow);
