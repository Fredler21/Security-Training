import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  TrendingUp,
  BarChart2,
  ChevronRight,
  Circle,
  Loader2,
} from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import StatusBadge from "@/components/StatusBadge";
import { modules } from "@/data/modules";
import { ModuleStatus } from "@/types";

// Demo data — replaced by Firebase in V2
const demoProgress: Record<
  string,
  { status: ModuleStatus; score: number | null; completedAt: string | null; progress: number }
> = {
  "module-1": {
    status: "completed",
    score: 100,
    completedAt: "2026-04-14",
    progress: 100,
  },
  "module-2": {
    status: "completed",
    score: 75,
    completedAt: "2026-04-16",
    progress: 100,
  },
  "module-3": {
    status: "in_progress",
    score: null,
    completedAt: null,
    progress: 45,
  },
  "module-4": { status: "not_started", score: null, completedAt: null, progress: 0 },
  "module-5": { status: "not_started", score: null, completedAt: null, progress: 0 },
};

const completedModules = modules.filter(
  (m) => demoProgress[m.id]?.status === "completed"
);
const inProgressModules = modules.filter(
  (m) => demoProgress[m.id]?.status === "in_progress"
);
const remainingModules = modules.filter(
  (m) => demoProgress[m.id]?.status === "not_started"
);

const overallPercent = Math.round((completedModules.length / modules.length) * 100);
const avgScore =
  completedModules.length > 0
    ? Math.round(
        completedModules.reduce(
          (sum, m) => sum + (demoProgress[m.id]?.score ?? 0),
          0
        ) / completedModules.length
      )
    : null;

const totalMinutes = modules.reduce((sum, m) => sum + m.estimatedMinutes, 0);
const minutesDone = completedModules.reduce((sum, m) => sum + m.estimatedMinutes, 0);

export default function ProgressPage() {
  return (
    <div className="px-6 lg:px-10 py-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">
          Progress Report
        </p>
        <h1 className="text-2xl font-bold text-slate-900">My Training Progress</h1>
        <p className="text-slate-500 mt-1">Track your completion and quiz performance.</p>
      </div>

      {/* Overall stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          {
            icon: TrendingUp,
            label: "Overall Progress",
            value: `${overallPercent}%`,
            color: "text-teal-600",
            bg: "bg-teal-50",
          },
          {
            icon: CheckCircle2,
            label: "Modules Done",
            value: `${completedModules.length} / ${modules.length}`,
            color: "text-green-600",
            bg: "bg-green-50",
          },
          {
            icon: BarChart2,
            label: "Avg. Quiz Score",
            value: avgScore !== null ? `${avgScore}%` : "—",
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
          {
            icon: Clock,
            label: "Time Completed",
            value: `${minutesDone} min`,
            color: "text-slate-600",
            bg: "bg-slate-50",
          },
        ].map(({ icon: Icon, label, value, color, bg }) => (
          <div
            key={label}
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {label}
              </p>
              <div className={`h-8 w-8 rounded-lg ${bg} flex items-center justify-center`}>
                <Icon className={`h-4 w-4 ${color}`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      {/* Overall progress bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[15px] font-semibold text-slate-900">Completion Overview</h2>
          <span className="text-lg font-bold text-teal-600">{overallPercent}%</span>
        </div>
        <ProgressBar value={overallPercent} size="lg" />
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <span>{minutesDone} min completed</span>
          <span>{totalMinutes - minutesDone} min remaining</span>
        </div>
      </div>

      {/* Module breakdown */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-[15px] font-semibold text-slate-900">Module Breakdown</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {modules.map((mod) => {
            const prog = demoProgress[mod.id];
            return (
              <div key={mod.id} className="px-6 py-4 flex items-center gap-4">
                {/* Status icon */}
                <div className="flex-shrink-0">
                  {prog.status === "completed" ? (
                    <div className="h-9 w-9 rounded-full bg-teal-100 flex items-center justify-center">
                      <CheckCircle2 className="h-4.5 w-4.5 text-teal-600" />
                    </div>
                  ) : prog.status === "in_progress" ? (
                    <div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center">
                      <Loader2 className="h-4.5 w-4.5 text-amber-600" />
                    </div>
                  ) : (
                    <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center">
                      <Circle className="h-4.5 w-4.5 text-slate-400" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-sm font-semibold text-slate-900">{mod.title}</p>
                    <StatusBadge variant={prog.status} />
                  </div>
                  {prog.status === "in_progress" && (
                    <ProgressBar value={prog.progress} size="sm" />
                  )}
                  {prog.status === "completed" && prog.completedAt && (
                    <p className="text-xs text-slate-400">
                      Completed {prog.completedAt}
                    </p>
                  )}
                  {prog.status === "not_started" && (
                    <p className="text-xs text-slate-400">{mod.estimatedMinutes} min</p>
                  )}
                </div>

                {/* Score */}
                <div className="flex-shrink-0 flex items-center gap-4">
                  {prog.score !== null ? (
                    <div className="text-right">
                      <p className="text-xs text-slate-400">Quiz Score</p>
                      <p
                        className={`text-sm font-bold ${
                          prog.score >= 75 ? "text-teal-600" : "text-amber-600"
                        }`}
                      >
                        {prog.score}%
                      </p>
                    </div>
                  ) : prog.status !== "completed" ? (
                    <Link
                      href={`/modules/${mod.slug}`}
                      className="text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1"
                    >
                      {prog.status === "in_progress" ? "Continue" : "Start"}
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Completeness message */}
      {completedModules.length === modules.length ? (
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 text-center">
          <CheckCircle2 className="h-10 w-10 text-teal-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-teal-900 mb-1">
            All modules completed!
          </h3>
          <p className="text-sm text-teal-700">
            You have finished the EdLight Security Training program. Great job.
          </p>
        </div>
      ) : (
        <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[15px] font-semibold text-slate-900 mb-1">
              {remainingModules.length + inProgressModules.length} module
              {remainingModules.length + inProgressModules.length !== 1 ? "s" : ""} left to complete
            </p>
            <p className="text-sm text-slate-500">
              Keep going — you're {overallPercent}% through the program.
            </p>
          </div>
          <Link
            href="/modules"
            className="flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            Continue Training <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
