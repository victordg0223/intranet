import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
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
          <h1 className={styles.title}>Welcome to Intranet SaaS</h1>

          <div className={styles.description}>
            <p>A modern SaaS intranet platform built with Next.js, NestJS, and PostgreSQL.</p>
            <p>
              Configure your Auth0 credentials in <code>.env.local</code> to enable authentication.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>🔐 Authentication</h2>
              <p>Powered by Auth0 for secure user management</p>
            </div>

            <div className={styles.card}>
              <h2>🔍 Search</h2>
              <p>Fast and powerful search with Meilisearch</p>
            </div>

            <div className={styles.card}>
              <h2>💳 Billing</h2>
              <p>Integrated payment processing with InfinityPay</p>
            </div>

            <div className={styles.card}>
              <h2>📊 Observability</h2>
              <p>Application monitoring and error tracking</p>
            </div>
          </div>

          <div className={styles.setupInstructions}>
            <h2>Getting Started</h2>
            <ol>
              <li>
                Copy <code>.env.local.example</code> to <code>.env.local</code>
              </li>
              <li>
                Configure your Auth0 credentials from{' '}
                <a href="https://manage.auth0.com/" target="_blank" rel="noopener noreferrer">
                  Auth0 Dashboard
                </a>
              </li>
              <li>Set up your database connection</li>
              <li>
                Run <code>npm run dev</code> to start the development server
              </li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
}
