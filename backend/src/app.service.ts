import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthCheck() {
    return {
      status: 'ok',
      message: 'Intranet API is running',
      version: '0.1.0',
      timestamp: new Date().toISOString(),
    };
  }

  getHealth() {
    return {
      status: 'ok',
      services: {
        database: 'ok', // TODO: Add actual database health check
        meilisearch: 'ok', // TODO: Add actual Meilisearch health check
      },
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}
