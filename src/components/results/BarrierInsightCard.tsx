import { Lightbulb } from "lucide-react";
import type { ResultPersonalization } from "../../lib/result-personalization";

export function BarrierInsightCard({ barrier }: { barrier: ResultPersonalization["barrier"] }) {
  return (
    <section
      aria-labelledby="barrier-title"
      className="rounded-3xl border border-sand/35 bg-accent/55 p-6 sm:p-8"
    >
      <div className="flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-card text-accent-foreground shadow-sm">
          <Lightbulb aria-hidden="true" className="size-5" />
        </span>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground/80">
            Your consistency insight
          </div>
          <h2
            id="barrier-title"
            className="mt-2 font-display text-3xl leading-tight text-foreground"
          >
            {barrier.title}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-foreground/80">{barrier.copy}</p>
        </div>
      </div>
    </section>
  );
}
