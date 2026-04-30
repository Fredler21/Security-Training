"use client";

/**
 * ModuleAnimation
 * ---------------
 * A small, lightweight animated illustration that sits at the top of each
 * module's lecture content. Pure CSS + inline SVG (no GIFs), so it stays
 * crisp on every screen and matches the homepage's animation style.
 *
 * Picks a scene based on the module slug. Falls back to a generic shield.
 */

interface ModuleAnimationProps {
  slug: string;
  color?: string; // tailwind palette key from module.color
}

const palette: Record<string, { from: string; to: string; soft: string; ring: string }> = {
  teal:   { from: "#0d9488", to: "#14b8a6", soft: "rgba(20,184,166,0.12)",  ring: "rgba(20,184,166,0.35)"  },
  red:    { from: "#dc2626", to: "#ef4444", soft: "rgba(239,68,68,0.12)",   ring: "rgba(239,68,68,0.35)"   },
  blue:   { from: "#0369a1", to: "#0ea5e9", soft: "rgba(14,165,233,0.12)",  ring: "rgba(14,165,233,0.35)"  },
  purple: { from: "#7c3aed", to: "#a855f7", soft: "rgba(168,85,247,0.12)",  ring: "rgba(168,85,247,0.35)"  },
  green:  { from: "#15803d", to: "#22c55e", soft: "rgba(34,197,94,0.12)",   ring: "rgba(34,197,94,0.35)"   },
};

export default function ModuleAnimation({ slug, color = "teal" }: ModuleAnimationProps) {
  const c = palette[color] ?? palette.teal;

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white mb-8"
      style={{ height: 180 }}
    >
      <style>{`
        @keyframes ma-float    { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes ma-pulse    { 0%,100% { transform: scale(1); opacity: .55; } 50% { transform: scale(1.12); opacity: .9; } }
        @keyframes ma-spin     { from { transform: rotate(0); } to { transform: rotate(360deg); } }
        @keyframes ma-ping     { 0% { transform: scale(.6); opacity: .9; } 100% { transform: scale(2.4); opacity: 0; } }
        @keyframes ma-orb      { 0%,100% { transform: translate(0,0); } 50% { transform: translate(20px,-14px); } }
        @keyframes ma-shimmer  { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes ma-bob      { 0%,100% { transform: translateY(0) rotate(-3deg); } 50% { transform: translateY(-10px) rotate(3deg); } }
        @keyframes ma-line     { 0% { stroke-dashoffset: 120; } 100% { stroke-dashoffset: 0; } }
        @keyframes ma-fadein   { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ma-wave     { 0% { transform: scale(.4); opacity: .8; } 100% { transform: scale(1.6); opacity: 0; } }
        @keyframes ma-typing   { 0%,100% { opacity: .25; } 50% { opacity: 1; } }
        .ma-scene { animation: ma-fadein .7s ease both; }
      `}</style>

      {/* soft gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 30% 50%, ${c.soft}, transparent 65%), radial-gradient(circle at 80% 30%, ${c.soft}, transparent 60%)` }}
      />
      {/* dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, ${c.ring} 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />
      {/* floating orbs */}
      <div aria-hidden className="absolute -top-10 -left-8 h-40 w-40 rounded-full" style={{ background: c.soft, animation: "ma-orb 9s ease-in-out infinite" }} />
      <div aria-hidden className="absolute -bottom-12 -right-6 h-44 w-44 rounded-full" style={{ background: c.soft, animation: "ma-orb 11s ease-in-out infinite reverse" }} />

      <div className="relative h-full w-full flex items-center justify-center ma-scene">
        {renderScene(slug, c)}
      </div>
    </div>
  );
}

function renderScene(slug: string, c: { from: string; to: string; soft: string; ring: string }) {
  switch (slug) {
    case "password-security":
      return <PasswordScene c={c} />;
    case "phishing-awareness":
      return <PhishingScene c={c} />;
    case "safe-browsing":
      return <BrowsingScene c={c} />;
    case "device-and-network-security":
      return <DeviceScene c={c} />;
    case "company-access-policy":
      return <AccessScene c={c} />;
    default:
      return <ShieldScene c={c} />;
  }
}

type Sc = { c: { from: string; to: string; soft: string; ring: string } };

