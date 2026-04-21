"use client";

import Link from "next/link";
import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Why It Matters", href: "/#why" },
  { label: "Training Modules", href: "/#modules" },
  { label: "How It Works", href: "/#how" },
];

export default function PublicNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 shadow-sm group-hover:bg-teal-700 transition-colors">
              <Shield className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[15px] font-semibold text-slate-900 tracking-tight">
              EdLight<span className="text-teal-600"> Security</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden border-t border-slate-200 bg-white transition-all duration-200 overflow-hidden",
          open ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="block mt-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white text-center hover:bg-teal-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
