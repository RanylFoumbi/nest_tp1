// users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { EmailModule } from 'src/mailing/email.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [EmailModule.forRoot()],
})
export class UsersModule {}
