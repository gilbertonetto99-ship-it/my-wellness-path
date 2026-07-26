import { Check } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const FIT_POINTS = [
  "You want to move more but struggle with consistency.",
  "You prefer walking over intense workouts.",
  "You need something that fits real life.",
  "You want progress without punishing rules.",
];

export function AudienceSection() {
  return (
    <section className="bg-muted/70 py-20 sm:py-24 lg:py-30" aria-labelledby="audience-title">
      <MarketingContainer>
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-18">
          <div>
            <SectionEyebrow>Made for your real life</SectionEyebrow>
            <h2
              id="audience-title"
              className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
            >
              Move Again May Be Right for You If…
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              You do not need to become a different person to build a healthier rhythm. You need a
              starting point that respects the person you are now.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" aria-label="Who Move Again is for">
            {FIT_POINTS.map((point) => (
              <li key={point} className="marketing-card flex min-h-31 items-start gap-4 p-5 sm:p-6">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <Check aria-hidden="true" className="size-4" strokeWidth={2.5} />
                </span>
                <span className="text-base font-medium leading-7 text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </MarketingContainer>
    </section>
  );
}
