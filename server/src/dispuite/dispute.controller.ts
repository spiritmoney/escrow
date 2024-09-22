import { Controller, Post, Get, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { DisputeService } from './dispute.service';
import { CreateDisputeDto } from './dto/create-dispute.dto';

@Controller('disputes')
export class DisputeController {
    constructor(private readonly disputeService: DisputeService) {}

    @Post(':escrowId')
    async createDispute(@Param('escrowId') escrowId: string, @Body() createDisputeDto: CreateDisputeDto) {
        const dispute = await this.disputeService.createDispute(escrowId, createDisputeDto);
        if (!dispute) {
            throw new HttpException('Failed to create dispute', HttpStatus.BAD_REQUEST);
        }
        return { message: 'Dispute created successfully', dispute };
    }

    @Get(':id')
    async getDispute(@Param('id') id: string) {
        const dispute = await this.disputeService.getDispute(id);
        if (!dispute) {
            throw new HttpException('Dispute not found', HttpStatus.NOT_FOUND);
        }
        return dispute;
    }
}
