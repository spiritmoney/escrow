import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { TransactionEntity } from "./entities/transactions.entity";
import { TransactionController } from "./transactions.controller";
import { TransactionService } from "./transactions.service";


@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
