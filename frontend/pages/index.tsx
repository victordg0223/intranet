import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0/client';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Intranet SaaS</title>
        <meta name="description" content="Multi-tenant Intranet SaaS Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Intranet SaaS</span>
        </h1>

        <p className={styles.description}>
          A modern multi-tenant intranet platform built with Next.js and NestJS
        </p>

        {user ? (
          <div className={styles.card}>
            <h2>Welcome, {user.name}!</h2>
            <p>Email: {user.email}</p>
            <a href="/api/auth/logout" className={styles.button}>
              Logout
            </a>
          </div>
        ) : (
          <div className={styles.card}>
            <h2>Get Started</h2>
            <p>Sign in to access your intranet dashboard</p>
            <a href="/api/auth/login" className={styles.button}>
              Login
            </a>
          </div>
        )}

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about features and API.</p>
          </div>

          <div className={styles.card}>
            <h3>Search &rarr;</h3>
            <p>Powered by Meilisearch for lightning-fast results.</p>
          </div>

          <div className={styles.card}>
            <h3>Multi-tenant &rarr;</h3>
            <p>Secure tenant isolation and data management.</p>
          </div>

          <div className={styles.card}>
            <h3>Billing &rarr;</h3>
            <p>Integrated payment processing with InfinityPay.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by Next.js, NestJS, and PostgreSQL
        </p>
      </footer>
    </div>
  );
}
