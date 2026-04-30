"use client";

/**
 * LectureIllustration
 * -------------------
 * Inline, animated SVG illustrations (think: lightweight GIFs) embedded inside
 * a module's lecture content to break up the text and help visual learners.
 *
 * Used by ModuleView's renderer when it encounters a line starting with
 *   !!ILLUS:<kind>|<optional caption>
 *
 * All animations use pure CSS keyframes injected once below — no external
 * assets, no GIF downloads, crisp on every screen and theme-coloured to
 * match each module.
 */

import { useId } from "react";

interface LectureIllustrationProps {
  kind: string;
  caption?: string;
  color?: string; // module.color palette key
}

const palette: Record<
  string,
  { from: string; to: string; soft: string; ring: string; bg: string }
> = {
  teal:   { from: "#0d9488", to: "#14b8a6", soft: "rgba(20,184,166,0.12)",  ring: "rgba(20,184,166,0.35)",  bg: "#f0fdfa" },
  red:    { from: "#dc2626", to: "#ef4444", soft: "rgba(239,68,68,0.12)",   ring: "rgba(239,68,68,0.35)",   bg: "#fef2f2" },
  blue:   { from: "#0369a1", to: "#0ea5e9", soft: "rgba(14,165,233,0.12)",  ring: "rgba(14,165,233,0.35)",  bg: "#f0f9ff" },
  purple: { from: "#7c3aed", to: "#a855f7", soft: "rgba(168,85,247,0.12)",  ring: "rgba(168,85,247,0.35)",  bg: "#faf5ff" },
  green:  { from: "#15803d", to: "#22c55e", soft: "rgba(34,197,94,0.12)",   ring: "rgba(34,197,94,0.35)",   bg: "#f0fdf4" },
};

