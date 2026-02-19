import type { Experience, DaysPerWeek, ProfileData } from "../profile/types";
import type { Intensity, DayOfWeek, PlannedSession, SessionType, WeeklyPlan } from "./types";
import type { ExerciseId } from "./exercises/catalog";

const STRENGTH_POOL: ExerciseId[] = [
  "goblet_squat",
  "romanian_deadlift",
  "bent_over_row",
  "push_up",
  "overhead_press",
  "lateral_raise",
  "bicep_curl",
  "overhead_tricep_extension",
  "plank",
  "side_plank",
  "dead_bug",
];

const CARDIO_POOL: ExerciseId[] = [
  "brisk_walk",
  "dance_cardio",
  "step_ups",
  "jumping_jacks",
  "marching_in_place",
  "cycling",
  "treadmill_walk",
];

const MOBILITY_POOL: ExerciseId[] = [
  "figure_4_stretch",
  "hamstring_stretch",
  "quad_stretch",
  "calf_stretch",
  "hip_flexor_stretch",
  "chest_stretch",
  "shoulder_stretch",
  "cat_cow",
  "childs_pose",
  "gentle_yoga",
];

const RECOVERY_POOL: ExerciseId[] = [
  "gentle_walk",
  "legs_up_wall",
  "breathing_exercise",
  "meditation",
  "supine_rest",
  "knees_to_chest",
  "supine_twist",
  "reclined_bound_angle",
  "supported_childs_pose",
  "gentle_neck_stretch",
  "foam_roll",
];

function pickExercises(pool: ExerciseId[], count: number, seed: number): ExerciseId[] {
  if (count <= 0) return [];
  const result: ExerciseId[] = [];
  for (let i = 0; i < count; i++) {
    result.push(pool[(seed + i) % pool.length]);
  }
  return result;
}

const DAY_PATTERNS: Record<DaysPerWeek, DayOfWeek[]> = {
  2: ["Monday", "Thursday"],
  3: ["Monday", "Wednesday", "Friday"],
  4: ["Monday", "Tuesday", "Thursday", "Saturday"],
  5: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
  6: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  7: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};

const INTENSITY_MAP: Record<SessionType, Record<Experience, Intensity>> = {
  strength: {
    beginner: "low",
    intermediate: "medium",
    advanced: "medium",
  },
  cardio: {
    beginner: "low",
    intermediate: "low",
    advanced: "medium",
  },
  mobility: {
    beginner: "low",
    intermediate: "low",
    advanced: "low",
  },
  recovery: {
    beginner: "low",
    intermediate: "low",
    advanced: "low",
  },
};

const SESSION_MIX: Record<DaysPerWeek, SessionType[]> = {
  2: ["strength", "cardio"],
  3: ["strength", "mobility", "cardio"],
  4: ["strength", "mobility", "cardio", "recovery"],
  5: ["strength", "mobility", "cardio", "strength", "recovery"],
  6: ["strength", "mobility", "cardio", "strength", "cardio", "recovery"],
  7: ["strength", "mobility", "cardio", "strength", "mobility", "cardio", "recovery"],
};

export function generateWeeklyPlan(profile: ProfileData): WeeklyPlan {
  const daysPerWeek = profile.daysPerWeek; // 3
  const experience = profile.experience; // "beginner"
  const days = DAY_PATTERNS[daysPerWeek]!; // ["Monday", "Wednesday", "Friday"]
  const sessionTypes = SESSION_MIX[daysPerWeek]!; // ["strength", "mobility", "cardio"]
  const plannedSessions: PlannedSession[] = days.map((day, index) => {
    const sessionType = sessionTypes[index]!;
    const intensity = INTENSITY_MAP[sessionType][experience];

    const exercises =
      sessionType === "strength"
        ? pickExercises(STRENGTH_POOL, 5, index)
        : sessionType === "cardio"
          ? pickExercises(CARDIO_POOL, 1, index)
          : sessionType === "mobility"
            ? pickExercises(MOBILITY_POOL, 4, index)
            : pickExercises(RECOVERY_POOL, 3, index);

    return {
      dayOfWeek: day,
      sessionType,
      intensity,
      durationMinutes: profile.minutesPerSession,
      exercises,
    };
  });
  return { sessions: plannedSessions };
}
