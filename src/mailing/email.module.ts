import { Module, DynamicModule } from '@nestjs/common';
import { EmailService } from './email.service';
import smtpConfig from './smtp.config';

@Module({})
export class EmailModule {
  static forRoot(): DynamicModule {
    return {
      module: EmailModule,
      providers: [
        {
          provide: EmailService,
          useValue: new EmailService({
            host: smtpConfig.host,
            port: smtpConfig.port,
            secure: smtpConfig.secure,
            email: smtpConfig.email,
            password: smtpConfig.password,
          }),
        },
      ],
      exports: [EmailService],
    };
  }
}
