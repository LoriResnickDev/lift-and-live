import type { OnboardingData } from "../profile/types";
import type { ExerciseId } from "./exercises/catalog";
export type SessionType = "strength" | "cardio" | "mobility" | "recovery";
export type Intensity = "low" | "medium" | "high";
export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type PlannedSession = {
  dayOfWeek: DayOfWeek;
  sessionType: SessionType;
  intensity: Intensity;
  durationMinutes: number;
  exercises: ExerciseId[];
};

export type WeeklyPlan = {
  sessions: PlannedSession[];
};

export type MissingProfileState = {
  kind: "missingProfile";
};

export type InvalidProfileState = {
  kind: "invalidProfile";
  reason: string;
  action: "redoOnboarding";
};

export type ReadyProfileState = {
  kind: "readyProfile";
  profile: OnboardingData;
};

export type ReadyState = {
  kind: "ready";
  profile: OnboardingData;
  plan: WeeklyPlan;
};

export type ProfileLoadResult = MissingProfileState | InvalidProfileState | ReadyProfileState;
export type PlanResult = MissingProfileState | InvalidProfileState | ReadyState;
