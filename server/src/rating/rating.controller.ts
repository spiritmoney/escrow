import { Controller, Post, Get, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';

@Controller('ratings')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  // Rate a transaction
  @Post(':transactionId')
  async rateTransaction(@Param('transactionId') transactionId: string, @Body() createRatingDto: CreateRatingDto) {
    const rating = await this.ratingService.rateTransaction(transactionId, createRatingDto);
    if (!rating) {
      throw new HttpException('Failed to rate transaction', HttpStatus.BAD_REQUEST);
    }
    return { message: 'Rating submitted successfully', rating };
  }

  // Get all ratings for a specific user
  @Get('user/:userId')
  async getRatingsForUser(@Param('userId') userId: string) {
    const ratings = await this.ratingService.getRatingsForUser(userId);
    if (!ratings.length) {
      throw new HttpException('No ratings found for this user', HttpStatus.NOT_FOUND);
    }
    return ratings;
  }
}
