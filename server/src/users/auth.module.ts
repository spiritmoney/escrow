import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from './users.module';  // Import UserModule to make UserService available

@Module({
  imports: [
    JwtModule.register({
      secret: 'yourSecretKey',  // Replace with your actual secret key
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule,
    UserModule,  // Import UserModule to have access to UserService
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
