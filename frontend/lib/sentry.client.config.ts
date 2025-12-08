// Sentry client-side configuration
// This file configures Sentry for the browser (client-side)

// TODO: Uncomment and configure Sentry when ready to use
/*
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  
  // Replay configuration
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  // Environment
  environment: process.env.NODE_ENV,

  // Release tracking
  // release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,

  // Filter out specific errors
  beforeSend(event, hint) {
    // Filter out known noise
    const error = hint.originalException;
    
    if (error && typeof error === 'object' && 'message' in error) {
      const message = error.message as string;
      // Example: ignore ResizeObserver errors
      if (message.includes('ResizeObserver')) {
        return null;
      }
    }
    
    return event;
  },
});
*/

export {};
