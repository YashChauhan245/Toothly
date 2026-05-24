# Toothly

AI-powered dental care platform with appointment booking, admin operations, and a real-time voice assistant. Built for a polished, production-ready patient experience with secure auth, database-backed workflows, and transactional email.

## Features

- AI voice assistant with real-time transcription and audio UX
- Appointment booking flow with dentist selection, time slots, and confirmation
- Admin dashboard to manage doctors and appointments
- Secure authentication, user sync, and subscription-gated routes
- Transactional email confirmations on booking
- Responsive marketing site and user dashboard

## Tech Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS v4, Radix UI primitives, shadcn/ui components
- Prisma ORM with PostgreSQL
- Clerk authentication and billing plans
- Vapi voice SDK for AI calls
- Resend + React Email for transactional emails
- TanStack Query for client data caching
- Biome for linting and formatting

## Product Flow

- Visitors land on the marketing site and can sign up via Clerk.
- Authenticated users are routed to the dashboard and can book appointments.
- Booking triggers a confirmation email and shows upcoming appointments.
- Admins can manage doctors and update appointment statuses.
- Voice assistant access is gated by paid plans (`ai_basic`, `ai_pro`).

## Routes

- `/` marketing site + sign up
- `/dashboard` user dashboard
- `/appointments` booking flow + upcoming appointments
- `/voice` AI voice assistant (plan-gated)
- `/pro` plan selection (Clerk pricing table)
- `/admin` admin dashboard (email-gated)
- `/api/send-appointment-email` transactional email endpoint

## Environment Variables

Create a `.env.local` file in the project root.

Required by the codebase:

- `DATABASE_URL` (PostgreSQL connection string)
- `ADMIN_EMAIL` (email allowed to access `/admin`)
- `RESEND_API_KEY` (Resend API key)
- `NEXT_PUBLIC_APP_URL` (public app URL for email links)
- `NEXT_PUBLIC_VAPI_API_KEY` (Vapi public API key)
- `NEXT_PUBLIC_VAPI_ASSISTANT_ID` (Vapi assistant ID)

Auth configuration (Clerk):

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

## Database

Prisma models:

- `User` with Clerk ID, profile fields, and appointments
- `Doctor` with profile, status, and appointment counts
- `Appointment` with status, reason, and timestamps

## Getting Started

Install dependencies:

```bash
npm install
```

Generate Prisma client:

```bash
npx prisma generate
```

Apply database schema:

```bash
npx prisma migrate dev
# or, for quick local setup without migrations
npx prisma db push
```

Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start Next.js dev server (Turbopack)
- `npm run build` - generate Prisma client and build
- `npm run start` - start production server
- `npm run lint` - run Biome checks
- `npm run format` - format with Biome

## Email and Voice

- Appointment confirmations use Resend and React Email templates.
- Voice calls are powered by Vapi and gated by Clerk plans.

## Deployment Notes

- Configure the same environment variables in your hosting provider.
- Ensure the database is reachable in production and run migrations.
- Configure Clerk billing plans with IDs `ai_basic` and `ai_pro`.

