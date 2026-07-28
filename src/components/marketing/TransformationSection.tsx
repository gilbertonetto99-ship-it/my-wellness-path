import { ArrowRight, Sparkles } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const MOMENTS = [
  "Know what movement fits today",
  "Keep going when the week changes",
  "Return without starting from zero",
];

export function TransformationSection() {
  return (
    <section
      className="section-warm-flow overflow-hidden py-14 sm:py-18 lg:py-22"
      aria-labelledby="transformation-title"
    >
      <MarketingContainer>
        <div className="premium-feature-card grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_35px_90px_-58px_rgba(23,62,53,.55)] lg:grid-cols-[1.08fr_.92fr]">
          <div className="relative min-h-[340px] sm:min-h-[430px] lg:min-h-[610px]">
            <img
              src="/images/walking-friends.webp"
              alt="Women sharing an uplifting walk together"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/25 bg-primary/82 p-5 text-primary-foreground backdrop-blur-md sm:inset-x-8 sm:bottom-8">
              <Sparkles aria-hidden="true" className="size-5 text-dusty-rose" />
              <p className="mt-3 font-display text-2xl leading-tight">
                Not a dramatic reset. A return to feeling like yourself.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <SectionEyebrow>A life in motion</SectionEyebrow>
            <h2
              id="transformation-title"
              className="font-display text-4xl leading-[1] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
            >
              Build a Rhythm That Works Beyond the Perfect Week.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Use a clear, flexible routine so you can keep moving without depending on motivation
              or an all-or-nothing streak.
            </p>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {MOMENTS.map((moment) => (
                <li
                  key={moment}
                  className="flex items-center justify-between gap-4 py-4 font-medium"
                >
                  {moment}
                  <ArrowRight aria-hidden="true" className="size-4 text-primary" />
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm leading-6 text-muted-foreground">
              Move Again supports a sustainable movement practice. Individual experiences vary.
            </p>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
