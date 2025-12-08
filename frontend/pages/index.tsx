import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Intranet SaaS</title>
        <meta name="description" content="Modern Intranet SaaS Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
        <h1>Welcome to Intranet SaaS</h1>
        <p>Your modern intranet solution is ready!</p>
        
        <div style={{ marginTop: '2rem' }}>
          <h2>Getting Started</h2>
          <ul>
            <li>Configure your environment variables</li>
            <li>Set up your database with Prisma</li>
            <li>Configure Auth0 for authentication</li>
            <li>Start building your features</li>
          </ul>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h2>Features</h2>
          <ul>
            <li>Next.js 14 with TypeScript</li>
            <li>NestJS Backend with Prisma ORM</li>
            <li>Auth0 Authentication</li>
            <li>InfinityPay Integration</li>
            <li>Sentry Error Tracking</li>
            <li>Full-text Search with Meilisearch</li>
            <li>Redis Caching</li>
          </ul>
        </div>
      </main>
    </>
  )
}
