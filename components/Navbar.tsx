"use client";

import Image from "next/image";
import Link from "next/link";
import AboutModalTrigger from "../components/AboutModal";
import TypingHeader from "../components/TypingHeader";

export default function Navbar() {
  return (
    <nav className="text-center text-sm  py-6 border-b border-slate-800">
      <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
        {/* Left-aligned Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <Image src="/logos/logo1.png" alt="Logo" width={200} height={200} />
        </Link>
        <TypingHeader />
        {/* Centered Links (on right) */}
        <AboutModalTrigger />
      </div>
    </nav>
  );
}
