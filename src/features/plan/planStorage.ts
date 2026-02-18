// src/features/plan/planStorage.ts
import { clearStorageKey, loadFromStorage, saveToStorage } from "../../lib/storage";
import type { WeeklyPlan } from "./types";
import type { ExerciseId } from "./exercises/catalog";
import type { PlannedSession } from "./types";

// A legacy session is a PlannedSession without the exercises field
type LegacySession = Omit<PlannedSession, "exercises">;
function hasExercises(value: PlannedSession | LegacySession): value is PlannedSession {
  // We avoid `any` by using safe narrowing
  return "exercises" in value && Array.isArray((value as { exercises?: unknown }).exercises);
}

const PLAN_KEY = "lift-and-live:currentPlan:v1";

export type StoredPlan = {
  plan: WeeklyPlan;
  createdAt: string; // ISO string
  generatorVersion: string;
  profileFingerprint: string;
};

function migrateStoredPlan(stored: StoredPlan): StoredPlan {
  return {
    ...stored,
    plan: {
      ...stored.plan,
      sessions: stored.plan.sessions.map((s: PlannedSession | LegacySession) => {
        if (hasExercises(s)) {
          return s;
        }
        // Legacy session -> add exercises
        return { ...s, exercises: [] as ExerciseId[] };
      }),
    },
  };
}

export function savePlan(plan: WeeklyPlan, profileFingerprint: string, generatorVersion = "v1") {
  const stored: StoredPlan = {
    plan,
    createdAt: new Date().toISOString(),
    generatorVersion,
    profileFingerprint,
  };
  saveToStorage(PLAN_KEY, stored);
}

export function loadPlan(): StoredPlan | null {
  const stored = loadFromStorage<StoredPlan>(PLAN_KEY);
  if (!stored) return null;
  return migrateStoredPlan(stored);
}

export function clearPlan() {
  clearStorageKey(PLAN_KEY);
}
