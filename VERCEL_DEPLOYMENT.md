# Vercel Deployment Guide

This document provides instructions for deploying the Intranet application to Vercel.

## Overview

This is a monorepo project with the Next.js frontend located in the `frontend/` directory. 

## ⚠️ REQUIRED: Configure Root Directory

**YOU MUST CONFIGURE THE ROOT DIRECTORY IN VERCEL FOR THIS PROJECT TO WORK.**

This is not optional - the deployment will fail without this configuration.

### Steps to Configure Root Directory:

1. **Log in to Vercel** and go to your project settings
2. **Navigate to**: Settings → General → Root Directory
3. **Click "Edit"** next to Root Directory
4. **Set Root Directory** to: `frontend`
5. **Click "Save"**
6. **Redeploy** your application (trigger a new deployment)

### Why is this required?

Because this is a monorepo with the Next.js app in the `frontend/` subdirectory, Vercel needs to know where to find:
- `package.json` (for dependencies)
- `next.config.js` (for Next.js configuration)
- `pages/` directory (for routes)

Without setting the Root Directory, Vercel will look in the repository root and won't find these files, causing the build to fail.

### What happens after configuration?

Once the Root Directory is set to `frontend`, Vercel will automatically:
- Detect the Next.js framework
- Install dependencies from `frontend/package.json`
- Build using `frontend/next.config.js`
- Serve the application correctly at your Vercel domain

## Environment Variables

Configure the following environment variables in your Vercel project settings (Settings → Environment Variables):

⚠️ **Security Warning**: Never commit secrets like `AUTH0_SECRET` or `AUTH0_CLIENT_SECRET` to version control. Always configure them as environment variables in Vercel's dashboard.

### Required Variables

- `AUTH0_SECRET` - Auth0 secret for session encryption (generate with `openssl rand -hex 32`) **⚠️ KEEP SECRET**
- `AUTH0_BASE_URL` - Your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
- `AUTH0_ISSUER_BASE_URL` - Your Auth0 domain (e.g., `https://your-tenant.auth0.com`)
- `AUTH0_CLIENT_ID` - Auth0 application client ID
- `AUTH0_CLIENT_SECRET` - Auth0 application client secret **⚠️ KEEP SECRET**

### Optional Public Variables

- `NEXT_PUBLIC_API_URL` - Backend API URL (if using separate backend)
- `NEXT_PUBLIC_AUTH0_DOMAIN` - Auth0 domain for client-side use
- `NEXT_PUBLIC_AUTH0_CLIENT_ID` - Auth0 client ID for client-side use
- `NEXT_PUBLIC_MEILISEARCH_HOST` - Meilisearch instance URL
- `NEXT_PUBLIC_MEILI_KEY` - Meilisearch API key
- `NEXT_PUBLIC_SENTRY_DSN` - Sentry DSN for error tracking

## Auth0 Configuration

Don't forget to update your Auth0 application settings:

1. **Allowed Callback URLs**: `https://your-app.vercel.app/api/auth/callback`
2. **Allowed Logout URLs**: `https://your-app.vercel.app`
3. **Allowed Web Origins**: `https://your-app.vercel.app`

Replace `your-app.vercel.app` with your actual Vercel domain.

## Troubleshooting

### 404 Errors After Deployment

If you see 404 errors after deployment:

1. **Check Root Directory**: Ensure it's set to `frontend` in Project Settings
2. **Check Build Logs**: Verify the build completed successfully
3. **Check vercel.json**: Ensure the configuration is correct
4. **Redeploy**: Sometimes a fresh deployment resolves routing issues

### Build Failures

If builds fail:

1. **Check Environment Variables**: Ensure all required variables are set
2. **Check Dependencies**: Verify `frontend/package.json` has all dependencies
3. **Local Build Test**: Run `npm run build` in the `frontend/` directory locally
4. **Check Node Version**: Ensure Vercel is using Node 18+ (Project Settings → General → Node.js Version)

### Auth0 Issues

If authentication doesn't work:

1. **Verify AUTH0_SECRET**: Must be a 32-byte hex string
2. **Verify AUTH0_BASE_URL**: Must match your Vercel deployment URL (with HTTPS)
3. **Check Auth0 Settings**: Callback and logout URLs must match your Vercel domain
4. **Check Allowed Origins**: Your Vercel domain must be in Auth0's allowed web origins

## Additional Resources

- [Vercel Monorepo Documentation](https://vercel.com/docs/monorepos)
- [Next.js Deployment on Vercel](https://nextjs.org/docs/deployment)
- [Auth0 Next.js SDK Documentation](https://auth0.com/docs/quickstart/webapp/nextjs)

## Support

If you encounter issues not covered here, please:

1. Check the Vercel deployment logs
2. Review the [project README](README.md)
3. Open an issue in the repository
