import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/user/users.module';
import { AuthMiddleware } from './midlewares/auth.midleware';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [UsersModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      // Add the following routes to the AuthMiddleware:
      { path: 'users', method: RequestMethod.PATCH },
      { path: 'users', method: RequestMethod.DELETE },
      { path: 'users', method: RequestMethod.POST },
      { path: 'tasks', method: RequestMethod.ALL },
    );
  }
}
