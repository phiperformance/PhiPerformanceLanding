export type CookieConsent = "accepted" | "rejected";

const STORAGE_KEY = "phi-cookie-consent";
export const COOKIE_CONSENT_EVENT = "phi-cookie-consent-change";

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "accepted" || stored === "rejected" ? stored : null;
}

export function setCookieConsent(consent: CookieConsent) {
  localStorage.setItem(STORAGE_KEY, consent);
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: consent }));
}
