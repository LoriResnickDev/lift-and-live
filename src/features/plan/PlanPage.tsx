import { Link } from "react-router-dom";
import { loadProfile } from "../profile/profileStorage";
import { PlanHeader } from "./PlanHeader";
import { SESSION_TYPE_LABEL, INTENSITY_LABEL } from "./planLabels";
import "./PlanPage.css";
import { SessionCard } from "./SessionCard";
import { getOrCreateCurrentPlan } from "./planService";
import type { OnboardingData } from "../profile/types";

export default function PlanPage() {
  const result = loadProfile();

  // Extract a typed profile (or null) up front
  const profile: OnboardingData | null = result.kind === "readyProfile" ? result.profile : null;

  const storedPlan = profile ? getOrCreateCurrentPlan(profile).stored : null;

  if (result.kind === "missingProfile") {
    return (
      <div>
        <h2>Your Plan</h2>
        <p>You haven't completed your profile yet.</p>
        <Link to="/profile">Go to profile</Link>
      </div>
    );
  }

  if (result.kind === "invalidProfile") {
    return (
      <div>
        <h2>Your Plan</h2>
        <p>Your profile data is invalid: {result.reason}</p>
        <Link to="/profile">Redo profile</Link>
      </div>
    );
  }

  // At this point we know profile is ready
  if (!profile || !storedPlan) {
    return <div>Loading plan...</div>;
  }

  const plan = storedPlan.plan;

  return (
    <div>
      <PlanHeader profile={profile} />

      <h3>Weekly Plan</h3>
      <ul className="sessionsGrid">
        {plan.sessions.map((session, idx) => {
          const sessionTypeLabel = SESSION_TYPE_LABEL[session.sessionType];
          const intensityLabel = INTENSITY_LABEL[session.intensity];

          return (
            <SessionCard
              key={`${session.dayOfWeek}-${session.sessionType}-${idx}`}
              dayOfWeek={session.dayOfWeek}
              sessionType={session.sessionType}
              sessionTypeLabel={sessionTypeLabel}
              intensity={session.intensity}
              intensityLabel={intensityLabel}
              durationMinutes={session.durationMinutes}
              exercises={session.exercises}
            />
          );
        })}
      </ul>
    </div>
  );
}
