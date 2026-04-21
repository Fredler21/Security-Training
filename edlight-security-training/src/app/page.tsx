import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";
import { modules } from "@/data/modules";

const stats = [
  { value: "5", label: "Training Modules" },
  { value: "~1 hr", label: "Total Training Time" },
  { value: "100%", label: "TypeScript Built" },
  { value: "@edlight.org", label: "Internal Access Only" },
];

const features = [
  {
    icon: "lock",
    iconBg: "rgba(74,124,89,0.1)",
    iconColor: "#4a7c59",
    title: "Structured Training",
    description:
      "Five focused modules covering the most critical cybersecurity topics — designed for real employees, not security experts.",
  },
  {
    icon: "analytics",
    iconBg: "rgba(112,92,48,0.1)",
    iconColor: "#705c30",
    title: "Progress Tracking",
    description:
      "Every employee can see exactly where they stand. Know which modules are done, in progress, or waiting — at a glance.",
  },
  {
    icon: "quiz",
    iconBg: "rgba(74,124,89,0.1)",
    iconColor: "#4a7c59",
    title: "Quiz-Based Learning",
    description:
      "Each module ends with scenario-based questions that reinforce concepts and help knowledge stick long after training.",
  },
  {
    icon: "passkey",
    iconBg: "rgba(112,92,48,0.1)",
    iconColor: "#705c30",
    title: "Secure Google Login",
    description:
      "Sign in with your EdLight Google account. No new passwords. Access is restricted to @edlight.org only.",
  },
  {
    icon: "manage_accounts",
    iconBg: "rgba(74,124,89,0.1)",
    iconColor: "#4a7c59",
    title: "Admin Visibility",
    description:
      "Administrators get full visibility into who has completed training and who still needs to finish.",
  },
  {
    icon: "psychology",
    iconBg: "rgba(112,92,48,0.1)",
    iconColor: "#705c30",
    title: "Real-World Scenarios",
    description:
      "Every module includes examples drawn from actual security incidents — so employees understand why it matters.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf6f0", color: "#2e3230" }}>
      <PublicNavbar />

      <main className="pt-24 overflow-x-hidden">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="z-10">
              <span
                className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider rounded-full uppercase"
                style={{ color: "#705c30", backgroundColor: "#f8e0a8" }}
              >
                EdLight Internal Platform
              </span>
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tight mb-8"
                style={{ fontFamily: "var(--font-literata), Literata, serif", color: "#2e3230" }}
              >
                Build a Stronger{" "}
                <span style={{ color: "#4a7c59" }}>Security Culture.</span>
              </h1>
              <p className="text-xl mb-10 leading-relaxed max-w-xl" style={{ color: "#6b6358" }}>
                EdLight Security Training gives every employee the knowledge to recognize threats,
                protect company data, and stay ahead of cyberattacks — through short, focused, and
                engaging modules.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "#4a7c59", color: "#ffffff" }}
                >
                  <span className="material-symbols-outlined text-xl">login</span>
                  Sign In with Google
                </Link>
                <Link
                  href="#modules"
                  className="border-2 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 hover:opacity-80"
                  style={{ borderColor: "#4a7c59", color: "#4a7c59" }}
                >
                  <span className="material-symbols-outlined text-xl">arrow_downward</span>
                  View Modules
                </Link>
              </div>
              <p className="mt-6 text-sm flex items-center gap-1.5" style={{ color: "#74796e" }}>
                <span className="material-symbols-outlined text-base">lock</span>
                Access restricted to @edlight.org Google accounts
              </p>
            </div>

            {/* Right — progress card */}
            <div className="relative">
              <div
                className="absolute -top-12 -left-12 w-64 h-64 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(74,124,89,0.05)" }}
              />
              <div
                className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(112,92,48,0.08)" }}
              />
              <div
                className="relative rounded-2xl p-6 shadow-2xl"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(196,200,188,0.4)" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#74796e" }}>Your Progress</p>
                    <p className="text-lg font-bold mt-0.5" style={{ color: "#2e3230", fontFamily: "var(--font-literata), Literata, serif" }}>Security Training</p>
                  </div>
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#4a7c59" }}>
                    <span className="material-symbols-outlined text-white text-xl">shield</span>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex justify-between text-xs mb-1.5" style={{ color: "#74796e" }}>
                    <span>Overall completion</span>
                    <span className="font-semibold" style={{ color: "#2e3230" }}>40%</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ backgroundColor: "#f0ece4" }}>
                    <div className="h-2 w-[40%] rounded-full" style={{ backgroundColor: "#4a7c59" }} />
                  </div>
                </div>
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
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5"
                      style={{ backgroundColor: "#f5f1ea", border: "1px solid rgba(196,200,188,0.3)" }}
                    >
                      <span
                        className="material-symbols-outlined text-base flex-shrink-0"
                        style={{
                          color: m.done ? "#4a7c59" : m.active ? "#705c30" : "#c4c8bc",
                          fontVariationSettings: m.done ? "'FILL' 1" : "'FILL' 0",
                        }}
                      >
                        {m.done ? "check_circle" : m.active ? "pending" : "radio_button_unchecked"}
                      </span>
                      <span
                        className="text-sm flex-1"
                        style={{
                          color: m.done ? "#74796e" : m.active ? "#2e3230" : "#74796e",
                          fontWeight: m.active ? 600 : 400,
                          textDecoration: m.done ? "line-through" : "none",
                        }}
                      >
                        {m.title}
                      </span>
                      {m.active && (
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "#f8e0a8", color: "#705c30" }}
                        >
                          In Progress
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ────────────────────────────────────────── */}
        <section className="border-y" style={{ backgroundColor: "#f5f1ea", borderColor: "rgba(196,200,188,0.3)" }}>
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-literata), Literata, serif", color: "#4a7c59" }}>{value}</p>
                  <p className="mt-1 text-sm" style={{ color: "#6b6358" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why It Matters ───────────────────────────────── */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#4a7c59" }}>
              The Problem
            </p>
            <h2
              className="text-4xl font-bold mb-5"
              style={{ fontFamily: "var(--font-literata), Literata, serif", color: "#2e3230" }}
            >
              Most breaches start with a human mistake
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#6b6358" }}>
              Attackers don&rsquo;t always target systems — they target people. Phishing links, weak
              passwords, and unguarded devices are entry points exploited every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "91%", label: "of cyberattacks start with a phishing email", bg: "rgba(184,50,48,0.06)", statColor: "#b83230" },
              { stat: "80%", label: "of breaches involve weak or stolen credentials", bg: "rgba(112,92,48,0.08)", statColor: "#705c30" },
              { stat: "1 in 3", label: "employees can't identify a phishing attempt without training", bg: "rgba(74,124,89,0.08)", statColor: "#4a7c59" },
            ].map(({ stat, label, bg, statColor }) => (
              <div
                key={stat}
                className="rounded-2xl p-8"
                style={{ backgroundColor: bg, border: `1px solid ${statColor}22` }}
              >
                <p className="text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-literata), Literata, serif", color: statColor }}>{stat}</p>
                <p className="text-[15px] leading-relaxed" style={{ color: "#2e3230" }}>{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────── */}
        <section className="py-24 px-6" style={{ backgroundColor: "#f5f1ea" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#4a7c59" }}>Platform Features</p>
              <h2
                className="text-4xl font-bold mb-5"
                style={{ fontFamily: "var(--font-literata), Literata, serif", color: "#2e3230" }}
              >
                Everything you need to train effectively
              </h2>
              <p className="max-w-2xl mx-auto text-lg" style={{ color: "#6b6358" }}>
                Built for EdLight employees — simple enough for anyone to use, powerful enough to build a real security culture.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-8 rounded-2xl flex flex-col items-start transition-all hover:shadow-md"
                  style={{ backgroundColor: "#ffffff", border: "1px solid rgba(196,200,188,0.3)" }}
                >
                  <div className="p-3 rounded-xl mb-5" style={{ backgroundColor: f.iconBg, color: f.iconColor }}>
                    <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-literata), Literata, serif", color: "#2e3230" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b6358" }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Modules Preview ──────────────────────────────── */}
        <section id="modules" className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#4a7c59" }}>Training Curriculum</p>
              <h2
                className="text-4xl font-bold mb-5"
                style={{ fontFamily: "var(--font-literata), Literata, serif", color: "#2e3230" }}
              >
                5 modules covering the most critical topics
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "#6b6358" }}>
                Each module is short, focused, and ends with a quiz to make sure concepts stick.
              </p>
            </div>
            <Link
              href="/login"
              className="inline-flex items-center gap-1 font-bold whitespace-nowrap hover:opacity-70 transition-opacity"
              style={{ color: "#4a7c59" }}
            >
              Access Training
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod) => (
              <div
                key={mod.id}
                className="rounded-2xl p-6 transition-all hover:shadow-md group"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(196,200,188,0.3)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="h-11 w-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: "#f0ece4", border: "1px solid rgba(196,200,188,0.4)" }}
                  >
                    {mod.icon}
                  </div>
                  <span
                    className="text-xs font-semibold rounded-full px-2.5 py-1"
                    style={{ backgroundColor: "#f5f1ea", color: "#6b6358" }}
                  >
                    {mod.estimatedMinutes} min
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "#74796e" }}>
                  Module {mod.order}
                </p>
                <h3
                  className="text-[15px] font-bold mb-2 group-hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-literata), Literata, serif", color: "#2e3230" }}
                >
                  {mod.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "#6b6358" }}>
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-24 px-6 text-center">
          <div
            className="max-w-3xl mx-auto rounded-3xl p-12 md:p-20 shadow-xl"
            style={{ backgroundColor: "#4a7c59" }}
          >
            <span className="material-symbols-outlined text-white mb-6 block" style={{ fontSize: "48px" }}>
              verified_user
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-literata), Literata, serif" }}
            >
              Ready to strengthen your security knowledge?
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
              Sign in with your EdLight Google account to access all training modules and start
              building better security habits today.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-lg shadow-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: "#ffffff", color: "#4a7c59" }}
            >
              <span className="material-symbols-outlined text-xl">login</span>
              Sign In with Google
            </Link>
            <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Access restricted to @edlight.org accounts only
            </p>
          </div>
        </section>

      </main>

      <PublicFooter />
    </div>
  );
}
