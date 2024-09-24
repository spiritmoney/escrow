import { Schema, Document } from 'mongoose';

// Define the interface representing the User document
export interface User extends Document {
  email: string;
  password: string;
  fullName: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Define the Mongoose schema
export const UserSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
}, { timestamps: true });
