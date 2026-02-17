// src/lib/storage.ts

const ONBOARDING_KEY = "lift-and-live:onboarding";

function saveJson(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadJson<T>(key: string): T | null {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function clearKey(key: string) {
  localStorage.removeItem(key);
}

// --- Existing onboarding API (unchanged for callers) ---

export function saveOnboarding(data: unknown) {
  saveJson(ONBOARDING_KEY, data);
}

export function loadOnboarding<T>() {
  return loadJson<T>(ONBOARDING_KEY);
}

export function clearOnboarding() {
  clearKey(ONBOARDING_KEY);
}

// --- New generic API (for plans, later history, etc.) ---

export function saveToStorage(key: string, data: unknown) {
  saveJson(key, data);
}

export function loadFromStorage<T>(key: string) {
  return loadJson<T>(key);
}

export function clearStorageKey(key: string) {
  clearKey(key);
}
