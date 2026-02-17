import "./PlanPage.css";

type SessionCardProps = {
  dayOfWeek: string;
  sessionTypeLabel: string;
  intensityLabel: string;
  durationMinutes: number;
};

export function SessionCard({
  dayOfWeek,
  sessionTypeLabel,
  intensityLabel,
  durationMinutes,
}: SessionCardProps) {
  return (
    <li className="sessionCard">
      <div className="sessionCardInner">
        <div>
          <div className="sessionDay">{dayOfWeek}</div>
          <div>
            {sessionTypeLabel} ({intensityLabel})
          </div>
        </div>

        <div className="sessionDuration">{durationMinutes} min</div>
      </div>
    </li>
  );
}