/* ── Password Security: padlock with shimmer + spinning key orbit ── */
function PasswordScene({ c }: Sc) {
  return (
    <div className="relative h-32 w-72">
      {/* orbit ring */}
      <div
        className="absolute top-1/2 left-1/2 h-28 w-28 rounded-full border border-dashed -translate-x-1/2 -translate-y-1/2"
        style={{ borderColor: c.ring, animation: "ma-spin 14s linear infinite" }}
      >
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-md"
          style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})`, boxShadow: `0 4px 14px ${c.ring}` }}
        />
      </div>
      {/* padlock */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animation: "ma-float 4s ease-in-out infinite" }}>
        <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
          <path d="M16 30v-8a16 16 0 0 1 32 0v8" stroke={c.from} strokeWidth="5" strokeLinecap="round" />
          <rect x="8" y="30" width="48" height="36" rx="8" fill={`url(#lg-${c.from})`} />
          <circle cx="32" cy="46" r="5" fill="white" />
          <rect x="30" y="46" width="4" height="10" rx="2" fill="white" />
          <defs>
            <linearGradient id={`lg-${c.from}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor={c.from} />
              <stop offset="1" stopColor={c.to} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* password dots typing */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full"
            style={{ background: c.from, animation: `ma-typing 1.4s ease-in-out ${i * 0.18}s infinite` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Phishing Awareness: envelope with a fishhook dipping in/out ── */
function PhishingScene({ c }: Sc) {
  return (
    <div className="relative h-32 w-72">
      {/* envelope */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ animation: "ma-float 5s ease-in-out infinite" }}
      >
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <rect x="4" y="14" width="112" height="60" rx="8" fill="white" stroke={c.from} strokeWidth="2.5" />
          <path d="M4 18 L60 52 L116 18" stroke={c.from} strokeWidth="2.5" fill="none" />
          <text x="60" y="68" textAnchor="middle" fontSize="9" fontWeight="700" fill={c.from} fontFamily="system-ui">
            URGENT!
          </text>
        </svg>
      </div>
      {/* hook dropping into the envelope */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: -2, animation: "ma-bob 3.2s ease-in-out infinite" }}
      >
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none">
          <line x1="20" y1="0" x2="20" y2="40" stroke={c.from} strokeWidth="2" strokeDasharray="3 4" />
          <path d="M20 40 Q20 60 30 60 Q40 60 40 50" stroke={c.from} strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="40" cy="50" r="3" fill={c.to} />
        </svg>
      </div>
      {/* alert ping */}
      <div className="absolute right-6 top-6 h-6 w-6">
        <span
          className="absolute inset-0 rounded-full"
          style={{ background: c.ring, animation: "ma-ping 1.8s ease-out infinite" }}
        />
        <span
          className="absolute inset-1 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}
        >
          !
        </span>
      </div>
    </div>
  );
}

/* ── Safe Browsing: browser window with secure shield ── */
function BrowsingScene({ c }: Sc) {
  return (
    <div className="relative h-32 w-80">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white border shadow-sm overflow-hidden"
        style={{ width: 240, height: 130, borderColor: "rgba(0,0,0,0.08)", animation: "ma-float 5s ease-in-out infinite" }}
      >
        {/* chrome */}
        <div className="flex items-center gap-1 px-3 py-2 border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <div className="ml-2 flex-1 h-4 rounded-md flex items-center gap-1 px-2" style={{ background: c.soft }}>
            <svg width="8" height="10" viewBox="0 0 8 10" fill={c.from}>
              <path d="M2 4V3a2 2 0 1 1 4 0v1h1v5H1V4h1zm1 0h2V3a1 1 0 0 0-2 0v1z" />
            </svg>
            <div
              className="h-1 flex-1 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${c.from}, ${c.to}, ${c.from})`,
                backgroundSize: "200% 100%",
                animation: "ma-shimmer 2.5s linear infinite",
              }}
            />
          </div>
        </div>
        {/* page content */}
        <div className="p-3 space-y-1.5">
          <div className="h-2 rounded w-3/4" style={{ background: "rgba(15,23,42,0.08)" }} />
          <div className="h-2 rounded w-1/2" style={{ background: "rgba(15,23,42,0.08)" }} />
          <div className="h-2 rounded w-2/3" style={{ background: "rgba(15,23,42,0.08)" }} />
          <div className="h-8 rounded mt-2 flex items-center justify-center text-[10px] font-semibold text-white" style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}>
            VERIFIED
          </div>
        </div>
      </div>
      {/* floating shield */}
      <div className="absolute right-0 top-2" style={{ animation: "ma-bob 4s ease-in-out infinite" }}>
        <svg width="44" height="50" viewBox="0 0 44 50" fill="none">
          <path d="M22 2 L42 10 V24 C42 36 33 46 22 48 C11 46 2 36 2 24 V10 Z" fill={`url(#sb-${c.from})`} />
          <path d="M14 24 L20 30 L32 18" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id={`sb-${c.from}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor={c.from} />
              <stop offset="1" stopColor={c.to} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

/* ── Device & Network: laptop with pulsing wifi ── */
function DeviceScene({ c }: Sc) {
  return (
    <div className="relative h-32 w-72">
      {/* wifi waves */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 h-12 w-12">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: c.from, animation: `ma-wave 2.4s ease-out ${i * 0.6}s infinite` }}
          />
        ))}
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full"
          style={{ background: c.from }}
        />
      </div>
      {/* laptop */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2" style={{ animation: "ma-float 5s ease-in-out infinite" }}>
        <svg width="140" height="84" viewBox="0 0 140 84" fill="none">
          <rect x="14" y="6" width="112" height="64" rx="6" fill="#0f172a" />
          <rect x="20" y="12" width="100" height="52" rx="3" fill={`url(#dv-${c.from})`} />
          <rect x="26" y="18" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.7)" />
          <rect x="26" y="24" width="60" height="2" rx="1" fill="rgba(255,255,255,0.45)" />
          <rect x="26" y="29" width="50" height="2" rx="1" fill="rgba(255,255,255,0.45)" />
          <rect x="26" y="40" width="88" height="18" rx="3" fill="rgba(255,255,255,0.18)" />
          <rect x="0" y="70" width="140" height="8" rx="3" fill="#1e293b" />
          <rect x="58" y="70" width="24" height="3" rx="1.5" fill="#0f172a" />
          <defs>
            <linearGradient id={`dv-${c.from}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor={c.from} />
              <stop offset="1" stopColor={c.to} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

/* ── Company Access: ID badge swinging on a lanyard, checkmark stamp ── */
function AccessScene({ c }: Sc) {
  return (
    <div className="relative h-32 w-72">
      {/* lanyard line */}
      <svg className="absolute top-0 left-1/2 -translate-x-1/2" width="80" height="40" viewBox="0 0 80 40" fill="none">
        <path d="M10 0 Q40 36 70 0" stroke={c.from} strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      {/* badge */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2" style={{ animation: "ma-bob 4s ease-in-out infinite", transformOrigin: "top center" }}>
        <div
          className="rounded-xl shadow-md p-3 w-32"
          style={{ background: `linear-gradient(160deg, ${c.from}, ${c.to})` }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="h-7 w-7 rounded-full bg-white/90 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill={c.from}>
                <circle cx="7" cy="4.5" r="2.5" />
                <path d="M2 13c0-2.8 2.2-5 5-5s5 2.2 5 5" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="h-1.5 rounded bg-white/70 w-full mb-1" />
              <div className="h-1.5 rounded bg-white/40 w-2/3" />
            </div>
          </div>
          <div className="h-1.5 rounded bg-white/40 w-full mb-1" />
          <div className="h-1.5 rounded bg-white/40 w-3/4" />
        </div>
      </div>
      {/* approved stamp */}
      <div
        className="absolute right-2 bottom-3 h-12 w-12 rounded-full border-2 flex items-center justify-center text-[9px] font-extrabold tracking-widest"
        style={{
          borderColor: c.from,
          color: c.from,
          transform: "rotate(-14deg)",
          animation: "ma-pulse 2.6s ease-in-out infinite",
        }}
      >
        OK
      </div>
    </div>
  );
}

/* ── Generic shield fallback ── */
function ShieldScene({ c }: Sc) {
  return (
    <div className="relative h-28 w-28" style={{ animation: "ma-float 4s ease-in-out infinite" }}>
      <svg width="112" height="112" viewBox="0 0 112 112" fill="none">
        <path d="M56 6 L102 22 V52 C102 78 82 100 56 106 C30 100 10 78 10 52 V22 Z" fill={`url(#fb-${c.from})`} />
        <path d="M36 56 L50 70 L78 42" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id={`fb-${c.from}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor={c.from} />
            <stop offset="1" stopColor={c.to} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
