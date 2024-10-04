import { Controller, Post, Body, BadRequestException, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from './users.service';
import { RegisterDto, VerifyEmailDto, ResendVerificationDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @Post('register')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async register(@Body() body: RegisterDto) {
    const { email, password, fullName } = body;

    // Check if user already exists
    const existingUser = await this.userService.findUserByEmail(email);
    if (existingUser) throw new BadRequestException('User with this email already exists');

    // Create user with a temporary status (unverified)
    const user = await this.userService.createUser(email, password, fullName);

    // Generate a 6-digit verification code and send it via email
    const verificationCode = await this.authService.generateVerificationCode(user.id);
    await this.authService.sendVerificationEmail(email, verificationCode, fullName);

    return { message: 'User registered successfully. Please check your email to verify your account.' };
  }

  @Post('verify-email')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async verifyEmail(@Body() body: VerifyEmailDto) {
    const { email, verificationCode } = body;

    const isValid = await this.authService.verifyEmailCode(email, verificationCode);
    if (!isValid) {
      throw new BadRequestException('Invalid verification code');
    }

    return { message: 'Email verified successfully' };
  }

  @Post('resend-verification')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async resendVerification(@Body() body: ResendVerificationDto) {
    const user = await this.userService.findUserByEmail(body.email);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    // Generate and send a new verification code
    const newCode = await this.authService.generateVerificationCode(user.id);
    await this.authService.sendVerificationEmail(user.email, newCode, user.fullName);

    return { message: 'Verification code resent to your email' };
  }
}
