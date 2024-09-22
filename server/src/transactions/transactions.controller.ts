import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { TransactionService } from './transactions.service';

@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post()
  async createTransaction(@Body() body: any) {
    return this.transactionService.createTransaction(body);
  }

  @Get()
  async getAllTransactions() {
    return this.transactionService.getAllTransactions();
  }

  @Get(':id')
  async getTransactionById(@Param('id') id: string) {
    return this.transactionService.getTransactionById(id);
  }
}
