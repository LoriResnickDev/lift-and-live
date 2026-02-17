import { Link } from "react-router-dom";
import { loadProfile } from "../onboarding/profileStorage";
import { generateWeeklyPlan } from "./generateWeeklyPlan";
import { SESSION_TYPE_LABEL, INTENSITY_LABEL } from "./planLabels";

export default function PlanPage() {
  const result = loadProfile();

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

  // result.kind === "readyProfile"
  const plan = generateWeeklyPlan(result.profile);
  return (
    <div>
      <h2>Your Plan</h2>

      <details>
        <summary>Plan settings</summary>
        <ul>
          <li>Age range: {result.profile.ageRange}</li>
          <li>Experience: {result.profile.experience}</li>
          <li>Days per week: {result.profile.daysPerWeek}</li>
          <li>Minutes per session: {result.profile.minutesPerSession}</li>
        </ul>
        <Link to="/onboarding">Edit onboarding</Link>
      </details>

      <h3>Weekly Plan</h3>
      <ul>
        {plan.sessions.map((session) => (
          <li key={`${session.dayOfWeek}-${session.sessionType}`}>
            <strong>{session.dayOfWeek}</strong>: {SESSION_TYPE_LABEL[session.sessionType]} (
            {INTENSITY_LABEL[session.intensity]}) - {session.durationMinutes} minutes
          </li>
        ))}
      </ul>
    </div>
  );
}
