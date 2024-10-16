import { IsString, IsNumber, Min } from 'class-validator';

export class UpdateCartDto {
  @IsString()
  readonly productId: string;

  @IsNumber()
  @Min(1)
  readonly quantity: number;
}

export class AddToCartDto {
  @IsString()
  readonly productId: string;

  @IsNumber()
  @Min(1)
  readonly quantity: number;
}
