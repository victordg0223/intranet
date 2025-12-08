// This file configures the initialization of Sentry on the server side.
// https://docs.sentry.io/platforms/javascript/guides/nestjs/

const SENTRY_DSN = process.env.SENTRY_DSN;
const SENTRY_ENVIRONMENT = process.env.NODE_ENV || 'development';

let Sentry: any = null;

if (SENTRY_DSN) {
  try {
    // Try to load Sentry if available
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    Sentry = require('@sentry/node');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { ProfilingIntegration } = require('@sentry/profiling-node');

    Sentry.init({
      dsn: SENTRY_DSN,

      // Adjust this value in production, or use tracesSampler for greater control
      tracesSampleRate: SENTRY_ENVIRONMENT === 'production' ? 0.1 : 1.0,

      // Setting this option to true will print useful information to the console while you're setting up Sentry.
      debug: false,

      environment: SENTRY_ENVIRONMENT,

      // Profiling sample rate
      profilesSampleRate: SENTRY_ENVIRONMENT === 'production' ? 0.1 : 1.0,

      integrations: [
        // Add profiling integration
        new ProfilingIntegration(),
      ],
    });
  } catch (error) {
    console.warn('Sentry is not available:', error.message);
  }
}

export default Sentry;
