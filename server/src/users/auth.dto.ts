import { IsEmail, IsString } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  fullName: string;
}

export class VerifyEmailDto {
  @IsEmail()
  email: string;

  @IsString()
  verificationCode: string;
}

export class ResendVerificationDto {
  @IsEmail()
  email: string;
}
