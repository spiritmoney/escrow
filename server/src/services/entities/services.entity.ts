// src/services/schemas/service.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Service extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  duration: string; // e.g., "1 hour", "2 hours"

  @Prop({ default: [] })
  reviews: string[]; // Array of Review IDs

  @Prop({ default: true })
  available: boolean; // Availability of the service
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
