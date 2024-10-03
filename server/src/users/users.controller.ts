import { Controller, Post, Body, Get, Param, Patch, UseGuards, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @Post('register')
  // async register(@Body() body: { email: string; password: string; fullName: string }) {
  //   const { email, password, fullName } = body;
  //   const existingUser = await this.userService.findUserByEmail(email);
  //   if (existingUser) {
  //     throw new Error('User with this email already exists');
  //   }
  //   const user = await this.userService.createUser(email, password, fullName);
  //   return { id: user.id, email: user.email, fullName: user.fullName };
  // }

  // @Post('login')
  // async login(@Body() body: { email: string; password: string }) {
  //   const user = await this.userService.verifyUser(body.email, body.password);
  //   if (!user) {
  //     throw new Error('Invalid credentials!');
  //   }
  //   return user;

  // }

  @Get('profile/:id')
  async getProfile(@Param('id') id: string) {
    return this.userService.getProfile(id);
  }

  // New Endpoint: Update user name
  @Patch('update-name/:id')
  async updateName(@Param('id') id: string, @Body('name') newName: string) {
    return this.userService.updateUserName(id, newName);
  }

  // New Endpoint: Upload a profile picture
  // @Post('upload-photo/:id')
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadPhoto(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
  //   return this.userService.updateUserPhoto(id, file.filename);
  // }

  // New Endpoint: Get all users
  @Get('list')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  // New Endpoint: Get single user by ID
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
}
//sendgrid