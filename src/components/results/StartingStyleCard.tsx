import { Footprints } from "lucide-react";
import type { StartingStyle } from "../../lib/result-personalization";

export function StartingStyleCard({ style }: { style: StartingStyle }) {
  return (
    <section
      aria-labelledby="starting-style-title"
      className="marketing-card overflow-hidden p-6 sm:p-8"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
          <Footprints aria-hidden="true" className="size-6" />
        </span>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Your starting style
          </div>
          <h2
            id="starting-style-title"
            className="mt-2 font-display text-4xl leading-tight text-foreground"
          >
            {style.name}
          </h2>
          <p className="mt-2 text-base font-semibold leading-7 text-primary">{style.tagline}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            {style.description}
          </p>
        </div>
      </div>
    </section>
  );
}
