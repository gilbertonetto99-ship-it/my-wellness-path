import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AnalyzingStep } from "../components/results/AnalyzingStep";
import { ResultShell } from "../components/results/ResultShell";
import { useAssessment } from "../context/AssessmentContext";

const STEPS = [
  "Reviewing your starting point",
  "Identifying your biggest consistency barrier",
  "Preparing your first-week recommendation",
];

export const Route = createFileRoute("/analyzing")({ component: AnalyzingPage });

function AnalyzingPage() {
  const navigate = useNavigate();
  const { isHydrated, isComplete } = useAssessment();
  const [activeStep, setActiveStep] = useState(0);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (!isHydrated) return;
    if (!isComplete) {
      navigate({ to: "/assessment", replace: true });
      return;
    }

    const secondStep = window.setTimeout(() => setActiveStep(1), 550);
    const thirdStep = window.setTimeout(() => setActiveStep(2), 1_100);
    const completeSteps = window.setTimeout(() => setActiveStep(3), 1_700);
    const finish = window.setTimeout(() => navigate({ to: "/results", replace: true }), 2_200);
    const fallback = window.setTimeout(() => setShowFallback(true), 3_200);

    return () => {
      window.clearTimeout(secondStep);
      window.clearTimeout(thirdStep);
      window.clearTimeout(completeSteps);
      window.clearTimeout(finish);
      window.clearTimeout(fallback);
    };
  }, [isComplete, isHydrated, navigate]);

  return (
    <ResultShell>
      <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center py-8 text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-secondary text-primary shadow-sm">
          <Sparkles aria-hidden="true" className="size-6" />
        </span>
        <h1 className="mt-7 font-display text-4xl leading-tight tracking-[-0.025em] text-foreground sm:text-5xl">
          Preparing your starting plan…
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-muted-foreground">
          We are organizing your answers into a realistic recommendation for your first week.
        </p>

        <ol className="mt-9 grid gap-2.5 text-left" aria-live="polite">
          {STEPS.map((step, index) => (
            <AnalyzingStep
              key={step}
              label={step}
              state={index < activeStep ? "complete" : index === activeStep ? "active" : "waiting"}
            />
          ))}
        </ol>

        {showFallback ? (
          <button
            type="button"
            onClick={() => navigate({ to: "/results", replace: true })}
            className="marketing-focus mx-auto mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            View My Results
          </button>
        ) : null}
      </div>
    </ResultShell>
  );
}
