"use client";

import Image from "next/image";
import Link from "next/link";
import AboutModalTrigger from "../components/AboutModal";
import Header from "./Header";

export default function Navbar() {
  return (
    <nav className="text-center text-xs sm:text-sm py-4 sm:py-6 border-b border-slate-800">
      <div className="max-w-3xl mx-auto px-2 sm:px-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        {/* Left-aligned Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <Image src="/logos/logo1.png" alt="Logo" width={120} height={120} />
        </Link>
        <Header />
        {/* Right-aligned Modal Trigger */}
        <AboutModalTrigger />
      </div>
    </nav>
  );
}
