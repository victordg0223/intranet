# Intranet Frontend

Next.js frontend application for the Intranet SaaS platform.

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Authentication**: Auth0
- **Search**: Meilisearch
- **Observability**: Sentry
- **Styling**: CSS Modules (expandable to Tailwind)

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in your values:

```env
# Auth0 Configuration
AUTH0_SECRET='generate with: openssl rand -hex 32'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://YOUR_DOMAIN.auth0.com'
AUTH0_CLIENT_ID='your_client_id'
AUTH0_CLIENT_SECRET='your_client_secret'

# Public variables
NEXT_PUBLIC_API_URL='http://localhost:4000'
NEXT_PUBLIC_AUTH0_DOMAIN='YOUR_DOMAIN.auth0.com'
NEXT_PUBLIC_AUTH0_CLIENT_ID='your_client_id'
NEXT_PUBLIC_MEILISEARCH_HOST='http://localhost:7700'
NEXT_PUBLIC_SENTRY_DSN='your_sentry_dsn'
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run type-check` - Check TypeScript types

## Project Structure

```
frontend/
├── pages/              # Next.js pages and API routes
│   ├── api/           # API routes
│   ├── _app.tsx       # Custom App component
│   └── index.tsx      # Home page
├── components/         # React components
├── lib/               # Utility functions and helpers
├── public/            # Static assets
├── styles/            # CSS modules and global styles
├── .env.local.example # Environment variables template
├── next.config.js     # Next.js configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

## Auth0 Setup

1. Create an Auth0 account at [https://auth0.com/](https://auth0.com/)
2. Create a new Application (Single Page Application)
3. Configure Callback URLs:
   - `http://localhost:3000/api/auth/callback`
   - `https://yourdomain.com/api/auth/callback` (production)
4. Configure Logout URLs:
   - `http://localhost:3000`
   - `https://yourdomain.com` (production)
5. Copy credentials to `.env.local`

## Meilisearch Integration

Meilisearch client is installed. To use it:

```typescript
import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
  host: process.env.NEXT_PUBLIC_MEILISEARCH_HOST!,
  apiKey: 'optional_api_key',
});
```

## Sentry Configuration

Sentry is configured in `sentry.client.config.ts`. Errors are automatically tracked when `NEXT_PUBLIC_SENTRY_DSN` is set.

## Building for Production

### Local Build

```bash
npm run build
npm start
```

### Deploy to Vercel

**Option 1: Connect GitHub Repository**

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure environment variables
4. Deploy

**Option 2: Use Vercel CLI**

```bash
npm install -g vercel
vercel --prod
```

### Environment Variables in Vercel

Set these in your Vercel project settings:
- `AUTH0_SECRET`
- `AUTH0_BASE_URL`
- `AUTH0_ISSUER_BASE_URL`
- `AUTH0_CLIENT_ID`
- `AUTH0_CLIENT_SECRET`
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_AUTH0_DOMAIN`
- `NEXT_PUBLIC_AUTH0_CLIENT_ID`
- `NEXT_PUBLIC_MEILISEARCH_HOST`
- `NEXT_PUBLIC_SENTRY_DSN`

## Docker

The frontend can be run in Docker using the provided Dockerfile.

### Development

```bash
docker build -f ../infra/Dockerfile.frontend --target development -t intranet-frontend:dev .
docker run -p 3000:3000 -v $(pwd):/app intranet-frontend:dev
```

### Production

```bash
docker build -f ../infra/Dockerfile.frontend --target production -t intranet-frontend:prod .
docker run -p 3000:3000 intranet-frontend:prod
```

## Testing

Run tests with:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

## Code Style

This project uses:
- **ESLint** for linting
- **Prettier** for code formatting
- **TypeScript** for type safety

Run linting:

```bash
npm run lint
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Auth0 Next.js SDK](https://github.com/auth0/nextjs-auth0)
- [Meilisearch JavaScript Client](https://github.com/meilisearch/meilisearch-js)
- [Sentry Next.js](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
