import { Check } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const MOMENTS = [
  "Walking with more comfort and ease",
  "Taking the stairs with greater confidence",
  "Waking up with a reason to move",
  "Feeling proud of the rhythm you kept",
  "Enjoying movement instead of dreading it",
  "Knowing how to begin again after a busy week",
];

export function FutureSection() {
  return (
    <section
      className="future-premium py-16 text-primary-foreground sm:py-20 lg:py-24"
      aria-labelledby="future-title"
    >
      <MarketingContainer>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <SectionEyebrow>Your next chapter</SectionEyebrow>
            <h2
              id="future-title"
              className="font-display text-4xl leading-[1] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
            >
              Imagine Yourself 12 Weeks From Now.
            </h2>
            <p className="mt-5 text-lg leading-8 text-primary-foreground/74">
              More at home in your body. More confident in your choices. Proud that you kept going.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {MOMENTS.map((moment) => (
              <li
                key={moment}
                className="future-moment flex min-h-24 items-center gap-4 rounded-2xl border border-white/14 bg-white/[.07] p-5"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-dusty-rose/25">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                <span className="font-medium leading-6">{moment}</span>
              </li>
            ))}
          </ul>
        </div>
      </MarketingContainer>
    </section>
  );
}
