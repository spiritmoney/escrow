import { Controller, Get, Post, Patch, Body, UseGuards, Req } from '@nestjs/common';
import { FreelancerService } from './freelancer.service';
import { JwtAuthGuard } from '../users/jwt-auth.guard';

@Controller('api/freelancer')
export class FreelancerController {
  constructor(private readonly freelancerService: FreelancerService) {}

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  async completeProfile(@Req() req, @Body() profileData) {
    const userId = req.user.userId;
    return this.freelancerService.completeProfile(userId, profileData);
  }

  @UseGuards(JwtAuthGuard)
  @Get('dashboard')
  async getDashboard(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getDashboard(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('orders')
  async getOrders(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getOrders(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('messages')
  async getMessages(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getMessages(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('analytics')
  async getAnalytics(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getAnalytics(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('earnings')
  async getEarnings(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getEarnings(userId);
  }

  // New route to get freelancer's skills
  @UseGuards(JwtAuthGuard)
  @Get('skills')
  async getSkills(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getSkills(userId);
  }

  // New route to get the complete freelancer profile
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getProfile(userId);
  }

  // New route to update freelancer profile
  @UseGuards(JwtAuthGuard)
  @Patch('profile')
  async updateProfile(@Req() req, @Body() updateData) {
    const userId = req.user.userId;
    return this.freelancerService.updateProfile(userId, updateData);
  }

  // New route to get freelancer's reviews
  @UseGuards(JwtAuthGuard)
  @Get('reviews')
  async getReviews(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getReviews(userId);
  }

  // New route to update freelancer availability status
  @UseGuards(JwtAuthGuard)
  @Patch('availability')
  async updateAvailability(@Req() req, @Body() availabilityData) {
    const userId = req.user.userId;
    return this.freelancerService.updateAvailability(userId, availabilityData);
  }
}
