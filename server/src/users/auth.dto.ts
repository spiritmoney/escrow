import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  fullName: string;
}


export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
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
