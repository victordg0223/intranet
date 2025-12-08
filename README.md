# Intranet SaaS

A modern, multi-tenant Intranet SaaS platform built with Next.js, NestJS, and PostgreSQL.

## Tech Stack

### Frontend
- **Next.js** - React framework for production
- **TypeScript** - Type-safe development
- **Auth0** - Authentication and authorization
- **Sentry** - Error tracking and monitoring

### Backend
- **NestJS** - Progressive Node.js framework
- **Prisma** - Next-generation ORM
- **PostgreSQL** - Reliable relational database
- **Meilisearch** - Fast, relevant search engine
- **Sentry** - Error tracking and monitoring

### Infrastructure
- **Docker** - Containerization for local development
- **Vercel** - Frontend deployment platform
- **Neon** - Serverless PostgreSQL hosting
- **InfinityPay** - Billing and payment processing

## Project Structure

```
.
├── frontend/          # Next.js frontend application
├── backend/           # NestJS backend API
├── infra/            # Docker configuration and infrastructure
├── .github/          # GitHub workflows and templates
├── LICENSE           # GPL-3.0-or-later license
└── README.md         # This file
```

## Local Development

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker and Docker Compose
- Git

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/victordg0223/intranet.git
   cd intranet
   ```

2. **Install dependencies:**
   ```bash
   npm run install:all
   ```

3. **Configure environment variables:**
   ```bash
   # Root level
   cp .env.example .env
   
   # Frontend
   cp frontend/.env.local.example frontend/.env.local
   
   # Backend
   cp backend/.env.example backend/.env
   
   # Infrastructure (docker-compose)
   cp infra/.env.example infra/.env
   ```

4. **Start local infrastructure (PostgreSQL, Meilisearch):**
   ```bash
   npm run docker:up
   ```

5. **Run database migrations:**
   ```bash
   npm run backend:prisma:generate
   npm run backend:prisma:migrate
   ```

6. **Start development servers:**
   ```bash
   # Start both frontend and backend concurrently
   npm run dev
   
   # Or start individually:
   npm run backend:dev  # Backend on http://localhost:4000
   npm run frontend:dev # Frontend on http://localhost:3000
   ```

### Available Scripts

#### Root Scripts
- `npm run install:all` - Install all dependencies (root + frontend + backend)
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both frontend and backend for production
- `npm run lint` - Lint both frontend and backend
- `npm run test` - Run tests for both frontend and backend
- `npm run docker:up` - Start Docker services
- `npm run docker:down` - Stop Docker services
- `npm run docker:logs` - View Docker logs

#### Frontend Scripts
- `npm run frontend:dev` - Start frontend dev server
- `npm run frontend:build` - Build frontend for production
- `npm run frontend:start` - Start frontend production server
- `npm run frontend:lint` - Lint frontend code
- `npm run frontend:test` - Run frontend tests

#### Backend Scripts
- `npm run backend:dev` - Start backend dev server
- `npm run backend:build` - Build backend for production
- `npm run backend:start` - Start backend production server
- `npm run backend:lint` - Lint backend code
- `npm run backend:test` - Run backend tests
- `npm run backend:prisma:generate` - Generate Prisma client
- `npm run backend:prisma:migrate` - Run database migrations
- `npm run backend:seed` - Seed database with sample data

## Deployment

### Frontend (Vercel)

The frontend is deployed to Vercel automatically via GitHub integration.

**Required Vercel Environment Variables:**
- `AUTH0_DOMAIN`
- `AUTH0_CLIENT_ID`
- `AUTH0_CLIENT_SECRET`
- `AUTH0_AUDIENCE`
- `NEXT_PUBLIC_API_URL`
- `SENTRY_DSN`

### Backend (Docker + Any Container Platform)

The backend can be deployed as a Docker container to any container platform (AWS ECS, Google Cloud Run, etc.).

**Required Environment Variables:**
- `DATABASE_URL` - Neon PostgreSQL connection string
- `AUTH0_DOMAIN`
- `AUTH0_AUDIENCE`
- `MEILI_HOST`
- `MEILI_MASTER_KEY`
- `SENTRY_DSN`
- `INFINITYPAY_API_KEY`

### Database (Neon)

Create a PostgreSQL database on [Neon](https://neon.tech) and use the connection string as `DATABASE_URL`.

## CI/CD

GitHub Actions workflows are configured for:

1. **Continuous Integration** (`.github/workflows/ci.yml`)
   - Runs on every push and pull request to `main`
   - Installs dependencies
   - Runs linters
   - Runs tests
   - Builds both frontend and backend

2. **Vercel Deployment** (`.github/workflows/deploy-vercel.yml`)
   - Deploys frontend to Vercel on push to `main`

### Required GitHub Secrets

Configure these secrets in your GitHub repository settings:

- `VERCEL_TOKEN` - Vercel authentication token
- `VERCEL_PROJECT_ID` - Vercel project ID
- `VERCEL_ORG_ID` - Vercel organization ID
- `DATABASE_URL` - Production database URL (Neon)
- `SENTRY_DSN` - Sentry project DSN
- `MEILI_MASTER_KEY` - Meilisearch master key
- `INFINITYPAY_API_KEY` - InfinityPay API key
- `GHCR_TOKEN` - GitHub Container Registry token (optional, for Docker image publishing)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the GPL-3.0-or-later License - see the [LICENSE](LICENSE) file for details.

## Support

For issues and questions, please use the [GitHub Issues](https://github.com/victordg0223/intranet/issues) page.
