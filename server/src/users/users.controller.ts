import { Controller, Post, Body, Get, Param, Patch, UseGuards, BadRequestException } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './entities/users.entity';

enum UserRole {
  GUEST = 'Guest',
  AUTHENTICATED_USER = 'Authenticated User',
  FREELANCER = 'Freelancer',
  VENDOR = 'Vendor',
}

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @Post('register')
  // async register(@Body() body: { email: string; password: string; fullName: string; role: UserRole }) {
  //   const { email, password, fullName, role } = body;

  //   if (!email || !password || !fullName || !role) {
  //     throw new BadRequestException('Missing required fields');
  //   }

  //   const existingUser = await this.userService.findUserByEmail(email);
  //   if (existingUser) {
  //     throw new BadRequestException('User with this email already exists');
  //   }
    
  //   const user = await this.userService.createUser(email, password, fullName, role);
  //   return { id: user.id, email: user.email, fullName: user.fullName, role: user.role };
  // }

  @Get('profile/:id')
  async getProfile(@Param('id') id: string) {
    const user = await this.userService.getProfile(id);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  @Patch('profile/:id')
  async updateProfile(@Param('id') id: string, @Body() updateData: Partial<User>) {
    const user = await this.userService.updateProfile(id, updateData);
    if (!user) {
      throw new BadRequestException('User not found or update failed');
    }
    return user;
  }

  @Get('list')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.userService.getUserById(id);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }
}
