import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransactionEntity } from './entities/transactions.entity';


@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(TransactionEntity.name) private transactionModel: Model<TransactionEntity>,
  ) {}

  async createTransaction(data: any): Promise<TransactionEntity> {
    const transaction = new this.transactionModel(data);
    return transaction.save();
  }

  async getAllTransactions(): Promise<TransactionEntity[]> {
    return this.transactionModel.find().exec();
  }

  async getTransactionById(id: string): Promise<TransactionEntity> {
    return this.transactionModel.findById(id).exec();
  }
}
