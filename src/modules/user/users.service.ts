import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, User } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'John',
      phone: '1234567890',
      email: 'john@yopmail.com',
      role: 'admin',
      date: new Date(),
    },
    {
      id: 2,
      username: 'Doe',
      phone: '0987654321',
      email: 'doe@yopmail.com',
      role: 'user',
      date: new Date(),
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User | string {
    return this.users.find((user) => user.id === Number(id)) || 'No user found';
  }

  create(user: CreateUserDto): User {
    try {
      const newUser = new User(
        this.users.length + 1,
        user.email,
        user.phone,
        user.username,
      );
      this.users.push(newUser);
      return newUser;
    } catch (error) {
      throw new Error('Error creating user');
    }
  }

  update(id: number, user: UpdateUserDto): User {
    try {
      const index = this.users.findIndex((user) => user.id === Number(id));
      if (index === -1) {
        throw new Error('User not found');
      }
      this.users[index] = { ...this.users[index], ...user };
      return this.users[index];
    } catch (error) {
      throw new Error('Error updating user');
    }
  }

  delete(id: number): User {
    try {
      const index = this.users.findIndex((user) => user.id === Number(id));
      const user = this.users[index];
      this.users.splice(index, 1);
      return user;
    } catch (error) {
      throw new Error('Error deleting user');
    }
  }

  deleteAll(): User[] {
    this.users = [];
    return this.users;
  }
}
