const STORAGE_KEY = "move-again:tracking-parameters:v1";

function readStoredParameters() {
  if (typeof window === "undefined") return new URLSearchParams();
  try {
    return new URLSearchParams(window.sessionStorage.getItem(STORAGE_KEY) ?? "");
  } catch {
    return new URLSearchParams();
  }
}

function storeParameters(parameters: URLSearchParams) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, parameters.toString());
  } catch {
    // Funnel navigation remains usable when browser storage is unavailable.
  }
}

export function preserveTrackingParameters() {
  if (typeof window === "undefined") return;

  try {
    const currentUrl = new URL(window.location.href);
    const preserved = readStoredParameters();

    currentUrl.searchParams.forEach((value, key) => preserved.set(key, value));
    storeParameters(preserved);

    let changed = false;
    preserved.forEach((value, key) => {
      if (!currentUrl.searchParams.has(key)) {
        currentUrl.searchParams.set(key, value);
        changed = true;
      }
    });

    if (changed) window.history.replaceState(window.history.state, "", currentUrl);
  } catch {
    // Invalid or restricted URLs must not interrupt the funnel.
  }
}

export function withTrackingParameters(destination: string) {
  if (typeof window === "undefined") return destination;

  try {
    const target = new URL(destination);
    const preserved = readStoredParameters();
    const current = new URL(window.location.href);

    current.searchParams.forEach((value, key) => preserved.set(key, value));
    storeParameters(preserved);
    preserved.forEach((value, key) => {
      if (!target.searchParams.has(key)) target.searchParams.set(key, value);
    });

    return target.toString();
  } catch {
    return destination;
  }
}
