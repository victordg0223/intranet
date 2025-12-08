# Contributing to Intranet SaaS

First off, thank you for considering contributing to Intranet SaaS! It's people like you that make this project great.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible using our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md).

**Great Bug Reports** tend to have:
- A quick summary and/or background
- Steps to reproduce (be specific!)
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, use our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) and provide:

- A clear and descriptive title
- A detailed description of the proposed enhancement
- Explain why this enhancement would be useful
- List any alternative solutions you've considered

### Pull Requests

1. Fork the repository and create your branch from `main`
2. Follow the naming convention: `feat/feature-name`, `fix/bug-name`, `docs/update-name`
3. Make your changes following our coding standards
4. Ensure all tests pass: `npm run test`
5. Ensure linting passes: `npm run lint`
6. Update documentation as needed
7. Write a clear commit message following Conventional Commits
8. Fill out the pull request template completely

## Development Process

### Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/intranet.git
cd intranet

# Add upstream remote
git remote add upstream https://github.com/victordg0223/intranet.git

# Install dependencies
npm run install:all

# Setup environment
cp .env.example .env
cp frontend/.env.local.example frontend/.env.local
cp backend/.env.example backend/.env

# Start infrastructure
cd infra && docker-compose up -d

# Generate Prisma client and run migrations
npm run backend:prisma:generate
npm run backend:prisma:migrate
npm run backend:seed
```

### Making Changes

```bash
# Create a new branch
git checkout -b feat/your-feature-name

# Make your changes
# ...

# Run tests and linting
npm run lint
npm run test

# Commit your changes
git add .
git commit -m "feat: add your feature description"

# Push to your fork
git push origin feat/your-feature-name
```

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Code style changes (formatting, missing semi-colons, etc)
- `refactor:` Code change that neither fixes a bug nor adds a feature
- `perf:` Performance improvements
- `test:` Adding missing tests or correcting existing tests
- `chore:` Changes to build process or auxiliary tools

Examples:
```
feat: add user profile page
fix: resolve authentication redirect issue
docs: update API documentation
chore: update dependencies
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Properly type all functions and variables
- Avoid `any` type unless absolutely necessary

### Code Style

- We use ESLint and Prettier (configured in each project)
- 2 spaces for indentation
- Single quotes for strings
- Semicolons required
- Run `npm run lint` before committing

### Testing

- Write unit tests for new features
- Maintain or improve test coverage
- Run `npm run test` before submitting PRs

### Documentation

- Update README.md if you change functionality
- Add JSDoc comments for public APIs
- Update inline comments for complex logic

## Database Changes

When making schema changes:

1. Update `backend/prisma/schema.prisma`
2. Create migration: `npm run backend:prisma:migrate`
3. Update seed file if needed: `backend/prisma/seed.ts`
4. Test migrations in a clean database

## Project Structure

- `/frontend` - Next.js application
- `/backend` - NestJS API
  - `/src/modules` - Feature modules
  - `/src/auth` - Authentication
  - `/src/services` - External service integrations
  - `/prisma` - Database schema and migrations
- `/infra` - Docker and infrastructure
- `/.github` - CI/CD and templates

## Need Help?

- 📖 Check the [README](README.md)
- 💬 Open a discussion
- 🐛 Report bugs via issues
- 📧 Contact maintainers

## License

By contributing, you agree that your contributions will be licensed under the GPL-3.0-or-later License.

## Recognition

Contributors will be recognized in the project documentation and release notes.

Thank you for contributing! 🎉
