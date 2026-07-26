import { Check } from "lucide-react";
import { MarketingContainer } from "../marketing/MarketingContainer";
import { SectionEyebrow } from "../marketing/SectionEyebrow";

const DIFFERENCES = [
  "Built around repeatability instead of perfect weeks.",
  "Includes shorter backup options for changing time and energy.",
  "Makes returning after missed days part of the plan.",
  "Designed for women navigating midlife and real responsibilities.",
  "Starts with walking, then adds simple strength and recovery.",
];

export function WhyDifferentSection() {
  return (
    <section
      className="bg-primary py-20 text-primary-foreground sm:py-24 lg:py-28"
      aria-labelledby="difference-title"
    >
      <MarketingContainer>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-18">
          <div>
            <SectionEyebrow>Why Move Again is different</SectionEyebrow>
            <h2
              id="difference-title"
              className="font-display text-4xl leading-[1.03] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
            >
              The Plan Does Not Assume Every Day Will Go According to Plan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-primary-foreground/80">
              Flexibility is not a fallback added after the routine breaks. It is built into how the
              system works from the beginning.
            </p>
          </div>
          <ul className="grid gap-3">
            {DIFFERENCES.map((difference) => (
              <li
                key={difference}
                className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/[0.07] p-4"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-white/12">
                  <Check aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-medium leading-6 text-primary-foreground/95 sm:text-base">
                  {difference}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </MarketingContainer>
    </section>
  );
}
