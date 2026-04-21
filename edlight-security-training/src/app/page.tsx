import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  Wifi,
  Building2,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";
import { modules } from "@/data/modules";

const features = [
  {
    icon: Shield,
    title: "Structured Security Training",
    description:
      "Five focused modules that cover the most critical cybersecurity topics — designed for real employees, not security experts.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Every employee can see exactly where they stand. Know which modules are done, in progress, or waiting — at a glance.",
  },
  {
    icon: Award,
    title: "Quiz-Based Learning",
    description:
      "Each module ends with scenario-based questions that reinforce concepts and help knowledge stick long after training.",
  },
  {
    icon: Lock,
    title: "Secure Google Login",
    description:
      "Sign in with your EdLight Google account. No new passwords to remember. Access is restricted to @edlight.org only.",
  },
  {
    icon: Users,
    title: "Admin Visibility",
    description:
      "Administrators get full visibility into employee participation — who has completed training and who still needs to.",
  },
  {
    icon: Eye,
    title: "Real-World Scenarios",
    description:
      "Every module includes real-life examples drawn from actual security incidents — so employees understand why it matters.",
  },
];

const stats = [
  { value: "5", label: "Training Modules" },
  { value: "~1hr", label: "Total Training Time" },
  { value: "100%", label: "TypeScript Built" },
  { value: "Internal", label: "EdLight Only" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar />

      {/* Hero */}
      <section className="relative pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-slate-100/60 blur-2xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-100 px-4 py-1.5 mb-8">
              <div className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                EdLight Internal Platform
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Build a Stronger{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
                Security
              </span>{" "}
              Culture
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              EdLight Security Training Platform gives every employee the knowledge to recognize
              threats, protect company data, and stay one step ahead of cybercriminals — through
              short, focused, and engaging training modules.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-[15px] font-semibold text-white shadow-md hover:bg-teal-700 transition-colors group"
              >
                Start Training
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/#modules"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                View Modules
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle2 className="h-4 w-4 text-teal-500 flex-shrink-0" />
              <span>Restricted to @edlight.org — secure Google login required</span>
            </div>
          </div>

          {/* Hero card visual */}
          <div className="mt-16 lg:mt-0 lg:absolute lg:right-8 lg:top-20 w-full lg:w-[400px] bg-white rounded-2xl border border-slate-200 shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Your Progress</p>
                <p className="text-lg font-bold text-slate-900 mt-0.5">Security Training</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-teal-600 flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                <span>Overall completion</span>
                <span className="font-semibold text-slate-700">40%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[40%] rounded-full bg-gradient-to-r from-teal-500 to-teal-600" />
              </div>
            </div>
            <div className="space-y-2">
              {[
                { title: "Password Security", done: true },
                { title: "Phishing Awareness", done: true },
                { title: "Safe Browsing", done: false, active: true },
                { title: "Company Access Policy", done: false },
                { title: "Device & Network Security", done: false },
              ].map((m) => (
                <div
                  key={m.title}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 bg-slate-50 border border-slate-100"
                >
                  <div
                    className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      m.done ? "bg-teal-500" : m.active ? "bg-amber-400" : "bg-slate-200"
                    }`}
                  >
                    {m.done && <CheckCircle2 className="h-3 w-3 text-white" />}
                    {m.active && <div className="h-2 w-2 rounded-full bg-white" />}
                  </div>
                  <span
                    className={`text-sm ${
                      m.done
                        ? "text-slate-400 line-through"
                        : m.active
                        ? "text-slate-900 font-medium"
                        : "text-slate-500"
                    }`}
                  >
                    {m.title}
                  </span>
                  {m.active && (
                    <span className="ml-auto text-xs text-amber-600 font-medium bg-amber-50 rounded-full px-2 py-0.5">
                      In Progress
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-slate-900">{value}</p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section id="why" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
              The Problem
            </p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-5">
              Most security breaches start with a human mistake
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Attackers don't always target systems — they target people. Phishing links, weak
              passwords, and unguarded devices are all entry points that skilled social engineers
              exploit every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "91%", label: "of cyberattacks start with a phishing email", color: "text-red-600", bg: "bg-red-50 border-red-100" },
              { stat: "80%", label: "of breaches involve weak or stolen credentials", color: "text-amber-600", bg: "bg-amber-50 border-amber-100" },
              { stat: "1 in 3", label: "employees can't identify a phishing attempt without training", color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
            ].map(({ stat, label, color, bg }) => (
              <div key={stat} className={`rounded-2xl border p-8 ${bg}`}>
                <p className={`text-4xl font-bold ${color} mb-3`}>{stat}</p>
                <p className="text-slate-700 text-[15px] leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="how" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
              Platform Features
            </p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-5">
              Everything you need to train effectively
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Built specifically for EdLight employees — simple enough for anyone to use, powerful
              enough to build a real security culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-teal-100 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Preview */}
      <section id="modules" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-3">
                Training Curriculum
              </p>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-5">
                5 modules covering the most critical topics
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Each module is short, focused, and ends with a quiz to make sure the concepts
                stick.
              </p>
            </div>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 whitespace-nowrap hover:text-teal-700 transition-colors"
            >
              Access Training <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod) => (
              <div
                key={mod.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-teal-200 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-11 w-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl">
                    {mod.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-50 rounded-full px-2.5 py-1">
                    {mod.estimatedMinutes} min
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5">
                  Module {mod.order}
                </p>
                <h3 className="text-[15px] font-semibold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                  {mod.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                  {mod.description}
                </p>
                <ul className="space-y-1.5">
                  {mod.keyTakeaways.slice(0, 2).map((t) => (
                    <li key={t} className="flex items-start gap-2 text-xs text-slate-500">
                      <CheckCircle2 className="h-3.5 w-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 shadow-xl mb-8">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-5">
              Ready to strengthen your security knowledge?
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              Sign in with your EdLight Google account to access all training modules and start
              building better security habits today.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-8 py-4 text-[15px] font-semibold text-white shadow-lg hover:bg-teal-500 transition-colors group"
            >
              Sign In with Google
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <p className="mt-6 text-sm text-slate-500">
              Access restricted to @edlight.org accounts only
            </p>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
