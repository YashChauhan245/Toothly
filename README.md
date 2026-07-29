# 🦷 Toothly

**Toothly** is an AI-powered dental care platform featuring seamless appointment booking, admin operations, real-time voice consultations, and an intelligent **24/7 AI Customer Support Chatbot** powered by **EchoDesk** (a custom-built AI chatbot platform).

Built for a polished, production-ready patient experience with secure auth, database-backed workflows, and automated transactional emails.

---

## ✨ Features

- **EchoDesk AI Chatbot Integration**: Integrated with [EchoDesk](https://echodesk-platform.vercel.app), a custom AI customer support platform. Provides 24/7 patient assistance, appointment guidance, treatment pricing estimates, and emergency symptom triage.
- **AI Voice Assistant**: Interactive real-time dental voice calls powered by Vapi SDK.
- **Appointment Booking System**: Frictionless booking flow with dentist selection, time slot picking, and instant confirmations.
- **Admin Management Dashboard**: Comprehensive portal to manage doctors, appointment schedules, and patient records.
- **Secure Authentication & Billing**: Powered by Clerk for user auth, user sync, and tier-gated subscription plans (`AI Basic`, `AI Pro`).
- **Transactional Emails**: Automated appointment confirmation emails built with Resend & React Email.
- **Responsive Modern UI**: Modern dark-mode UI built with Next.js 15, Tailwind CSS v4, and Radix UI primitives.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router), React 19, TypeScript
- **AI Chatbot**: [EchoDesk AI](https://echodesk-platform.vercel.app) (Embedded Customer Support Widget)
- **AI Voice Engine**: Vapi Voice SDK
- **Styling**: Tailwind CSS v4, Radix UI Primitives, Lucide Icons
- **Database & ORM**: PostgreSQL with Prisma ORM
- **Auth & Billing**: Clerk (User Sync + Pricing Tables)
- **Emails**: Resend + React Email Templates
- **Data Fetching & Quality**: TanStack Query, Biome (Linting & Formatting)

---

## 🚀 Product Flow

1. **Visitor Landing**: Visitors explore dental services, doctor profiles, and subscription plans on the landing page.
2. **24/7 EchoDesk AI Support**: Patients can ask the floating **EchoDesk AI Chatbot** about doctor specialities, treatment pricing, subscription benefits, or after-hours pain advice.
3. **Dashboard & Appointments**: Authenticated users can browse specialists (**Dr. Rudra Pratap Singh**, **Dr. Arya Thakur**, **Dr. Mayank Bhatt**) and book appointments.
4. **Email Confirmation**: Booking triggers a transactional confirmation email via Resend.
5. **AI Voice Consultations**: Subscribed users (`ai_basic` & `ai_pro`) unlock live AI voice calls for instant dental checkups.
6. **Admin Panel**: Authorized admins manage doctors and update appointment statuses (`CONFIRMED`, `COMPLETED`).

---

## 🗺️ Application Routes

- `/` — Marketing landing page
- `/dashboard` — User dashboard
- `/appointments` — Appointment booking flow & schedule overview
- `/voice` — AI voice consultation (Plan-gated)
- `/pro` — Subscription tier selection (Clerk Pricing)
- `/admin` — Admin management dashboard (Email-gated)
- `/api/send-appointment-email` — Transactional email API endpoint

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/toothly"

# Admin & General Config
ADMIN_EMAIL="admin@toothly.com"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Resend Email API
RESEND_API_KEY="re_123456789"

# Vapi Voice Assistant
NEXT_PUBLIC_VAPI_API_KEY="your-vapi-public-key"
NEXT_PUBLIC_VAPI_ASSISTANT_ID="your-vapi-assistant-id"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
```

---

## 🛠️ Getting Started

1. **Clone the repository & install dependencies**:
   ```bash
   npm install
   ```

2. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

3. **Push Database Schema**:
   ```bash
   npx prisma db push
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💬 EchoDesk Chatbot Integration

Toothly embeds the **EchoDesk AI Widget** globally via `src/app/layout.tsx`:

```tsx
import Script from "next/script";

<Script
  src="https://echodesk-platform.vercel.app/chatbot.js"
  data-org-id="6a4d06d39ecc5781309cd5fd"
  strategy="afterInteractive"
/>
```

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
