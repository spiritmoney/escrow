// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
  ) {}

  async findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
  async createUser(email: string, password: string, fullName: string) {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = this.userRepository.create({
      email,
      password: hashedPassword,
      fullName,
    });

    // Save the user in the database
    return this.userRepository.save(newUser);
  }

  async verifyUser(email: string, password: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) return null;

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return null;

    return { id: user.id, email: user.email, fullName: user.fullName };
  }

  async getProfile(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
}
