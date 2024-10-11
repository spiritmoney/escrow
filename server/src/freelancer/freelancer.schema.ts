import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define a TypeScript interface for the Analytics type
interface Analytics {
  totalOrders: number;
  totalEarnings: number;
  completedProjects: number;
  averageRating: number; // Optional: Average rating for the freelancer
}

@Schema()
export class Freelancer extends Document {
  @Prop({ type: String, required: true })
  userId: string; // Reference to the User ID

  @Prop({ required: true })
  profileSetupComplete: boolean;

  @Prop({ type: [String], default: [] })
  orders: string[]; // Array of Order IDs

  @Prop({ type: [String], default: [] })
  messages: string[]; // Array of Message IDs

  @Prop({ default: 0 })
  earnings: number; // Total earnings

  @Prop({ type: Object }) // This can also be more specifically defined if needed
  analytics: Analytics; // Use the Analytics interface

  @Prop({ type: [String], default: [] })
  skills: string[]; // List of skills

  @Prop({ type: String, default: '' })
  profilePicture: string; // URL or path to profile picture

  @Prop({ type: String, default: '' })
  bio: string; // Brief description of the freelancer

  @Prop({ type: Number, default: 0 }) // Use a default value of 0
  rating: number; // Average rating based on client feedback

  @Prop({ type: [String], default: [] })
  reviews: string[]; // Array of reviews from clients

  @Prop({ type: Boolean, default: true })
  availability: boolean; // Availability for new projects

  @Prop({ type: Date, default: Date.now })
  createdAt: Date; // Timestamp for profile creation

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date; // Timestamp for last update
}

export const FreelancerSchema = SchemaFactory.createForClass(Freelancer);
