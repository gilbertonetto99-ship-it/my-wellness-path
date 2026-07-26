import { ShieldCheck } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { MarketingCTA } from "./MarketingCTA";
import { SectionEyebrow } from "./SectionEyebrow";

export function FinalCTASection() {
  return (
    <section
      className="final-cinematic relative isolate flex min-h-[72svh] items-center overflow-hidden py-24 text-center sm:py-30"
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
            className="font-display text-5xl leading-[.96] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            You Can Begin Gently—and Still Move Forward.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-primary-foreground/78">
            Discover a walking direction designed around your life now.
          </p>
          <MarketingCTA className="mt-10 bg-primary-foreground text-primary hover:brightness-95">
            Find My Starting Plan
          </MarketingCTA>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-primary-foreground/72">
            <ShieldCheck aria-hidden="true" className="size-4" />
            Free <span aria-hidden="true">·</span> No Credit Card <span aria-hidden="true">·</span>{" "}
            About 3 Minutes
          </p>
        </div>
      </MarketingContainer>
    </section>
  );
}
