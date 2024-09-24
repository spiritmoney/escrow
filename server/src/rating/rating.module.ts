import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';
import { Rating, RatingSchema } from './entities/rating.entity';
import { TransactionEntity, TransactionSchema } from 'src/transactions/entities/transactions.entity';
import { UserSchema } from 'src/users/entities/users.entity'; // Import only the schema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rating.name, schema: RatingSchema }]),
    MongooseModule.forFeature([{ name: TransactionEntity.name, schema: TransactionSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), 
  ],
  controllers: [RatingController],
  providers: [RatingService],
})
export class RatingModule {}
