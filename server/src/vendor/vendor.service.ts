import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendor } from './vendor.schema';
import { User } from 'src/users/entities/users.entity';

@Injectable()
export class VendorService {
  constructor(@InjectModel(Vendor.name) private vendorModel: Model<Vendor>) {}

  async createVendorProfile(user: User, businessName: string, category: string): Promise<Vendor> {
    const vendorExists = await this.vendorModel.findOne({ user: user._id });
    if (vendorExists) {
      throw new ForbiddenException('Vendor profile already exists');
    }

    const vendor = new this.vendorModel({
      user: user._id,
      businessName,
      category,
      productListings: [],
      earnings: 0,
    });

    return vendor.save();
  }

  async getVendorDashboard(user: User): Promise<Vendor> {
    const vendor = await this.vendorModel.findOne({ user: user._id }).exec();
    if (!vendor) {
      throw new NotFoundException('Vendor profile not found');
    }
    return vendor;
  }

  // Implement other methods for listings, messages, analytics, etc.
}
