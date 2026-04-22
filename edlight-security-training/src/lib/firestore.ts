import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import type { ModuleCompletion, EmployeeTrainingProgress } from "@/types";

// ─── Module Completions ───────────────────────────────────────────────────────

export async function getModuleCompletions(
  userId: string
): Promise<Record<string, ModuleCompletion>> {
  const q = query(
    collection(db, "moduleCompletions"),
    where("userId", "==", userId)
  );
  const snap = await getDocs(q);
  const result: Record<string, ModuleCompletion> = {};
  snap.forEach((d) => {
    const data = d.data() as ModuleCompletion;
    result[data.moduleId] = data;
  });
  return result;
}

export async function saveModuleCompletion(
  userId: string,
  moduleId: string,
  score: number,
  totalModules: number
): Promise<void> {
  const completionRef = doc(db, "moduleCompletions", `${userId}_${moduleId}`);

  // Fetch existing to increment attempts
  const existing = await getDoc(completionRef);
  const prevAttempts = existing.exists() ? (existing.data().attempts ?? 0) : 0;

  await setDoc(
    completionRef,
    {
      id: `${userId}_${moduleId}`,
      userId,
      moduleId,
      completed: true,
      completedAt: serverTimestamp(),
      score,
      attempts: prevAttempts + 1,
      lastViewedAt: serverTimestamp(),
    },
    { merge: true }
  );

  // Recalculate overall progress
  await recalculateUserProgress(userId, totalModules);
}

// ─── User Overall Progress ────────────────────────────────────────────────────

export async function getUserProgress(
  userId: string
): Promise<EmployeeTrainingProgress | null> {
  const snap = await getDoc(doc(db, "userProgress", userId));
  return snap.exists() ? (snap.data() as EmployeeTrainingProgress) : null;
}

async function recalculateUserProgress(
  userId: string,
  totalModules: number
): Promise<void> {
  const completions = await getModuleCompletions(userId);
  const completedCount = Object.values(completions).filter((c) => c.completed).length;
  const overallProgress = Math.round((completedCount / totalModules) * 100);

  await setDoc(
    doc(db, "userProgress", userId),
    {
      id: userId,
      userId,
      overallProgress,
      completedModulesCount: completedCount,
      totalModulesCount: totalModules,
      status: completedCount === totalModules ? "completed" : completedCount > 0 ? "in_progress" : "not_started",
      lastActivityAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

// ─── Admin Queries ────────────────────────────────────────────────────────────

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  jobTitle: string;
  profileImage: string;
  status: string;
  lastLoginAt: string | null;
  createdAt: string | null;
}

export async function getAllUsers(): Promise<AdminUser[]> {
  const snap = await getDocs(
    query(collection(db, "users"), orderBy("name"))
  );
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      name: data.name ?? "",
      email: data.email ?? "",
      role: data.role ?? "employee",
      department: data.department ?? "",
      jobTitle: data.jobTitle ?? "",
      profileImage: data.profileImage ?? "",
      status: data.status ?? "active",
      lastLoginAt: data.lastLoginAt?.toDate?.()?.toISOString() ?? null,
      createdAt: data.createdAt?.toDate?.()?.toISOString() ?? null,
    };
  });
}

export async function getUserById(userId: string): Promise<AdminUser | null> {
  const snap = await getDoc(doc(db, "users", userId));
  if (!snap.exists()) return null;
  const data = snap.data();
  return {
    id: snap.id,
    name: data.name ?? "",
    email: data.email ?? "",
    role: data.role ?? "employee",
    department: data.department ?? "",
    jobTitle: data.jobTitle ?? "",
    profileImage: data.profileImage ?? "",
    status: data.status ?? "active",
    lastLoginAt: data.lastLoginAt?.toDate?.()?.toISOString() ?? null,
    createdAt: data.createdAt?.toDate?.()?.toISOString() ?? null,
  };
}

export async function getCompletionsForUser(
  userId: string
): Promise<Record<string, import("@/types").ModuleCompletion>> {
  const q = query(
    collection(db, "moduleCompletions"),
    where("userId", "==", userId)
  );
  const snap = await getDocs(q);
  const result: Record<string, import("@/types").ModuleCompletion> = {};
  snap.forEach((d) => {
    const data = d.data() as import("@/types").ModuleCompletion;
    result[data.moduleId] = data;
  });
  return result;
}

export async function getAllProgressRecords(): Promise<import("@/types").EmployeeTrainingProgress[]> {
  const snap = await getDocs(collection(db, "userProgress"));
  return snap.docs.map((d) => d.data() as import("@/types").EmployeeTrainingProgress);
}
