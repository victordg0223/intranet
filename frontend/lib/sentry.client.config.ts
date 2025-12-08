// This file configures the initialization of Sentry on the client side.
// The config you add here will be used whenever a user loads a page in the browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

// TODO: Install @sentry/nextjs package and configure Sentry
// To enable Sentry:
// 1. npm install @sentry/nextjs
// 2. Set NEXT_PUBLIC_SENTRY_DSN in your .env.local
// 3. Uncomment the initialization code below

/*
const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN;
const SENTRY_ENVIRONMENT = process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || process.env.NODE_ENV || 'development';

if (SENTRY_DSN) {
  import('@sentry/nextjs').then((Sentry) => {
    Sentry.init({
      dsn: SENTRY_DSN,
      tracesSampleRate: SENTRY_ENVIRONMENT === 'production' ? 0.1 : 1.0,
      debug: false,
      environment: SENTRY_ENVIRONMENT,
      replaysOnErrorSampleRate: 1.0,
      replaysSessionSampleRate: SENTRY_ENVIRONMENT === 'production' ? 0.1 : 0.1,
      integrations: [
        new Sentry.Replay({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],
    });
  }).catch(() => {
    console.warn('Sentry is not available');
  });
}
*/

export {};
