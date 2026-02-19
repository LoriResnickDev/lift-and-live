// src/lib/storage.ts

const PROFILE_KEY = "lift-and-live:profile";
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

// --- Profile API ---

export function saveProfile(data: unknown) {
  saveJson(PROFILE_KEY, data);
}

export function loadProfile<T>() {
  // First try the new profile key
  const profileData = loadJson<T>(PROFILE_KEY);
  if (profileData !== null) {
    return profileData;
  }
  
  // If no profile data, try migrating from old onboarding key
  const onboardingData = loadJson<T>(ONBOARDING_KEY);
  if (onboardingData !== null) {
    // Migrate data to new key
    saveJson(PROFILE_KEY, onboardingData);
    // Clear old key
    clearKey(ONBOARDING_KEY);
    return onboardingData;
  }
  
  return null;
}

export function clearProfile() {
  clearKey(PROFILE_KEY);
}

// --- Legacy onboarding API (deprecated) ---

export function saveOnboarding(data: unknown) {
  saveProfile(data); // Redirect to new API
}

export function loadOnboarding<T>() {
  return loadProfile<T>(); // Redirect to new API
}

export function clearOnboarding() {
  clearProfile(); // Redirect to new API
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
