import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthController } from './auth.controller';
import { UserModule } from './users.module';  // Import UserModule

console.log('JWT_SECRET:', process.env.JWT_SECRET);

const secret = process.env.JWT_SECRET || "12e537e15ca66960a1bfa8a74084d9af555ace2ec8800b473adc688376174256";

@Module({
  imports: [
    JwtModule.register({
      secret: secret, // Ensure this is defined
      signOptions: { expiresIn: '2d' },
    }),
    forwardRef(() => UserModule),  // Use forwardRef to avoid cyclic dependency
  ],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
  controllers: [AuthController],
  exports: [AuthService, JwtModule, JwtAuthGuard],
})
export class AuthModule {}
