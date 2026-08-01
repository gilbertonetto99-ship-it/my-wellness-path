const META_PIXEL_ID = "4476107442700142";
const META_SCRIPT_ID = "meta-pixel-script";
const SESSION_EVENT_PREFIX = "move-again:meta:";

type MetaEventParameters = Record<string, string | number>;
type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
    };
    _fbq?: Fbq;
  }
}

let lastPageViewPath: string | null = null;
let lastCheckoutAt = 0;
let lastResultViewAt = 0;
let initialized = false;
const trackedCustomEvents = new Set<string>();

export function initializeMetaPixel() {
  if (typeof window === "undefined") return;
  if (initialized) return;

  try {
    if (!window.fbq) {
      const fbq = function (...args: unknown[]) {
        if (fbq.callMethod) fbq.callMethod(...args);
        else fbq.queue?.push(args);
      } as Fbq & {
        callMethod?: (...args: unknown[]) => void;
        queue: unknown[];
        loaded: boolean;
        version: string;
      };

      fbq.queue = [];
      fbq.loaded = true;
      fbq.version = "2.0";
      window.fbq = fbq;
      window._fbq = fbq;
    }

    if (!document.getElementById(META_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = META_SCRIPT_ID;
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }

    window.fbq("init", META_PIXEL_ID);
    initialized = true;
  } catch {
    // Tracking must never interrupt the funnel when Meta is unavailable.
  }
}

function safelyTrack(...args: unknown[]) {
  try {
    if (typeof window !== "undefined" && typeof window.fbq === "function") window.fbq(...args);
  } catch {
    // Tracking must never interrupt navigation or quiz interactions.
  }
}

export function trackPageView(path: string) {
  if (lastPageViewPath === path) return;
  lastPageViewPath = path;
  safelyTrack("track", "PageView");
}

function trackCustomOnce(eventName: "QuizStart" | "QuizComplete") {
  if (typeof window === "undefined") return;
  const key = `${SESSION_EVENT_PREFIX}${eventName}`;
  if (trackedCustomEvents.has(key)) return;

  try {
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, "true");
  } catch {
    // Continue with in-page tracking when storage is unavailable.
  }

  trackedCustomEvents.add(key);
  safelyTrack("trackCustom", eventName);
}

export function trackQuizStart() {
  trackCustomOnce("QuizStart");
}

export function trackQuizComplete() {
  trackCustomOnce("QuizComplete");
}

export function trackResultView() {
  const now = Date.now();
  if (now - lastResultViewAt < 1_000) return;
  lastResultViewAt = now;

  safelyTrack("track", "ViewContent", {
    content_name: "Move Again Assessment Result",
    content_category: "Walking Assessment",
  } satisfies MetaEventParameters);
}

export function trackInitiateCheckout() {
  const now = Date.now();
  if (now - lastCheckoutAt < 1_000) return;
  lastCheckoutAt = now;

  safelyTrack("track", "InitiateCheckout", {
    content_name: "Move Again",
    content_type: "product",
    value: 9.9,
    currency: "USD",
  } satisfies MetaEventParameters);
}
