import { IsOptional, IsString, IsEnum } from 'class-validator';

enum UserRole {
  GUEST = 'Guest',
  AUTHENTICATED_USER = 'Authenticated User',
  FREELANCER = 'Freelancer',
  VENDOR = 'Vendor',
}

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole; // Optional but must be a valid role
}
