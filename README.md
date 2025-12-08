# Intranet SaaS Monorepo

Complete SaaS intranet solution with multi-tenancy, built with modern technologies.

## 🏗 Architecture

- **Frontend**: Next.js 14+ with TypeScript
- **Backend**: NestJS with TypeScript
- **Database**: PostgreSQL (Neon) with Prisma ORM
- **Search**: Meilisearch
- **Cache**: Redis
- **Auth**: Auth0
- **Payments**: InfinityPay
- **Monitoring**: Sentry
- **Deployment**: Vercel (Frontend), Docker (Backend)

## 📦 Monorepo Structure

```
.
├── frontend/          # Next.js application
├── backend/           # NestJS API with Prisma
├── infra/             # Docker compose and Dockerfiles
├── .github/           # CI/CD workflows and templates
└── package.json       # Root scripts for monorepo management
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker and Docker Compose
- PostgreSQL database (Neon recommended)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/victordg0223/intranet.git
   cd intranet
   ```

2. **Copy environment files**
   ```bash
   cp .env.example .env
   cp frontend/.env.local.example frontend/.env.local
   cp backend/.env.example backend/.env
   cp infra/.env.example infra/.env
   ```

3. **Configure environment variables**
   - Edit `.env`, `frontend/.env.local`, `backend/.env`, and `infra/.env`
   - Set your `DATABASE_URL` (Neon PostgreSQL connection string)
   - Configure Auth0, Sentry, Meilisearch, InfinityPay credentials

4. **Start infrastructure services** (PostgreSQL, Redis, Meilisearch)
   ```bash
   cd infra
   docker-compose up -d postgres redis meilisearch
   cd ..
   ```

5. **Install dependencies**
   ```bash
   npm run install:all
   # Or individually:
   # npm run frontend:install
   # npm run backend:install
   ```

6. **Setup database**
   ```bash
   # Generate Prisma client
   npm run backend:prisma:generate
   
   # Run migrations
   npm run backend:prisma:migrate
   
   # Seed database with default data
   npm run backend:seed
   ```

7. **Start development servers**
   
   In separate terminals:
   
   **Backend** (http://localhost:3001):
   ```bash
   npm run backend:dev
   ```
   
   **Frontend** (http://localhost:3000):
   ```bash
   npm run frontend:dev
   ```

### Using Docker for Full Stack

Alternatively, run everything with Docker:

```bash
cd infra
docker-compose up
```

This will start:
- PostgreSQL on port 5432
- Redis on port 6379
- Meilisearch on port 7700
- Backend API on port 3001
- Frontend on port 3000

## 🔑 Required Secrets

### For Local Development
Configure in your `.env` files:

- `DATABASE_URL` - Neon PostgreSQL connection string
- `AUTH0_DOMAIN`, `AUTH0_CLIENT_ID`, `AUTH0_CLIENT_SECRET`, `AUTH0_AUDIENCE`
- `SENTRY_DSN` - Sentry error tracking
- `MEILI_MASTER_KEY` - Meilisearch API key
- `INFINITYPAY_API_KEY`, `INFINITYPAY_WEBHOOK_SECRET`
- `REDIS_URL`

### For CI/CD (GitHub Secrets)
Add these to your GitHub repository secrets:

- `DATABASE_URL` - Production database (Neon)
- `VERCEL_TOKEN` - Vercel deployment token
- `VERCEL_PROJECT_ID` - Vercel project ID
- `VERCEL_ORG_ID` - Vercel organization ID
- `SENTRY_DSN` - Sentry DSN for error tracking
- `GHCR_TOKEN` - (Optional) GitHub Container Registry token

## 📝 Available Scripts

### Root Level
- `npm run install:all` - Install all dependencies
- `npm run dev` - Information about running dev servers
- `npm run build` - Build all projects
- `npm run lint` - Lint all projects
- `npm run test` - Run all tests

### Frontend Scripts
- `npm run frontend:dev` - Start Next.js dev server
- `npm run frontend:build` - Build for production
- `npm run frontend:start` - Start production server
- `npm run frontend:lint` - Run ESLint

### Backend Scripts
- `npm run backend:dev` - Start NestJS dev server
- `npm run backend:build` - Build for production
- `npm run backend:start` - Start production server
- `npm run backend:lint` - Run ESLint
- `npm run backend:test` - Run tests
- `npm run backend:prisma:generate` - Generate Prisma client
- `npm run backend:prisma:migrate` - Create and run migrations
- `npm run backend:prisma:migrate:deploy` - Deploy migrations (production)
- `npm run backend:seed` - Seed database

## 🗄 Database Migrations

**Development:**
```bash
npm run backend:prisma:migrate
```

**Production:**
The `prisma-migrate.yml` workflow automatically runs migrations on push to `main` branch or via manual dispatch. It uses the `DATABASE_URL` secret from GitHub.

⚠️ **Important**: Always test migrations in staging before deploying to production!

## 🚢 Deployment

### Frontend (Vercel)
- Automatically deployed via `.github/workflows/deploy-vercel.yml`
- Requires `VERCEL_TOKEN`, `VERCEL_PROJECT_ID`, `VERCEL_ORG_ID` secrets

### Backend (Docker)
- Build Docker image: `docker build -f infra/Dockerfile.backend -t intranet-backend .`
- Push to GHCR or your container registry
- Deploy to your infrastructure

## 🔒 Security & License

This project is licensed under **GPL-3.0-or-later**. See [LICENSE](LICENSE) for details.

### Security Notes
- Auth0 guard is currently a stub - implement proper JWT validation before production
- Review all `TODO` comments in the codebase
- Ensure all secrets are properly configured and never committed
- Enable HTTPS for all production endpoints
- Review and test webhook signatures (InfinityPay)

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

See also [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community guidelines.

## 📋 Roadmap

See [CHANGELOG.md](CHANGELOG.md) for version history and upcoming features.

## 🐛 Issues

Use the GitHub issue templates:
- [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md)
- [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md)

## 📚 Documentation

- [Frontend README](frontend/README.md) - Next.js specific documentation
- [Backend README](backend/README.md) - NestJS and Prisma documentation

## 🆘 Support

For support, please open an issue or contact the maintainers.

---

**Note**: This is the initial skeleton. Many integrations (Auth0, InfinityPay, Sentry, etc.) are stubs/placeholders marked with `TODO` comments. Review and implement them according to your specific requirements.
