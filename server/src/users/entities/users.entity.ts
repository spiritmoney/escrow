import { Schema, Document } from 'mongoose';

// Define the interface representing the User document
export interface User extends Document {
  email: string;
  password: string;
  fullName: string;
  isVerified: boolean;
  phoneNumber?: string;
  address?: string;
  role: string; // Role should be non-nullable
  createdAt: Date;
  updatedAt: Date;
}

// Define the Mongoose schema
export const UserSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // Password is required
  fullName: { type: String, required: true },
  isVerified: { type: Boolean, required: true, default: false },
  phoneNumber: { type: String, required: false },
  address: { type: String, required: false },
  role: { 
    type: String, 
    required: true, 
    enum: ['Guest', 'Authenticated User', 'Freelancer', 'Vendor'], 
    default: 'Guest'  // Default role as Guest
  },
}, { timestamps: true });
