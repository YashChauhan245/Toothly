// "use client";

// import { UserButton, useUser } from "@clerk/nextjs";
// import { CalendarIcon, CrownIcon, HomeIcon, MicIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// function Navbar() {
//   const { user } = useUser();
//   const pathname = usePathname();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
//       <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
//         {/* LOGO */}
//         <div className="flex items-center gap-8">
//           <Link href="/dashboard" className="flex items-center gap-2">
//             <Image src="/logo1.png" alt="Toothly Logo" width={32} height={32} className="w-11" />
//           </Link>

//           <div className="flex items-center gap-6">
//             <Link
//               href="/dashboard"
//               className={`flex items-center gap-2 transition-colors ${
//                 pathname === "/dashboard"
//                   ? "text-foreground hover:text-primary font-medium"
//                   : "text-muted-foreground hover:text-foreground"
//               }`}
//             >
//               <HomeIcon className="w-4 h-4" />
//               <span className="hidden md:inline">Dashboard</span>
//             </Link>

//             <Link
//               href="/appointments"
//               className={`flex items-center gap-2 transition-colors hover:text-foreground ${
//                 pathname === "/appointments" ? "text-foreground" : "text-muted-foreground"
//               }`}
//             >
//               <CalendarIcon className="w-4 h-4" />
//               <span className="hidden md:inline">Appointments</span>
//             </Link>

//             <Link
//               href="/voice"
//               className={`flex items-center gap-2 transition-colors hover:text-foreground ${
//                 pathname === "/voice" ? "text-foreground" : "text-muted-foreground"
//               }`}
//             >
//               <MicIcon className="w-4 h-4" />
//               <span className="hidden md:inline">Voice</span>
//             </Link>
//             <Link
//               href="/pro"
//               className={`flex items-center gap-2 transition-colors hover:text-foreground ${
//                 pathname === "/pro" ? "text-foreground" : "text-muted-foreground"
//               }`}
//             >
//               <CrownIcon className="w-4 h-4" />
//               <span className="hidden md:inline">Pro</span>
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-3">
//             <div className="hidden lg:flex flex-col items-end">
//               <span className="text-sm font-medium text-foreground">
//                 {user?.firstName} {user?.lastName}
//               </span>
//               <span className="text-xs text-muted-foreground">
//                 {user?.emailAddresses?.[0]?.emailAddress}
//               </span>
//             </div>

//             <UserButton />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;


// "use client";

// import { UserButton, useUser } from "@clerk/nextjs";
// import {
//   CalendarIcon,
//   CrownIcon,
//   HomeIcon,
//   MicIcon,
//   MenuIcon,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// function Navbar() {
//   const { user } = useUser();
//   const pathname = usePathname();

//   const navItem = (href: string, label: string, Icon: any) => (
//     <Link
//       href={href}
//       className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
//         pathname === href
//           ? "bg-muted text-foreground font-medium"
//           : "text-muted-foreground hover:text-foreground hover:bg-muted"
//       }`}
//     >
//       <Icon className="w-4 h-4" />
//       <span>{label}</span>
//     </Link>
//   );

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 h-14 md:h-16 px-4 md:px-6 border-b border-border/50 bg-background/80 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
//         {/* LEFT */}
//         <div className="flex items-center gap-3">
//           {/* MOBILE: HAMBURGER */}
//           <div className="md:hidden">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <button className="p-2 rounded-md hover:bg-muted">
//                   <MenuIcon className="w-5 h-5" />
//                 </button>
//               </SheetTrigger>

//               <SheetContent side="left" className="w-64">
//                 <div className="mt-6 space-y-2">
//                   {navItem("/dashboard", "Dashboard", HomeIcon)}
//                   {navItem("/appointments", "Appointments", CalendarIcon)}
//                   {navItem("/voice", "Voice Assistant", MicIcon)}
//                   {navItem("/pro", "Pro", CrownIcon)}
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>

//           {/* LOGO */}
//           <Link href="/dashboard" className="flex items-center gap-2">
//             <Image
//               src="/logo1.png"
//               alt="Toothly Logo"
//               width={32}
//               height={32}
//               className="w-8 h-8"
//             />
//             <span className="hidden sm:inline font-semibold">Toothly</span>
//           </Link>

//           {/* DESKTOP NAV */}
//           <div className="hidden md:flex items-center gap-6 ml-6">
//             {navItem("/dashboard", "Dashboard", HomeIcon)}
//             {navItem("/appointments", "Appointments", CalendarIcon)}
//             {navItem("/voice", "Voice", MicIcon)}
//             {navItem("/pro", "Pro", CrownIcon)}
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-3">
//           <div className="hidden lg:flex flex-col items-end">
//             <span className="text-sm font-medium">
//               {user?.firstName} {user?.lastName}
//             </span>
//             <span className="text-xs text-muted-foreground">
//               {user?.emailAddresses?.[0]?.emailAddress}
//             </span>
//           </div>
//           <UserButton />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




"use client";

import { UserButton } from "@clerk/nextjs";
import {
  CalendarIcon,
  CrownIcon,
  HomeIcon,
  MicIcon,
  MenuIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function Navbar() {
  const pathname = usePathname();

  const navItem = (href: string, label: string, Icon: any) => (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md ${
        pathname === href
          ? "bg-muted text-foreground font-medium"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </Link>
  );

  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-14 md:h-16 px-4 md:px-6 border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* MOBILE MENU */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md hover:bg-muted">
                  <MenuIcon className="w-5 h-5" />
                </button>
              </SheetTrigger>

              <SheetContent side="left" className="w-64">
                {/* ✅ REQUIRED FOR ACCESSIBILITY */}
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>

                <div className="mt-6 space-y-2">
                  {navItem("/dashboard", "Dashboard", HomeIcon)}
                  {navItem("/appointments", "Appointments", CalendarIcon)}
                  {navItem("/voice", "Voice", MicIcon)}
                  {navItem("/pro", "Pro", CrownIcon)}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* LOGO */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image src="/logo1.png" alt="Toothly" width={32} height={32} />
            <span className="hidden sm:inline font-semibold">Toothly</span>
          </Link>
        </div>

        {/* RIGHT */}
        <UserButton />
      </div>
    </nav>
  );
}

export default Navbar;
