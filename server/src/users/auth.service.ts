import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './users.service';
import { User } from './entities/users.entity';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AuthService {
  private verificationCodes: Map<string, string> = new Map();

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  // Generate 6-digit verification code
  async generateVerificationCode(userId: string): Promise<string> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    this.verificationCodes.set(userId, code);
    return code;
  }

  // Send verification email using nodemailer
  async sendVerificationEmail(email: string, code: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use any other email service provider
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Email Verification From Escrows',
      text: `Your verification code is: ${code}`,
    };

    await transporter.sendMail(mailOptions);
  }

  // Verify the submitted email code
  async verifyEmailCode(email: string, code: string): Promise<boolean> {
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const storedCode = this.verificationCodes.get(user.id);
    if (storedCode === code) {
      // Update user's status to verified
      await this.userService.markEmailAsVerified(user.id);
      this.verificationCodes.delete(user.id); // Clear the code
      return true;
    }
    return false;
  }
}
