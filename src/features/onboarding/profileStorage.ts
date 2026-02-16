import { loadOnboarding } from "../../lib/storage";
import type {
  ProfileLoadResult,
  MissingProfileState,
  InvalidProfileState,
  ReadyProfileState,
} from "../plan/types";
import type { OnboardingData } from "./types";

function isOnboardingData(value: unknown): value is OnboardingData {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const v = value as Record<string, unknown>;

  if (typeof v.ageRange !== "string") return false;
  if (typeof v.experience !== "string") return false;

  if (typeof v.daysPerWeek !== "number") return false;
  if (!Number.isInteger(v.daysPerWeek)) return false;
  if (v.daysPerWeek < 2 || v.daysPerWeek > 7) return false;

  if (typeof v.minutesPerSession !== "number") return false;
  if (!Number.isInteger(v.minutesPerSession)) return false;
  if (v.minutesPerSession < 10 || v.minutesPerSession > 90) return false;

  return true;
}
export function loadProfile(): ProfileLoadResult {
    const raw = loadOnboarding<unknown>();
    if (raw === null) {
        const result: MissingProfileState = { kind: "missingProfile" };
        return result;
    }
    if (!isOnboardingData(raw)) {
        const result: InvalidProfileState = { 
            kind: "invalidProfile", 
            reason: "Profile data is incomplete or malformed, or out of allowed range.", 
            action: "redoOnboarding" 
        };
        return result;
    }
    const result: ReadyProfileState = { 
        kind: "readyProfile", 
        profile: raw 
    };
    return result;
};
