"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Modules", href: "/modules", icon: BookOpen },
  { label: "My Progress", href: "/progress", icon: BarChart2 },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-64 min-h-screen bg-slate-900 border-r border-slate-800">
      {/* Logo */}
      <div className="flex items-center gap-2.5 h-16 px-6 border-b border-slate-800">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600">
          <Shield className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
        </div>
        <span className="text-[15px] font-semibold text-white tracking-tight">
          EdLight<span className="text-teal-400"> Security</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 space-y-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                active
                  ? "bg-teal-600/15 text-teal-400"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              )}
            >
              <Icon
                className={cn(
                  "h-4.5 w-4.5 flex-shrink-0",
                  active ? "text-teal-400" : "text-slate-500 group-hover:text-slate-300"
                )}
              />
              <span>{label}</span>
              {active && (
                <ChevronRight className="ml-auto h-3.5 w-3.5 text-teal-500" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User area */}
      <div className="px-3 py-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg">
          <div className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            JD
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-white truncate">John Doe</p>
            <p className="text-xs text-slate-400 truncate">john@edlight.org</p>
          </div>
        </div>
        <Link
          href="/login"
          className="mt-2 flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
        >
          <LogOut className="h-4 w-4 text-slate-500" />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
