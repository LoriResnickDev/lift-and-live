import { useState } from "react";
import type { ProfileData, AgeRange, Experience, DaysPerWeek } from "./types";
import { saveProfile, loadProfile, clearProfile } from "../../lib/storage";
import { saveCurrentPlanForProfile } from "../plan/planService";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

const ageRanges: AgeRange[] = ["40-49", "50-59", "60-69", "70+"];
const experiences: Experience[] = ["beginner", "intermediate", "advanced"];

const defaultData: ProfileData = {
  ageRange: "50-59",
  experience: "beginner",
  daysPerWeek: 3,
  minutesPerSession: 30,
};

export default function ProfileForm() {
  const [data, setData] = useState<ProfileData>(() => {
    const saved = loadProfile<ProfileData>();
    return saved ?? defaultData;
  });
  const [status, setStatus] = useState<"idle" | "saved">("idle");
  const navigate = useNavigate();

  function update<K extends keyof ProfileData>(key: K, value: ProfileData[K]) {
    setStatus("idle");
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    saveProfile(data);
    saveCurrentPlanForProfile(data);
    setStatus("saved");
  }

  function onReset() {
    clearProfile();
    setData(defaultData);
    setStatus("idle");
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: "1rem", maxWidth: 520 }}>
      <label>
        Age range
        <select
          value={data.ageRange}
          onChange={(e) => update("ageRange", e.target.value as AgeRange)}
          className="formField"
        >
          {ageRanges.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>

      <label>
        Experience
        <select
          value={data.experience}
          onChange={(e) => update("experience", e.target.value as Experience)}
          className="formField"
        >
          {experiences.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>

      <label>
        Days per week
        <select
          value={data.daysPerWeek}
          onChange={(e) => update("daysPerWeek", Number(e.target.value) as DaysPerWeek)}
          className="formField"
        >
          <option value={2}>2 days</option>
          <option value={3}>3 days</option>
          <option value={4}>4 days</option>
          <option value={5}>5 days</option>
          <option value={6}>6 days</option>
          <option value={7}>7 days</option>
        </select>
      </label>

      <label>
        Minutes per session (10–90)
        <input
          type="number"
          min={10}
          max={90}
          value={data.minutesPerSession}
          onChange={(e) => update("minutesPerSession", Number(e.target.value))}
          className="formField"
        />
      </label>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button className="buttonSecondary" type="submit">
          Save
        </button>
        <button className="buttonSecondary" type="button" onClick={onReset}>
          Reset
        </button>
      </div>

      {status === "saved" && (
        <div className="saveSuccessBlock">
          <div className="savedMessage">Saved ✅</div>
          <div className="nextStepRow">
            <span className="nextStepLabel">Next step:</span>
            <button className="buttonPrimary" onClick={() => navigate("/plan")}>
              See your plan
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
