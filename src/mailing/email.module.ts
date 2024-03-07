import { Module, DynamicModule } from '@nestjs/common';
import { EmailService } from './email.service';

@Module({})
export class EmailModule {
  static forRoot(): DynamicModule {
    return {
      module: EmailModule,
      providers: [
        {
          provide: EmailService,
          useValue: new EmailService(),
        },
      ],
      exports: [EmailService],
    };
  }
}
