# Frontend - Next.js Application

This is the frontend application for the Intranet SaaS, built with Next.js 14+ and TypeScript.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
frontend/
├── pages/              # Next.js pages (file-based routing)
│   ├── _app.tsx       # Custom App component
│   └── index.tsx      # Home page
├── components/         # React components (TODO)
├── lib/               # Utility functions and configurations
│   └── sentry.client.config.ts
├── public/            # Static assets (TODO)
├── styles/            # CSS/Sass files (TODO)
├── next.config.js     # Next.js configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

## 🔧 Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```bash
cp .env.local.example .env.local
```

Required variables:
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_AUTH0_DOMAIN` - Auth0 tenant domain
- `NEXT_PUBLIC_AUTH0_CLIENT_ID` - Auth0 application client ID
- `NEXT_PUBLIC_AUTH0_AUDIENCE` - Auth0 API audience
- `NEXT_PUBLIC_SENTRY_DSN` - Sentry DSN for error tracking

## 🎨 Features

### Implemented
- ✅ Next.js 14+ with TypeScript
- ✅ API health check on home page
- ✅ Basic page structure
- ✅ Dark theme styling

### TODO
- [ ] Auth0 authentication integration
- [ ] User dashboard
- [ ] Multi-tenancy UI
- [ ] Responsive design system
- [ ] Component library
- [ ] E2E tests with Playwright
- [ ] Sentry error tracking
- [ ] Analytics integration
- [ ] Internationalization (i18n)
- [ ] PWA support

## 🔐 Authentication

Auth0 integration is planned. The authentication flow will include:
1. Login/Signup pages
2. Protected routes
3. JWT token management
4. User profile management

## 📊 State Management

TODO: Choose and implement state management solution:
- React Context API (simple state)
- Zustand (recommended for medium complexity)
- Redux Toolkit (if needed for complex state)

## 🎨 Styling

Current: Inline styles (basic)
TODO: Implement styling solution:
- Tailwind CSS (recommended)
- CSS Modules
- Styled Components
- Emotion

## 🧪 Testing

TODO: Implement testing:
- Jest for unit tests
- React Testing Library for component tests
- Playwright for E2E tests

```bash
# Future commands
npm run test           # Run unit tests
npm run test:watch     # Watch mode
npm run test:e2e       # E2E tests
```

## 📦 Dependencies

### Core
- `next` - React framework
- `react` - UI library
- `react-dom` - React DOM renderer
- `typescript` - Type safety

### Integrations (TODO)
- `@sentry/nextjs` - Error tracking
- `axios` - HTTP client
- Auth0 SDK (to be added)

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

Automatic deployments are configured via `.github/workflows/deploy-vercel.yml`.

### Docker

Build and run with Docker:

```bash
docker build -f ../infra/Dockerfile.frontend -t intranet-frontend ..
docker run -p 3000:3000 intranet-frontend
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vercel Platform](https://vercel.com)

## 🐛 Known Issues

- Sentry integration is stubbed (needs configuration)
- Auth0 not yet integrated
- No styling system implemented yet
- API health check needs error handling improvement

## 🤝 Contributing

See the main [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## 📝 License

GPL-3.0-or-later - See [LICENSE](../LICENSE) for details.
