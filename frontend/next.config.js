/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
  },
};

// TODO: To enable Sentry integration:
// 1. Install @sentry/nextjs: npm install @sentry/nextjs
// 2. Uncomment the code below
// 3. Set SENTRY_DSN, SENTRY_ORG, and SENTRY_PROJECT environment variables

/*
try {
  if (process.env.SENTRY_DSN) {
    const { withSentryConfig } = require('@sentry/nextjs');
    const sentryWebpackPluginOptions = {
      silent: true,
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
    };
    module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
  } else {
    module.exports = nextConfig;
  }
} catch (error) {
  console.warn('Sentry integration not available - continuing without it');
  module.exports = nextConfig;
}
*/

module.exports = nextConfig;
