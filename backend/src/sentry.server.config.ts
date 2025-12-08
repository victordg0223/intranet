// This file configures the initialization of Sentry on the server side.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/node';
import { ProfilingIntegration } from '@sentry/profiling-node';

const SENTRY_DSN = process.env.SENTRY_DSN;
const SENTRY_ENVIRONMENT = process.env.NODE_ENV || 'development';

if (SENTRY_DSN) {
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
}

export default Sentry;
