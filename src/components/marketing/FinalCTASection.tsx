import { ShieldCheck } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { MarketingCTA } from "./MarketingCTA";
import { SectionEyebrow } from "./SectionEyebrow";

export function FinalCTASection() {
  return (
    <section className="pb-20 pt-10 sm:pb-24 lg:pb-30" aria-labelledby="final-cta-title">
      <MarketingContainer>
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-secondary px-6 py-14 text-center sm:px-10 sm:py-18 lg:py-22">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-72 rounded-full border-[42px] border-primary/[0.035]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 -left-24 size-72 rounded-full border-[42px] border-sand/[0.12]"
          />
          <div className="relative mx-auto max-w-3xl">
            <SectionEyebrow>Your next step</SectionEyebrow>
            <h2
              id="final-cta-title"
              className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
            >
              Your Next Routine Does Not Need to Begin With a Dramatic Reset.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Start with a few thoughtful questions and discover a walking direction designed around
              your life now.
            </p>
            <MarketingCTA className="mt-8" />
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck aria-hidden="true" className="size-4 text-primary" />
              Free <span aria-hidden="true">·</span> No Credit Card{" "}
              <span aria-hidden="true">·</span> About 3 Minutes
            </p>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
