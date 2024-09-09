import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EscrowController } from './escrow.controller';
import { EscrowService } from './escrow.service';
import { EscrowEntity } from './entities/escrow.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EscrowEntity])],
  controllers: [EscrowController],
  providers: [EscrowService],
})
export class EscrowModule {}
