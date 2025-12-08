# Intranet Backend

NestJS backend API server for the Intranet SaaS platform.

## Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL (Prisma ORM)
- **Authentication**: Auth0
- **Search**: Meilisearch
- **Billing**: InfinityPay
- **Observability**: Sentry
- **API Documentation**: Swagger/OpenAPI

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- PostgreSQL 13+ (or Neon for production)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and fill in your values:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/intranet_dev"
AUTH0_DOMAIN="your-tenant.auth0.com"
AUTH0_CLIENT_ID="your_client_id"
AUTH0_CLIENT_SECRET="your_client_secret"
MEILI_HOST="http://localhost:7700"
MEILI_MASTER_KEY="your_master_key"
SENTRY_DSN="your_sentry_dsn"
```

### 3. Setup Database

**Using Docker Compose (recommended for local development):**

```bash
# From project root
npm run docker:up
```

**Using local PostgreSQL:**

Ensure PostgreSQL is running and update `DATABASE_URL` in `.env`.

### 4. Run Prisma Migrations

```bash
npm run prisma:generate
npm run prisma:migrate
```

### 5. Seed Database (Optional)

```bash
npm run prisma:seed
```

This creates:
- A default tenant
- An admin user (admin@intranet.local)
- A regular user (user@intranet.local)

### 6. Start Development Server

```bash
npm run start:dev
```

The API will be available at: http://localhost:4000

API Documentation (Swagger): http://localhost:4000/api/docs

## Available Scripts

- `npm run start:dev` - Start development server with hot reload
- `npm run start:debug` - Start with debugger
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:cov` - Generate coverage report
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio (database GUI)
- `npm run prisma:seed` - Seed database with initial data

## Project Structure

```
backend/
├── prisma/               # Prisma schema and migrations
│   ├── schema.prisma    # Database schema
│   ├── seed.ts          # Database seed script
│   └── migrations/      # Migration files
├── src/
│   ├── auth/            # Auth0 authentication module
│   ├── users/           # Users CRUD module
│   ├── services/        # External service integrations
│   │   ├── meilisearch.service.ts
│   │   └── infinitypay.service.ts
│   ├── prisma/          # Prisma service
│   ├── app.module.ts    # Root module
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── main.ts          # Application entry point
├── test/                # E2E tests
├── .env.example         # Environment variables template
├── nest-cli.json        # NestJS CLI configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Database

### Prisma Schema

The database schema includes:

- **Tenant**: Multi-tenancy support
- **User**: User accounts with Auth0 integration
- **AuditLog**: Audit trail for all changes

### Migrations

Create a new migration:

```bash
npm run prisma:migrate -- --name migration_name
```

Apply migrations:

```bash
npm run prisma:migrate:deploy
```

### Prisma Studio

Open a GUI to view and edit data:

```bash
npm run prisma:studio
```

Access at: http://localhost:5555

## Connecting to Neon (Production Database)

[Neon](https://neon.tech/) provides serverless PostgreSQL for production.

### Setup Steps

1. **Create a Neon Project**
   - Go to https://neon.tech/
   - Create a new project
   - Copy your connection string

2. **Update Environment Variable**
   
   In production `.env`:
   ```env
   DATABASE_URL="postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require"
   ```

3. **Run Migrations**
   ```bash
   npm run prisma:migrate:deploy
   ```

4. **Seed Database (if needed)**
   ```bash
   npm run prisma:seed
   ```

### Migration from Local to Neon

1. **Export local database:**
   ```bash
   pg_dump -U postgres intranet_dev > dump.sql
   ```

2. **Import to Neon:**
   - Use Neon's import feature in their dashboard
   - Or use `psql` with Neon connection string:
   ```bash
   psql "postgresql://username:password@ep-xxx.neon.tech/dbname?sslmode=require" < dump.sql
   ```

## Authentication

### Auth0 Setup

This backend expects JWT tokens from Auth0.

**Configuration:**

1. Create an Auth0 API in your Auth0 dashboard
2. Set the identifier as your audience
3. Configure environment variables:
   ```env
   AUTH0_DOMAIN=your-tenant.auth0.com
   AUTH0_CLIENT_ID=your_client_id
   AUTH0_CLIENT_SECRET=your_client_secret
   AUTH0_AUDIENCE=https://your-api-identifier
   ```

**TODO:** Auth0 JWT validation is not yet fully implemented. See `src/auth/auth.service.ts` for implementation notes.

## API Documentation

Swagger documentation is automatically generated and available at:

http://localhost:4000/api/docs

The documentation includes:
- All API endpoints
- Request/response schemas
- Authentication requirements
- Try-it-out functionality

## Integrations

### Meilisearch

Fast, typo-tolerant search engine.

**Configuration:**
```env
MEILI_HOST=http://localhost:7700
MEILI_MASTER_KEY=your_master_key
```

**Usage:** See `src/services/meilisearch.service.ts`

**TODO:** Full implementation pending

### InfinityPay

Billing and subscription management.

**Configuration:**
```env
INFINITYPAY_API_KEY=your_api_key
INFINITYPAY_BASE_URL=https://api.infinitypay.io
```

**Usage:** See `src/services/infinitypay.service.ts`

**TODO:** Full implementation pending

### Sentry

Error tracking and performance monitoring.

**Configuration:**
```env
SENTRY_DSN=your_sentry_dsn
```

Sentry is configured in `sentry.server.config.ts` and automatically tracks errors.

## Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage:

```bash
npm run test:cov
```

## Docker

### Development

Use Docker Compose from project root:

```bash
npm run docker:up
```

### Production Build

Build production image:

```bash
docker build -f ../infra/Dockerfile.backend -t intranet-backend:prod .
```

Run production container:

```bash
docker run -p 4000:4000 \
  -e DATABASE_URL="your_database_url" \
  -e AUTH0_DOMAIN="your_auth0_domain" \
  intranet-backend:prod
```

## Deployment

The backend can be deployed to:

- **Vercel** (as serverless functions)
- **Railway**
- **Fly.io**
- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Instances**

### Environment Variables for Production

Ensure these are set in your deployment environment:
- `DATABASE_URL` (Neon connection string)
- `AUTH0_DOMAIN`
- `AUTH0_CLIENT_ID`
- `AUTH0_CLIENT_SECRET`
- `AUTH0_AUDIENCE`
- `MEILI_HOST`
- `MEILI_MASTER_KEY`
- `SENTRY_DSN`
- `INFINITYPAY_API_KEY`
- `FRONTEND_URL`

## Code Style

This project uses:
- **ESLint** for linting
- **Prettier** for code formatting
- **TypeScript** for type safety

Run linting:

```bash
npm run lint
```

## CloudWatch (Optional)

For AWS CloudWatch logs, configure:

```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
CLOUDWATCH_LOG_GROUP=intranet-backend
```

Logs will be automatically sent to CloudWatch when these variables are set.

## Learn More

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Auth0 Node.js SDK](https://github.com/auth0/node-auth0)
- [Meilisearch Documentation](https://docs.meilisearch.com/)
- [Neon Documentation](https://neon.tech/docs)
