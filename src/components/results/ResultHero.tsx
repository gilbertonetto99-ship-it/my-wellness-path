import { RotateCcw, Sparkles } from "lucide-react";
import type { ResultPersonalization } from "../../lib/result-personalization";
import { LifestyleImage } from "../visuals/EditorialImage";

export function ResultHero({
  result,
  onRetake,
}: {
  result: ResultPersonalization;
  onRetake: () => void;
}) {
  return (
    <section
      aria-labelledby="result-title"
      className="grid items-center gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-12"
    >
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-3.5 py-2 text-xs font-semibold text-primary shadow-sm">
          <Sparkles aria-hidden="true" className="size-3.5" />
          Your Move Again Starting Plan
        </div>
        <h1
          id="result-title"
          className="mt-6 max-w-4xl font-display text-[2.7rem] leading-[.99] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl"
        >
          {result.goalHeadline}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{result.goalCopy}</p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-foreground/80">
          {result.readinessMessage}
        </p>
        <button
          type="button"
          onClick={onRetake}
          className="marketing-focus mt-6 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          <RotateCcw aria-hidden="true" className="size-3.5" />
          Retake the assessment
        </button>
      </div>
      <LifestyleImage
        src="/images/walking-friends.webp"
        alt="Friends sharing a relaxed walk together"
        sizes="(min-width: 1024px) 38vw, 92vw"
        aspectRatio="4 / 3"
      />
    </section>
  );
}
