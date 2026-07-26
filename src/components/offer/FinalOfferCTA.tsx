import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MarketingContainer } from "../marketing/MarketingContainer";

export function FinalOfferCTA() {
  return (
    <section className="pb-20 sm:pb-24 lg:pb-28" aria-labelledby="final-offer-title">
      <MarketingContainer>
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-secondary px-6 py-14 text-center sm:px-10 sm:py-18">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-72 rounded-full border-[42px] border-primary/[0.035]"
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Your next step
            </div>
            <h2
              id="final-offer-title"
              className="mt-4 font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
            >
              Your First Week Can Start With One Clear Next Step.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Get the complete 12-week system for a one-time payment of $79.
            </p>
            <Link
              to="/checkout"
              className="marketing-focus group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_18px_38px_-20px_rgba(23,62,53,.75)] transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
            >
              Get Move Again for $79
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">One-Time Payment · No Subscription</p>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
