import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rating } from './entities/rating.entity';
import { TransactionEntity } from 'src/transactions/entities/transactions.entity';
import { UserSchema } from 'src/users/entities/users.entity'; // Only import the schema
import { CreateRatingDto } from './dto/create-rating.dto';

@Injectable()
export class RatingService {
  constructor(
    @InjectModel(Rating.name) private ratingModel: Model<Rating>,
    @InjectModel(TransactionEntity.name) private transactionModel: Model<TransactionEntity>,
    @InjectModel('User') private userModel: Model<typeof UserSchema>, // Explicitly name the model as 'User'
  ) {}

  // Rate a transaction
  async rateTransaction(transactionId: string, createRatingDto: CreateRatingDto): Promise<Rating | null> {
    const transaction = await this.transactionModel.findById(transactionId).populate('buyer product').exec();
    if (!transaction) {
      return null;
    }

    const user = await this.userModel.findById(createRatingDto.ratedUserId).exec();
    if (!user) {
      return null;
    }

    const rating = new this.ratingModel({
      ...createRatingDto,
      transaction,
      ratedUser: user,
    });

    return await rating.save();
  }

  // Get all ratings for a specific user
  async getRatingsForUser(userId: string): Promise<Rating[]> {
    return await this.ratingModel.find({ ratedUser: userId }).populate('transaction ratedUser').exec();
  }
}
