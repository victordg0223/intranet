# Backend - NestJS API

This is the backend API for the Intranet SaaS platform, built with NestJS, Prisma, and PostgreSQL.

## Tech Stack

- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe development
- **Prisma** - Next-generation ORM
- **PostgreSQL** - Relational database
- **Meilisearch** - Search engine (stub integration)
- **Auth0** - Authentication (stub integration)
- **Sentry** - Error tracking and monitoring
- **InfinityPay** - Billing service (stub integration)

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- PostgreSQL database (via Docker or local installation)

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env
```

### Environment Variables

Configure the following environment variables in `.env`:

```bash
# Database
DATABASE_URL=postgresql://intranet:password@localhost:5432/intranet_db

# Application
NODE_ENV=development
PORT=4000
FRONTEND_URL=http://localhost:3000

# Auth0
AUTH0_DOMAIN=your-tenant.auth0.com
AUTH0_AUDIENCE=your_api_audience

# Meilisearch
MEILI_HOST=http://localhost:7700
MEILI_MASTER_KEY=masterKey

# Sentry
SENTRY_DSN=https://your_key@sentry.io/your_project

# InfinityPay
INFINITYPAY_API_KEY=your_api_key
INFINITYPAY_API_URL=https://api.infinitypay.io
```

### Database Setup

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed the database (optional)
npm run seed
```

### Development

```bash
# Start development server with hot reload
npm run dev

# Or use:
npm run start:dev

# API will be available at http://localhost:4000/api
```

### Building

```bash
# Build for production
npm run build

# Start production server
npm run start:prod
```

### Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run e2e tests
npm run test:e2e

# Generate coverage report
npm run test:cov
```

### Linting and Formatting

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## Project Structure

```
backend/
├── src/
│   ├── users/              # Users module
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   └── users.module.ts
│   ├── services/           # Shared services
│   │   └── infinitypay.service.ts
│   ├── main.ts            # Application entry point
│   ├── app.module.ts      # Root module
│   ├── prisma.service.ts  # Prisma service
│   └── sentry.server.config.ts
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.ts            # Seed script
├── test/                  # E2E tests
├── package.json
└── tsconfig.json
```

## Database Schema

### Models

- **Tenant** - Multi-tenant organization
- **User** - Platform users
- **AuditLog** - Audit trail for actions

### Running Migrations

```bash
# Create a new migration
npm run prisma:migrate

# View database in Prisma Studio
npm run prisma:studio
```

## API Endpoints

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Features

### Multi-tenancy

The application uses a multi-tenant architecture with tenant isolation at the database level using Prisma.

### Authentication (Stub)

Auth0 integration is stubbed. TODO: Implement JWT validation middleware.

### Search (Stub)

Meilisearch integration is stubbed. TODO: Implement search service.

### Billing (Stub)

InfinityPay integration is stubbed in `src/services/infinitypay.service.ts`. TODO: Implement actual API calls.

### Error Tracking

Sentry is configured for error tracking. Configuration is in `src/sentry.server.config.ts`.

### Audit Logging

All important actions are logged in the `AuditLog` model for compliance and debugging.

## Deployment

### Docker

```bash
# Build Docker image
docker build -f ../infra/Dockerfile.backend -t intranet-backend .

# Run container
docker run -p 4000:4000 intranet-backend
```

### Environment Variables for Production

Make sure to set the following environment variables in production:

- `DATABASE_URL` - Production database connection string (Neon)
- `NODE_ENV=production`
- `SENTRY_DSN` - Sentry project DSN
- `AUTH0_DOMAIN` - Auth0 tenant domain
- `AUTH0_AUDIENCE` - Auth0 API audience
- `MEILI_HOST` - Meilisearch host
- `MEILI_MASTER_KEY` - Meilisearch master key
- `INFINITYPAY_API_KEY` - InfinityPay API key

## Contributing

Please read the [Contributing Guide](../CONTRIBUTING.md) for details on our code of conduct and development process.

## License

GPL-3.0-or-later - See [LICENSE](../LICENSE) file for details.
