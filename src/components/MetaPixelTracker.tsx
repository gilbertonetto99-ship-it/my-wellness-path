import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { initializeMetaPixel, trackPageView } from "../lib/meta-pixel";

export function MetaPixelTracker() {
  const location = useLocation();

  useEffect(() => {
    initializeMetaPixel();
    trackPageView(location.href);
  }, [location.href]);

  return null;
}
