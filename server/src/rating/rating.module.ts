import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';
import { Rating, RatingSchema } from './entities/rating.entity';
import { Cart, CartSchema } from 'src/cart/entities/cart.entity';

import { UserSchema } from 'src/users/entities/users.entity'; // Import only the schema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rating.name, schema: RatingSchema }]),
    MongooseModule.forFeature([
      { name: Cart.name, schema: CartSchema },
    ]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [RatingController],
  providers: [RatingService],
})
export class RatingModule {}