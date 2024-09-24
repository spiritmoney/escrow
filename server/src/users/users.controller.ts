import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string; fullName: string }) {
    const { email, password, fullName } = body;

    // Check if the user already exists
    const existingUser = await this.userService.findUserByEmail(email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Register the user
    const user = await this.userService.createUser(email, password, fullName);

    // Return the created user (could return limited info like id and email)
    return { id: user.id, email: user.email, fullName: user.fullName };
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    // Verify credentials in NestJS
    const user = await this.userService.verifyUser(body.email, body.password);
    if (!user) {
      throw new Error('Invalid credentials!');
    }

    // Return user data if valid
    return user;
  }

  @Get('profile/:id')
  async getProfile(@Body() body: { id: string }) {
    return this.userService.getProfile(body.id);
  }
}
