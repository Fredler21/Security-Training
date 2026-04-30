"use client";

import { useState } from "react";
import { X, AlertTriangle, Send, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { submitSuspiciousReport } from "@/lib/firestore";
import type { ReportSeverity } from "@/types";

interface Props {
  moduleId: string;
  moduleTitle: string;
  onClose: () => void;
}

const SEVERITY_OPTIONS: { value: ReportSeverity; label: string; color: string }[] = [
  { value: "low", label: "Low — Slightly odd, worth noting", color: "text-blue-600 bg-blue-50 border-blue-200" },
  { value: "medium", label: "Medium — Clearly suspicious", color: "text-amber-600 bg-amber-50 border-amber-200" },
  { value: "high", label: "High — Potential active threat", color: "text-red-600 bg-red-50 border-red-200" },
];

export default function ReportSuspiciousModal({ moduleId, moduleTitle, onClose }: Props) {
  const { user } = useAuth();
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState<ReportSeverity>("medium");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !description.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      await submitSuspiciousReport({
        reportedBy: user.uid,
        reporterName: user.displayName ?? user.email ?? "Unknown",
        reporterEmail: user.email ?? "",
        moduleId,
        moduleTitle,
        description: description.trim(),
        severity,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit report. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-red-50">
          <div className="h-9 w-9 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-red-700">Report Suspicious Activity</p>
            <p className="text-xs text-red-500 truncate">
              Sent to: Fredler Pierre-Louis — Technology &amp; Cybersecurity Lead
            </p>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {submitted ? (
          /* Success state */
          <div className="flex flex-col items-center justify-center text-center py-12 px-6 gap-4">
            <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-7 w-7 text-green-600" />
            </div>
            <div>
              <p className="text-base font-bold text-slate-900 mb-1">Report Submitted</p>
              <p className="text-sm text-slate-500">
                Your report has been sent to the security team. Fredler Pierre-Louis will
                review your ticket and follow up if needed.
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-2 rounded-xl bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Module context */}
            <div className="text-xs text-slate-500 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
              Module: <span className="font-semibold text-slate-700">{moduleTitle}</span>
            </div>

            {/* Severity */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Severity Level
              </label>
              <div className="flex flex-col gap-2">
                {SEVERITY_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all ${
                      severity === opt.value
                        ? opt.color + " shadow-sm"
                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="severity"
                      value={opt.value}
                      checked={severity === opt.value}
                      onChange={() => setSeverity(opt.value)}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                What did you notice? <span className="text-red-500">*</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="Describe what you saw, where you saw it, and any other relevant details…"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-300 resize-none"
                required
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <div className="flex gap-3 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting || !description.trim()}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {submitting ? "Sending…" : "Send Report"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
