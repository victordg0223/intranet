# TODO - Project Improvements

## High Priority

### Backend
- [ ] Create DTOs (Data Transfer Objects) for Users endpoints with proper validation
  - Replace `any` types in `users.controller.ts` and `users.service.ts`
  - Use `class-validator` decorators for validation
  - Define proper interfaces for user creation/update operations

### Frontend
- [ ] Implement actual Auth0 integration
  - Configure Auth0 provider in `_app.tsx`
  - Add protected routes and authentication guards
  - Implement login/logout flows

### Backend
- [ ] Implement Auth0 JWT validation middleware
  - Add JWT strategy for NestJS
  - Protect API endpoints with guards
  - Extract user from token in controllers

### Search
- [ ] Implement Meilisearch integration
  - Create search service
  - Index documents on creation/update
  - Add search endpoints

### Billing
- [ ] Complete InfinityPay integration
  - Implement actual API calls in `infinitypay.service.ts`
  - Add webhook handlers
  - Create subscription management endpoints

## Medium Priority

### Error Tracking
- [ ] Enable Sentry integration (optional)
  - Install `@sentry/nextjs` and `@sentry/node`
  - Uncomment Sentry initialization code
  - Configure Sentry DSN and project settings

### Testing
- [ ] Add unit tests for backend services
- [ ] Add integration tests for API endpoints
- [ ] Add component tests for frontend
- [ ] Add E2E tests for critical flows

### Infrastructure
- [ ] Optimize Docker Compose for production
  - Use single `DATABASE_URL` variable instead of constructing from parts
  - Add health checks for all services
  - Configure resource limits

### Code Quality
- [ ] Replace `require()` with ES6 imports where possible
- [ ] Add proper TypeScript types throughout
- [ ] Implement proper error handling
- [ ] Add API documentation (Swagger/OpenAPI)

## Low Priority

### Documentation
- [ ] Add architectural decision records (ADRs)
- [ ] Create deployment guides for different platforms
- [ ] Add troubleshooting guide
- [ ] Document API endpoints

### Developer Experience
- [ ] Add pre-commit hooks (husky)
- [ ] Configure VS Code workspace settings
- [ ] Add debugging configurations
- [ ] Create development guides

### Performance
- [ ] Implement caching strategy (Redis)
- [ ] Add database indexes based on query patterns
- [ ] Optimize bundle sizes
- [ ] Add performance monitoring

## Notes

This is an initial skeleton with minimal functionality and stubs for integrations.
The priority should be on implementing actual integrations and adding proper type safety before moving to low priority items.
