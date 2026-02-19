import type { OnboardingData } from "../profile/types";
import { PlanSummary } from "./PlanSummary";
import "./PlanPage.css";
import { useNavigate } from "react-router-dom";

type PlanHeaderProps = {
  profile: OnboardingData;
};

export function PlanHeader({ profile }: PlanHeaderProps) {
  const navigate = useNavigate();
  return (
    <header className="planHeader">
      <h2>Your Plan</h2>
      <div className="planSummaryRow">
        <PlanSummary profile={profile} />
        <button type="button" className="buttonSecondary" onClick={() => navigate("/profile")}>
          Edit profile
        </button>
      </div>
    </header>
  );
}
