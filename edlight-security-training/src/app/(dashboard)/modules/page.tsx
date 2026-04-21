import { Search, Filter, Clock, CheckCircle2 } from "lucide-react";
import ModuleCard from "@/components/ModuleCard";
import { modules } from "@/data/modules";
import { ModuleStatus } from "@/types";

// Demo progress state — replaced by Firebase in V2
const demoProgress: Record<string, { status: ModuleStatus; progress: number }> = {
  "module-1": { status: "completed", progress: 100 },
  "module-2": { status: "completed", progress: 100 },
  "module-3": { status: "in_progress", progress: 45 },
  "module-4": { status: "not_started", progress: 0 },
  "module-5": { status: "not_started", progress: 0 },
};

const totalMinutes = modules.reduce((sum, m) => sum + m.estimatedMinutes, 0);
const completedCount = Object.values(demoProgress).filter(
  (p) => p.status === "completed"
).length;

export default function ModulesPage() {
  return (
    <div className="px-6 lg:px-10 py-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">
          Training Curriculum
        </p>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Training Modules</h1>
        <p className="text-slate-500">
          Complete all modules to finish your security certification.
        </p>
      </div>

      {/* Summary strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          {
            icon: CheckCircle2,
            label: "Completed",
            value: `${completedCount} / ${modules.length}`,
            color: "text-teal-600",
            bg: "bg-teal-50",
          },
          {
            icon: Clock,
            label: "Total Time",
            value: `${totalMinutes} min`,
            color: "text-slate-600",
            bg: "bg-slate-50",
          },
          {
            icon: Filter,
            label: "Remaining",
            value: `${modules.length - completedCount}`,
            color: "text-amber-600",
            bg: "bg-amber-50",
          },
          {
            icon: Search,
            label: "Topics",
            value: "5",
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
        ].map(({ icon: Icon, label, value, color, bg }) => (
          <div
            key={label}
            className="bg-white border border-slate-200 rounded-2xl px-4 py-4 flex items-center gap-3 shadow-sm"
          >
            <div className={`h-9 w-9 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
              <Icon className={`h-4.5 w-4.5 ${color}`} />
            </div>
            <div>
              <p className="text-xs text-slate-500">{label}</p>
              <p className="text-sm font-semibold text-slate-900">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended order notice */}
      <div className="flex items-center gap-2.5 bg-teal-50 border border-teal-100 rounded-xl px-4 py-3 mb-8">
        <div className="h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" />
        <p className="text-sm text-teal-700">
          <strong>Recommended:</strong> Complete modules in order for the best learning experience.
        </p>
      </div>

      {/* Module grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((mod) => (
          <ModuleCard
            key={mod.id}
            module={mod}
            status={demoProgress[mod.id]?.status ?? "not_started"}
            progress={demoProgress[mod.id]?.progress ?? 0}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-teal-500" />
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <span>In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-slate-200" />
          <span>Not Started</span>
        </div>
      </div>
    </div>
  );
}
