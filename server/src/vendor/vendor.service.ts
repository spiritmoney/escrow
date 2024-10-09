import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendor } from './vendor.schema';
import { User } from 'src/users/entities/users.entity';
import { CreateProductDto , UpdateProductDto, UpdateVendorDto} from './dto/vendor.dto';

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

  
  // Create a new Product Listing
  // async createProductListing(user: User, createProductDto: CreateProductDto) {
  //   const vendor = await this.vendorModel.findOne({ user: user._id }).exec();
  //   if (!vendor) {
  //     throw new NotFoundException('Vendor profile not found');
  //   }

  //   vendor.productListings.push(createProductDto);
  //   await vendor.save();
  //   return vendor.productListings;
  // }

  // // Update a Product Listing
  // async updateProductListing(user: User, productId: string, updateProductDto: UpdateProductDto) {
  //   const vendor = await this.vendorModel.findOne({ user: user._id }).exec();
  //   if (!vendor) {
  //     throw new NotFoundException('Vendor profile not found');
  //   }

  //   const product = vendor.productListings.id(productId);
  //   if (!product) {
  //     throw new NotFoundException('Product not found');
  //   }

  //   Object.assign(product, updateProductDto);
  //   await vendor.save();
  //   return product;
  // }

  // // Delete a Product Listing
  // async deleteProductListing(user: User, productId: string) {
  //   const vendor = await this.vendorModel.findOne({ user: user._id }).exec();
  //   if (!vendor) {
  //     throw new NotFoundException('Vendor profile not found');
  //   }

  //   const product = vendor.productListings.id(productId);
  //   if (!product) {
  //     throw new NotFoundException('Product not found');
  //   }

  //   product.remove();
  //   await vendor.save();
  //   return { message: 'Product deleted successfully' };
  // }

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
}
