import { MongooseModule } from '@nestjs/mongoose';
import { forwardRef, Module } from '@nestjs/common';
import { Service, ServiceSchema } from './entities/services.entity';
import { ServiceController } from './services.controller';
import { ServiceService } from './services.service';
import { AuthModule } from 'src/users/auth.module';
import { UserModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }]),
    forwardRef(() => AuthModule),
    forwardRef(() => UserModule),
  ],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
