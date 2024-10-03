import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from './users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  // Register route
  @Post('register')
  async register(@Body() body: { email: string; password: string; fullName: string }) {
    const { email, password, fullName } = body;

    // Check if user already exists
    const existingUser = await this.userService.findUserByEmail(email);
    if (existingUser) throw new BadRequestException('User with this email already exists');

    // Create user with a temporary status (unverified)
    const user = await this.userService.createUser(email, password, fullName);

    // Generate a 6-digit verification code and send it via email
    const verificationCode = await this.authService.generateVerificationCode(user.id);
    await this.authService.sendVerificationEmail(email, verificationCode);

    return { message: 'User registered successfully. Please check your email to verify your account.' };
  }

  // Email verification route
  @Post('verify-email')
  async verifyEmail(@Body() body: { email: string; verificationCode: string }) {
    const { email, verificationCode } = body;

    const isValid = await this.authService.verifyEmailCode(email, verificationCode);
    if (!isValid) {
      throw new BadRequestException('Invalid verification code');
    }

    return { message: 'Email verified successfully' };
  }

  // Resend verification code
  @Post('resend-verification')
  async resendVerification(@Body() body: { email: string }) {
    const user = await this.userService.findUserByEmail(body.email);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    // Generate and send a new verification code
    const newCode = await this.authService.generateVerificationCode(user.id);
    await this.authService.sendVerificationEmail(user.email, newCode);

    return { message: 'Verification code resent to your email' };
  }
}


//FHMHAEHM3MCH2NY1V26KDB23