import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { preserveTrackingParameters } from "../lib/tracking-parameters";

export function TrackingParameterPersistence() {
  const location = useLocation();

  useEffect(() => {
    preserveTrackingParameters();
  }, [location.href]);

  return null;
}
