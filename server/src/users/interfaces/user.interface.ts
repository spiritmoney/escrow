import { Document } from 'mongoose';

// Interface for the raw user data
export interface IUser {
  email: string;
  password: string;
  fullName: string;
  isVerified: boolean;
  walletAddress: string;
  privateKey: string;
  refreshToken?: string;
  // Add other fields as needed
}

// Interface for the Mongoose document
export interface UserDocument extends Document, IUser {}

// Interface for the response with balance
export interface UserResponse extends IUser {
  id: string;
  tokenBalance?: string;
}
