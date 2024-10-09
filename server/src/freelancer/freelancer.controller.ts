import { Controller, Get, Post, Patch, Body, UseGuards, Req } from '@nestjs/common';
import { FreelancerService } from './freelancer.service';
import { JwtAuthGuard } from '../users/jwt-auth.guard';
import { FreelancerGuard } from './freelancer.guard';

@Controller('freelancer')
export class FreelancerController {
  constructor(private readonly freelancerService: FreelancerService) {}

  @UseGuards(FreelancerGuard)
  @Post('profile')
  async completeProfile(@Req() req, @Body() profileData) {
    const userId = req.user.userId;
    return this.freelancerService.completeProfile(userId, profileData);
  }

  @UseGuards(FreelancerGuard)
  @Get('dashboard')
  async getDashboard(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getDashboard(userId);
  }

  @UseGuards(FreelancerGuard)
  @Get('orders')
  async getOrders(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getOrders(userId);
  }

  @UseGuards(FreelancerGuard)
  @Get('messages')
  async getMessages(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getMessages(userId);
  }

  @UseGuards(FreelancerGuard)
  @Get('analytics')
  async getAnalytics(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getAnalytics(userId);
  }

  @UseGuards(FreelancerGuard)
  @Get('earnings')
  async getEarnings(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getEarnings(userId);
  }

  // New route to get freelancer's skills
  @UseGuards(FreelancerGuard)
  @Get('skills')
  async getSkills(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getSkills(userId);
  }

  // New route to get the complete freelancer profile
  @UseGuards(FreelancerGuard)
  @Get('profile')
  async getProfile(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getProfile(userId);
  }

  // New route to update freelancer profile
  @UseGuards(FreelancerGuard)
  @Patch('profile')
  async updateProfile(@Req() req, @Body() updateData) {
    const userId = req.user.userId;
    return this.freelancerService.updateProfile(userId, updateData);
  }

  // New route to get freelancer's reviews
  @UseGuards(FreelancerGuard)
  @Get('reviews')
  async getReviews(@Req() req) {
    const userId = req.user.userId;
    return this.freelancerService.getReviews(userId);
  }

  // New route to update freelancer availability status
  @UseGuards(FreelancerGuard)
  @Patch('availability')
  async updateAvailability(@Req() req, @Body() availabilityData) {
    const userId = req.user.userId;
    return this.freelancerService.updateAvailability(userId, availabilityData);
  }
}
