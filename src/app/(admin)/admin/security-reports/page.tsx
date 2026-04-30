"use client";

import { useEffect, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Eye,
  Flag,
  Loader2,
  RefreshCw,
  X,
} from "lucide-react";
import {
  getSuspiciousReports,
  updateReportStatus,
} from "@/lib/firestore";
import type { SuspiciousReport } from "@/types";

const SEVERITY_COLOR: Record<string, string> = {
  low: "text-blue-600 bg-blue-50 border-blue-200",
  medium: "text-amber-600 bg-amber-50 border-amber-200",
  high: "text-red-600 bg-red-50 border-red-200",
};

const STATUS_COLOR: Record<string, string> = {
  open: "text-red-600 bg-red-50",
  in_review: "text-amber-600 bg-amber-50",
  resolved: "text-emerald-600 bg-emerald-50",
};

const STATUS_LABEL: Record<string, string> = {
  open: "Open",
  in_review: "In Review",
  resolved: "Resolved",
};

export default function SecurityReportsPage() {
  const [reports, setReports] = useState<SuspiciousReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<SuspiciousReport | null>(null);
  const [notes, setNotes] = useState("");
  const [updating, setUpdating] = useState(false);
  const [filterStatus, setFilterStatus] = useState<"all" | SuspiciousReport["status"]>("all");

  async function load() {
    setLoading(true);
    try {
      const data = await getSuspiciousReports();
      setReports(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void load(); }, []);

  async function handleStatusChange(reportId: string, status: SuspiciousReport["status"]) {
    setUpdating(true);
    try {
      await updateReportStatus(reportId, status, notes || undefined);
      await load();
      setSelected(null);
      setNotes("");
    } finally {
      setUpdating(false);
    }
  }

  const filtered = filterStatus === "all"
    ? reports
    : reports.filter((r) => r.status === filterStatus);

  const counts = {
    open: reports.filter((r) => r.status === "open").length,
    in_review: reports.filter((r) => r.status === "in_review").length,
    resolved: reports.filter((r) => r.status === "resolved").length,
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6 sm:py-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-red-600 mb-1">
            Security Team
          </p>
          <h1 className="text-2xl font-bold text-slate-900">Suspicious Activity Reports</h1>
          <p className="text-slate-500 text-sm mt-1">
            Reviewed by <span className="font-semibold text-slate-700">Fredler Pierre-Louis</span> — Technology &amp; Cybersecurity Lead
          </p>
        </div>
        <button
          onClick={() => void load()}
          className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
        >
          <RefreshCw className="h-4 w-4" /> Refresh
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Open", count: counts.open, icon: Flag, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
          { label: "In Review", count: counts.in_review, icon: Eye, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
          { label: "Resolved", count: counts.resolved, icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
        ].map(({ label, count, icon: Icon, color, bg, border }) => (
          <div key={label} className={`rounded-2xl border ${border} ${bg} px-5 py-4 flex items-center gap-4`}>
            <div className={`h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm`}>
              <Icon className={`h-5 w-5 ${color}`} />
            </div>
            <div>
              <p className="text-xs text-slate-500">{label}</p>
              <p className={`text-2xl font-bold ${color}`}>{count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(["all", "open", "in_review", "resolved"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilterStatus(s)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
              filterStatus === s
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
            }`}
          >
            {s === "all" ? `All (${reports.length})` : `${STATUS_LABEL[s]} (${counts[s]})`}
          </button>
        ))}
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <Flag className="h-8 w-8 mx-auto mb-3 opacity-40" />
          <p className="text-sm font-medium">No reports found.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((r) => (
            <div
              key={r.id}
              className="bg-white border border-slate-200 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Severity badge */}
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border uppercase tracking-wide flex-shrink-0 ${SEVERITY_COLOR[r.severity]}`}>
                <AlertTriangle className="h-3 w-3" />
                {r.severity}
              </span>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">{r.description}</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  <span className="font-medium text-slate-700">{r.reporterName}</span>
                  {r.reporterEmail ? ` (${r.reporterEmail})` : ""} &mdash; {r.moduleTitle}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {new Date(r.submittedAt).toLocaleString()}
                </p>
              </div>

              {/* Status badge */}
              <span className={`text-xs font-semibold rounded-full px-3 py-1 flex-shrink-0 ${STATUS_COLOR[r.status]}`}>
                {STATUS_LABEL[r.status]}
              </span>

              {/* Action */}
              <button
                onClick={() => { setSelected(r); setNotes(r.notes ?? ""); }}
                className="flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors flex-shrink-0"
              >
                <Eye className="h-3.5 w-3.5" /> View
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50">
              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
              <p className="flex-1 font-bold text-slate-900 text-sm">Report Detail</p>
              <button
                onClick={() => setSelected(null)}
                className="h-8 w-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Reporter</p>
                  <p className="font-semibold text-slate-800">{selected.reporterName}</p>
                  <p className="text-xs text-slate-500">{selected.reporterEmail}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Module</p>
                  <p className="font-semibold text-slate-800">{selected.moduleTitle}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Severity</p>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${SEVERITY_COLOR[selected.severity]}`}>
                    {selected.severity.toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Submitted</p>
                  <p className="text-sm text-slate-700">{new Date(selected.submittedAt).toLocaleString()}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-1">Description</p>
                <p className="text-sm text-slate-800 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 leading-relaxed">
                  {selected.description}
                </p>
              </div>

              <div>
                <label className="text-xs text-slate-400 mb-1 block">Security Team Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Add investigation notes…"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 resize-none"
                />
              </div>

              <div className="flex gap-2 pt-1 flex-wrap">
                {selected.status !== "in_review" && (
                  <button
                    onClick={() => void handleStatusChange(selected.id, "in_review")}
                    disabled={updating}
                    className="flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-600 transition-colors disabled:opacity-50"
                  >
                    <Eye className="h-4 w-4" /> Mark In Review
                  </button>
                )}
                {selected.status !== "resolved" && (
                  <button
                    onClick={() => void handleStatusChange(selected.id, "resolved")}
                    disabled={updating}
                    className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors disabled:opacity-50"
                  >
                    {updating ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
                    Resolve
                  </button>
                )}
                {selected.status !== "open" && (
                  <button
                    onClick={() => void handleStatusChange(selected.id, "open")}
                    disabled={updating}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50"
                  >
                    Reopen
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
