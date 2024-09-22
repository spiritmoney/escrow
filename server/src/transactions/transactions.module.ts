import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionController } from './transactions.controller';
import { TransactionService } from './transactions.service';
import { TransactionEntity, TransactionSchema } from './entities/transactions.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TransactionEntity.name, schema: TransactionSchema }]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
