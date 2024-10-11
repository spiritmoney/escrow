import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/entities/users.entity';

export enum ProductCategory {
  APPAREL_ACCESSORIES = 'Apparel and Accessories',
  BEAUTY_PRODUCTS = 'Beauty Products',
  CONSUMER_ELECTRONICS = 'Consumer Electronics',
  HOME_GOODS = 'Home Goods',
  BOOKS_MEDIA = 'Books and Media',
  HEALTH_WELLNESS = 'Health and Wellness',
  TOYS_GAMES = 'Toys and Games',
  SPORTING_GOODS = 'Sporting Goods',
  PET_SUPPLIES = 'Pet Supplies',
  AUTOMOTIVE_PARTS = 'Automotive Parts',
  JEWELRY_WATCHES = 'Jewelry and Watches',
  BABY_PRODUCTS = 'Baby Products',
  FOOD_BEVERAGE = 'Food and Beverage',
  OFFICE_SUPPLIES = 'Office Supplies',
  CRAFTS_ART_SUPPLIES = 'Crafts and Art Supplies',
}

interface SocialMedia {
  platform: string;
  link: string;
}

interface ContactInfo {
  phone?: string;
  email?: string;
  website?: string;
  socialMedia?: SocialMedia[];
}

interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

@Schema()
export class Vendor extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ required: true, enum: ProductCategory })
  category: ProductCategory;

  @Prop({ required: true })
  businessName: string;

  @Prop()
  businessDescription: string;

  @Prop({ default: [] })
  productListings: Types.ObjectId[];

  @Prop({ default: 0 })
  earnings: number;

  @Prop({ default: [] })
  messages: Types.ObjectId[];

  @Prop({ type: Object })
  analytics: Record<string, any>;

  @Prop({ default: 0 })
  rating: number;

  @Prop({ default: [] })
  reviews: { customerId: Types.ObjectId; reviewText: string; rating: number }[];

  @Prop({ type: Object }) // Explicitly specify Object type
  contactInfo: ContactInfo; // Use the interface defined above

  @Prop({ type: Object }) // Explicitly specify Object type
  address: Address; // Use the interface defined above

  @Prop({ default: Date.now })
  joinedDate: Date;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
