// Sentry server-side configuration
// This file configures Sentry for the NestJS backend

// TODO: Uncomment and configure Sentry when ready to use
/*
import * as Sentry from '@sentry/node';
import '@sentry/tracing';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  
  // Environment
  environment: process.env.NODE_ENV || 'development',
  
  // Release tracking
  // release: process.env.npm_package_version,
  
  // Enable debug mode in development
  debug: process.env.NODE_ENV === 'development',
  
  // Integrations
  integrations: [
    // Enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // Enable Express request tracing
    new Sentry.Integrations.Express({ app: undefined }),
    // Enable Prisma tracing
    new Sentry.Integrations.Prisma({ client: undefined }),
  ],

  // Filter out specific errors
  beforeSend(event, hint) {
    // Filter out known noise
    const error = hint.originalException;
    
    if (error && typeof error === 'object' && 'message' in error) {
      const message = error.message as string;
      
      // Example: ignore specific errors
      if (message.includes('ECONNREFUSED')) {
        return null;
      }
    }
    
    return event;
  },
  
  // Filter out specific transactions
  beforeSendTransaction(event) {
    // Example: don't send health check transactions
    if (event.transaction === 'GET /api/health') {
      return null;
    }
    return event;
  },
});
*/

export {};
