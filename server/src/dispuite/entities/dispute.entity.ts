import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose'; // Import Types from mongoose
import { Escrow } from 'src/escrow/entities/escrow.entity';
import { User } from 'src/users/entities/users.entity';

export type DisputeDocument = DisputeEntity & Document;

@Schema({ timestamps: true }) // Add timestamps for automatic creation and update fields
export class DisputeEntity {
    @Prop({ type: Types.ObjectId, ref: 'Escrow', required: true }) // Specify ObjectId type
    escrow: Escrow;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true }) // Specify ObjectId type
    disputingParty: User;

    @Prop({ type: String })
    description: string;

    @Prop({ default: 'Pending' })
    status: string;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const DisputeSchema = SchemaFactory.createForClass(DisputeEntity);
