import { MarketingContainer } from "../marketing/MarketingContainer";
import { SectionEyebrow } from "../marketing/SectionEyebrow";

export function ProblemReframeSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" aria-labelledby="offer-problem-title">
      <MarketingContainer>
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>The real challenge</SectionEyebrow>
          <h2
            id="offer-problem-title"
            className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
          >
            Knowing Walking Is Good for You Is Not the Same as Knowing How to Keep Going.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            The difficult part is knowing what to do this week, what to do when time or energy
            changes, and how to return without treating one missed day as a complete restart.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg font-medium leading-8 text-foreground/85">
            Move Again turns your starting direction into a complete, organized system for the next
            12 weeks.
          </p>
        </div>
      </MarketingContainer>
    </section>
  );
}
