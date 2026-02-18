import "./PlanPage.css";
import type { ExerciseId } from "./exercises/catalog";
import { EXERCISES } from "./exercises/catalog";

type SessionCardProps = {
  dayOfWeek: string;
  sessionType: "strength" | "cardio" | "mobility" | "recovery";
  sessionTypeLabel: string;
  intensity: "low" | "medium" | "high";
  intensityLabel: string;
  durationMinutes: number;
  exercises: ExerciseId[];
};

export function SessionCard({
  dayOfWeek,
  sessionType,
  sessionTypeLabel,
  intensity,
  intensityLabel,
  durationMinutes,
  exercises,
}: SessionCardProps) {
  const intensityClass =
    intensity === "low"
      ? "intensityLow"
      : intensity === "medium"
        ? "intensityMedium"
        : "intensityHigh";
  const sessionTypeClass =
    sessionType === "strength"
      ? "sessionTypeStrength"
      : sessionType === "cardio"
        ? "sessionTypeCardio"
        : sessionType === "mobility"
          ? "sessionTypeMobility"
          : "sessionTypeRecovery";

  return (
    <li className="sessionCard">
      <div className="sessionCardInner">
        <div>
          <div className="sessionDay">{dayOfWeek}</div>
          <div>
            <span className={`sessionTypeChip ${sessionTypeClass}`}>{sessionTypeLabel}</span>
            <span className={`intensityBadge ${intensityClass}`}>{intensityLabel}</span>
          </div>
        </div>

        <div className="sessionDuration">{durationMinutes} min</div>
      </div>

      <div className="exerciseSection">
        <div className="exerciseSectionLabel">Exercises</div>

        <div className="exerciseChips">
          {exercises.map((id) => (
            <span key={id} className="exerciseChip">
              {EXERCISES[id].name}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}
