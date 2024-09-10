import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EscrowModule } from './escrow/escrow.module';
import { EscrowEntity } from './escrow/entities/escrow.entity';
import { ProductEntity } from './products/entities/products.entity';
import { ProductModule } from './products/products.module';
import { UserEntity } from './users/entities/users.entity';
import { UserModule } from './users/users.module';
import { TransactionEntity } from './transactions/entities/transactions.entity';
import { TransactionModule } from './transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '08086338671',
      username: 'postgres',
      entities: [EscrowEntity, TransactionEntity, UserEntity, ProductEntity],
      database: 'EscrowDb',
      synchronize: true,
      logging: true,
    }),
    EscrowModule,
    TransactionModule,
    UserModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}