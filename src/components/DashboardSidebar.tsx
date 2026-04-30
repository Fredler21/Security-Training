"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronRight,
  LogOut,
  ShieldCheck,
  Bell,
  FileText,
  PieChart,
  ClipboardList,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "@/lib/auth";
import { db } from "@/lib/firebase";
import { getTrainingAssignments, getModuleCompletions } from "@/lib/firestore";

const employeeNavItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Modules", href: "/modules", icon: BookOpen },
  { label: "My Progress", href: "/progress", icon: BarChart2 },
  { label: "Settings", href: "/settings", icon: Settings },
];

const adminNavItems = [
  { label: "Admin Dashboard", href: "/admin/dashboard", icon: ShieldCheck },
  { label: "Employees", href: "/admin/employees", icon: LayoutDashboard },
  { label: "Analytics", href: "/admin/analytics", icon: PieChart },
  { label: "Reports", href: "/admin/reports", icon: FileText },
  { label: "Reminders", href: "/admin/reminders", icon: Bell },
  { label: "Assignments", href: "/admin/assignments", icon: ClipboardList },
];

// Dashboard palette — refined blue (matches landing)
const blue = "#0ea5e9";
const blueDeep = "#0369a1";
const blueLight = "#38bdf8";
const indigo = "#6366f1";

