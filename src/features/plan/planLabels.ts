import type { SessionType, Intensity } from "./types";
import type { Experience } from "../profile/types";

export const EXPERIENCE_LABEL: Record<Experience, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export const SESSION_TYPE_LABEL: Record<SessionType, string> = {
  strength: "Strength",
  cardio: "Cardio",
  mobility: "Mobility",
  recovery: "Recovery",
};

export const INTENSITY_LABEL: Record<Intensity, string> = {
  low: "Low intensity",
  medium: "Medium intensity",
  high: "High intensity",
};
