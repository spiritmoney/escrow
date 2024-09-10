import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { UserEntity } from "./entities/users.entity";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService],
  })
  export class UserModule {}