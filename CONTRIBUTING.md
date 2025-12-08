# Contributing to Intranet

Thank you for your interest in contributing to the Intranet SaaS project! This document provides guidelines and instructions for contributing.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branch Naming](#branch-naming)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)
- [Testing](#testing)

## Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/intranet.git`
3. Add upstream remote: `git remote add upstream https://github.com/victordg0223/intranet.git`
4. Install dependencies: `npm run bootstrap`
5. Copy environment files and configure secrets (see README.md)

## Development Workflow

1. Create a new branch from `main`
2. Make your changes
3. Write or update tests as needed
4. Ensure all tests pass: `npm test`
5. Ensure code passes linting: `npm run lint`
6. Commit your changes with a descriptive message
7. Push to your fork
8. Open a Pull Request

## Branch Naming

Use the following branch naming conventions:

- `feature/description` - For new features
- `fix/description` - For bug fixes
- `docs/description` - For documentation updates
- `refactor/description` - For code refactoring
- `test/description` - For adding or updating tests
- `chore/description` - For maintenance tasks

Example: `feature/add-user-dashboard`

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:
```
feat(auth): add Auth0 integration

Implement Auth0 authentication flow for user login and registration.
Includes callback handling and session management.

Closes #123
```

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the CHANGELOG.md with your changes
3. Ensure all CI checks pass
4. Request review from maintainers
5. Address any feedback from reviewers
6. Once approved, a maintainer will merge your PR

### PR Title Format

Use the same format as commit messages:
```
<type>(<scope>): <description>
```

## Code Style

### TypeScript/JavaScript
- Use TypeScript for all new code
- Follow the existing ESLint and Prettier configurations
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Prefer functional programming patterns where appropriate

### React/Next.js (Frontend)
- Use functional components with hooks
- Keep components small and focused
- Use proper TypeScript types, avoid `any`
- Follow Next.js best practices for performance

### NestJS (Backend)
- Follow NestJS architecture patterns (modules, controllers, services)
- Use dependency injection
- Implement proper error handling
- Use DTOs for validation
- Document API endpoints with Swagger decorators

## Testing

- Write unit tests for new functionality
- Ensure test coverage remains high
- Run tests locally before submitting PR
- Frontend tests: Jest + React Testing Library
- Backend tests: Jest + Supertest

## Contributor License Agreement (CLA)

By contributing to this project, you agree that:
1. Your contributions will be licensed under the GPL-3.0-or-later license
2. You have the right to submit the work
3. You grant the project maintainers the right to use your contributions

## Questions?

If you have questions, please:
1. Check existing issues and discussions
2. Open a new issue with the `question` label
3. Reach out to maintainers

Thank you for contributing! 🎉
