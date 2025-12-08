# Contributing to Intranet SaaS

Thank you for considering contributing to Intranet SaaS! We welcome contributions from the community.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed and what you expected to see
- Include screenshots if applicable
- Include your environment details (OS, Node version, etc.)

Use the bug report template in `.github/ISSUE_TEMPLATE/bug_report.md`.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear and descriptive title
- Provide a detailed description of the suggested enhancement
- Explain why this enhancement would be useful
- List any alternatives you've considered

Use the feature request template in `.github/ISSUE_TEMPLATE/feature_request.md`.

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Follow the code style** of the project (use ESLint and Prettier)
3. **Write clear commit messages** following conventional commits format:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for formatting changes
   - `refactor:` for code refactoring
   - `test:` for adding tests
   - `chore:` for maintenance tasks

4. **Add tests** for your changes when applicable
5. **Update documentation** if you're changing functionality
6. **Ensure CI passes** - all tests and lints must pass
7. **Fill out the pull request template** completely

## Development Workflow

### Setup Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/intranet.git
cd intranet

# Add upstream remote
git remote add upstream https://github.com/victordg0223/intranet.git

# Install dependencies
npm run install:all

# Copy environment files
cp .env.example .env
cp frontend/.env.local.example frontend/.env.local
cp backend/.env.example backend/.env

# Start local infrastructure
npm run docker:up

# Run migrations
npm run backend:prisma:generate
npm run backend:prisma:migrate

# Start development servers
npm run dev
```

### Making Changes

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes
# ... code, code, code ...

# Run linters
npm run lint

# Run tests
npm run test

# Build to ensure no build errors
npm run build

# Commit your changes
git add .
git commit -m "feat: add your feature description"

# Push to your fork
git push origin feature/your-feature-name
```

### Keeping Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Merge upstream changes into your main branch
git checkout main
git merge upstream/main

# Update your feature branch
git checkout feature/your-feature-name
git rebase main
```

## Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Prefer interfaces over types for object shapes
- Use explicit return types for functions
- Avoid `any` type - use `unknown` if type is truly unknown

### Formatting

- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in multi-line arrays/objects
- Maximum line length: 100 characters

### Testing

- Write unit tests for business logic
- Write integration tests for API endpoints
- Aim for meaningful test coverage, not just high percentages
- Use descriptive test names: `it('should do something when condition')`

### Documentation

- Add JSDoc comments for public APIs
- Update README.md for user-facing changes
- Update inline comments for complex logic
- Keep CHANGELOG.md updated

## Project Structure

```
.
├── frontend/          # Next.js application
│   ├── pages/        # Next.js pages
│   ├── components/   # React components
│   ├── lib/          # Utility functions
│   └── styles/       # CSS/styling
│
├── backend/          # NestJS application
│   ├── src/          # Source code
│   │   ├── modules/  # Feature modules
│   │   └── services/ # Shared services
│   ├── prisma/       # Database schema
│   └── test/         # Tests
│
└── infra/            # Infrastructure config
    ├── docker-compose.yml
    └── Dockerfiles
```

## Questions?

Feel free to open an issue with the question label or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the GPL-3.0-or-later License.
