"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "/" },
  { label: "Solutions", href: "/" },
  { label: "Resources", href: "/" },
  { label: "Pricing", href: "/" },
];

export default function PublicNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#faf6f0]/90 backdrop-blur-md border-b border-stone-200/50 shadow-sm fixed top-0 w-full z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#4a7c59]" style={{ fontFamily: 'var(--font-literata), Literata, serif' }}>
          EdLight
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-stone-600 hover:text-[#4a7c59] transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="hidden md:block text-stone-600 font-medium px-4 py-2 hover:bg-stone-100 rounded-lg transition-all text-sm"
          >
            Sign In
          </Link>
          <Link
            href="/login"
            className="bg-[#4a7c59] text-white px-6 py-2.5 rounded-lg font-bold shadow-sm hover:opacity-90 transition-all text-sm"
          >
            Get a Demo
          </Link>
          <button
            className="md:hidden p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 bg-[#faf6f0] border-t border-stone-200/50">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-2.5 text-stone-600 hover:text-[#4a7c59] transition-colors text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="block mt-2 py-2.5 text-[#4a7c59] text-sm font-bold"
            onClick={() => setOpen(false)}
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}
