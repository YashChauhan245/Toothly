import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { dark } from "@clerk/themes"
import UserSync from "@/components/UserSync";
import Script from "next/script";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import TanStackProvider from "@/components/providers/TanStackProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toothly",
  description: "Get instant dental advice through voice calls with our AI assistant. Avaiable 24/7.",
  icons: {
    icon: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
        suppressHydrationWarning
      >
        <ClerkProvider
          appearance={{
            baseTheme: dark, // for dark mode during signup
          }}
        >
          <TanStackProvider>
            {/* this is done in the home page component */}
            <UserSync />
            {children}
          </TanStackProvider>
        </ClerkProvider>

        {/* EchoDesk AI Chatbot Embed  */}
        <Script
          src="https://echodesk-platform.vercel.app/chatbot.js"
          data-org-id="6a4d06d39ecc5781309cd5fd"
        ></Script>

      </body>
    </html>

  );
}
