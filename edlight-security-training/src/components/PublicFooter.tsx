import Link from "next/link";
import { Shield } from "lucide-react";

export default function PublicFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600">
                <Shield className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[15px] font-semibold text-white tracking-tight">
                EdLight<span className="text-teal-400"> Security</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              Internal cybersecurity training platform for EdLight employees. Building a stronger security culture, one module at a time.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Training Modules", href: "/#modules" },
                { label: "Why It Matters", href: "/#why" },
                { label: "Employee Sign In", href: "/login" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Report a Threat", href: "mailto:security@edlight.org" },
                { label: "IT Helpdesk", href: "mailto:it@edlight.org" },
                { label: "Access Issues", href: "mailto:it@edlight.org" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} EdLight. Internal use only. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            EdLight Security Training Platform &middot; v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
