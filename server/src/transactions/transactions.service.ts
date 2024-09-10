import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionEntity } from './entities/transactions.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity) private transactionRepository: Repository<TransactionEntity>,
  ) {}

  async createTransaction(data: any) {
    const transaction = this.transactionRepository.create(data);
    return this.transactionRepository.save(transaction);
  }

  async getAllTransactions() {
    return this.transactionRepository.find();
  }

  // Updated getTransactionById method
  async getTransactionById(id: number) {
    return this.transactionRepository.findOne({
      where: { id },
    });
  }
}