type IconType = React.ComponentType<{ size?: number | string; style?: React.CSSProperties }>;

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, role } = useAuth();
  const [profile, setProfile] = useState<{ jobTitle: string; department: string } | null>(null);
  const [todoCount, setTodoCount] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while drawer is open on mobile
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    (async () => {
      const snap = await getDoc(doc(db, "users", user.uid));
      if (cancelled) return;
      const dept = snap.exists() ? (snap.data().department ?? "") : "";
      if (snap.exists()) {
        const d = snap.data();
        setProfile({ jobTitle: d.jobTitle ?? "", department: d.department ?? "" });
      }
      try {
        const [assignments, completions] = await Promise.all([
          getTrainingAssignments(),
          getModuleCompletions(user.uid),
        ]);
        if (cancelled) return;
        const deptKey = dept.trim().toLowerCase();
        const required = new Set<string>();
        for (const a of assignments) {
          const aDept = (a.department ?? "").trim().toLowerCase();
          if (aDept === deptKey || aDept === "all" || aDept === "*" || aDept === "everyone") {
            a.requiredModuleIds.forEach((id) => required.add(id));
          }
        }
        let count = 0;
        required.forEach((id) => {
          if (!completions[id]?.completed) count += 1;
        });
        setTodoCount(count);
      } catch (err) {
        console.error("Failed to load to-do count", err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user]);

  const initials = user?.displayName
    ? user.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  async function handleSignOut() {
    await signOut();
    router.replace("/");
  }

  const bg = "#0a0f1c";
  const border = "rgba(255,255,255,0.06)";
  const text = "#f1f5f9";
  const textMuted = "rgba(255,255,255,0.45)";

  const renderNavItem = (
    label: string,
    href: string,
    Icon: IconType,
    active: boolean,
    badge?: number
  ) => (
    <Link
      key={href}
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 12px",
        borderRadius: "10px",
        fontSize: "13.5px",
        fontWeight: 600,
        letterSpacing: "-0.005em",
        color: active ? blueLight : textMuted,
        background: active ? `linear-gradient(90deg, ${blue}22, transparent)` : "transparent",
        borderLeft: active ? `2px solid ${blue}` : "2px solid transparent",
        textDecoration: "none",
        transition: "all 0.18s ease",
      }}
      onMouseOver={(e) => {
        if (!active) {
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        }
      }}
      onMouseOut={(e) => {
        if (!active) {
          e.currentTarget.style.color = textMuted;
          e.currentTarget.style.background = "transparent";
        }
      }}
    >
      <Icon size={17} style={{ color: active ? blue : "currentColor", flexShrink: 0 }} />
      <span style={{ flex: 1 }}>{label}</span>
      {badge && badge > 0 ? (
        <span
          aria-label={`${badge} pending`}
          style={{
            minWidth: "20px",
            height: "20px",
            padding: "0 6px",
            borderRadius: "999px",
            backgroundImage: `linear-gradient(135deg, ${blueDeep}, ${blue})`,
            color: "#fff",
            fontSize: "11px",
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 0 1px ${blue}55, 0 4px 10px ${blue}44`,
            letterSpacing: 0,
          }}
        >
          {badge > 99 ? "99+" : badge}
        </span>
      ) : null}
      {active && <ChevronRight size={14} style={{ color: blue }} />}
    </Link>
  );

  return (
    <>
      <style>{`
        @keyframes side-pulse { 0%,100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.25); opacity: 0; } }
        .ds-topbar { display: none; }
        .ds-overlay { display: none; }
        @media (max-width: 1023px) {
          .ds-sidebar {
            position: fixed !important;
            top: 0; left: 0;
            height: 100dvh;
            min-height: 100dvh !important;
            transform: translateX(-100%);
            transition: transform 0.25s ease;
            z-index: 60;
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          }
          .ds-sidebar[data-open="true"] { transform: translateX(0); }
          .ds-topbar {
            display: flex !important;
            align-items: center;
            gap: 12px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 56px;
            padding: 0 14px;
            background: #0a0f1c;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            z-index: 40;
          }
          /* Push page content below the fixed topbar */
          main { padding-top: 56px; }
          .ds-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 55;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease;
          }
          .ds-overlay[data-open="true"] {
            opacity: 1;
            pointer-events: auto;
          }
        }
      `}</style>

      {/* Mobile top bar */}
      <div className="ds-topbar">
        <button
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen(true)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 10,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#f1f5f9",
            cursor: "pointer",
          }}
        >
          <Menu size={20} />
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Image src="/edlight-logo-white.png" alt="EdLight" width={26} height={26} style={{ opacity: 0.95 }} />
          <span style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9" }}>EdLight</span>
          <span style={{ fontSize: 12, fontWeight: 700, backgroundImage: `linear-gradient(135deg, ${blueDeep}, ${blueLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Security</span>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className="ds-overlay"
        data-open={mobileOpen ? "true" : "false"}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      <aside
        className="ds-sidebar"
        data-open={mobileOpen ? "true" : "false"}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "256px",
          minHeight: "100vh",
          background: bg,
          borderRight: `1px solid ${border}`,
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* Mobile close button */}
        <button
          aria-label="Close navigation menu"
          onClick={() => setMobileOpen(false)}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 32,
            height: 32,
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#f1f5f9",
            cursor: "pointer",
            zIndex: 5,
          }}
          className="ds-close"
        >
          <X size={16} />
        </button>
        <style>{`
          @media (max-width: 1023px) { .ds-close { display: inline-flex !important; } }
        `}</style>

      <div aria-hidden style={{ position: "absolute", top: "-60px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: `radial-gradient(circle, ${blue}33, transparent 70%)`, filter: "blur(30px)", pointerEvents: "none" }} />

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", height: "64px", padding: "0 20px", borderBottom: `1px solid ${border}`, position: "relative", zIndex: 1 }}>
        <div style={{ position: "relative", width: "32px", height: "32px" }}>
          <Image src="/edlight-logo-white.png" alt="EdLight" width={32} height={32} style={{ opacity: 0.95 }} />
          <span aria-hidden style={{ position: "absolute", inset: "-4px", borderRadius: "50%", border: `1px solid ${blue}55`, animation: "side-pulse 3s ease-in-out infinite", pointerEvents: "none" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
          <span style={{ fontSize: "13px", fontWeight: 700, color: text }}>EdLight</span>
          <span style={{ fontSize: "12px", fontWeight: 700, backgroundImage: `linear-gradient(135deg, ${blueDeep}, ${blueLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Security Training</span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: "16px 10px", display: "flex", flexDirection: "column", gap: "2px", position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 12px 8px", margin: 0 }}>Workspace</p>
        {employeeNavItems.map(({ label, href, icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          const badge = href === "/dashboard" ? todoCount : undefined;
          return renderNavItem(label, href, icon as IconType, active, badge);
        })}

        {(role === "admin" || role === "super_admin") && (
          <>
            <p style={{ fontSize: "10px", fontWeight: 700, color: indigo, letterSpacing: "0.14em", textTransform: "uppercase", padding: "16px 12px 8px", margin: 0 }}>Admin</p>
            {adminNavItems.map(({ label, href, icon }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return renderNavItem(label, href, icon as IconType, active);
            })}
          </>
        )}
      </nav>

      {/* User area */}
      <div style={{ padding: "14px 12px", borderTop: `1px solid ${border}`, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "10px", background: "rgba(255,255,255,0.025)", border: `1px solid ${border}` }}>
          {user?.photoURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.photoURL} alt={user.displayName ?? "User"} referrerPolicy="no-referrer" style={{ width: "34px", height: "34px", borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: `2px solid ${blue}66` }} />
          ) : (
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "12px", fontWeight: 700, flexShrink: 0, backgroundImage: `linear-gradient(135deg, ${blueDeep}, ${blue})`, boxShadow: `0 4px 12px ${blue}44` }}>
              {initials}
            </div>
          )}
          <div style={{ minWidth: 0, flex: 1 }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: text, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user?.displayName ?? "\u2014"}</p>
            {profile?.jobTitle || profile?.department ? (
              <p style={{ fontSize: "11px", color: blueLight, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{[profile?.jobTitle, profile?.department].filter(Boolean).join(" \u00b7 ")}</p>
            ) : (
              <p style={{ fontSize: "11px", color: textMuted, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user?.email ?? ""}</p>
            )}
          </div>
        </div>
        <button
          onClick={handleSignOut}
          style={{ marginTop: "8px", width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "10px", background: "transparent", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600, color: textMuted, transition: "all 0.18s" }}
          onMouseOver={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(239,68,68,0.08)"; }}
          onMouseOut={(e) => { e.currentTarget.style.color = textMuted; e.currentTarget.style.background = "transparent"; }}
        >
          <LogOut size={15} />
          Sign Out
        </button>
      </div>
      </aside>
    </>
  );
}
