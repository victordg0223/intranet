import { useUser } from '@auth0/nextjs-auth0/client';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>Intranet - Home</title>
        <meta name="description" content="Intranet SaaS Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to Intranet</h1>

          {user ? (
            <div className={styles.userInfo}>
              <p>Hello, {user.name}!</p>
              <Link href="/api/auth/logout" className={styles.link}>
                Logout
              </Link>
            </div>
          ) : (
            <div className={styles.auth}>
              <p>Please log in to continue</p>
              <Link href="/api/auth/login" className={styles.link}>
                Login
              </Link>
            </div>
          )}

          <div className={styles.description}>
            <p>A modern SaaS intranet platform built with Next.js, NestJS, and PostgreSQL.</p>
          </div>

          <div className={styles.grid}>
            <Link href="/api/auth/login" className={styles.card}>
              <h2>Authentication &rarr;</h2>
              <p>Powered by Auth0</p>
            </Link>

            <a href="#" className={styles.card}>
              <h2>Search &rarr;</h2>
              <p>Fast search with Meilisearch</p>
            </a>

            <a href="#" className={styles.card}>
              <h2>Billing &rarr;</h2>
              <p>Integrated with InfinityPay</p>
            </a>

            <a href="#" className={styles.card}>
              <h2>Observability &rarr;</h2>
              <p>Monitored by Sentry</p>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
