// users.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto, User } from './dto/user.dto';
import { EmailService } from 'src/mailing/email.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly emailService: EmailService,
  ) {}

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() userData: CreateUserDto): Promise<User> {
    const newUser = this.usersService.create(userData);
    await this.emailService.sendEmail(
      newUser.email,
      'Welcome!',
      'Welcome to our application!',
    );
    return newUser;
  }

  @Get(':id')
  findById(@Param('id') id: number): User | string {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() userData: UpdateUserDto): User {
    return this.usersService.update(id, userData);
  }

  @Delete(':id/delete')
  delete(@Param('id') id: number): User {
    return this.usersService.delete(id);
  }

  @Delete('delete')
  deleteAll(): User[] {
    return this.usersService.deleteAll();
  }
}
