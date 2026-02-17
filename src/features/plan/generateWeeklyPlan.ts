import type { Experience, DaysPerWeek, OnboardingData } from "../onboarding/types";
import type { Intensity, DayOfWeek, PlannedSession, SessionType, WeeklyPlan } from "./types";

const DAY_PATTERNS: Record<DaysPerWeek, DayOfWeek[]> = {
    2: ["Monday", "Thursday"],
    3: ["Monday", "Wednesday", "Friday"],
    4: ["Monday", "Tuesday", "Thursday", "Saturday"],
    5: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    6: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    7: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};

const INTENSITY_MAP: Record<SessionType, Record<Experience, Intensity>> = {
    "strength": {
        "beginner": "low",
        "intermediate": "medium",
        "advanced": "medium",
    },
    "cardio": {
        "beginner": "low",
        "intermediate": "low",
        "advanced": "medium",
    },
    "mobility": {
        "beginner": "low",
        "intermediate": "low",
        "advanced": "low",
    },
    "recovery": {
        "beginner": "low",
        "intermediate": "low",
        "advanced": "low",
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

export function generateWeeklyPlan(profile: OnboardingData): WeeklyPlan {
    const daysPerWeek = profile.daysPerWeek; // 3
    const experience = profile.experience; // "beginner"
    const days = DAY_PATTERNS[daysPerWeek]!; // ["Monday", "Wednesday", "Friday"]
    const sessionTypes = SESSION_MIX[daysPerWeek]!; // ["strength", "mobility", "cardio"]
    const plannedSessions: PlannedSession[] = days.map((day, index) => {
        const sessionType = sessionTypes[index]!;
        const intensity = INTENSITY_MAP[sessionType][experience];
        return {
            dayOfWeek: day,
            sessionType,
            intensity,
            durationMinutes: profile.minutesPerSession,
        };
    });
    return {sessions: plannedSessions};
}
