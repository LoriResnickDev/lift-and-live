import { useState } from "react";
import { Link } from "react-router-dom";
import { loadProfile } from "../onboarding/profileStorage";
import { PlanHeader } from "./PlanHeader";
import { SESSION_TYPE_LABEL, INTENSITY_LABEL } from "./planLabels";
import "./PlanPage.css";
import { SessionCard } from "./SessionCard";
import {
  getOrCreateCurrentPlan,
  regenerateCurrentPlan,
  doesStoredPlanMatchProfile,
} from "./planService";
import type { StoredPlan } from "./planStorage";
import type { OnboardingData } from "../onboarding/types";

export default function PlanPage() {
  const result = loadProfile();

  // Extract a typed profile (or null) up front
  const profile: OnboardingData | null = result.kind === "readyProfile" ? result.profile : null;

  // Hooks must be called unconditionally
  const [storedPlan, setStoredPlan] = useState<StoredPlan | null>(() => {
    if (!profile) return null;
    return getOrCreateCurrentPlan(profile).stored;
  });

  const [isRegenerating, setIsRegenerating] = useState(false);

  if (result.kind === "missingProfile") {
    return (
      <div>
        <h2>Your Plan</h2>
        <p>You haven’t completed onboarding yet.</p>
        <Link to="/onboarding">Go to onboarding</Link>
      </div>
    );
  }

  if (result.kind === "invalidProfile") {
    return (
      <div>
        <h2>Your Plan</h2>
        <p>Your profile data is invalid: {result.reason}</p>
        <Link to="/onboarding">Redo onboarding</Link>
      </div>
    );
  }

  // At this point we know profile is ready
  if (!profile || !storedPlan) {
    return <div>Loading plan...</div>;
  }

  const plan = storedPlan.plan;
  const isPlanOutOfDate = !doesStoredPlanMatchProfile(storedPlan, profile);

  function onRegenerate() {
    if (!profile) return;
    setIsRegenerating(true);
    try {
      const next = regenerateCurrentPlan(profile);
      setStoredPlan(next);
    } finally {
      setIsRegenerating(false);
    }
  }

  return (
    <div>
      <PlanHeader
        profile={profile}
        storedPlan={storedPlan}
        isPlanOutOfDate={isPlanOutOfDate}
        isRegenerating={isRegenerating}
        onRegenerate={onRegenerate}
      />

      <details>
        <summary>Plan settings</summary>
        <ul>
          <li>Age range: {profile.ageRange}</li>
          <li>Experience: {profile.experience}</li>
          <li>Days per week: {profile.daysPerWeek}</li>
          <li>Minutes per session: {profile.minutesPerSession}</li>
        </ul>
        <Link to="/onboarding">Edit onboarding</Link>
      </details>

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
            />
          );
        })}
      </ul>
    </div>
  );
}
