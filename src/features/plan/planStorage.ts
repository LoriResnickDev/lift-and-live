// src/features/plan/planStorage.ts
import { clearStorageKey, loadFromStorage, saveToStorage } from "../../lib/storage";
import type { WeeklyPlan } from "./types";

const PLAN_KEY = "lift-and-live:currentPlan:v1";

export type StoredPlan = {
  plan: WeeklyPlan;
  createdAt: string; // ISO string
  generatorVersion: string;
  profileFingerprint: string;
};

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
  return loadFromStorage<StoredPlan>(PLAN_KEY);
}

export function clearPlan() {
  clearStorageKey(PLAN_KEY);
}
