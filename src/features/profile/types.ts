export type AgeRange = "40-49" | "50-59" | "60-69" | "70+";
export type Experience = "beginner" | "intermediate" | "advanced";
export type DaysPerWeek = 2 | 3 | 4 | 5 | 6 | 7;

export type ProfileData = {
  ageRange: AgeRange;
  experience: Experience;
  daysPerWeek: DaysPerWeek;
  minutesPerSession: number;
};
