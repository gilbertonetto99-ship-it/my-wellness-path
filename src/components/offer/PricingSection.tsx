import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { MarketingContainer } from "../marketing/MarketingContainer";
import { SectionEyebrow } from "../marketing/SectionEyebrow";

const SUMMARY = [
  "Complete 12-week walking roadmap",
  "Simple strength and recovery support",
  "Weekly planners and habit tools",
  "Minimum-day and reentry guidance",
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-8 bg-muted/60 py-20 sm:py-24 lg:py-28"
      aria-labelledby="pricing-title"
    >
      <MarketingContainer>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>One complete system</SectionEyebrow>
          <h2
            id="pricing-title"
            className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
          >
            Everything Organized Into One Clear 12-Week Experience.
          </h2>
        </div>

        <div className="marketing-card mx-auto mt-10 max-w-2xl overflow-hidden border-primary/15 shadow-[0_38px_90px_-52px_rgba(23,62,53,.7)]">
          <div className="border-b border-border bg-secondary/55 p-6 text-center sm:p-8">
            <div className="text-sm font-semibold text-primary">
              The Move Again 12-Week Midlife Walking System
            </div>
            <div className="mt-5 flex items-end justify-center gap-2">
              <span className="font-display text-7xl leading-none text-foreground">$79</span>
              <span className="pb-1.5 text-sm text-muted-foreground">USD</span>
            </div>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              One-Time Payment · No Subscription
            </p>
          </div>
          <div className="p-6 sm:p-8">
            <ul className="grid gap-3">
              {SUMMARY.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-foreground/85 sm:text-base"
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <Check aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/checkout"
              className="marketing-focus group mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_18px_38px_-20px_rgba(23,62,53,.75)] transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              Get Move Again for $79
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
              You will review the order details before completing your purchase.
            </p>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
