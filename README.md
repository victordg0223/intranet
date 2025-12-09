# Intranet SaaS Platform

[![CI](https://github.com/victordg0223/intranet/workflows/CI/badge.svg)](https://github.com/victordg0223/intranet/actions)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Security: Snyk](https://img.shields.io/badge/Security-Snyk-4C4A73.svg)](https://snyk.io/)

A modern, full-stack SaaS intranet platform built with Next.js, NestJS, and PostgreSQL.

## 🏗️ Architecture

This is an npm-based monorepo containing:

- **`/frontend`** - Next.js application (TypeScript)
- **`/backend`** - NestJS API server (TypeScript)
- **`/infra`** - Docker Compose and infrastructure configuration

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 14+ (React 18+)
- **Language**: TypeScript
- **Styling**: TBD (Tailwind CSS / CSS Modules)
- **State Management**: React Context / TBD
- **Authentication**: Auth0
- **Search**: Meilisearch client
- **Observability**: Sentry

### Backend
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL (via Neon in production)
- **ORM**: Prisma
- **Authentication**: Auth0
- **Search**: Meilisearch
- **Billing**: InfinityPay
- **Observability**: Sentry

### Infrastructure
- **Deployment**: Vercel (frontend), Neon (database)
- **Local Development**: Docker Compose (PostgreSQL, Meilisearch, Redis)
- **CI/CD**: GitHub Actions
- **Container Registry**: GitHub Container Registry (GHCR)

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker and Docker Compose (for local development)
- Git

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/victordg0223/intranet.git
cd intranet
```

### 2. Install Dependencies

```bash
npm run bootstrap
```

This will install dependencies in the root, frontend, and backend packages.

### 3. Configure Environment Variables

Copy the example environment files and fill in your secrets:

```bash
# Root level
cp .env.example .env

# Frontend
cp frontend/.env.local.example frontend/.env.local

# Backend
cp backend/.env.example backend/.env

# Infrastructure (for docker-compose)
cp infra/.env.example infra/.env
```

#### Required Environment Variables

**Frontend** (`frontend/.env.local`):
- `NEXT_PUBLIC_AUTH0_DOMAIN` - Your Auth0 domain
- `NEXT_PUBLIC_AUTH0_CLIENT_ID` - Auth0 application client ID
- `NEXT_PUBLIC_MEILISEARCH_HOST` - Meilisearch host URL
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_SENTRY_DSN` - Sentry DSN for error tracking

**Backend** (`backend/.env`):
- `DATABASE_URL` - PostgreSQL connection string
- `AUTH0_DOMAIN` - Auth0 domain
- `AUTH0_CLIENT_ID` - Auth0 client ID
- `AUTH0_CLIENT_SECRET` - Auth0 client secret
- `MEILI_HOST` - Meilisearch host
- `MEILI_MASTER_KEY` - Meilisearch master key
- `SENTRY_DSN` - Sentry DSN
- `INFINITYPAY_API_KEY` - InfinityPay API key

**Infrastructure** (`infra/.env`):
- `POSTGRES_USER` - PostgreSQL username
- `POSTGRES_PASSWORD` - PostgreSQL password
- `POSTGRES_DB` - Database name
- `MEILI_MASTER_KEY` - Meilisearch master key

### 4. Start Local Development Services

Start PostgreSQL, Meilisearch, and other services using Docker Compose:

```bash
npm run docker:up
```

To stop services:

```bash
npm run docker:down
```

To view logs:

```bash
npm run docker:logs
```

### 5. Initialize Database

Run Prisma migrations:

```bash
cd backend
npm run prisma:migrate
npm run prisma:generate
```

Optional - seed the database:

```bash
npm run prisma:seed
```

### 6. Run the Application

**Start frontend development server:**

```bash
npm run dev:frontend
```

Frontend will be available at: http://localhost:3000

**Start backend development server:**

```bash
npm run dev:backend
```

Backend API will be available at: http://localhost:4000

## 🏃‍♂️ Available Scripts

From the root directory:

- `npm run bootstrap` - Install all dependencies
- `npm run dev:frontend` - Start frontend dev server
- `npm run dev:backend` - Start backend dev server
- `npm run build` - Build both frontend and backend
- `npm run lint` - Lint both projects
- `npm run test` - Run tests for both projects
- `npm run docker:up` - Start Docker services
- `npm run docker:down` - Stop Docker services

## 🗄️ Database

### Local Development with Docker

The `docker-compose.yml` includes a PostgreSQL 15 container. Connection details:

- Host: `localhost`
- Port: `5432`
- Database: `intranet_dev`
- Username: `postgres`
- Password: (set in `infra/.env`)

### Production with Neon

[Neon](https://neon.tech/) provides serverless PostgreSQL for production.

**To connect to Neon:**

1. Create a Neon project at https://neon.tech/
2. Copy your connection string
3. Update `DATABASE_URL` in `backend/.env`:
   ```
   DATABASE_URL="postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require"
   ```
4. Run migrations:
   ```bash
   cd backend
   npm run prisma:migrate
   ```

**Migration from local to Neon:**

1. Export your local database:
   ```bash
   docker exec -t intranet-postgres pg_dump -U postgres intranet_dev > dump.sql
   ```

2. Import to Neon using their CLI or dashboard import feature

3. Update your backend `.env` with Neon connection string

## 🚢 Deployment

### Frontend (Vercel)

> **⚠️ CRITICAL**: This is a monorepo. You **MUST** set Root Directory to `frontend` in Vercel Project Settings or deployment will fail. See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for detailed instructions.

**Quick Setup:**

1. Connect your GitHub repository to Vercel
2. **⚠️ REQUIRED: Set Root Directory** to `frontend` in Project Settings → General → Root Directory
   - Go to your Vercel project → Settings → General → Root Directory
   - Click "Edit" and set to: `frontend`
   - Click "Save"
3. Configure environment variables in Vercel dashboard (see below)
4. Redeploy your application (trigger a new deployment)
5. Deployments will trigger automatically on future pushes to `main`

**Required Environment Variables in Vercel:**

⚠️ **Security**: Never commit secrets to version control. Always configure them in Vercel's dashboard.

Set these in your Vercel project settings:
- `AUTH0_SECRET` - 32-byte hex string (generate with `openssl rand -hex 32`) **⚠️ KEEP SECRET**
- `AUTH0_BASE_URL` - Your Vercel deployment URL
- `AUTH0_ISSUER_BASE_URL` - Your Auth0 domain URL
- `AUTH0_CLIENT_ID` - Auth0 application client ID
- `AUTH0_CLIENT_SECRET` - Auth0 application client secret **⚠️ KEEP SECRET**
- `NEXT_PUBLIC_AUTH0_DOMAIN` - Auth0 domain (for client-side)
- `NEXT_PUBLIC_AUTH0_CLIENT_ID` - Auth0 client ID (for client-side)
- `NEXT_PUBLIC_MEILISEARCH_HOST` - Meilisearch instance URL
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_SENTRY_DSN` - Sentry DSN (optional)

### Backend

Backend can be deployed to:
- Vercel (as serverless functions)
- Railway
- Fly.io
- AWS ECS/Fargate
- Google Cloud Run

Ensure `DATABASE_URL` points to your Neon instance in production.

### CI/CD with GitHub Actions

The repository includes GitHub Actions workflows:

**`.github/workflows/ci.yml`** - Runs on every push and PR:
- Installs dependencies
- Runs linters
- Runs tests
- Builds both applications
- Optionally builds and publishes Docker images to GHCR

**Required GitHub Secrets:**
- `VERCEL_TOKEN` - Vercel deployment token (optional)
- `VERCEL_ORG_ID` - Vercel organization ID (optional)
- `VERCEL_PROJECT_ID` - Vercel project ID (optional)
- `GHCR_TOKEN` - GitHub Container Registry token (optional)

**`.github/workflows/deploy-vercel.yml`** - Deployment workflow example

To enable Docker image publishing, set `GHCR_TOKEN` secret in your repository settings.

## 🔍 Search with Meilisearch

Meilisearch provides fast, typo-tolerant search capabilities.

**Local Development:**

Meilisearch runs in Docker Compose at http://localhost:7700

**Production:**

- Host on [Meilisearch Cloud](https://www.meilisearch.com/cloud)
- Or self-host on your infrastructure

## 🔐 Authentication with Auth0

This project uses Auth0 for authentication.

**Setup:**

1. Create an Auth0 account at https://auth0.com/
2. Create a new application (Single Page Application for frontend)
3. Create a new API for your backend
4. Configure callback URLs in Auth0 dashboard
5. Add credentials to `.env.local` and `.env`

## 📊 Observability with Sentry

Sentry provides error tracking and performance monitoring.

**Setup:**

1. Create account at https://sentry.io/
2. Create projects for frontend and backend
3. Copy DSN values to environment files
4. Errors will be automatically tracked

## 💳 Billing with InfinityPay

InfinityPay integration is stubbed for future billing implementation.

Configuration: Add `INFINITYPAY_API_KEY` to backend `.env`

## 🐳 Docker

### Development with Docker Compose

The `infra/docker-compose.yml` provides:
- PostgreSQL 15
- Meilisearch
- Redis (optional)
- pgAdmin (database administration)
- Frontend (hot reload)
- Backend (hot reload)

### Production Docker Images

Optimized production Dockerfiles are provided:
- `infra/Dockerfile.frontend` - Multi-stage Next.js build
- `infra/Dockerfile.backend` - Multi-stage NestJS build

Build images:

```bash
docker build -f infra/Dockerfile.frontend -t intranet-frontend .
docker build -f infra/Dockerfile.backend -t intranet-backend .
```

## 🧪 Testing

Run all tests:

```bash
npm test
```

Run frontend tests only:

```bash
npm run test:frontend
```

Run backend tests only:

```bash
npm run test:backend
```

## 🎨 Linting and Formatting

Run linters:

```bash
npm run lint
```

Both projects use ESLint and Prettier with consistent configurations.

## 📁 Project Structure

```
intranet/
├── .github/              # GitHub templates and workflows
│   ├── ISSUE_TEMPLATE/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
├── backend/              # NestJS API server
│   ├── prisma/           # Prisma schema and migrations
│   ├── src/              # Source code
│   └── test/             # Tests
├── frontend/             # Next.js application
│   ├── pages/            # Next.js pages
│   ├── public/           # Static assets
│   └── styles/           # Stylesheets
├── infra/                # Infrastructure configuration
│   ├── docker-compose.yml
│   ├── Dockerfile.frontend
│   └── Dockerfile.backend
├── .editorconfig
├── .gitattributes
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── package.json
└── README.md
```

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the GNU General Public License v3.0 or later - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Auth0 Documentation](https://auth0.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Meilisearch Documentation](https://docs.meilisearch.com/)
- [Neon Documentation](https://neon.tech/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 📞 Support

For support and questions:
- Open an issue in this repository
- Check existing documentation
- Review CONTRIBUTING.md

---

Built with ❤️ by victordg0223
