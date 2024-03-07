import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    const authToken = req.headers['authorization'];
    if (!authToken || authToken !== 'Bearer token1234') {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    if (req.method === 'DELETE' && req.body.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
    next();
  }
}
