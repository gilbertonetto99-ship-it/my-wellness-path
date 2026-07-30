import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function ResultsOfferBridge() {
  return (
    <section
      aria-labelledby="offer-bridge-title"
      className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground shadow-[0_36px_80px_-48px_rgba(23,62,53,.8)] sm:px-10 sm:py-14 lg:px-14"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 size-64 rounded-full border-[38px] border-white/[0.045]"
      />
      <div className="relative max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/75">
          Your next step
        </div>
        <h2
          id="offer-bridge-title"
          className="mt-3 font-display text-4xl leading-[1.04] sm:text-5xl"
        >
          A Good Starting Plan Creates Clarity. A Complete System Helps You Keep Going.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/80 sm:text-lg sm:leading-8">
          Move Again turns this starting direction into a guided 12-week routine with weekly walking
          plans, simple strength, recovery, planners, and a clear way to return after missed days.
        </p>
        <Link
          to="/offer"
          className="marketing-focus group mt-7 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 text-base font-semibold text-primary shadow-[0_18px_36px_-20px_rgba(0,0,0,.55)] transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-95 sm:w-auto"
        >
          Continue To My Plan
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
}
