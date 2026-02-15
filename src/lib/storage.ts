const KEY = "lift-and-live:onboarding";

export function saveOnboarding(data: unknown) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function loadOnboarding<T>() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function clearOnboarding() {
  localStorage.removeItem(KEY);
}
