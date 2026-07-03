# 🎵 Listify

Listify is a premium, high-fidelity music visualization web application that transforms your Spotify listening history into beautiful, shareable **visual receipts** and deep audio feature breakdowns.

Built with modern web standards, Listify provides real-time insights into your top artists, tracks, genre representation, and acoustic signatures.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org) with Turbopack compilation.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) & custom CSS tokens.
- **Authentication**: [Better Auth](https://better-auth.com) using Spotify OAuth.
- **Database ORM**: [Prisma](https://prisma.io) with PostgreSQL.
- **Animations**: [Framer Motion](https://framer.com/motion) for sleek transitions and micro-interactions.
- **Charts & Data**: [Recharts](https://recharts.org) for responsive audio fingerprint charts.
- **Rate Limiting**: [Upstash Redis](https://upstash.com) with `@upstash/ratelimit`.

---

## 🛠️ Prerequisites

Before you start, make sure you have:
1. **Node.js** (v18.x or later) and **npm**.
2. A **PostgreSQL** database (e.g., local PostgreSQL instance or hosted on Supabase, Neon, or Vercel Postgres).
3. A **Spotify Developer account** to create an application and obtain API credentials.
4. (Optional) An **Upstash Redis** database for API route rate limiting.

---

## ⚙️ Local Development Setup

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-username/listify.git
cd listify
npm install
```

### 2. Configure Spotify Developer Application
1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) and log in.
2. Click **Create app**.
3. Name your app, add a description, and select the **Web API** option.
4. Set the **Redirect URIs** under settings:
   - For local development: `http://localhost:3000/api/auth/callback/spotify`
   - For production (e.g. Vercel): `https://your-app-domain.vercel.app/api/auth/callback/spotify`
5. Save the changes and copy the **Client ID** and **Client Secret**.

### 3. Environment Variables Setup
Create a `.env` file in the root of your project (see `.env.example` for details):

```env
# App URL (Change to production URL when deploying)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Better Auth Secret (Generate a secure base64 string)
# e.g., openssl rand -base64 32
BETTER_AUTH_SECRET=your_better_auth_secret_here

# Spotify Developer API Credentials
SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here

# Database connection
DATABASE_URL="postgresql://username:password@localhost:5432/listify?schema=public"

# Rate Limit Config (Optional)
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

### 4. Setup the Database Schema
Sync the Prisma schema to your PostgreSQL database:
```bash
npx prisma db push
```

### 5. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🚢 Vercel Deployment Instructions

Follow these steps to deploy Listify on [Vercel](https://vercel.com):

### Step 1: Create a Vercel Project
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log in to Vercel and click **Add New** -> **Project**.
3. Import your Listify repository.

### Step 2: Configure Environment Variables
In the **Environment Variables** section of the project configuration, add all variables from your `.env` file:
- `NEXT_PUBLIC_APP_URL` (Set to your Vercel URL, e.g., `https://listify.vercel.app`)
- `BETTER_AUTH_SECRET` (Secure key)
- `SPOTIFY_CLIENT_ID` (Spotify client ID)
- `SPOTIFY_CLIENT_SECRET` (Spotify client secret)
- `DATABASE_URL` (Production PostgreSQL connection string)
- `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` (If using rate limiting)

### Step 3: Configure Spotify Developer Dashboard
1. Go back to your [Spotify Developer App Dashboard](https://developer.spotify.com/dashboard).
2. Edit your app's settings and add the production Redirect URI:
   `https://your-vercel-domain.vercel.app/api/auth/callback/spotify`
3. Save settings. If you do not do this, logging in on production will throw a `INVALID_CLIENT: Invalid redirect URI` error.

### Step 4: Build and Deploy
Click **Deploy**. Vercel will automatically detect Next.js, compile your static pages, set up serverless API routes, and deploy the application.

---

## 🔍 Troubleshooting

### ❌ Spotify `INVALID_CLIENT: Invalid redirect URI`
- **Cause**: The current Redirect URI on Spotify's developer portal does not exactly match the domain/path from which the authorization request is sent.
- **Fix**: Double-check that your Vercel domain Redirect URI is added under the application settings in your Spotify dashboard and exactly matches: `https://[YOUR_DOMAIN]/api/auth/callback/spotify`. Note that Spotify redirects must use HTTPS (except localhost).

### ❌ Prisma Database Connection Issues
- **Cause**: Missing database firewall whitelist entries or wrong connection strings.
- **Fix**: Ensure your host database (Neon, Supabase, Vercel Postgres) allows connections from Vercel's edge network IPs (or set it to `0.0.0.0/0` if secure).

### ❌ Rate Limiting Issues
- **Cause**: Missing Upstash Redis credentials.
- **Fix**: Listify automatically falls back to skipping rate limits if `UPSTASH_REDIS_REST_URL` is omitted, making it robust for local setups, but for production, configure credentials on Upstash for maximum API protection.
