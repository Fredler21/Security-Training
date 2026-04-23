import DashboardSidebar from "@/components/DashboardSidebar";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div style={{ display: "flex", minHeight: "100vh", background: "#f8fafc" }}>
        <DashboardSidebar />
        <main style={{ flex: 1, minWidth: 0, overflow: "auto", position: "relative", background: "#ffffff" }}>
          {/* Soft ambient glow */}
          <div aria-hidden style={{ position: "fixed", top: "6%", right: "-120px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.10), transparent 70%)", filter: "blur(50px)", pointerEvents: "none", zIndex: 0 }} />
          <div aria-hidden style={{ position: "fixed", bottom: "8%", left: "28%", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(3,105,161,0.07), transparent 70%)", filter: "blur(50px)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            {children}
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