export default function LectureIllustration({
  kind,
  caption,
  color = "teal",
}: LectureIllustrationProps) {
  const c = palette[color] ?? palette.teal;
  const Scene = SCENES[kind] ?? SCENES.shield;

  return (
    <figure className="my-6 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      <style>{KEYFRAMES}</style>
      <div
        className="relative w-full flex items-center justify-center px-4 py-6 sm:py-8"
        style={{
          background: `linear-gradient(135deg, ${c.bg}, #ffffff 60%)`,
          minHeight: 200,
        }}
      >
        {/* dot grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, ${c.ring} 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative w-full max-w-md flex items-center justify-center li-fadein">
          <Scene c={c} />
        </div>
      </div>
      {caption && (
        <figcaption className="px-4 py-3 text-xs sm:text-[13px] text-slate-600 bg-slate-50/80 border-t border-slate-100 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ───────────────────────── Keyframes (shared) ───────────────────────── */

const KEYFRAMES = `
  @keyframes li-fadein   { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes li-float    { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
  @keyframes li-bob      { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-8px) rotate(2deg); } }
  @keyframes li-pulse    { 0%,100% { transform: scale(1); opacity: .6; } 50% { transform: scale(1.15); opacity: 1; } }
  @keyframes li-ping     { 0% { transform: scale(.5); opacity: .9; } 100% { transform: scale(2.4); opacity: 0; } }
  @keyframes li-shimmer  { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
  @keyframes li-spin     { from { transform: rotate(0); } to { transform: rotate(360deg); } }
  @keyframes li-wave     { 0% { transform: scale(.4); opacity: .8; } 100% { transform: scale(1.6); opacity: 0; } }
  @keyframes li-blink    { 0%,80%,100% { opacity: 1; } 40% { opacity: 0; } }
  @keyframes li-typing   { 0%,100% { opacity: .25; } 50% { opacity: 1; } }
  @keyframes li-slide-r  { 0% { transform: translateX(-12px); opacity: 0; } 30% { opacity: 1; } 100% { transform: translateX(120px); opacity: 0; } }
  @keyframes li-shake    { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-3px); } 75% { transform: translateX(3px); } }
  @keyframes li-dash     { to { stroke-dashoffset: 0; } }
  @keyframes li-rise     { 0% { opacity: 0; transform: translateY(8px); } 50% { opacity: 1; } 100% { opacity: 0; transform: translateY(-22px); } }
  .li-fadein { animation: li-fadein .6s ease both; }
`;

/* ───────────────────────── Scene registry ───────────────────────── */

type Sc = { c: { from: string; to: string; soft: string; ring: string; bg: string } };

const SCENES: Record<string, (props: Sc) => React.ReactElement> = {
  "weak-vs-strong": WeakVsStrong,
  "mfa-flow": MfaFlow,
  "password-manager": PasswordManager,
  "phishing-email": PhishingEmailAnatomy,
  "hover-link": HoverLink,
  "report-phish": ReportPhish,
  "https-vs-http": HttpsVsHttp,
  "vpn-tunnel": VpnTunnel,
  "scareware-popup": ScarewarePopup,
  "least-privilege": LeastPrivilege,
  "lock-screen": LockScreen,
  "tailgating": Tailgating,
  "usb-trap": UsbTrap,
  "update-shield": UpdateShield,
  "device-encryption": DeviceEncryption,
  shield: ShieldFallback,
};

/* ────────── Module 1: Password Security ────────── */

function WeakVsStrong({ c }: Sc) {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {/* Weak */}
      <div className="rounded-xl border border-rose-200 bg-white p-3 shadow-sm" style={{ animation: "li-shake 3s ease-in-out infinite" }}>
        <div className="text-[10px] font-bold uppercase tracking-wider text-rose-600 mb-2">Weak</div>
        <div className="rounded-md bg-rose-50 border border-rose-200 px-2 py-1.5 text-xs font-mono text-rose-700">
          password123
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <div className="h-1.5 flex-1 rounded-full bg-rose-500" />
          <div className="h-1.5 flex-1 rounded-full bg-rose-200" />
          <div className="h-1.5 flex-1 rounded-full bg-rose-200" />
          <div className="h-1.5 flex-1 rounded-full bg-rose-200" />
        </div>
        <div className="mt-1.5 text-[10px] text-rose-600 font-semibold">Cracked in seconds</div>
      </div>
      {/* Strong */}
      <div className="rounded-xl border border-emerald-200 bg-white p-3 shadow-sm" style={{ animation: "li-float 4s ease-in-out infinite" }}>
        <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-2">Strong</div>
        <div className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-1.5 text-xs font-mono text-emerald-700 truncate">
          Purple-Tiger-River-42!
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <div className="h-1.5 flex-1 rounded-full bg-emerald-500" />
          <div className="h-1.5 flex-1 rounded-full bg-emerald-500" />
          <div className="h-1.5 flex-1 rounded-full bg-emerald-500" />
          <div className="h-1.5 flex-1 rounded-full" style={{ background: c.from }} />
        </div>
        <div className="mt-1.5 text-[10px] text-emerald-700 font-semibold">Centuries to crack</div>
      </div>
    </div>
  );
}

function MfaFlow({ c }: Sc) {
  return (
    <div className="flex items-center justify-between w-full gap-2">
      {/* Laptop */}
      <div className="flex flex-col items-center gap-1">
        <svg width="72" height="50" viewBox="0 0 72 50" fill="none">
          <rect x="6" y="4" width="60" height="36" rx="3" fill="#0f172a" />
          <rect x="10" y="8" width="52" height="28" rx="2" fill={c.from} />
          <rect x="0" y="40" width="72" height="5" rx="2" fill="#1e293b" />
        </svg>
        <span className="text-[10px] font-semibold text-slate-600">Login</span>
      </div>
      {/* Arrow + code */}
      <div className="relative flex-1 h-12">
        <svg width="100%" height="48" viewBox="0 0 120 48" preserveAspectRatio="none">
          <path d="M2 24 L110 24" stroke={c.from} strokeWidth="2" strokeDasharray="4 4" />
          <path d="M104 18 L114 24 L104 30" stroke={c.from} strokeWidth="2" fill="none" />
        </svg>
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 px-2 py-1 rounded-md text-[10px] font-mono font-bold text-white shadow"
          style={{
            background: `linear-gradient(135deg, ${c.from}, ${c.to})`,
            animation: "li-slide-r 3s ease-in-out infinite",
          }}
        >
          428193
        </div>
      </div>
      {/* Phone */}
      <div className="flex flex-col items-center gap-1">
        <div
          className="relative rounded-lg border-2 bg-white p-1.5"
          style={{ borderColor: "#0f172a", animation: "li-float 3s ease-in-out infinite" }}
        >
          <div className="rounded text-white text-[9px] font-bold text-center px-2 py-1.5" style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}>
            428193
          </div>
          <span
            className="absolute -top-1 -right-1 h-3 w-3 rounded-full"
            style={{ background: c.from, animation: "li-pulse 1.6s ease-in-out infinite" }}
          />
        </div>
        <span className="text-[10px] font-semibold text-slate-600">Phone</span>
      </div>
    </div>
  );
}

function PasswordManager({ c }: Sc) {
  return (
    <div className="relative h-32 w-full flex items-center justify-center">
      {/* Vault */}
      <div
        className="relative rounded-2xl shadow-md p-4 w-44"
        style={{ background: `linear-gradient(160deg, ${c.from}, ${c.to})`, animation: "li-float 4s ease-in-out infinite" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
            <path d="M4 7V5a4 4 0 1 1 8 0v2h1v8H3V7h1zm2 0h4V5a2 2 0 0 0-4 0v2z" />
          </svg>
          <span className="text-white text-[11px] font-bold uppercase tracking-wider">Vault</span>
        </div>
        {[
          { label: "Email", dots: 10 },
          { label: "Bank", dots: 12 },
          { label: "HR Portal", dots: 8 },
        ].map((row, i) => (
          <div key={i} className="flex items-center justify-between mb-1.5 last:mb-0 bg-white/15 rounded px-2 py-1">
            <span className="text-white/90 text-[10px] font-semibold">{row.label}</span>
            <span className="flex gap-0.5">
              {Array.from({ length: row.dots }).map((_, j) => (
                <span key={j} className="h-1 w-1 rounded-full bg-white" style={{ animation: `li-typing 1.5s ease-in-out ${j * 0.08}s infinite` }} />
              ))}
            </span>
          </div>
        ))}
      </div>
      {/* one master key */}
      <div className="absolute -right-1 -top-1" style={{ animation: "li-bob 3s ease-in-out infinite" }}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="14" cy="22" r="10" fill="none" stroke={c.from} strokeWidth="3" />
          <path d="M24 22 L42 22 M36 22 L36 30 M40 22 L40 28" stroke={c.from} strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

/* ────────── Module 2: Phishing Awareness ────────── */

function PhishingEmailAnatomy({ c }: Sc) {
  return (
    <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* header */}
      <div className="px-3 py-2 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center gap-2 text-[11px]">
          <span className="font-semibold text-slate-700">From:</span>
          <span className="font-mono text-rose-600 underline decoration-wavy decoration-rose-400">
            ceo@edl1ght.org
          </span>
          <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-bold">
            ⚠ DOMAIN
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[11px] font-semibold text-slate-700">Subject:</span>
          <span className="text-[11px] text-slate-800">URGENT — wire transfer needed now</span>
          <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-bold">⚠ URGENCY</span>
        </div>
      </div>
      {/* body */}
      <div className="p-3 text-[11px] text-slate-700 space-y-2">
        <p>Hi, I need you to process a $15,000 transfer immediately. Keep this confidential.</p>
        <p className="text-slate-600">Click the link below to confirm:</p>
        <div className="flex items-center gap-1.5 bg-rose-50 border border-rose-200 rounded px-2 py-1">
          <span className="font-mono text-[10px] text-rose-700 truncate flex-1">
            http://edlight-secure.verify-now.ru/pay
          </span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-bold">⚠ LINK</span>
        </div>
        <div className="flex items-center gap-1.5 pt-1">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: c.from, animation: "li-pulse 2s ease-in-out infinite" }}
          />
          <span className="text-[10px] text-slate-500 italic">3 red flags spotted</span>
        </div>
      </div>
    </div>
  );
}

function HoverLink({ c }: Sc) {
  return (
    <div className="relative w-full max-w-sm">
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-4">
        <p className="text-[12px] text-slate-700 mb-3">
          Reset your password{" "}
          <span className="relative inline-block">
            <span className="text-sky-600 underline font-semibold cursor-pointer">here</span>
            {/* tooltip */}
            <span
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 text-white text-[10px] font-mono px-2 py-1.5 shadow-lg"
              style={{ animation: "li-float 3s ease-in-out infinite" }}
            >
              http://edlight.verify-now.xyz/login
              <span
                className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-slate-900"
              />
            </span>
          </span>
          .
        </p>
        {/* cursor */}
        <svg
          className="absolute"
          style={{ top: 32, left: 132, animation: "li-bob 3s ease-in-out infinite" }}
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill={c.from}
        >
          <path d="M2 1 L2 18 L7 13 L10 21 L13 20 L10 12 L17 12 Z" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <p className="text-center text-[10px] text-slate-500 mt-2 italic">
        Hover (don&apos;t click!) to reveal where a link really goes
      </p>
    </div>
  );
}

function ReportPhish({ c }: Sc) {
  return (
    <div className="flex items-center justify-center gap-3 w-full">
      {/* email */}
      <div className="relative rounded-lg bg-white border border-rose-200 shadow-sm p-2.5 w-28" style={{ animation: "li-shake 3s ease-in-out infinite" }}>
        <div className="text-[9px] font-bold text-rose-600 uppercase tracking-wider mb-1">Suspicious</div>
        <div className="space-y-1">
          <div className="h-1.5 rounded bg-rose-200 w-3/4" />
          <div className="h-1.5 rounded bg-rose-200 w-1/2" />
          <div className="h-1.5 rounded bg-rose-200 w-2/3" />
        </div>
        <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow">!</span>
      </div>
      {/* arrow */}
      <svg width="56" height="20" viewBox="0 0 56 20" fill="none">
        <path d="M2 10 L46 10" stroke={c.from} strokeWidth="2" strokeDasharray="4 4" />
        <path d="M40 4 L52 10 L40 16" stroke={c.from} strokeWidth="2" fill="none" />
      </svg>
      {/* shield = security team */}
      <div className="flex flex-col items-center" style={{ animation: "li-float 3s ease-in-out infinite" }}>
        <svg width="56" height="64" viewBox="0 0 56 64" fill="none">
          <path d="M28 4 L52 14 V32 C52 48 41 58 28 62 C15 58 4 48 4 32 V14 Z" fill={`url(#rp-${c.from})`} />
          <path d="M18 32 L25 39 L40 24" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id={`rp-${c.from}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor={c.from} />
              <stop offset="1" stopColor={c.to} />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-[10px] font-semibold text-slate-700 mt-1">security@edlight.org</span>
      </div>
    </div>
  );
}

/* ────────── Module 3: Safe Browsing ────────── */

function HttpsVsHttp({ c }: Sc) {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {/* HTTP */}
      <div className="rounded-xl border-2 border-rose-300 bg-white shadow-sm overflow-hidden" style={{ animation: "li-shake 4s ease-in-out infinite" }}>
        <div className="flex items-center gap-1 px-2 py-1.5 bg-rose-50 border-b border-rose-200">
          <span className="text-[10px] font-bold text-rose-700">⚠</span>
          <div className="flex-1 truncate text-[10px] font-mono text-rose-700">http://edl1ght.org</div>
        </div>
        <div className="p-3 space-y-1.5">
          <div className="h-1.5 rounded bg-slate-200 w-3/4" />
          <div className="h-1.5 rounded bg-slate-200 w-1/2" />
        </div>
        <div className="px-3 pb-2 text-[9px] font-bold text-rose-600">Not Secure</div>
      </div>
      {/* HTTPS */}
      <div className="rounded-xl border-2 shadow-sm overflow-hidden bg-white" style={{ borderColor: c.from, animation: "li-float 4s ease-in-out infinite" }}>
        <div className="flex items-center gap-1 px-2 py-1.5 border-b" style={{ background: c.bg, borderColor: c.ring }}>
          <svg width="10" height="12" viewBox="0 0 10 12" fill={c.from}>
            <path d="M2 5V4a3 3 0 0 1 6 0v1h1v6H1V5h1zm1 0h4V4a2 2 0 0 0-4 0v1z" />
          </svg>
          <div className="flex-1 truncate text-[10px] font-mono" style={{ color: c.from }}>https://edlight.org</div>
        </div>
        <div className="p-3 space-y-1.5">
          <div className="h-1.5 rounded bg-slate-200 w-3/4" />
          <div className="h-1.5 rounded bg-slate-200 w-1/2" />
        </div>
        <div className="px-3 pb-2 text-[9px] font-bold" style={{ color: c.from }}>Secure</div>
      </div>
    </div>
  );
}

function VpnTunnel({ c }: Sc) {
  const id = useId().replace(/[:]/g, "");
  return (
    <div className="relative w-full max-w-sm">
      <div className="flex items-center justify-between gap-1">
        {/* laptop */}
        <svg width="60" height="44" viewBox="0 0 60 44" fill="none">
          <rect x="6" y="2" width="48" height="32" rx="3" fill="#0f172a" />
          <rect x="9" y="5" width="42" height="26" rx="2" fill={c.from} />
          <rect x="0" y="34" width="60" height="5" rx="2" fill="#1e293b" />
        </svg>
        {/* tunnel */}
        <svg className="flex-1" height="44" viewBox="0 0 200 44" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`tun-${id}`} x1="0" x2="1">
              <stop offset="0" stopColor={c.from} />
              <stop offset="1" stopColor={c.to} />
            </linearGradient>
          </defs>
          <rect x="0" y="14" width="200" height="16" rx="8" fill={`url(#tun-${id})`} opacity="0.25" />
          <rect x="0" y="18" width="200" height="8" rx="4" fill={`url(#tun-${id})`} />
          {/* moving packets */}
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx="0"
              cy="22"
              r="3"
              fill="white"
              style={{ animation: `li-slide-r 2.4s linear ${i * 0.8}s infinite` }}
            />
          ))}
        </svg>
        {/* server */}
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="4" y="6" width="36" height="10" rx="2" fill="#0f172a" />
          <rect x="4" y="18" width="36" height="10" rx="2" fill="#0f172a" />
          <rect x="4" y="30" width="36" height="10" rx="2" fill="#0f172a" />
          <circle cx="34" cy="11" r="1.5" fill={c.from} />
          <circle cx="34" cy="23" r="1.5" fill={c.from} />
          <circle cx="34" cy="35" r="1.5" fill={c.from} />
        </svg>
      </div>
      <div className="flex justify-between text-[10px] font-semibold text-slate-600 mt-1">
        <span>Your laptop</span>
        <span style={{ color: c.from }}>🔒 Encrypted VPN tunnel</span>
        <span>EdLight</span>
      </div>
    </div>
  );
}

function ScarewarePopup({ c }: Sc) {
  return (
    <div className="relative w-full max-w-sm">
      {/* fake browser */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-1 px-2 py-1.5 border-b border-slate-100 bg-slate-50">
          <span className="h-2 w-2 rounded-full bg-rose-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <div className="p-4 space-y-1.5">
          <div className="h-1.5 rounded bg-slate-200 w-3/4" />
          <div className="h-1.5 rounded bg-slate-200 w-1/2" />
          <div className="h-1.5 rounded bg-slate-200 w-2/3" />
          <div className="h-1.5 rounded bg-slate-200 w-1/3" />
        </div>
      </div>
      {/* popup overlay */}
      <div
        className="absolute inset-x-4 top-6 rounded-lg border-2 border-rose-400 bg-white shadow-xl p-3"
        style={{ animation: "li-shake 0.8s ease-in-out infinite" }}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="h-6 w-6 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center">!</span>
          <span className="text-[11px] font-bold text-rose-700">VIRUS DETECTED</span>
        </div>
        <p className="text-[10px] text-slate-700 leading-snug mb-2">
          Your computer is infected. Call <span className="font-mono">+1-800-XXX-XXXX</span> now!
        </p>
        <div className="flex gap-1.5">
          <button className="flex-1 text-[10px] font-bold text-white rounded px-2 py-1" style={{ background: c.from }}>
            Scan Now
          </button>
          <button className="text-[10px] text-slate-500 px-2">×</button>
        </div>
      </div>
    </div>
  );
}

/* ────────── Module 4: Company Access Policy ────────── */

function LeastPrivilege({ c }: Sc) {
  const rooms = [
    { label: "Email", granted: true },
    { label: "HR", granted: false },
    { label: "Finance", granted: false },
    { label: "Code", granted: true },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
      {rooms.map((r, i) => (
        <div
          key={i}
          className="rounded-lg border-2 bg-white p-2 flex flex-col items-center justify-center"
          style={{
            borderColor: r.granted ? c.from : "rgb(226,232,240)",
            background: r.granted ? c.bg : "white",
            animation: r.granted ? `li-float 4s ease-in-out ${i * 0.3}s infinite` : "none",
            opacity: r.granted ? 1 : 0.55,
          }}
        >
          <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
            <rect x="2" y="4" width="18" height="22" rx="2" stroke={r.granted ? c.from : "#94a3b8"} strokeWidth="2" fill={r.granted ? c.bg : "white"} />
            <circle cx="16" cy="15" r="1.5" fill={r.granted ? c.from : "#94a3b8"} />
          </svg>
          <span className="text-[10px] font-bold mt-1" style={{ color: r.granted ? c.from : "#94a3b8" }}>
            {r.label}
          </span>
          <span className="text-[9px] mt-0.5" style={{ color: r.granted ? c.from : "#94a3b8" }}>
            {r.granted ? "✓ access" : "✕ no access"}
          </span>
        </div>
      ))}
    </div>
  );
}

function LockScreen({ c }: Sc) {
  return (
    <div className="relative w-full flex justify-center">
      <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
        {/* laptop */}
        <rect x="14" y="6" width="152" height="92" rx="6" fill="#0f172a" />
        <rect x="20" y="12" width="140" height="80" rx="3" fill={`url(#ls-${c.from})`} />
        <rect x="0" y="98" width="180" height="10" rx="3" fill="#1e293b" />
        {/* lock icon centered */}
        <g transform="translate(74,30)">
          <path d="M8 22V18a8 8 0 0 1 16 0v4" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
          <rect x="2" y="22" width="28" height="22" rx="4" fill="white" opacity="0.95" />
          <circle cx="16" cy="32" r="3" fill={c.from} />
          <rect x="14.5" y="32" width="3" height="6" rx="1.5" fill={c.from} />
        </g>
        <defs>
          <linearGradient id={`ls-${c.from}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor={c.from} />
            <stop offset="1" stopColor={c.to} />
          </linearGradient>
        </defs>
      </svg>
      {/* footsteps walking away */}
      <div className="absolute right-2 top-2 flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="text-base"
            style={{ animation: `li-rise 2.4s ease-in-out ${i * 0.4}s infinite`, color: c.from }}
          >
            👣
          </span>
        ))}
      </div>
    </div>
  );
}

function Tailgating({ c }: Sc) {
  return (
    <div className="relative w-full flex items-end justify-center gap-3">
      {/* door */}
      <div className="relative">
        <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
          <rect x="6" y="4" width="68" height="112" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
          <rect x="14" y="14" width="52" height="92" rx="2" fill="white" stroke="#cbd5e1" />
          <circle cx="60" cy="62" r="3" fill={c.from} />
          {/* badge reader */}
          <rect x="58" y="50" width="14" height="20" rx="2" fill={c.from} opacity="0.2" />
        </svg>
        <span
          className="absolute -right-2 top-12 h-3 w-3 rounded-full"
          style={{ background: c.from, animation: "li-pulse 1.6s ease-in-out infinite" }}
        />
      </div>
      {/* authorized person */}
      <div className="text-3xl" style={{ animation: "li-float 3s ease-in-out infinite" }}>🧑‍💼</div>
      {/* unauthorized tailgater */}
      <div className="flex flex-col items-center">
        <span className="text-3xl" style={{ animation: "li-float 3s ease-in-out 0.5s infinite" }}>🕴️</span>
        <span className="mt-1 text-[9px] font-bold text-rose-600 uppercase tracking-wider">No badge</span>
      </div>
    </div>
  );
}

/* ────────── Module 5: Device & Network Security ────────── */

function UsbTrap({ c }: Sc) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="relative" style={{ animation: "li-bob 4s ease-in-out infinite" }}>
        {/* USB stick */}
        <svg width="160" height="60" viewBox="0 0 160 60" fill="none">
          <rect x="6" y="20" width="100" height="22" rx="3" fill={`url(#usb-${c.from})`} />
          <rect x="106" y="24" width="22" height="14" rx="2" fill="#94a3b8" />
          <rect x="128" y="26" width="20" height="10" fill="#cbd5e1" />
          <rect x="20" y="26" width="60" height="3" rx="1" fill="white" opacity="0.6" />
          <text x="56" y="38" fontSize="8" fontWeight="700" fill="white" textAnchor="middle" fontFamily="system-ui">
            CONFIDENTIAL
          </text>
          <defs>
            <linearGradient id={`usb-${c.from}`} x1="0" x2="1">
              <stop offset="0" stopColor={c.from} />
              <stop offset="1" stopColor={c.to} />
            </linearGradient>
          </defs>
        </svg>
        {/* warning skull */}
        <div
          className="absolute -top-4 -right-2 h-9 w-9 rounded-full bg-rose-500 text-white text-base font-bold flex items-center justify-center shadow-lg"
          style={{ animation: "li-pulse 1.5s ease-in-out infinite" }}
        >
          ☠
        </div>
      </div>
      {/* "DO NOT PLUG IN" */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-rose-100 border border-rose-300 text-rose-700 text-[10px] font-bold uppercase tracking-wider">
        Do not plug in
      </div>
    </div>
  );
}

function UpdateShield({ c }: Sc) {
  return (
    <div className="relative w-full flex items-center justify-center gap-4">
      {/* shield with arrow */}
      <div style={{ animation: "li-float 3.5s ease-in-out infinite" }}>
        <svg width="80" height="92" viewBox="0 0 80 92" fill="none">
          <path d="M40 4 L74 14 V44 C74 64 60 80 40 86 C20 80 6 64 6 44 V14 Z" fill={`url(#us-${c.from})`} />
          <g style={{ transformOrigin: "40px 46px", animation: "li-spin 6s linear infinite" }}>
            <path d="M40 30 V58 M28 46 L40 58 L52 46" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <linearGradient id={`us-${c.from}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor={c.from} />
              <stop offset="1" stopColor={c.to} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* progress */}
      <div className="flex-1 max-w-[180px]">
        <div className="text-[11px] font-semibold text-slate-700 mb-1.5">Installing security update…</div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${c.from}, ${c.to}, ${c.from})`,
              backgroundSize: "200% 100%",
              animation: "li-shimmer 2s linear infinite",
              width: "70%",
            }}
          />
        </div>
        <div className="text-[10px] text-slate-500 mt-1">Patches 12 known vulnerabilities</div>
      </div>
    </div>
  );
}

function DeviceEncryption({ c }: Sc) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <svg width="200" height="130" viewBox="0 0 200 130" fill="none">
        {/* laptop */}
        <rect x="20" y="10" width="160" height="96" rx="6" fill="#0f172a" />
        <rect x="26" y="16" width="148" height="84" rx="3" fill="#1e293b" />
        {/* matrix-like encrypted text */}
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => {
            const ch = ["1", "0", "A", "F", "x", "#"][((row + col) % 6)];
            return (
              <text
                key={`${row}-${col}`}
                x={32 + col * 12}
                y={30 + row * 12}
                fontSize="8"
                fontFamily="monospace"
                fill={c.from}
                opacity={0.55}
                style={{ animation: `li-blink 2.4s ease-in-out ${(row + col) * 0.12}s infinite` }}
              >
                {ch}
              </text>
            );
          })
        )}
        <rect x="0" y="106" width="200" height="10" rx="3" fill="#1e293b" />
        {/* big key over screen */}
        <g transform="translate(80,38)" style={{ animation: "li-float 3s ease-in-out infinite", transformOrigin: "center" }}>
          <circle cx="14" cy="22" r="10" fill="none" stroke="white" strokeWidth="3" />
          <path d="M24 22 L42 22 M36 22 L36 30 M40 22 L40 28" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

/* ────────── Generic fallback ────────── */

function ShieldFallback({ c }: Sc) {
  return (
    <svg width="100" height="116" viewBox="0 0 100 116" fill="none" style={{ animation: "li-float 3.5s ease-in-out infinite" }}>
      <path d="M50 6 L92 18 V52 C92 76 74 96 50 102 C26 96 8 76 8 52 V18 Z" fill={`url(#sf-${c.from})`} />
      <path d="M30 56 L44 70 L72 40" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id={`sf-${c.from}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={c.from} />
          <stop offset="1" stopColor={c.to} />
        </linearGradient>
      </defs>
    </svg>
  );
}
