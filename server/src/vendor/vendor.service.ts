import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendor } from './vendor.schema';
import { User } from 'src/users/entities/users.entity';
import { CreateProductDto, UpdateProductDto, UpdateVendorDto } from './dto/vendor.dto';

@Injectable()
export class VendorService {
  constructor(@InjectModel(Vendor.name) private vendorModel: Model<Vendor>) {}

  // Create Vendor Profile
  async createVendorProfile(user: User, businessName: string, category: string, contactInfo: any, address: any, businessDescription: string): Promise<Vendor> {
    const vendorExists = await this.vendorModel.findOne({ user: user._id });
    if (vendorExists) {
      throw new ForbiddenException('Vendor profile already exists');
    }

    const vendor = new this.vendorModel({
      user: user._id,
      businessName,
      category,
      contactInfo,
      address,
      businessDescription,
      productListings: [],
      earnings: 0,
    });

    return vendor.save();
  }

  // Get Vendor Dashboard
  async getVendorDashboard(user: User): Promise<Vendor> {
    const vendor = await this.vendorModel.findOne({ user: user._id }).exec();
    if (!vendor) {
      throw new NotFoundException('Vendor profile not found');
    }
    return vendor;
  }

  // Get Vendor Product Listings
  async getVendorProductListings(user: User) {
    const vendor = await this.vendorModel.findOne({ user: user._id }).exec();
    if (!vendor) {
      throw new NotFoundException('Vendor profile not found');
    }
    return vendor.productListings;
  }

  // Get Vendor Messages
  async getVendorMessages(user: User) {
    const vendor = await this.vendorModel.findOne({ user: user._id }).exec();
    if (!vendor) {
      throw new NotFoundException('Vendor profile not found');
    }
    return vendor.messages || [];
  }

  // Get Vendor Earnings
  async getVendorEarnings(user: User) {
    const vendor = await this.vendorModel.findOne({ user: user._id }).exec();
    if (!vendor) {
      throw new NotFoundException('Vendor profile not found');
    }
    return { earnings: vendor.earnings };
  }

  // Get Vendor Analytics
  async getVendorAnalytics(user: User) {
    const vendor = await this.vendorModel.findOne({ user: user._id }).exec();
    if (!vendor) {
      throw new NotFoundException('Vendor profile not found');
    }
    // Assume analytics data is stored in the vendor document, or calculate it
    return vendor.analytics || {};
  }

  // Update Vendor Profile
  async updateVendorProfile(user: User, updateVendorDto: UpdateVendorDto) {
    const vendor = await this.vendorModel.findOne({ user: user._id }).exec();
    if (!vendor) {
      throw new NotFoundException('Vendor profile not found');
    }

    Object.assign(vendor, updateVendorDto);
    await vendor.save();
    return vendor;
  }

  // Validate if User is a Vendor
  async validateUserIsVendor(userId: string): Promise<Vendor> {
    const vendor = await this.vendorModel.findOne({ user: userId }).exec();
    if (!vendor) {
      throw new NotFoundException('User is not a vendor or vendor profile not found');
    }
    return vendor;
  }

  // Validate if Product Exists for Vendor
  async validateProductForVendor(vendor: Vendor, productId: string) {
    const product = vendor.productListings.find((product) => product._id.toString() === productId);
    if (!product) {
      throw new NotFoundException('Product not found for this vendor');
    }
    return product;
  }

  // Function to Search User and Validate Vendor/Product
  async validateUserAndProduct(userId: string, productId: string) {
    // Validate if User is a Vendor
    const vendor = await this.validateUserIsVendor(userId);

    // Validate if the Product Exists for the Vendor
    const product = await this.validateProductForVendor(vendor, productId);

    return {
      vendor,
      product,
    };
  }
}
