import type { OnboardingData } from "../onboarding/types";
import type { StoredPlan } from "./planStorage";
import { PlanSummary } from "./PlanSummary";
import "./PlanPage.css";

type PlanHeaderProps = {
  profile: OnboardingData;
  storedPlan: StoredPlan;
  isPlanOutOfDate: boolean;
  isRegenerating: boolean;
  onRegenerate: () => void;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString();
}

export function PlanHeader({
  profile,
  storedPlan,
  isPlanOutOfDate,
  isRegenerating,
  onRegenerate,
}: PlanHeaderProps) {
  return (
    <header className="planHeader">
      <h2>Your Plan</h2>

      <PlanSummary profile={profile} />

      <p className="planGeneratedLine">
        <em>
          Generated: {formatDate(storedPlan.createdAt)} (generator {storedPlan.generatorVersion})
        </em>
      </p>

      {isPlanOutOfDate && (
        <div role="status" className="planNotice">
          <div className="planNoticeTitle">Your profile settings have changed</div>
          <div className="planNoticeBody">
            This plan was generated using older onboarding settings. Regenerate to update it.
          </div>
        </div>
      )}

      <div className="planActions">
        <button
          type="button"
          className="buttonPrimary"
          onClick={onRegenerate}
          disabled={isRegenerating}
        >
          {isRegenerating
            ? "Regenerating..."
            : isPlanOutOfDate
              ? "Regenerate (recommended)"
              : "Regenerate plan"}
        </button>
      </div>
    </header>
  );
}
