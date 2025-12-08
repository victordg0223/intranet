# Frontend - Intranet SaaS

Next.js 14 frontend application with TypeScript.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 TypeScript for type safety
- 🔐 Auth0 integration ready
- 📊 Sentry error tracking
- 🎯 ESLint configured

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.local.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

See `.env.local.example` for required environment variables.

## Project Structure

```
frontend/
├── pages/          # Pages and routing
├── lib/            # Utilities and configurations
├── public/         # Static assets
└── package.json
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Auth0 Next.js SDK](https://auth0.com/docs/quickstart/webapp/nextjs)
- [Sentry Next.js](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
