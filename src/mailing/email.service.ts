import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import smtpConfig from './smtp.config';

@Injectable()
export class EmailService {
  private transporter = createTransport({
    service: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: {
      user: smtpConfig.email,
      pass: smtpConfig.password,
    },
    tls: {
      rejectUnauthorised: false,
    },
  });

  async sendEmail(to: string, subject: string, content: string) {
    try {
      const mailOptions = {
        from: smtpConfig.email,
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
