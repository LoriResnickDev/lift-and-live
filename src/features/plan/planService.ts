// src/features/plan/planService.ts
import type { OnboardingData } from "../profile/types";
import type { WeeklyPlan } from "./types";
import { generateWeeklyPlan } from "./generateWeeklyPlan";
import { loadPlan, savePlan, type StoredPlan } from "./planStorage";

// Deterministic fingerprint of profile settings
function fingerprintProfile(profile: OnboardingData): string {
  return JSON.stringify({
    ageRange: profile.ageRange,
    experience: profile.experience,
    daysPerWeek: profile.daysPerWeek,
    minutesPerSession: profile.minutesPerSession,
  });
}

export type GetOrCreatePlanResult =
  | { kind: "loaded"; stored: StoredPlan }
  | { kind: "generated"; stored: StoredPlan };

export function getOrCreateCurrentPlan(profile: OnboardingData): GetOrCreatePlanResult {
  const existing = loadPlan();
  const currentFingerprint = fingerprintProfile(profile);
  if (existing) {
    return { kind: "loaded", stored: existing };
  }

  const plan: WeeklyPlan = generateWeeklyPlan(profile);
  savePlan(plan, currentFingerprint, "v1");

  // Immediately read back what we saved (single source of truth)
  const stored = loadPlan();
  if (!stored) {
    // Extremely unlikely unless storage is blocked/disabled.
    // Keep it simple: fall back to an in-memory stored shape.
    return {
      kind: "generated",
      stored: {
        plan,
        createdAt: new Date().toISOString(),
        generatorVersion: "v1",
        profileFingerprint: currentFingerprint,
      },
    };
  }

  return { kind: "generated", stored };
}

export function regenerateCurrentPlan(profile: OnboardingData): StoredPlan {
  const plan: WeeklyPlan = generateWeeklyPlan(profile);
  const currentFingerprint = fingerprintProfile(profile);
  savePlan(plan, currentFingerprint, "v1");

  const stored = loadPlan();
  if (!stored) {
    return {
      plan,
      createdAt: new Date().toISOString(),
      generatorVersion: "v1",
      profileFingerprint: currentFingerprint,
    };
  }

  return stored;
}

export function doesStoredPlanMatchProfile(stored: StoredPlan, profile: OnboardingData): boolean {
  return stored.profileFingerprint === fingerprintProfile(profile);
}

export function saveCurrentPlanForProfile(profile: OnboardingData): StoredPlan {
  const plan: WeeklyPlan = generateWeeklyPlan(profile);
  const currentFingerprint = fingerprintProfile(profile); // keep for metadata (optional)
  savePlan(plan, currentFingerprint, "v1");

  const stored = loadPlan();
  if (!stored) {
    return {
      plan,
      createdAt: new Date().toISOString(),
      generatorVersion: "v1",
      profileFingerprint: currentFingerprint,
    };
  }

  return stored;
}
