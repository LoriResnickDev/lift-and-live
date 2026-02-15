import { useState } from "react";
import type { OnboardingData, AgeRange, Experience } from "./types";
import { clearOnboarding, loadOnboarding, saveOnboarding } from "../../lib/storage";

const ageRanges: AgeRange[] = ["40-49", "50-59", "60-69", "70+"];
const experiences: Experience[] = ["beginner", "intermediate", "advanced"];

const defaultData: OnboardingData = {
  ageRange: "50-59",
  experience: "beginner",
  daysPerWeek: 3,
  minutesPerSession: 30,
};

export default function OnboardingForm() {
  const [data, setData] = useState<OnboardingData>(() => {
    const saved = loadOnboarding<OnboardingData>();
    return saved ?? defaultData;
  });
  const [status, setStatus] = useState<"idle" | "saved">("idle");

  function update<K extends keyof OnboardingData>(key: K, value: OnboardingData[K]) {
    setStatus("idle");
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    saveOnboarding(data);
    setStatus("saved");
  }

  function onReset() {
    clearOnboarding();
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
          style={{ display: "block", width: "100%" }}
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
          style={{ display: "block", width: "100%" }}
        >
          {experiences.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>

      <label>
        Days per week (2–7)
        <input
          type="number"
          min={2}
          max={7}
          value={data.daysPerWeek}
          onChange={(e) => update("daysPerWeek", Number(e.target.value))}
          style={{ display: "block", width: "100%" }}
        />
      </label>

      <label>
        Minutes per session (10–90)
        <input
          type="number"
          min={10}
          max={90}
          value={data.minutesPerSession}
          onChange={(e) => update("minutesPerSession", Number(e.target.value))}
          style={{ display: "block", width: "100%" }}
        />
      </label>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button type="submit">Save</button>
        <button type="button" onClick={onReset}>
          Reset
        </button>
      </div>

      {status === "saved" && <div>Saved ✅</div>}

      <details>
        <summary>Debug</summary>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </details>
    </form>
  );
}