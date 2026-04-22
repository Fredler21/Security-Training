"use client";

import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";
import { useTheme } from "@/context/ThemeContext";

const features = [
  {
    icon: "lock",
    number: "01",
    title: "Structured Training",
    description:
      "Five focused modules covering the most critical cybersecurity topics — designed for real employees, not security experts.",
  },
  {
    icon: "analytics",
    number: "02",
    title: "Progress Tracking",
    description:
      "Every employee can see exactly where they stand. Know which modules are done, in progress, or waiting — at a glance.",
  },
  {
    icon: "quiz",
    number: "03",
    title: "Quiz-Based Learning",
    description:
      "Each module ends with scenario-based questions that reinforce concepts and help knowledge stick long after training.",
  },
  {
    icon: "passkey",
    number: "04",
    title: "Secure Google Login",
    description:
      "Sign in with your EdLight Google account. No new passwords. Access is restricted to @edlight.org only.",
  },
  {
    icon: "manage_accounts",
    number: "05",
    title: "Admin Visibility",
    description:
      "Administrators get full visibility into who has completed training and who still needs to finish.",
  },
  {
    icon: "psychology",
    number: "06",
    title: "Real-World Scenarios",
    description:
      "Every module includes examples drawn from actual security incidents — so employees understand why it matters.",
  },
];

const steps = [
  {
    step: "01",
    icon: "login",
    title: "Sign in securely",
    description: "Use your @edlight.org Google account — no new passwords, no friction.",
  },
  {
    step: "02",
    icon: "menu_book",
    title: "Work through modules",
    description: "Short, focused lessons you can complete in a single sitting.",
  },
  {
    step: "03",
    icon: "quiz",
    title: "Pass the quiz",
    description: "Scenario-based questions confirm you understood what matters.",
  },
  {
    step: "04",
    icon: "verified",
    title: "Track your progress",
    description: "See every completed module and your overall training score at a glance.",
  },
];

