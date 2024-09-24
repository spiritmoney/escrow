import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
  ) {}

  async findUserByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async createUser(email: string, password: string, fullName: string) {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new this.userModel({
      email,
      password: hashedPassword,
      fullName,
    });

    // Save the user in the database
    return newUser.save();
  }

  async verifyUser(email: string, password: string) {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) return null;

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return null;

    return { id: user._id, email: user.email, fullName: user.fullName };
  }

  async getProfile(id: string) {
    return this.userModel.findById(id).exec();
  }
}
