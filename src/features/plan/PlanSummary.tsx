import type { ProfileData } from "../profile/types";
import { EXPERIENCE_LABEL } from "./planLabels";
import "./PlanPage.css";

type PlanSummaryProps = {
  profile: ProfileData;
};

export function PlanSummary({ profile }: PlanSummaryProps) {
  return (
    <p className="planSummary">
      {profile.daysPerWeek} days/week • {profile.minutesPerSession} min/session •{" "}
      {EXPERIENCE_LABEL[profile.experience]} • Age {profile.ageRange}
    </p>
  );
}
