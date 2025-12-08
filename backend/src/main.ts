import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

// TODO: Import and initialize Sentry
// import * as Sentry from '@sentry/node';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: Initialize Sentry for error tracking
  // if (process.env.SENTRY_DSN) {
  //   Sentry.init({
  //     dsn: process.env.SENTRY_DSN,
  //     environment: process.env.NODE_ENV,
  //     tracesSampleRate: 1.0,
  //   });
  // }

  // Enable CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Set global prefix
  app.setGlobalPrefix('api');

  const port = process.env.PORT || 3001;
  await app.listen(port);

  console.log(`🚀 Backend API running on: http://localhost:${port}/api`);
  console.log(`📊 Health check: http://localhost:${port}/api/health`);
}

bootstrap();
