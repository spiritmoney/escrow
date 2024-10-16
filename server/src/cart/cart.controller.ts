import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto, UpdateCartDto } from './cart.dto';
import { CartGuard } from './cart.guard';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(CartGuard)
  @Get()
  async getCart(@Param('userId') userId: string) {
    return this.cartService.findCartByUser(userId);
  }

  @UseGuards(CartGuard)
  @Post('add/:userId')
  async addToCart(
    @Param('userId') userId: string,
    @Body() addToCartDto: AddToCartDto,
  ) {
    return this.cartService.addToCart(userId, addToCartDto);
  }

  @UseGuards(CartGuard)
  @Put('update')
  async updateCart(
    @Param('userId') userId: string,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return this.cartService.updateCart(userId, updateCartDto);
  }

  @UseGuards(CartGuard)
  @Delete('remove/:productId')
  async removeFromCart(
    @Param('userId') userId: string,
    @Param('productId') productId: string,
  ) {
    return this.cartService.removeFromCart(userId, productId);
  }

  @UseGuards(CartGuard)
  @Delete('clear')
  async clearCart(@Param('userId') userId: string) {
    return this.cartService.clearCart(userId);
  }
}
