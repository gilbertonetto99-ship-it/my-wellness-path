import { Clock3, MapPin, Repeat2 } from "lucide-react";
import type { ResultPersonalization } from "../../lib/result-personalization";

export function RecommendationCards({ result }: { result: ResultPersonalization }) {
  const recommendations = [
    {
      icon: Clock3,
      eyebrow: "Your starting walk",
      value: result.startingWalk.value,
      detail: result.startingWalk.detail,
    },
    {
      icon: MapPin,
      eyebrow: "Your best routine window",
      value: result.routineWindow.value,
      detail: `${result.routineWindow.detail} ${result.locationNote}`,
    },
    {
      icon: Repeat2,
      eyebrow: "Your consistency strategy",
      value: result.consistencyStrategy.value,
      detail: result.consistencyStrategy.detail,
    },
  ];

  return (
    <section aria-labelledby="recommendations-title">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
          Chosen from your answers
        </div>
        <h2
          id="recommendations-title"
          className="mt-2 font-display text-4xl leading-tight text-foreground"
        >
          Three details to make your plan feel workable.
        </h2>
      </div>
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {recommendations.map(({ icon: Icon, eyebrow, value, detail }) => (
          <article key={eyebrow} className="marketing-card p-6">
            <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
              <Icon aria-hidden="true" className="size-5" />
            </span>
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground">
              {eyebrow}
            </div>
            <h3 className="mt-2 font-display text-2xl leading-tight text-foreground">{value}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
