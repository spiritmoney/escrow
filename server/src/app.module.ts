import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EscrowModule } from './escrow/escrow.module';
import { ProductModule } from './products/products.module';
import { UserModule } from './users/users.module';
import { TransactionModule } from './transactions/transactions.module';
import { RatingModule } from './rating/rating.module';
import { DisputeModule } from './dispuite/dispute.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './users/auth.module';
import { FreelancerModule } from './freelancer/freelancer.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [
    // ConfigModule for handling environment variables
    ConfigModule.forRoot({ isGlobal: true }),

    // MongooseModule for MongoDB connection using async configuration
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),

    // Feature modules (no TypeORM, these will use Mongoose instead)
    EscrowModule,
    TransactionModule,
    ProductModule,
    RatingModule,
    DisputeModule,
    UserModule,
    FreelancerModule,
    AuthModule,
    VendorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
