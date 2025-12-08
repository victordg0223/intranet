import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [apiStatus, setApiStatus] = useState<string>('Checking...');

  useEffect(() => {
    // TODO: Check API health endpoint
    const checkApi = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
        const response = await fetch(`${apiUrl}/health`);
        if (response.ok) {
          setApiStatus('✅ Connected');
        } else {
          setApiStatus('⚠️ API responded with error');
        }
      } catch (error) {
        setApiStatus('❌ Not connected');
        console.error('API health check failed:', error);
      }
    };

    checkApi();
  }, []);

  return (
    <div style={styles.container}>
      <Head>
        <title>Intranet SaaS</title>
        <meta name="description" content="Multi-tenant Intranet SaaS solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <h1 style={styles.title}>
          Welcome to <span style={styles.brand}>Intranet SaaS</span>
        </h1>

        <p style={styles.description}>
          Multi-tenant intranet solution built with Next.js and NestJS
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2>🚀 Frontend</h2>
            <p>Next.js 14+ with TypeScript</p>
            <p>Status: ✅ Running</p>
          </div>

          <div style={styles.card}>
            <h2>⚡ Backend</h2>
            <p>NestJS API with Prisma ORM</p>
            <p>Status: {apiStatus}</p>
          </div>

          <div style={styles.card}>
            <h2>🔐 Authentication</h2>
            <p>Auth0 integration (TODO)</p>
            <p>Status: 🚧 Pending</p>
          </div>

          <div style={styles.card}>
            <h2>💳 Payments</h2>
            <p>InfinityPay integration (TODO)</p>
            <p>Status: 🚧 Pending</p>
          </div>
        </div>

        <div style={styles.info}>
          <h3>Getting Started</h3>
          <p>1. Configure your environment variables</p>
          <p>2. Start the backend: <code>npm run backend:dev</code></p>
          <p>3. Start the frontend: <code>npm run frontend:dev</code></p>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>
          Licensed under GPL-3.0-or-later | Built with ❤️ by victordg0223
        </p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f',
    color: '#ffffff',
  },
  main: {
    padding: '5rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    height: '100px',
    borderTop: '1px solid #333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center' as const,
  },
  brand: {
    color: '#0070f3',
  },
  description: {
    textAlign: 'center' as const,
    lineHeight: 1.5,
    fontSize: '1.5rem',
    margin: '2rem 0',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    maxWidth: '1200px',
    marginTop: '3rem',
  },
  card: {
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left' as const,
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #333',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    width: '300px',
    backgroundColor: '#1a1a1a',
  },
  info: {
    marginTop: '3rem',
    padding: '2rem',
    border: '1px solid #333',
    borderRadius: '10px',
    backgroundColor: '#1a1a1a',
    maxWidth: '600px',
  },
};

export default Home;
