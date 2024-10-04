import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './entities/users.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserById(userId: string): Promise<User | null> {
    return this.userModel.findById(userId).exec();
  }

  async getProfile(userId: string): Promise<User | null> {
    return this.userModel.findById(userId).exec();
  }

  async updateProfile(
    userId: string,
    updateData: Partial<User>,
  ): Promise<User | null> {
    return this.userModel
      .findByIdAndUpdate(userId, updateData, { new: true })
      .exec();
  }

  async findUserByRefreshToken(refreshToken: string): Promise<User | null> {
    return this.userModel.findOne({ refreshToken }).exec();
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    return this.userModel.findByIdAndUpdate(userId, { refreshToken }).exec();
  }

  async verifyUser(email: string, password: string): Promise<User | null> {
    const user = await this.findUserByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async findUserById(userId: string): Promise<User> {
    return this.userModel.findById(userId).exec();
  }

  // Create a new user
  async createUser(
    email: string,
    password: string,
    fullName: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new this.userModel({
      email,
      password: hashedPassword,
      fullName,
      isVerified: false, // Initially not verified
    });
    return newUser.save();
  }

  // Mark user email as verified
  async markEmailAsVerified(userId: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(userId, { isVerified: true }).exec();
  }
}
