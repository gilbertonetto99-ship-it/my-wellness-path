import { ShieldCheck } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { MarketingCTA } from "./MarketingCTA";
import { SectionEyebrow } from "./SectionEyebrow";

export function FinalCTASection() {
  return (
    <section
      className="final-cinematic relative isolate flex min-h-[68svh] items-center overflow-hidden py-20 text-center sm:min-h-[72svh] sm:py-30"
      aria-labelledby="final-cta-title"
    >
      <img
        src="/images/final-cta-sunset.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,62,53,.82),rgba(23,62,53,.5))]" />
      <MarketingContainer>
        <div className="mx-auto max-w-3xl text-primary-foreground">
          <SectionEyebrow>Your next step</SectionEyebrow>
          <h2
            id="final-cta-title"
            className="font-display text-4xl leading-[.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            You Can Begin Gently—and Still Move Forward.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-primary-foreground/78">
            Discover a realistic starting plan, then see how the complete 12-week system helps you
            know what to do and keep going.
          </p>
          <MarketingCTA className="mt-8 bg-primary-foreground text-primary hover:brightness-95 sm:mt-10">
            Find My Starting Plan
          </MarketingCTA>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-primary-foreground/72">
            <ShieldCheck aria-hidden="true" className="size-4" />
            Free 3-minute assessment <span aria-hidden="true">·</span> No credit card{" "}
            <span aria-hidden="true">·</span> Personalized starting guidance
          </p>
        </div>
      </MarketingContainer>
    </section>
  );
}
