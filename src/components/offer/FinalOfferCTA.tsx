import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL, PROGRAM } from "../../config/checkout";
import { MarketingContainer } from "../marketing/MarketingContainer";
import { trackInitiateCheckout } from "../../lib/meta-pixel";

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
            <p className="mt-5 text-sm font-medium text-muted-foreground">
              Complete System Value: ${PROGRAM.systemValue}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Launch Price
            </p>
            <p className="mt-1 font-display text-5xl leading-none text-foreground">
              ${PROGRAM.sellingPrice.toFixed(2)}{" "}
              <span className="font-sans text-sm text-muted-foreground">{PROGRAM.currency}</span>
            </p>
            <a
              href={CHECKOUT_URL}
              onClick={trackInitiateCheckout}
              className="marketing-focus group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_18px_38px_-20px_rgba(23,62,53,.75)] transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
            >
              Get Instant Access
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Secure checkout powered by Hotmart.
              <span className="block">Access instructions are provided after purchase.</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              One-time payment <span aria-hidden="true">·</span> No subscription
            </p>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
