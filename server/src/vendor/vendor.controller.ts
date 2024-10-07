import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';
import { VendorGuard } from './vendor.guard';
import { UserRole } from 'src/users/users.controller';

@Controller('vendor')
@UseGuards(JwtAuthGuard, VendorGuard)
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Post('profile')
  async createProfile(@Request() req, @Body() createVendorDto) {
    const { businessName, category } = createVendorDto;
    return this.vendorService.createVendorProfile(req.user, businessName, category);
  }

  @Get('dashboard')
  async getDashboard(@Request() req) {
    return this.vendorService.getVendorDashboard(req.user);
  }

  // Additional vendor routes can be added here (listings, messages, etc.)
}
