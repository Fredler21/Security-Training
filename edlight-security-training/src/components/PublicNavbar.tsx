"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Why It Matters", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Platform Features", href: "#" },
];

export default function PublicNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 w-full z-50 backdrop-blur-md"
      style={{
        backgroundColor: "rgba(20,26,22,0.85)",
        borderBottom: "1px solid rgba(74,124,89,0.15)",
      }}
    >
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold"
          style={{ fontFamily: "var(--font-literata), Literata, serif", color: "#f0ece4" }}
        >
          <div
            className="h-8 w-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#4a7c59" }}
          >
            <span className="material-symbols-outlined text-white text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
              shield
            </span>
          </div>
          EdLight
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "rgba(240,236,228,0.55)" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#f0ece4")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(240,236,228,0.55)")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center space-x-3">
          <Link
            href="/login"
            className="hidden md:block text-sm font-medium px-4 py-2 rounded-lg transition-all"
            style={{ color: "rgba(240,236,228,0.55)" }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#f0ece4";
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "rgba(240,236,228,0.55)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Sign In
          </Link>
          <Link
            href="/login"
            className="text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all hover:opacity-90"
            style={{
              backgroundColor: "#4a7c59",
              boxShadow: "0 0 16px rgba(74,124,89,0.3)",
            }}
          >
            Get Started
          </Link>
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "rgba(240,236,228,0.6)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-5"
          style={{
            backgroundColor: "#141a16",
            borderTop: "1px solid rgba(74,124,89,0.15)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3 text-sm font-medium transition-colors"
              style={{ color: "rgba(240,236,228,0.55)", borderBottom: "1px solid rgba(74,124,89,0.08)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="block mt-4 text-sm font-bold"
            style={{ color: "#6eba8a" }}
            onClick={() => setOpen(false)}
          >
            Sign In →
          </Link>
        </div>
      )}
    </header>
  );
}
