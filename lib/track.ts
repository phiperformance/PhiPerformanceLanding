declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface TrackOptions {
  email?: string;
  phone?: string;
  customData?: Record<string, unknown>;
}

export function trackEvent(eventName: string, options: TrackOptions = {}) {
  if (typeof window === "undefined") return;

  const eventId = `${eventName}.${Date.now()}.${Math.random().toString(36).slice(2)}`;

  window.fbq?.("track", eventName, options.customData ?? {}, { eventID: eventId });

  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: window.location.href,
      email: options.email,
      phone: options.phone,
      custom_data: options.customData,
    }),
    keepalive: true,
  }).catch(() => {});
}
