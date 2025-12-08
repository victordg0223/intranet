# Contributing to Intranet SaaS

Thank you for your interest in contributing to Intranet SaaS! We welcome contributions from the community.

## 🤝 Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- A clear and descriptive title
- Steps to reproduce the behavior
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (OS, Node version, browser, etc.)

## 💡 Suggesting Features

Feature requests are welcome! Please provide:

- A clear and descriptive title
- Detailed description of the proposed feature
- Use cases and benefits
- Any alternative solutions you've considered

## 🔧 Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/intranet.git`
3. Follow the setup instructions in [README.md](README.md)
4. Create a new branch: `git checkout -b feature/your-feature-name`

## 📝 Coding Standards

- Use TypeScript for all new code
- Follow the existing code style (enforced by ESLint/Prettier)
- Write meaningful commit messages following [Conventional Commits](https://www.conventionalcommits.org/)
- Add tests for new features
- Update documentation as needed

### Commit Message Format

```
type(scope): subject

body

footer
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat(users): add user profile update endpoint

Add new endpoint to allow users to update their profile information
including name, email, and avatar.

Closes #123
```

## 🧪 Testing

- Run tests before submitting: `npm run test:all`
- Add tests for new features
- Ensure all tests pass

## 📤 Pull Request Process

1. Update documentation for any changed functionality
2. Follow the PR template
3. Link related issues
4. Ensure CI checks pass
5. Request review from maintainers
6. Address review feedback

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Tests added/updated and passing
- [ ] Documentation updated
- [ ] Commit messages follow convention
- [ ] No merge conflicts
- [ ] CI/CD checks pass

## 📜 License

By contributing, you agree that your contributions will be licensed under the GPL-3.0-or-later license.

## ❓ Questions

If you have questions, feel free to:
- Open an issue with the `question` label
- Reach out to the maintainers

Thank you for contributing! 🎉
