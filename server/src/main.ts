import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['log', 'error', 'warn', 'debug', 'verbose'] });

  // Enable CORS
  app.enableCors({
    origin: ['http://localhost:3001', 'http://localhost:3000', 'https://escrow-eta.vercel.app/', 'http://ec2-13-51-200-33.eu-north-1.compute.amazonaws.com', 'https://api.uno-finance.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip away non-whitelisted properties
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are provided
      transform: true, // Automatically transform payloads to their respective DTOs
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        if (!validationErrors || validationErrors.length === 0) {
          throw new BadRequestException({
            statusCode: 400,
            error: 'Bad Request',
            message: 'Request body is missing or improperly formatted',
          });
        }
        
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
      }
      
    }),
  );


  const port = process.env.PORT || 5000;  // Default to 3000 if PORT is not set
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
