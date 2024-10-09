import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './users.service';
import { User } from './entities/users.entity';
import * as nodemailer from 'nodemailer';
// import bcrypt from 'bcryptjs';
import * as bcrypt from 'bcrypt';

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

  async generateVerificationCode(userId: string): Promise<string> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiration = Date.now() + 24 * 60 * 60 * 1000;
    this.verificationCodes.set(userId, { code, expiration });

    console.log(`Generated code for ${userId}: ${code}`);
    return code;
  }
  async validateToken(token: string) {
    try {
      // Use the JwtService to verify the token
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }


  // Send verification email using nodemailer with HTML template
  async sendVerificationEmail(email: string, code: string, fullName: string) {
    if (!email) {
      throw new BadRequestException('Email is required');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'escrowforespees@gmail.com', // Your email
        pass: 'uhkwtbvdctyfhtxb', // Your app password
      },
    });

    const mailOptions = {
      from: 'escrowforespees@gmail.com', // Sender address
      to: email, // Receiver address
      subject: 'Email Verification From Escrow',
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
  async verifyEmailCode(email: string, code: string): Promise<{ accessToken: string }> {
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const verificationEntry = this.verificationCodes.get(user.id);
    if (!verificationEntry) {
      throw new BadRequestException('Verification code not found or already used');
    }

    const { code: storedCode, expiration } = verificationEntry;
    if (Date.now() > expiration) {
      throw new BadRequestException('Verification code has expired');
    }

    if (storedCode === code) {
      // Mark the user's email as verified
      await this.userService.markEmailAsVerified(user.id);

      // Delete the verification code after successful verification
      this.verificationCodes.delete(user.id);

      // Generate JWT after email verification
      const payload = { userId: user.id, email: user.email, role: user.role };
      const accessToken = this.jwtService.sign(payload);

      return { accessToken };
    } else {
      throw new BadRequestException('Invalid verification code');
    }
  }

   // Generate JWT token with 2-day expiration
  // Generate JWT token with role
  async generateJwtToken(user: User): Promise<string> {
    const payload = { 
      userId: user._id, 
      email: user.email, 
      role: user.role  // Ensure the role is included here
    };
    
    console.log('JWT Payload:', payload);  // Log the payload to ensure role is included
  
    return this.jwtService.sign(payload, {
      expiresIn: '2d', // Token expires after 2 days
    });
  }
  


  // Validate user credentials (email and password)



  // Validate the user during login
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email);
  
    if (!user) {
      throw new BadRequestException('User not found');  // Clear error message for user not found
    }
  
    if (!user.password) {
      throw new BadRequestException('Password is missing for this user');
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      throw new BadRequestException('Incorrect password');  // Clearer error message for wrong password
    }
  
    const { passkey, ...result } = user.toObject();
    return result;
  }
  
  
}
