import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Header() {
  return (
    // Fixed navbar height = 64px
    <nav className="fixed top-0 right-0 left-0 z-50 h-16 px-6 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo1.png"
            alt="Toothly Logo"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
          <span className="font-semibold text-base tracking-tight">
            Toothly
          </span>
        </Link>

        {/* CENTER: NAV LINKS */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/#how-it-works"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How it Works
          </Link>

          <Link
            href="/#pricing"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>

          <Link
            href="/#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-2">
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button size="sm">Sign Up</Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
}

export default Header;
