import { IsString, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ContactInfoDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;
}

export class AddressDto {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  zip: string;
}

export class CreateVendorDto {
  @IsString()
  @IsNotEmpty()
  businessName: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @ValidateNested()
  @Type(() => ContactInfoDto)
  contactInfo: ContactInfoDto;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  @IsString()
  @IsNotEmpty()
  businessDescription: string;
}

  
  export class UpdateVendorDto {
    businessName?: string;
    category?: string;
    contactInfo?: {
      email?: string;
      phone?: string;
    };
    address?: {
      street?: string;
      city?: string;
      zip?: string;
    };
    businessDescription?: string;
  }
  
  export class CreateProductDto {
    productName: string;
    price: number;
    description: string;
    stock: number;
  }
  
  export class UpdateProductDto {
    productName?: string;
    price?: number;
    description?: string;
    stock?: number;
  }
  