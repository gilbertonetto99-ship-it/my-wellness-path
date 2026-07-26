import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { FinalOfferCTA } from "../components/offer/FinalOfferCTA";
import { OfferFAQ } from "../components/offer/OfferFAQ";
import { OfferHero } from "../components/offer/OfferHero";
import { OfferShell } from "../components/offer/OfferShell";
import { OfferStack } from "../components/offer/OfferStack";
import { OfferTrustBar } from "../components/offer/OfferTrustBar";
import { PricingSection } from "../components/offer/PricingSection";
import { ProblemReframeSection } from "../components/offer/ProblemReframeSection";
import { ProgramPreview } from "../components/offer/ProgramPreview";
import { ProgramRoadmap } from "../components/offer/ProgramRoadmap";
import { WhyDifferentSection } from "../components/offer/WhyDifferentSection";
import { useAssessment } from "../context/AssessmentContext";
import { createResultPersonalization } from "../lib/result-personalization";

export const Route = createFileRoute("/offer")({ component: OfferPage });

function OfferPage() {
  const { answers, isHydrated, isComplete } = useAssessment();
  const result = useMemo(
    () => (isHydrated && isComplete ? createResultPersonalization(answers) : null),
    [answers, isComplete, isHydrated],
  );

  return (
    <OfferShell>
      <OfferHero result={result} />
      <OfferTrustBar />
      <ProblemReframeSection />
      <OfferStack />
      <ProgramRoadmap />
      <WhyDifferentSection />
      <ProgramPreview />
      <PricingSection />
      <OfferFAQ />
      <FinalOfferCTA />
    </OfferShell>
  );
}
