import { Controller, Get, Patch, Body, UseGuards, Req, BadRequestException } from '@nestjs/common';
import { UserService } from './users.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UpdateProfileDto } from './update-profile.dto';

export enum UserRole {
  GUEST = 'Guest',
  AUTHENTICATED_USER = 'Authenticated User',
  FREELANCER = 'Freelancer',
  VENDOR = 'Vendor',
}

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req) {
    const userId = req.user.userId;
    const user = await this.userService.getProfile(userId);
    
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Patch('profile')
  async updateProfile(@Req() req, @Body() updateData: UpdateProfileDto) {
    const userId = req.user.userId;
    
    const user = await this.userService.updateProfile(userId, updateData);
    
    if (!user) {
      throw new BadRequestException('User not found or update failed');
    }
    
    return user;
  }
  
  @Get('list')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
