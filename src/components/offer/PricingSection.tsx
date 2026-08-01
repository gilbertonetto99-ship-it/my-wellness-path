import { ArrowRight, Check } from "lucide-react";
import { CHECKOUT_URL, PROGRAM } from "../../config/checkout";
import { MarketingContainer } from "../marketing/MarketingContainer";
import { SectionEyebrow } from "../marketing/SectionEyebrow";
import { trackInitiateCheckout } from "../../lib/meta-pixel";
import { withTrackingParameters } from "../../lib/tracking-parameters";

const SUMMARY = [
  "12-Week Walking Roadmap",
  "Weekly Walking Planner",
  "Daily Habit Tracker",
  "Reflection Journal",
  "Progress Tracker",
  "Stretch Guide",
  "Members Area Access",
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
            <p className="mt-5 text-sm font-medium text-muted-foreground">
              Complete System Value: ${PROGRAM.systemValue}
            </p>
            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                Launch Price
              </div>
              <div className="mt-2 flex items-end justify-center gap-2">
                <span className="font-display text-7xl leading-none text-foreground">
                  ${PROGRAM.sellingPrice.toFixed(2)}
                </span>
                <span className="pb-1.5 text-sm text-muted-foreground">{PROGRAM.currency}</span>
              </div>
            </div>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              One-time payment <span aria-hidden="true">·</span> No subscription
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
            <a
              href={CHECKOUT_URL}
              onClick={(event) => {
                trackInitiateCheckout();
                event.currentTarget.href = withTrackingParameters(CHECKOUT_URL);
              }}
              className="marketing-focus group mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_18px_38px_-20px_rgba(23,62,53,.75)] transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              Get Instant Access
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
              Secure checkout powered by Hotmart.
              <span className="block">Access instructions are provided after purchase.</span>
            </p>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
