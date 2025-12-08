# Security Policy

## Supported Versions

This project is currently in initial development (v0.1.0). Security updates will be provided for the latest version only.

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Security Considerations

### Current Security Status

⚠️ **IMPORTANT**: This is an initial starter template. The following security features are **NOT YET IMPLEMENTED** and must be completed before production use:

1. **Authentication Guard** (`backend/src/auth/auth.guard.ts`)
   - Currently allows all requests without validation
   - Must implement Auth0 JWT verification before production
   - See implementation notes in the file

2. **CORS Configuration** (`backend/src/main.ts`)
   - Currently configured for local development
   - Must be restricted for production environments

3. **Environment Variables**
   - All `.env.example` files contain placeholder values
   - Must be replaced with real secrets
   - Never commit actual secrets to version control

4. **Rate Limiting**
   - Not yet implemented
   - Should be added for production API endpoints

5. **Input Validation**
   - DTOs are defined but should be reviewed
   - Additional validation may be needed for specific use cases

### Before Production Deployment

Complete the following security checklist:

- [ ] Implement Auth0 JWT validation in backend
- [ ] Configure CORS for production domains only
- [ ] Set up rate limiting on API endpoints
- [ ] Enable CSRF protection where applicable
- [ ] Configure secure session handling
- [ ] Set up proper error handling (no stack traces in production)
- [ ] Enable HTTPS/TLS for all connections
- [ ] Configure Sentry for error tracking
- [ ] Set up database connection encryption (Neon supports this)
- [ ] Review and test all environment variable configurations
- [ ] Implement proper logging and audit trails
- [ ] Set up monitoring and alerting
- [ ] Configure security headers (Helmet.js for NestJS)
- [ ] Enable SQL injection protection (Prisma provides this)
- [ ] Set up dependency vulnerability scanning (Snyk/Dependabot)

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

1. **Do NOT open a public issue**
2. Email security details to: security@intranet.local
3. Or create a [GitHub Security Advisory](https://github.com/victordg0223/intranet/security/advisories/new)

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### Response Timeline

- Initial response: Within 48 hours
- Status update: Within 5 business days
- Fix timeline: Depends on severity, typically 7-30 days

## Security Best Practices

When contributing to this project:

1. **Never commit secrets**
   - Use environment variables
   - Add secrets to `.gitignore`
   - Use `.env.example` for templates only

2. **Keep dependencies updated**
   - Regularly run `npm audit`
   - Address high and critical vulnerabilities promptly
   - Review and test updates before merging

3. **Follow secure coding practices**
   - Validate all user input
   - Use parameterized queries (Prisma does this automatically)
   - Implement proper authentication and authorization
   - Handle errors gracefully without exposing sensitive data

4. **Code review**
   - All security-related changes require review
   - Test authentication and authorization changes thoroughly
   - Consider security implications of new features

## Security Tools

This project uses:

- **Prisma**: Prevents SQL injection through parameterized queries
- **class-validator**: Input validation in NestJS
- **Auth0**: Enterprise-grade authentication
- **Sentry**: Error tracking and monitoring
- **GitHub Actions**: CI/CD with security scanning (Snyk when configured)

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [NestJS Security Best Practices](https://docs.nestjs.com/security/authentication)
- [Next.js Security Headers](https://nextjs.org/docs/advanced-features/security-headers)
- [Auth0 Security Best Practices](https://auth0.com/docs/secure)
- [Prisma Security Best Practices](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel#security-considerations)

---

Last updated: 2025-12-08
