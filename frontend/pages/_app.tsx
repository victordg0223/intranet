import type { AppProps } from 'next/app';
import { useEffect } from 'react';

// TODO: Import and configure Sentry
// import * as Sentry from '@sentry/nextjs';

// TODO: Import global styles
// import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // TODO: Initialize Sentry client-side monitoring
    // if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    //   Sentry.init({
    //     dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    //     environment: process.env.NODE_ENV,
    //     tracesSampleRate: 1.0,
    //   });
    // }

    // TODO: Initialize analytics, user tracking, etc.
    console.log('Intranet SaaS Frontend initialized');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