export default function HomePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen" style={{ backgroundColor: isDark ? "#141a16" : "#faf6f0", color: isDark ? "#f0ece4" : "#2e3230" }}>
      <PublicNavbar />

      <main className="overflow-x-hidden">

        {/* ══════════════════════════════════════════════════
            HERO — dark immersive header
        ══════════════════════════════════════════════════ */}
        <section
          className="relative pt-32 pb-0 overflow-hidden"
          style={{ backgroundColor: "#141a16" }}
        >
          {/* Background grid overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(74,124,89,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,89,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glow orbs */}
          <div
            className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(74,124,89,0.18)" }}
          />
          <div
            className="pointer-events-none absolute top-10 right-0 w-[400px] h-[400px] rounded-full blur-[100px]"
            style={{ backgroundColor: "rgba(112,92,48,0.12)" }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            {/* Badge */}
            <div className="flex justify-center mb-10">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  backgroundColor: "rgba(74,124,89,0.15)",
                  color: "#6eba8a",
                  border: "1px solid rgba(74,124,89,0.3)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full inline-block"
                  style={{ backgroundColor: "#6eba8a" }}
                />
                EdLight Security Training
                <span
                  className="ml-2 px-2 py-0.5 rounded-md text-[10px] font-extrabold tracking-widest"
                  style={{
                    backgroundColor: "rgba(74,124,89,0.3)",
                    color: "#6eba8a",
                    border: "1px solid rgba(74,124,89,0.5)",
                  }}
                >
                  v2
                </span>
              </span>
            </div>

            {/* Headline */}
            <div className="text-center max-w-4xl mx-auto mb-8">
              <h1
                className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight"
                style={{
                  fontFamily: "var(--font-literata), Literata, serif",
                  color: "#f0ece4",
                }}
              >
                Build a Stronger{" "}
                <span
                  style={{
                    color: "#6eba8a",
                    display: "block",
                  }}
                >
                  Security Culture.
                </span>
              </h1>
              <p
                className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                style={{ color: "rgba(240,236,228,0.6)" }}
              >
                Short, focused cybersecurity training every EdLight employee can complete in
                under an hour — built to protect the people, data, and systems you rely on.
              </p>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-0.5 hover:opacity-90"
                style={{
                  backgroundColor: "#4a7c59",
                  color: "#ffffff",
                  boxShadow: "0 0 32px rgba(74,124,89,0.4), 0 4px 16px rgba(0,0,0,0.3)",
                }}
              >
                <span className="material-symbols-outlined text-xl">login</span>
                Start Training Now
              </Link>
              <p
                className="text-sm flex items-center gap-1.5"
                style={{ color: "rgba(240,236,228,0.4)" }}
              >
                <span className="material-symbols-outlined text-base">lock</span>
                Restricted to @edlight.org accounts
              </p>
            </div>

            {/* Hero dashboard card */}
            <div className="relative max-w-2xl mx-auto">
              {/* Card glow */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 blur-2xl rounded-full mx-auto w-3/4"
                style={{ backgroundColor: "rgba(74,124,89,0.25)" }}
              />
              <div
                className="relative rounded-t-3xl overflow-hidden"
                style={{
                  backgroundColor: "#1e2820",
                  border: "1px solid rgba(74,124,89,0.2)",
                  borderBottom: "none",
                  boxShadow: "0 -8px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                {/* Window chrome */}
                <div
                  className="flex items-center gap-2 px-5 py-3.5"
                  style={{ borderBottom: "1px solid rgba(74,124,89,0.15)" }}
                >
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#b83230" }} />
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#705c30" }} />
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#4a7c59" }} />
                  <span
                    className="ml-4 text-xs font-mono"
                    style={{ color: "rgba(240,236,228,0.3)" }}
                  >
                    EdLight Security Training — Dashboard
                  </span>
                </div>

                {/* Dashboard content */}
                <div className="p-6">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                        style={{ color: "rgba(240,236,228,0.4)" }}
                      >
                        Your Progress
                      </p>
                      <p
                        className="text-base font-bold"
                        style={{
                          color: "#f0ece4",
                          fontFamily: "var(--font-literata), Literata, serif",
                        }}
                      >
                        Security Training
                      </p>
                    </div>
                    <div
                      className="h-9 w-9 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(74,124,89,0.2)",
                        border: "1px solid rgba(74,124,89,0.3)",
                      }}
                    >
                      <span
                        className="material-symbols-outlined text-xl"
                        style={{ color: "#6eba8a" }}
                      >
                        shield
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-5">
                    <div
                      className="flex justify-between text-xs mb-2"
                      style={{ color: "rgba(240,236,228,0.4)" }}
                    >
                      <span>Overall completion</span>
                      <span className="font-semibold" style={{ color: "#6eba8a" }}>
                        40%
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="h-1.5 w-[40%] rounded-full"
                        style={{
                          background: "linear-gradient(90deg, #4a7c59, #6eba8a)",
                          boxShadow: "0 0 12px rgba(110,186,138,0.5)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Module list */}
                  <div className="space-y-2">
                    {[
                      { title: "Password Security", done: true },
                      { title: "Phishing Awareness", done: true },
                      { title: "Safe Browsing", active: true },
                      { title: "Company Access Policy" },
                      { title: "Device & Network Security" },
                    ].map((m) => (
                      <div
                        key={m.title}
                        className="flex items-center gap-3 rounded-xl px-3.5 py-2.5"
                        style={{
                          backgroundColor: m.active
                            ? "rgba(74,124,89,0.12)"
                            : "rgba(255,255,255,0.04)",
                          border: m.active
                            ? "1px solid rgba(74,124,89,0.3)"
                            : "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <span
                          className="material-symbols-outlined text-base flex-shrink-0"
                          style={{
                            color: m.done ? "#6eba8a" : m.active ? "#c4a852" : "rgba(240,236,228,0.2)",
                            fontVariationSettings: m.done ? "'FILL' 1" : "'FILL' 0",
                          }}
                        >
                          {m.done
                            ? "check_circle"
                            : m.active
                            ? "pending"
                            : "radio_button_unchecked"}
                        </span>
                        <span
                          className="text-sm flex-1"
                          style={{
                            color: m.done
                              ? "rgba(240,236,228,0.35)"
                              : m.active
                              ? "#f0ece4"
                              : "rgba(240,236,228,0.45)",
                            fontWeight: m.active ? 600 : 400,
                            textDecoration: m.done ? "line-through" : "none",
                          }}
                        >
                          {m.title}
                        </span>
                        {m.active && (
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: "rgba(196,168,82,0.15)",
                              color: "#c4a852",
                              border: "1px solid rgba(196,168,82,0.25)",
                            }}
                          >
                            In Progress
                          </span>
                        )}
                        {m.done && (
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: "rgba(74,124,89,0.15)",
                              color: "#6eba8a",
                            }}
                          >
                            Done
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            TRUST STRIP
        ══════════════════════════════════════════════════ */}
        <section style={{ backgroundColor: "#111510", borderTop: "1px solid rgba(74,124,89,0.15)" }}>
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {[
                { icon: "verified_user", label: "SOC 2 Aligned" },
                { icon: "groups", label: "Built for Teams" },
                { icon: "cloud_done", label: "Google Workspace" },
                { icon: "schedule", label: "Under 1 Hour" },
                { icon: "devices", label: "Any Device" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2"
                  style={{ color: "rgba(240,236,228,0.35)" }}
                >
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            THREAT STATS — dark band
        ══════════════════════════════════════════════════ */}
        <section id="why-it-matters" className="relative py-24 overflow-hidden" style={{ backgroundColor: "#1a1f1c" }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(74,124,89,0.1) 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#6eba8a" }}
              >
                The Problem
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold mb-5"
                style={{
                  fontFamily: "var(--font-literata), Literata, serif",
                  color: "#f0ece4",
                }}
              >
                Most breaches start with a human mistake
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto leading-relaxed"
                style={{ color: "rgba(240,236,228,0.5)" }}
              >
                Attackers don&rsquo;t always target systems — they target people. Phishing,
                weak passwords, and unguarded devices are the most common entry points.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(74,124,89,0.15)" }}>
              {[
                {
                  stat: "91%",
                  label: "of cyberattacks begin with a phishing email",
                  icon: "phishing",
                  accent: "#b83230",
                },
                {
                  stat: "80%",
                  label: "of breaches involve weak or stolen credentials",
                  icon: "key_off",
                  accent: "#c4a852",
                },
                {
                  stat: "1 in 3",
                  label: "employees cannot spot a phishing attempt without training",
                  icon: "person_alert",
                  accent: "#6eba8a",
                },
              ].map(({ stat, label, icon, accent }) => (
                <div
                  key={stat}
                  className="p-10 flex flex-col gap-4"
                  style={{ backgroundColor: "#1a1f1c" }}
                >
                  <div
                    className="h-12 w-12 rounded-2xl flex items-center justify-center mb-2"
                    style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}30` }}
                  >
                    <span
                      className="material-symbols-outlined text-2xl"
                      style={{ color: accent }}
                    >
                      {icon}
                    </span>
                  </div>
                  <p
                    className="text-5xl font-extrabold leading-none"
                    style={{
                      fontFamily: "var(--font-literata), Literata, serif",
                      color: accent,
                    }}
                  >
                    {stat}
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(240,236,228,0.55)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            HOW IT WORKS — light section with steps
        ══════════════════════════════════════════════════ */}
        <section id="how-it-works" className="py-28 px-6" style={{ backgroundColor: isDark ? "#1a1f1c" : "#faf6f0" }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left text */}
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#4a7c59" }}
                >
                  How It Works
                </p>
                <h2
                  className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                  style={{
                    fontFamily: "var(--font-literata), Literata, serif",
                    color: isDark ? "#f0ece4" : "#2e3230",
                  }}
                >
                  From sign-in to
                  <br />
                  certified in one hour.
                </h2>
                <p className="text-lg leading-relaxed mb-10" style={{ color: isDark ? "rgba(240,236,228,0.6)" : "#6b6358" }}>
                  No installations. No lengthy onboarding. Just open your browser, sign in with
                  Google, and work through five focused modules at your own pace.
                </p>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: "#4a7c59", color: "#ffffff" }}
                >
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  Begin Training
                </Link>
              </div>

              {/* Right steps */}
              <div className="flex flex-col gap-0">
                {steps.map((s, i) => (
                  <div key={s.step} className="flex gap-5 group">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div
                        className="h-11 w-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105"
                        style={{
                          backgroundColor: "#4a7c59",
                          boxShadow: "0 4px 16px rgba(74,124,89,0.3)",
                        }}
                      >
                        <span className="material-symbols-outlined text-white text-xl">
                          {s.icon}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className="w-px flex-1 my-2"
                          style={{ backgroundColor: "rgba(74,124,89,0.2)", minHeight: "32px" }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-8">
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-1"
                        style={{ color: isDark ? "rgba(240,236,228,0.4)" : "#74796e" }}
                      >
                        Step {s.step}
                      </p>
                      <h3
                        className="text-base font-bold mb-1"
                        style={{ color: isDark ? "#f0ece4" : "#2e3230" }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: isDark ? "rgba(240,236,228,0.55)" : "#6b6358" }}>
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            STATS STRIP — cream band
        ══════════════════════════════════════════════════ */}
        <section
          style={{
            backgroundColor: isDark ? "#111510" : "#f0ece4",
            borderTop: isDark ? "1px solid rgba(74,124,89,0.15)" : "1px solid rgba(196,200,188,0.5)",
            borderBottom: isDark ? "1px solid rgba(74,124,89,0.15)" : "1px solid rgba(196,200,188,0.5)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "5", label: "Training Modules", icon: "menu_book" },
                { value: "~1 hr", label: "Total Training Time", icon: "schedule" },
                { value: "5 Topics", label: "Critical Areas Covered", icon: "verified_user" },
                { value: "@edlight.org", label: "Internal Access Only", icon: "lock" },
              ].map(({ value, label, icon }) => (
                <div key={label} className="text-center flex flex-col items-center gap-2">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center mb-1"
                    style={{ backgroundColor: "rgba(74,124,89,0.1)" }}
                  >
                    <span
                      className="material-symbols-outlined text-xl"
                      style={{ color: "#4a7c59" }}
                    >
                      {icon}
                    </span>
                  </div>
                  <p
                    className="text-2xl font-extrabold"
                    style={{
                      fontFamily: "var(--font-literata), Literata, serif",
                      color: isDark ? "#f0ece4" : "#2e3230",
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: isDark ? "rgba(240,236,228,0.4)" : "#74796e" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FEATURES — numbered cards
        ══════════════════════════════════════════════════ */}
        <section id="platform-features" className="py-28 px-6" style={{ backgroundColor: isDark ? "#141a16" : "#faf6f0" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#4a7c59" }}
              >
                Platform Features
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold mb-5"
                style={{
                  fontFamily: "var(--font-literata), Literata, serif",
                  color: isDark ? "#f0ece4" : "#2e3230",
                }}
              >
                Everything you need to train effectively
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: isDark ? "rgba(240,236,228,0.55)" : "#6b6358" }}>
                Built for EdLight employees — simple enough for anyone to use, powerful enough
                to build a lasting security culture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group relative p-8 rounded-2xl flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    backgroundColor: isDark ? "#1e2820" : "#ffffff",
                    border: isDark ? "1px solid rgba(74,124,89,0.2)" : "1px solid rgba(196,200,188,0.4)",
                  }}
                >
                  {/* Subtle hover border accent */}
                  <div
                    className="absolute inset-x-0 top-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: "linear-gradient(90deg, transparent, #4a7c59, transparent)",
                    }}
                  />

                  {/* Number + icon row */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <div
                      className="h-12 w-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: "rgba(74,124,89,0.08)",
                        border: "1px solid rgba(74,124,89,0.15)",
                      }}
                    >
                      <span
                        className="material-symbols-outlined text-2xl"
                        style={{ color: "#4a7c59" }}
                      >
                        {f.icon}
                      </span>
                    </div>
                    <span
                      className="text-4xl font-extrabold leading-none tabular-nums"
                      style={{
                        fontFamily: "var(--font-literata), Literata, serif",
                        color: isDark ? "rgba(74,124,89,0.3)" : "rgba(196,200,188,0.6)",
                      }}
                    >
                      {f.number}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-literata), Literata, serif",
                      color: isDark ? "#f0ece4" : "#2e3230",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: isDark ? "rgba(240,236,228,0.55)" : "#6b6358" }}>
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CTA — dark premium block
        ══════════════════════════════════════════════════ */}
        <section className="py-20 px-6" style={{ backgroundColor: isDark ? "#0a0e0b" : "#f5f1ea" }}>
          <div
            className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1e2820 0%, #141a16 60%, #0e1510 100%)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.2), 0 0 0 1px rgba(74,124,89,0.2)",
            }}
          >
            {/* Background decorations */}
            <div
              className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px]"
              style={{ backgroundColor: "rgba(74,124,89,0.2)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-[80px]"
              style={{ backgroundColor: "rgba(112,92,48,0.15)" }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(74,124,89,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,89,0.04) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative px-8 py-16 md:px-20 md:py-20 text-center">
              {/* Shield icon */}
              <div
                className="inline-flex items-center justify-center h-16 w-16 rounded-2xl mb-8"
                style={{
                  backgroundColor: "rgba(74,124,89,0.2)",
                  border: "1px solid rgba(74,124,89,0.35)",
                  boxShadow: "0 0 40px rgba(74,124,89,0.2)",
                }}
              >
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ color: "#6eba8a", fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "var(--font-literata), Literata, serif" }}
              >
                Ready to strengthen your
                <br />
                security knowledge?
              </h2>
              <p
                className="text-lg mb-10 max-w-xl mx-auto leading-relaxed"
                style={{ color: "rgba(240,236,228,0.55)" }}
              >
                Sign in with your EdLight Google account to access all five modules and start
                building better security habits today.
              </p>

              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#4a7c59",
                  color: "#ffffff",
                  boxShadow: "0 0 32px rgba(74,124,89,0.4), 0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <span className="material-symbols-outlined text-xl">login</span>
                Sign In with Google
              </Link>

              <p
                className="mt-6 text-sm flex items-center justify-center gap-1.5"
                style={{ color: "rgba(240,236,228,0.3)" }}
              >
                <span className="material-symbols-outlined text-sm">lock</span>
                Access restricted to @edlight.org accounts only
              </p>
            </div>
          </div>
        </section>

      </main>

      <PublicFooter />
    </div>
  );
}
