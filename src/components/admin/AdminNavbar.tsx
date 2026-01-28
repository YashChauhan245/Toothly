"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AdminNavbar() {
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className="max-w-7xl mx-auto relative flex items-center h-full">
        
        <div className="flex-1" />

        {/* LOGO */}
        <Link
          href="/dashboard"
          className="absolute left-1/2 -translate-x-1/2 flex items-center"
        >
          <Image
            src="/logo4.png"
            alt="Toothly Logo"
            width={42}
            height={42}
            className="object-contain transition-transform hover:scale-105"
            priority
          />
        </Link>

        {/* RIGHT SECTION */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-sm font-medium text-foreground">
              {user?.firstName} {user?.lastName}
            </span>
            <span className="text-xs text-muted-foreground">
              {user?.emailAddresses?.[0]?.emailAddress}
            </span>
          </div>

          <UserButton />
        </div>

      </div>
    </nav>
  );
}

export default AdminNavbar;
