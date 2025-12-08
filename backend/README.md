# Backend - NestJS API with Prisma

This is the backend API for the Intranet SaaS, built with NestJS and Prisma ORM.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Environment Setup

```bash
cp .env.example .env
```

Edit `.env` and configure your environment variables, especially `DATABASE_URL`.

### Database Setup

```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed database with default data
npm run seed
```

### Development

```bash
npm run dev
```

API will be available at [http://localhost:3001/api](http://localhost:3001/api)

### Build

```bash
npm run build
npm run start:prod
```

### Testing

```bash
npm run test
npm run test:watch
npm run test:cov
npm run test:e2e
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── main.ts              # Application entry point
│   ├── app.module.ts        # Root module
│   ├── auth/                # Authentication
│   │   ├── auth.module.ts
│   │   └── auth0.guard.ts   # Auth0 JWT guard (stub)
│   ├── modules/
│   │   ├── users/           # User management
│   │   │   ├── users.module.ts
│   │   │   ├── users.controller.ts
│   │   │   └── users.service.ts
│   │   └── payments/        # Payment processing
│   │       ├── payments.module.ts
│   │       └── payments.controller.ts
│   └── services/
│       └── infinitypay.service.ts  # InfinityPay integration
├── prisma/
│   ├── schema.prisma        # Database schema
│   ├── seed.ts              # Database seeding
│   └── migrations/          # Database migrations
├── test/                    # E2E tests
├── sentry.server.config.ts  # Sentry configuration (stub)
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🗄 Database

### Prisma Commands

```bash
# Generate Prisma client (after schema changes)
npm run prisma:generate

# Create a new migration
npm run prisma:migrate

# Deploy migrations (production)
npm run prisma:migrate:deploy

# Check migration status
npm run prisma:migrate:status

# Open Prisma Studio (database GUI)
npm run prisma:studio

# Seed database
npm run seed
```

### Schema

The database includes:
- **Tenant**: Multi-tenancy support with plans and status
- **User**: User accounts with roles and tenant association
- **AuditLog**: Action tracking for compliance and debugging

TODO: Add more models as needed (Document, Payment, Subscription, etc.)

## 🔐 Authentication

Current: Auth0 JWT guard (stub)

The `Auth0Guard` currently allows all requests for development. Before production:

1. Implement proper JWT validation with Auth0 public keys
2. Verify token signature, expiration, audience, and issuer
3. Extract user information from validated tokens
4. Implement role-based access control (RBAC)

See `src/auth/auth0.guard.ts` for TODOs.

## 💳 Payments

InfinityPay integration (stub)

The `InfinityPayService` and webhook endpoint are placeholders. Before production:

1. Implement payment creation with InfinityPay API
2. Implement webhook signature verification
3. Process payment events (success, failed, refund)
4. Update database with payment status
5. Send notifications to users

See `src/services/infinitypay.service.ts` for TODOs.

## 📊 Monitoring

Sentry integration (stub)

Sentry configuration is prepared but commented out. To enable:

1. Uncomment Sentry initialization in `src/main.ts`
2. Configure `sentry.server.config.ts`
3. Set `SENTRY_DSN` environment variable
4. Test error tracking in development

## 🔍 Search

Meilisearch integration (planned)

TODO: Implement Meilisearch for:
- Full-text search across documents
- User search
- Fast autocomplete
- Faceted filtering

## 🚀 Deployment

### Docker

Build and run with Docker:

```bash
docker build -f ../infra/Dockerfile.backend -t intranet-backend ..
docker run -p 3001:3001 -e DATABASE_URL=your-db-url intranet-backend
```

### Manual

```bash
npm ci
npm run prisma:generate
npm run prisma:migrate:deploy
npm run build
npm run start:prod
```

### Environment Variables

Required for production:
- `DATABASE_URL` - PostgreSQL connection string (Neon)
- `JWT_SECRET` - Strong random secret
- `AUTH0_DOMAIN`, `AUTH0_CLIENT_ID`, `AUTH0_CLIENT_SECRET`, `AUTH0_AUDIENCE`
- `SENTRY_DSN` - Sentry error tracking
- `REDIS_URL` - Redis connection string
- `MEILI_HOST`, `MEILI_MASTER_KEY` - Meilisearch
- `INFINITYPAY_API_KEY`, `INFINITYPAY_WEBHOOK_SECRET`

## 📝 API Documentation

TODO: Add Swagger/OpenAPI documentation

```typescript
// Example endpoints:
GET    /api/health           # Health check
GET    /api/users            # List users (requires auth)
GET    /api/users/:id        # Get user (requires auth)
POST   /api/users            # Create user (requires auth)
PUT    /api/users/:id        # Update user (requires auth)
DELETE /api/users/:id        # Delete user (requires auth)
POST   /api/payments/webhook/infinitypay  # InfinityPay webhook
```

## 🧪 Testing

### Unit Tests

```bash
npm run test
npm run test:watch
npm run test:cov
```

### E2E Tests

```bash
npm run test:e2e
```

TODO: Add comprehensive tests for:
- User CRUD operations
- Authentication flows
- Payment processing
- Webhook handling
- Multi-tenancy isolation

## 🐛 Known Issues

- Auth0 guard is a stub (allows all requests)
- InfinityPay integration is stubbed
- Sentry integration is commented out
- No Redis integration yet
- No Meilisearch integration yet
- Missing comprehensive tests
- No API documentation (Swagger)

## 🔒 Security Checklist

Before production:
- [ ] Implement real Auth0 JWT validation
- [ ] Enable HTTPS only
- [ ] Implement rate limiting
- [ ] Add request validation
- [ ] Implement CSRF protection
- [ ] Enable CORS with specific origins
- [ ] Add helmet for security headers
- [ ] Implement proper error handling (don't leak stack traces)
- [ ] Add database query timeouts
- [ ] Implement webhook signature verification
- [ ] Rotate secrets regularly
- [ ] Enable audit logging
- [ ] Add monitoring and alerting

## 🤝 Contributing

See the main [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## 📝 License

GPL-3.0-or-later - See [LICENSE](../LICENSE) for details.
