import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './entities/users.entity';
import { ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
import { TokenService } from '../token/token.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private configService: ConfigService,
    private tokenService: TokenService,
  ) {}

  findById(userId: string) {
    throw new Error('Method not implemented.');
  }

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
    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const wallet = ethers.Wallet.createRandom();

      const newUser = new this.userModel({
        email,
        password: hashedPassword,
        fullName,
        isVerified: false,
        walletAddress: wallet.address,
        privateKey: wallet.privateKey,
        tokenBalance: '0', // Initialize with zero balance
      });

      // Save the user first
      const savedUser = await newUser.save();

      // Transfer tokens directly using TokenService
      console.log('Initiating token transfer of 10 Espees...');
      const tokenTransferSuccess = await this.tokenService.transferTokens(
        wallet.address,
        10 // Initial token amount
      );

      if (!tokenTransferSuccess) {
        console.error(`Failed to transfer tokens to user ${savedUser._id}`);
      }

      // Wait briefly for the transaction to be indexed
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Get token balance and update user
      const tokenBalance = await this.tokenService.getTokenBalance(wallet.address);
      console.log('Final token balance:', tokenBalance);

      // Update the user with the new token balance
      savedUser.tokenBalance = tokenBalance;
      return await savedUser.save();
    } catch (error) {
      console.error('Error during user creation:', error);
      throw error;
    }
  }

  // Mark user email as verified
  async markEmailAsVerified(userId: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(userId, { isVerified: true }).exec();
  }

  // Example method using TokenService
  async transferUserTokens(userId: string, amount: number): Promise<boolean> {
    const user = await this.getUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return this.tokenService.transferTokens(user.walletAddress, amount);
  }
}
