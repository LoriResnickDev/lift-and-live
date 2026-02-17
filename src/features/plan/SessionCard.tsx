import "./PlanPage.css";

type SessionCardProps = {
  dayOfWeek: string;
  sessionType: "strength" | "cardio" | "mobility" | "recovery";
  sessionTypeLabel: string;
  intensity: "low" | "medium" | "high";
  intensityLabel: string;
  durationMinutes: number;
};

export function SessionCard({
  dayOfWeek,
  sessionType,
  sessionTypeLabel,
  intensity,
  intensityLabel,
  durationMinutes,
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
          {/* <div>
            {sessionTypeLabel}{" "}
            <span className={`intensityBadge ${intensityClass}`}>{intensityLabel}</span>
          </div> */}
          <div>
            <span className={`sessionTypeChip ${sessionTypeClass}`}>{sessionTypeLabel}</span>

            <span className={`intensityBadge ${intensityClass}`}>{intensityLabel}</span>
          </div>
        </div>

        <div className="sessionDuration">{durationMinutes} min</div>
      </div>
    </li>
  );
}
