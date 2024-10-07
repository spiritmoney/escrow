import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';
import { Vendor, VendorSchema } from './vendor.schema';
import { UserModule } from 'src/users/users.module';
import { AuthModule } from 'src/users/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vendor.name, schema: VendorSchema }]),
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
  ],
  controllers: [VendorController],
  providers: [VendorService],
})
export class VendorModule {}
