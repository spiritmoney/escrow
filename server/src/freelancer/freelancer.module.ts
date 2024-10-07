import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FreelancerController } from './freelancer.controller';
import { FreelancerService } from './freelancer.service';
import { Freelancer, FreelancerSchema } from './freelancer.schema';
import { AuthModule } from 'src/users/auth.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Freelancer.name, schema: FreelancerSchema }]),
    forwardRef(() => AuthModule),  // Import AuthModule to provide JwtService
  ],
  controllers: [FreelancerController],
  providers: [FreelancerService],
})
export class FreelancerModule {}
