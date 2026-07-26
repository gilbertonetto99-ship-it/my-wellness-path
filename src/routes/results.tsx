import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { BarrierInsightCard } from "../components/results/BarrierInsightCard";
import { FirstWeekPreview } from "../components/results/FirstWeekPreview";
import { RecommendationCards } from "../components/results/RecommendationCards";
import { ResultHero } from "../components/results/ResultHero";
import { ResultShell } from "../components/results/ResultShell";
import { ResultsOfferBridge } from "../components/results/ResultsOfferBridge";
import { StartingStyleCard } from "../components/results/StartingStyleCard";
import { useAssessment } from "../context/AssessmentContext";
import { createResultPersonalization } from "../lib/result-personalization";

export const Route = createFileRoute("/results")({ component: ResultsPage });

function ResultsPage() {
  const navigate = useNavigate();
  const { answers, isHydrated, isComplete, reset } = useAssessment();
  const result = useMemo(() => createResultPersonalization(answers), [answers]);

  useEffect(() => {
    if (isHydrated && !isComplete) {
      navigate({ to: "/assessment", replace: true });
    }
  }, [isComplete, isHydrated, navigate]);

  function retakeAssessment() {
    reset();
    window.setTimeout(() => navigate({ to: "/assessment" }), 0);
  }

  if (!isHydrated || !isComplete) {
    return (
      <ResultShell>
        <div className="flex min-h-[65vh] items-center justify-center" aria-busy="true">
          <span className="text-sm text-muted-foreground">Restoring your results…</span>
        </div>
      </ResultShell>
    );
  }

  return (
    <ResultShell wide>
      <div className="space-y-6 sm:space-y-8">
        <ResultHero result={result} onRetake={retakeAssessment} />
        <StartingStyleCard style={result.startingStyle} />
        <BarrierInsightCard barrier={result.barrier} />
        <FirstWeekPreview result={result} />
        <RecommendationCards result={result} />
        <ResultsOfferBridge />
      </div>
    </ResultShell>
  );
}
