import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['log', 'error', 'warn', 'debug', 'verbose'] });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip away non-whitelisted properties
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are provided
      transform: true, // Automatically transform payloads to their respective DTOs
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const errors = validationErrors.map(error => {
          const constraints = Object.values(error.constraints);
          return `${error.property}: ${constraints.join(', ')}`;
        });
        return new BadRequestException({
          statusCode: 400,
          error: 'Bad Request',
          message: 'Validation failed',
          validationErrors: errors
        });
      },
    }),
  );


  const port = process.env.PORT || 3000;  // Default to 3000 if PORT is not set
  await app.listen(port);
}
bootstrap();

