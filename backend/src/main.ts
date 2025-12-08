import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as Sentry from '@sentry/node'

async function bootstrap() {
  // Initialize Sentry
  if (process.env.SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.NODE_ENV || 'development',
      tracesSampleRate: 1.0,
    })
  }

  const app = await NestFactory.create(AppModule)
  
  // Enable CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })

  // Global prefix
  app.setGlobalPrefix('api')

  const port = process.env.PORT || 3001
  await app.listen(port)
  
  console.log(`🚀 Backend is running on: http://localhost:${port}/api`)
}

bootstrap()
