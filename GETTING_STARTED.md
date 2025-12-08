# Getting Started with Intranet SaaS

Welcome to the Intranet SaaS platform! This guide will help you set up the development environment and understand the project structure.

## 📚 Quick Links

- [README.md](README.md) - Complete project documentation
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [SECURITY.md](SECURITY.md) - Security considerations
- [CHANGELOG.md](CHANGELOG.md) - Version history

## 🚀 Quick Start (5 minutes)

### 1. Prerequisites Check

Ensure you have the following installed:

```bash
node --version  # Should be >= 18.0.0
npm --version   # Should be >= 9.0.0
docker --version
docker-compose --version
```

### 2. Clone and Install

```bash
git clone https://github.com/victordg0223/intranet.git
cd intranet
npm run bootstrap
```

### 3. Configure Environment Variables

```bash
# Copy environment templates
cp .env.example .env
cp frontend/.env.local.example frontend/.env.local
cp backend/.env.example backend/.env
cp infra/.env.example infra/.env

# Edit the files and add your credentials
```

**Minimum required configuration:**
- Auth0 credentials (domain, client ID, client secret)
- Database URL (use Docker Compose defaults for local dev)
- Meilisearch master key (set in infra/.env)

### 4. Start Development Environment

```bash
# Start infrastructure services (PostgreSQL, Meilisearch, etc.)
npm run docker:up

# In a new terminal: Setup database
cd backend
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed

# In a new terminal: Start backend
npm run start:dev

# In a new terminal: Start frontend
cd ../frontend
npm run dev
```

### 5. Access the Applications

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **API Documentation**: http://localhost:4000/api/docs
- **Prisma Studio**: `cd backend && npm run prisma:studio`
- **Meilisearch**: http://localhost:7700
- **pgAdmin**: http://localhost:5050

## 🏗️ Project Structure Overview

```
intranet/
├── frontend/          # Next.js application
├── backend/           # NestJS API server
├── infra/             # Docker & infrastructure
├── .github/           # CI/CD workflows
└── docs/             # Documentation (add as needed)
```

## 🔑 Configuration Guide

### Auth0 Setup (Required)

1. Go to https://auth0.com/ and create an account
2. Create a new application (Single Page Application)
3. Create a new API
4. Configure the following in Auth0 dashboard:

**Application Settings:**
- Allowed Callback URLs: `http://localhost:3000/api/auth/callback`
- Allowed Logout URLs: `http://localhost:3000`
- Allowed Web Origins: `http://localhost:3000`

**Copy credentials to your environment files:**
```env
# frontend/.env.local
AUTH0_SECRET='generate-with-openssl-rand-hex-32'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://YOUR_DOMAIN.auth0.com'
AUTH0_CLIENT_ID='your_client_id'
AUTH0_CLIENT_SECRET='your_client_secret'

# backend/.env
AUTH0_DOMAIN='YOUR_DOMAIN.auth0.com'
AUTH0_CLIENT_ID='your_client_id'
AUTH0_CLIENT_SECRET='your_client_secret'
AUTH0_AUDIENCE='https://your-api-identifier'
```

### Database Setup

**Local Development (Docker):**
```env
# backend/.env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/intranet_dev?schema=public"
```

**Production (Neon):**
1. Create account at https://neon.tech/
2. Create a new project
3. Copy connection string to `backend/.env`:
```env
DATABASE_URL="postgresql://user:pass@ep-xxx.region.aws.neon.tech/dbname?sslmode=require"
```

### Meilisearch Setup

**Local Development:**
- Included in Docker Compose
- Access at http://localhost:7700
- Default master key: `masterKey123456789` (change in production!)

**Production:**
- Use Meilisearch Cloud: https://www.meilisearch.com/cloud
- Or self-host on your infrastructure
- Update `MEILI_HOST` and `MEILI_MASTER_KEY` in environment files

### Sentry Setup (Optional but Recommended)

1. Create account at https://sentry.io/
2. Create projects for frontend and backend
3. Copy DSNs to environment files:
```env
# frontend/.env.local
NEXT_PUBLIC_SENTRY_DSN='your_frontend_dsn'

# backend/.env
SENTRY_DSN='your_backend_dsn'
```

### InfinityPay Setup (Optional)

