import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './entities/users.entity';
import { ethers } from 'ethers'; 
// import { fundingWallet } from './auth.controller';


  const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
 const fundingWallet = new ethers.Wallet('0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890'
, provider);
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

    // Generate a new Ethereum wallet for the user
    const wallet = ethers.Wallet.createRandom();

    const newUser = new this.userModel({
      email,
      password: hashedPassword,
      fullName,
      isVerified: false, // Initially not verified
      walletAddress: wallet.address, // Store the wallet address in the DB
      privateKey: wallet.privateKey, // Store private key (secure it properly!)
    });

    return newUser.save();
  }

  // Method to fund the wallet
  async fundWallet(walletAddress: string): Promise<string> {
    const tx = {
      to: walletAddress,
      value: ethers.parseEther('0.01'), 
        };

    // Send the transaction from the funding wallet
    const transactionResponse = await fundingWallet.sendTransaction(tx);
    await transactionResponse.wait(); // Wait for the transaction to be mined

    return transactionResponse.hash; // Return the transaction hash as confirmation
  }

  // Mark user email as verified
  async markEmailAsVerified(userId: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(userId, { isVerified: true }).exec();
  }
}
