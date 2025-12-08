# Intranet SaaS

A modern, full-stack SaaS application for intranet management built with Next.js, NestJS, Prisma, and PostgreSQL.

## 🏗️ Architecture

This is a monorepo containing:

- **Frontend**: Next.js 14+ with TypeScript, Server Components, and App Router
- **Backend**: NestJS with Prisma ORM, PostgreSQL (Neon), and REST API
- **Infrastructure**: Docker Compose for local development (PostgreSQL, Redis, Meilisearch)
- **Observability**: Sentry for error tracking, CloudWatch for logs
- **Payments**: InfinityPay integration with webhook support
- **Auth**: Auth0 for authentication and authorization

## 📋 Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for local development)
- PostgreSQL database (Neon for production, Docker for local)
- Auth0 account
- Sentry account (optional but recommended)
- Vercel account (for deployment)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/victordg0223/intranet.git
cd intranet
```

### 2. Set up environment variables

Copy the example environment files and fill in your values:

```bash
# Root
cp .env.example .env

# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.local.example frontend/.env.local

# Infrastructure
cp infra/.env.example infra/.env
```

### 3. Start local infrastructure

```bash
cd infra
docker-compose up -d
```

This will start:
- PostgreSQL on port 5432
- Redis on port 6379
- Meilisearch on port 7700

### 4. Install dependencies

```bash
# Install all dependencies
npm run install:all

# Or install individually
npm run install:frontend
npm run install:backend
```

### 5. Set up the database

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed the database with initial data
npm run prisma:seed
```

### 6. Run the development servers

```bash
# Terminal 1: Start backend
npm run dev:backend

# Terminal 2: Start frontend
npm run dev:frontend
```

The backend API will be available at `http://localhost:3001` and the frontend at `http://localhost:3000`.

## 🏗️ Project Structure

```
.
├── frontend/          # Next.js frontend application
│   ├── pages/        # Pages and API routes
│   ├── lib/          # Utilities and configurations
│   └── public/       # Static assets
├── backend/          # NestJS backend application
│   ├── src/
│   │   ├── modules/  # Feature modules (users, payments, etc.)
│   │   ├── auth/     # Authentication (Auth0)
│   │   └── services/ # External service integrations
│   └── prisma/       # Database schema and migrations
├── infra/            # Infrastructure configuration
│   ├── docker-compose.yml
│   ├── Dockerfile.frontend
│   └── Dockerfile.backend
└── .github/          # CI/CD workflows and templates
```

## 🧪 Testing

```bash
# Run all tests
npm run test:all

# Run frontend tests
npm run test:frontend

# Run backend tests
npm run test:backend
```

## 📦 Building for Production

```bash
# Build all
npm run build:all

# Build individually
npm run build:frontend
npm run build:backend
```

## 🚢 Deployment

### Vercel (Frontend + Backend)

1. Install Vercel CLI: `npm i -g vercel`
2. Link your project: `vercel link`
3. Set environment variables in Vercel dashboard
4. Deploy: `vercel --prod`

Or use the GitHub Actions workflow for automatic deployment on push to `main`.

### Database (Neon)

1. Create a Neon PostgreSQL database
2. Copy the connection string
3. Set `DATABASE_URL` in your environment
4. Run migrations: `npm run prisma:migrate`

## 🔐 Required Secrets

Configure these secrets in GitHub Actions and Vercel:

- `DATABASE_URL`: PostgreSQL connection string (Neon)
- `AUTH0_DOMAIN`, `AUTH0_CLIENT_ID`, `AUTH0_CLIENT_SECRET`, `AUTH0_AUDIENCE`
- `SENTRY_DSN`: Sentry project DSN
- `MEILI_MASTER_KEY`: Meilisearch master key
- `INFINITYPAY_API_KEY`, `INFINITYPAY_WEBHOOK_SECRET`
- `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`: For CI/CD
- `GHCR_TOKEN`: GitHub Container Registry token (optional)

## 🔧 Development

### Linting

```bash
# Lint all
npm run lint:all

# Lint individually
npm run lint:frontend
npm run lint:backend
```

### Database Migrations

```bash
# Create a new migration
cd backend
npx prisma migrate dev --name your_migration_name

# Apply migrations in production
npx prisma migrate deploy
```

### Prisma Studio

```bash
cd backend
npx prisma studio
```

## 📚 Documentation

- [Contributing Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Changelog](CHANGELOG.md)

## 📝 License

This project is licensed under the GNU General Public License v3.0 or later - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

## 📧 Support

For support, please open an issue in the GitHub repository.
