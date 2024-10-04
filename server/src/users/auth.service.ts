import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './users.service';
import { User } from './entities/users.entity';
import * as nodemailer from 'nodemailer';

interface VerificationEntry {
  code: string;
  expiration: number;
}

@Injectable()
export class AuthService {
  private verificationCodes: Map<string, VerificationEntry> = new Map();

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  // Generate 6-digit verification code with 24-hour expiration
  async generateVerificationCode(userId: string): Promise<string> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiration = Date.now() + 24 * 60 * 60 * 1000;
    this.verificationCodes.set(userId, { code, expiration });

    console.log(`Generated code for ${userId}: ${code}`);
    return code;
  }

  // Send verification email using nodemailer with HTML template
  async sendVerificationEmail(email: string, code: string, fullName: string) {
    if (!email) {
      throw new BadRequestException('Email is required');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'emmaxcharles123@gmail.com', // Your email
        pass: 'sushqmgebuxipmjx', // Your app password
      },
    });

    const mailOptions = {
      from: 'emmaxcharles123@gmail.com', // Sender address
      to: email, // Receiver address
      subject: 'Email Verification From Escrows',
      html: `
      <div style="font-family: Arial, sans-serif; text-align: center;">
        <h2>Welcome to Escrows, ${fullName}!</h2>
        <p>Your email verification code is:</p>
        <h1 style="color: #4CAF50;">${code}</h1>
        <p>This code is valid for 24 hours. Please use it soon to verify your email.</p>
        <br />
        <p>Thank you,</p>
        <p><strong>Escrows Team</strong></p>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
  }

  // Verify the submitted email code
  async verifyEmailCode(email: string, code: string): Promise<boolean> {
    console.log('Verification process started');

    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const verificationEntry = this.verificationCodes.get(user.id);

    if (!verificationEntry) {
      throw new BadRequestException(
        'Verification code not found or already used',
      );
    }

    console.log('Stored code:', verificationEntry.code);
    console.log('Submitted code:', code);

    const { code: storedCode, expiration } = verificationEntry;

    // Check if the code is expired
    console.log('Expiration:', new Date(expiration));
    console.log('Current time:', new Date());
    if (Date.now() > expiration) {
      console.log('Code expired');
      throw new BadRequestException('Verification code has expired');
    }

    // Check if the submitted code matches
    if (storedCode === code) {
      // Mark the user's email as verified
      await this.userService.markEmailAsVerified(user.id);

      // Delete the verification code after successful verification
      this.verificationCodes.delete(user.id);
      console.log('Stored code:', storedCode);
      console.log('Submitted code:', code);
      console.log('Expiration:', new Date(expiration));
      console.log('Current time:', new Date());

      return true;
    } else {
      throw new BadRequestException('Invalid verification code');
    }
  }
}
