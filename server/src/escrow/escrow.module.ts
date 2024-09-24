import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Escrow, EscrowSchema } from './entities/escrow.entity';
import { EscrowService } from './escrow.service';
import { EscrowController } from './escrow.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Escrow.name, schema: EscrowSchema }]), // Register the model
  ],
  providers: [EscrowService],
  controllers: [EscrowController],
  exports: [MongooseModule], // Export the MongooseModule to be used in other modules
})
export class EscrowModule {}
