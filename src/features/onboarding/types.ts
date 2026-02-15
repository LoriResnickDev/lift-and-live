export type AgeRange = "40-49" | "50-59" | "60-69" | "70+";
export type Experience = "beginner" | "intermediate" | "advanced";

export type OnboardingData = {
  ageRange: AgeRange;
  experience: Experience;
  daysPerWeek: number;
  minutesPerSession: number;
};
