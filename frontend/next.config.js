/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Environment variables that should be available on the client
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  },

  // TODO: Configure Sentry webpack plugin when ready
  // webpack: (config, { isServer }) => {
  //   // Sentry configuration
  //   return config;
  // },

  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization
  images: {
    domains: [],
    // Add your image domains here
  },

  // Internationalization (i18n) - TODO: Configure if needed
  // i18n: {
  //   locales: ['en', 'pt-BR'],
  //   defaultLocale: 'pt-BR',
  // },
};

module.exports = nextConfig;
