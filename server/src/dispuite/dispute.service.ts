import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DisputeEntity, DisputeDocument } from './entities/dispute.entity';
import { Escrow, EscrowSchema } from '../escrow/entities/escrow.entity';
import { CreateDisputeDto } from './dto/create-dispute.dto';

@Injectable()
export class DisputeService {
    constructor(
        @InjectModel(DisputeEntity.name) private disputeModel: Model<DisputeEntity>,
        @InjectModel(Escrow.name) private escrowModel: Model<Escrow>, 
    ) {}

    async createDispute(escrowId: string, createDisputeDto: CreateDisputeDto): Promise<DisputeEntity | null> {
        const escrow = await this.escrowModel.findById(escrowId);
        if (!escrow) {
            throw new NotFoundException('Escrow not found');
        }

        const dispute = new this.disputeModel({
            ...createDisputeDto,
            escrow,
        });

        return await dispute.save();
    }

    async getDispute(id: string): Promise<DisputeEntity | null> {
        return await this.disputeModel.findById(id)
            .populate('escrow')
            .populate('disputingParty')
            .exec();
    }
}
