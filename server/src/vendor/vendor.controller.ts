import { Controller, Get, Post, Put, Delete, Body, UseGuards, Request, Param, ValidationPipe } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { JwtAuthGuard } from 'src/users/jwt-auth.guard';
import { VendorGuard } from './vendor.guard';
import { CreateProductDto , CreateVendorDto, UpdateProductDto, UpdateVendorDto } from './dto/vendor.dto';

@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  // Create Vendor Profile
  @UseGuards(VendorGuard)
  @Post('profile')
  async createProfile(
    @Request() req, 
    @Body(new ValidationPipe()) createVendorDto: CreateVendorDto
  ) {
    const { businessName, category, contactInfo, address, businessDescription } = createVendorDto;
    return this.vendorService.createVendorProfile(req.user, businessName, category, contactInfo, address, businessDescription);
  }

  // Get Vendor Dashboard
  @UseGuards(VendorGuard)
  @Get('dashboard')
  async getDashboard(@Request() req) {
    return this.vendorService.getVendorDashboard(req.user);
  }

  // Get Vendor Product Listings
  @UseGuards(VendorGuard)
  @Get('listings')
  async getProductListings(@Request() req) {
    return this.vendorService.getVendorProductListings(req.user);
  }

  // Create a new Product Listing
  // @Post('listings')
  // async createProductListing(@Request() req, @Body() createProductDto: CreateProductDto) {
  //   return this.vendorService.createProductListing(req.user, createProductDto);
  // }

  // // Update a Product Listing by ID
  // @Put('listings/:id')
  // async updateProductListing(@Request() req, @Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.vendorService.updateProductListing(req.user, id, updateProductDto);
  // }

  // // Delete a Product Listing by ID
  // @Delete('listings/:id')
  // async deleteProductListing(@Request() req, @Param('id') id: string) {
  //   return this.vendorService.deleteProductListing(req.user, id);
  // }

  @UseGuards(VendorGuard)
  @Get('messages')
  async getVendorMessages(@Request() req) {
    return this.vendorService.getVendorMessages(req.user);
  }

  // Get Vendor Earnings
  @UseGuards(VendorGuard)
  @Get('earnings')
  async getVendorEarnings(@Request() req) {
    return this.vendorService.getVendorEarnings(req.user);
  }

  @UseGuards(VendorGuard)
  @Get('analytics')
  async getVendorAnalytics(@Request() req) {
    return this.vendorService.getVendorAnalytics(req.user);
  }

  // Update Vendor Profile
  @UseGuards(VendorGuard)
  @Put('profile')
  async updateVendorProfile(@Request() req, @Body() updateVendorDto: UpdateVendorDto) {
    return this.vendorService.updateVendorProfile(req.user, updateVendorDto);
  }
}
