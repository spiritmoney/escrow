import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DisputeEntity, DisputeSchema } from './entities/dispute.entity';
import { DisputeService } from './dispute.service';
import { DisputeController } from './dispute.controller';
import { EscrowModule } from 'src/escrow/escrow.module'; // Adjust the import path as necessary

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DisputeEntity.name, schema: DisputeSchema }]),
    EscrowModule, // Import EscrowModule
  ],
  providers: [DisputeService],
  controllers: [DisputeController],
})
export class DisputeModule {}
