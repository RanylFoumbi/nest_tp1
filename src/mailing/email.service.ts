import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';

@Injectable()
export class EmailService {
  constructor(
    private readonly smtpConfig = {
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      email: smtpConfig.email,
      password: smtpConfig.password,
    },
  ) {}

  private transporter = createTransport({
    service: this.smtpConfig.host,
    port: this.smtpConfig.port,
    secure: this.smtpConfig.secure,
    auth: {
      user: this.smtpConfig.email,
      pass: this.smtpConfig.password,
    },
    tls: {
      rejectUnauthorised: false,
    },
  });

  async sendEmail(to: string, subject: string, content: string) {
    try {
      const mailOptions = {
        from: this.smtpConfig.email,
        to: to,
        subject: subject,
        text: content,
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
}
