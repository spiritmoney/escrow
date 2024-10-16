// src/services/service.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ServiceService } from './services.service';
import { CreateServiceDto, UpdateServiceDto } from './service.dto'; 


import { ServiceGuard } from './services.guard';
@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @UseGuards(ServiceGuard)
  @Post()
  async create(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  @UseGuards(ServiceGuard) 
  @Get()
  async findAll() {
    return this.serviceService.findAll();
  }



  @UseGuards(ServiceGuard) 
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.serviceService.findOne(id);
  }

  @UseGuards(ServiceGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(id, updateServiceDto);
  }

  @UseGuards(ServiceGuard) 
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.serviceService.remove(id);
  }
}
