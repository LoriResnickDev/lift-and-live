import { Link } from "react-router-dom";
import { loadProfile } from "../onboarding/profileStorage";

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
  return (
    <div>
      <h2>Your Plan</h2>

      <p>Profile loaded successfully.</p>

      <h3>Profile details</h3>
      <ul>
        <li>Age range: {result.profile.ageRange}</li>
        <li>Experience: {result.profile.experience}</li>
        <li>Days per week: {result.profile.daysPerWeek}</li>
        <li>Minutes per session: {result.profile.minutesPerSession}</li>
      </ul>

      <p>Plan generation coming next.</p>
    </div>
  );
}