For billing functionality:
```env
# backend/.env
INFINITYPAY_API_KEY='your_api_key'
INFINITYPAY_BASE_URL='https://api.infinitypay.io'
```

## 🛠️ Development Workflow

### Daily Development

```bash
# Start all services
npm run docker:up

# In separate terminals:
cd backend && npm run start:dev
cd frontend && npm run dev
```

### Running Tests

```bash
# Test everything
npm test

# Test specific package
npm run test:frontend
npm run test:backend
```

### Linting and Formatting

```bash
# Lint everything
npm run lint

# Format code (if you set up format scripts)
npm run format
```

### Database Migrations

```bash
cd backend

# Create a new migration
npm run prisma:migrate -- --name add_new_feature

# Apply migrations
npm run prisma:migrate

# View database in GUI
npm run prisma:studio
```

### Building for Production

```bash
# Build both frontend and backend
npm run build

# Or build individually
npm run build:frontend
npm run build:backend
```

## 🚢 Deployment Guide

### Frontend Deployment (Vercel)

**Option 1: GitHub Integration (Recommended)**
1. Go to https://vercel.com/
2. Import your repository
3. Configure environment variables
4. Deploy automatically on push to main

**Option 2: Manual Deployment**
```bash
cd frontend
npm install -g vercel
vercel --prod
```

**Environment Variables in Vercel:**
Add all variables from `frontend/.env.local.example` in Vercel dashboard.

### Backend Deployment Options

**Option 1: Vercel (Serverless)**
- Good for low-traffic APIs
- Configure in Vercel dashboard

**Option 2: Railway**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

**Option 3: Fly.io**
```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Deploy
fly launch
fly deploy
```

### Database (Neon)

Already configured! Just update `DATABASE_URL` in production environment.

### CI/CD

GitHub Actions workflows are already configured:
- `.github/workflows/ci.yml` - Runs on every push/PR
- `.github/workflows/deploy-vercel.yml` - Deploys to Vercel

**Required GitHub Secrets:**
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `GHCR_TOKEN` (for Docker images)
- `SNYK_TOKEN` (for security scanning)

## ❗ Common Issues

### Issue: Port already in use

```bash
# Kill process on port
lsof -ti:3000 | xargs kill -9  # Frontend
lsof -ti:4000 | xargs kill -9  # Backend
```

### Issue: Database connection failed

```bash
# Check if PostgreSQL is running
docker ps | grep postgres

# Restart Docker Compose
npm run docker:down
npm run docker:up
```

### Issue: Prisma client not generated

```bash
cd backend
npm run prisma:generate
```

### Issue: Module not found errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json
rm -rf backend/node_modules backend/package-lock.json
npm run bootstrap
```

## 📖 Learning Resources

### Next.js (Frontend)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### NestJS (Backend)
- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

### Tools & Services
- [Auth0 Documentation](https://auth0.com/docs)
- [Meilisearch Documentation](https://docs.meilisearch.com/)
- [Neon Documentation](https://neon.tech/docs)
- [Sentry Documentation](https://docs.sentry.io/)
- [Docker Documentation](https://docs.docker.com/)

## 🤝 Getting Help

- **Issues**: Open an issue on GitHub
- **Discussions**: Use GitHub Discussions for questions
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md)
- **Security**: See [SECURITY.md](SECURITY.md) for security concerns

## ✅ Checklist for First-Time Setup

- [ ] Install Node.js 18+, npm 9+, Docker
- [ ] Clone repository
- [ ] Run `npm run bootstrap`
- [ ] Create Auth0 account and application
- [ ] Copy and configure all `.env` files
- [ ] Start Docker services with `npm run docker:up`
- [ ] Run database migrations
- [ ] Seed database with initial data
- [ ] Start backend dev server
- [ ] Start frontend dev server
- [ ] Access http://localhost:3000
- [ ] Try logging in with Auth0
- [ ] Explore API docs at http://localhost:4000/api/docs

## 🎯 Next Steps After Setup

1. **Implement Auth0 JWT validation** (see SECURITY.md)
2. **Customize the frontend** (add your branding, pages)
3. **Add business logic** to backend (your features)
4. **Set up production deployments**
5. **Configure monitoring** (Sentry, logs)
6. **Add tests** for your features
7. **Set up staging environment**
8. **Configure backups** for production database

---

Need more help? Check the [README.md](README.md) or open an issue!
