// ─── User ────────────────────────────────────────────────────────────────────

export type UserRole = "employee" | "admin" | "super_admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  status: "active" | "inactive";
  profileImage?: string;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

// ─── Module ──────────────────────────────────────────────────────────────────

export type ModuleStatus = "not_started" | "in_progress" | "completed";

export interface QuizQuestion {
  id: string;
  moduleId: string;
  question: string;
  type: "multiple_choice" | "true_false";
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  slug: string;
  description: string;
  order: number;
  estimatedMinutes: number;
  isActive: boolean;
  icon: string;
  color: string;
  image: string;
  lectureContent: string;
  keyTakeaways: string[];
  realLifeExample: {
    title: string;
    scenario: string;
    lesson: string;
  };
  questions: QuizQuestion[];
  createdAt: string;
  updatedAt: string;
}

// ─── Progress ────────────────────────────────────────────────────────────────

export interface ModuleCompletion {
  id: string;
  userId: string;
  moduleId: string;
  completed: boolean;
  completedAt?: string;
  score?: number;
  attempts: number;
  lastViewedAt?: string;
}

export interface EmployeeTrainingProgress {
  id: string;
  userId: string;
  overallProgress: number;
  completedModulesCount: number;
  totalModulesCount: number;
  status: ModuleStatus;
  lastActivityAt?: string;
  updatedAt: string;
}
