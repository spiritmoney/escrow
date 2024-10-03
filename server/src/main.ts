import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as dotenv from 'dotenv';

dotenv.config();
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;  // Default to 3000 if PORT is not set
  await app.listen(port);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();


