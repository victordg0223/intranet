# Frontend - Next.js Application

This is the frontend application for the Intranet SaaS platform, built with Next.js and TypeScript.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Auth0** - Authentication and authorization
- **Sentry** - Error tracking and performance monitoring
- **CSS Modules** - Scoped styling

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local
```

### Environment Variables

Configure the following environment variables in `.env.local`:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:4000

# Auth0
AUTH0_SECRET=use-a-long-random-value-for-this
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://your-tenant.auth0.com
AUTH0_CLIENT_ID=your_client_id
AUTH0_CLIENT_SECRET=your_client_secret
AUTH0_AUDIENCE=your_api_audience

# Sentry
NEXT_PUBLIC_SENTRY_DSN=https://your_key@sentry.io/your_project
NEXT_PUBLIC_SENTRY_ENVIRONMENT=development
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Building

```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Testing

```bash
# Run tests in watch mode
npm run test

# Run tests once (CI)
npm run test:ci
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
frontend/
├── pages/              # Next.js pages
│   ├── _app.tsx       # App wrapper
│   ├── index.tsx      # Home page
│   └── api/           # API routes (Auth0 handlers)
├── components/         # React components
├── lib/               # Utility functions and configs
│   └── sentry.client.config.ts
├── styles/            # CSS styles
│   ├── globals.css
│   └── Home.module.css
├── public/            # Static assets
├── next.config.js     # Next.js configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

## Features

### Authentication

Authentication is handled by Auth0 using the `@auth0/nextjs-auth0` SDK.

**Auth Routes:**
- `/api/auth/login` - Login endpoint
- `/api/auth/logout` - Logout endpoint
- `/api/auth/callback` - Auth0 callback
- `/api/auth/me` - Get current user

### Error Tracking

Sentry is configured for error tracking and performance monitoring. Configuration is in `lib/sentry.client.config.ts`.

### API Integration

The frontend communicates with the backend API at the URL specified in `NEXT_PUBLIC_API_URL`.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Docker

```bash
# Build Docker image
docker build -f ../infra/Dockerfile.frontend -t intranet-frontend .

# Run container
docker run -p 3000:3000 intranet-frontend
```

## Contributing

Please read the [Contributing Guide](../CONTRIBUTING.md) for details on our code of conduct and development process.

## License

GPL-3.0-or-later - See [LICENSE](../LICENSE) file for details.
