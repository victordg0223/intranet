# Backend - Intranet SaaS

NestJS backend API with Prisma ORM and PostgreSQL.

## Features

- 🚀 NestJS framework
- 🗄️ Prisma ORM with PostgreSQL (Neon)
- 🔐 Auth0 JWT authentication
- 💳 InfinityPay webhook integration
- 📊 Sentry error tracking
- 🔍 Audit logging
- 🏗️ Multi-tenant architecture

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Generate Prisma Client:
```bash
npm run prisma:generate
```

4. Run migrations:
```bash
npm run prisma:migrate
```

5. Seed the database:
```bash
npm run seed
```

6. Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3001/api`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start:prod` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:migrate:deploy` - Deploy migrations in production
- `npm run prisma:studio` - Open Prisma Studio
- `npm run seed` - Seed database with initial data

## Environment Variables

See `.env.example` for required environment variables.

## Project Structure

```
backend/
├── src/
│   ├── modules/        # Feature modules
│   │   ├── users/      # User management
│   │   └── payments/   # Payment webhooks
│   ├── auth/           # Auth0 authentication
│   ├── services/       # External service integrations
│   ├── main.ts         # Application entry point
│   └── app.module.ts   # Root module
└── prisma/
    ├── schema.prisma   # Database schema
    └── seed.ts         # Seed script
```

## Database Schema

### Tenant
Multi-tenant support with tenant isolation.

### User
User accounts linked to tenants with Auth0 integration.

### AuditLog
Comprehensive audit trail for all actions.

## API Endpoints

### Users
- `GET /api/users` - List all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Payments
- `POST /api/payments/webhook/infinitypay` - InfinityPay webhook

## Authentication

All endpoints (except webhooks) are protected with Auth0 JWT authentication.

Include the token in the Authorization header:
```
Authorization: Bearer YOUR_JWT_TOKEN
```

## Database Migrations

### Development
```bash
npm run prisma:migrate
```

### Production
```bash
npm run prisma:migrate:deploy
```

This is handled automatically by the GitHub Actions workflow when changes are pushed to `main`.

## Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:cov

# Run e2e tests
npm run test:e2e
```

## Learn More

- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Auth0 NestJS SDK](https://auth0.com/docs/quickstart/backend/nodejs)
