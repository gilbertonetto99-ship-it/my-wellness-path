import { Check } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const ELEMENTS = [
  "Know what to do each week",
  "Plan around real life",
  "Track progress without pressure",
  "Add gentle stretching",
];

export function LifestyleResetSection() {
  return (
    <section
      className="lifestyle-reset py-20 sm:py-26 lg:py-32"
      aria-labelledby="lifestyle-reset-title"
    >
      <MarketingContainer>
        <div className="grid overflow-hidden rounded-[2rem] border border-border bg-card lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative min-h-[380px] sm:min-h-[560px] lg:min-h-[720px]">
            <img
              src="/images/offer-planner-coffee.webp"
              alt="A calm planning ritual with the Move Again program"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
            <img
              src="/images/program-kit.webp.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute bottom-5 right-5 w-[64%] rounded-2xl border border-white/70 shadow-[0_24px_60px_-38px_rgba(23,62,53,.55)] sm:bottom-10 sm:right-10 sm:w-[58%]"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <SectionEyebrow>A richer way to begin</SectionEyebrow>
            <h2
              id="lifestyle-reset-title"
              className="font-display text-4xl leading-[.98] tracking-[-.03em] sm:text-6xl"
            >
              More Than Walking. A System for Staying Consistent.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
              Walking is the foundation. The roadmap, planning tools, trackers, journal, and
              stretching guidance help you know what comes next and keep the routine workable.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-x-5">
              {ELEMENTS.map((element) => (
                <li
                  key={element}
                  className="flex items-center gap-3 text-sm font-medium sm:text-base"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <Check aria-hidden="true" className="size-3.5" />
                  </span>
                  {element}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
