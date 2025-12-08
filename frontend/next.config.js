/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  
  // Environment variables exposed to the browser
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  },

  // Sentry configuration
  sentry: {
    hideSourceMaps: true,
    widenClientFileUpload: true,
  },

  // Disable x-powered-by header
  poweredByHeader: false,

  // Compression
  compress: true,

  // Image optimization
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
