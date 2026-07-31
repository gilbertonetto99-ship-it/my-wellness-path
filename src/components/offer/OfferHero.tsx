import { ArrowRight, Check } from "lucide-react";
import type { ResultPersonalization } from "../../lib/result-personalization";
import { MarketingContainer } from "../marketing/MarketingContainer";
import { EditorialImage } from "../visuals/EditorialImage";

export function OfferHero({ result }: { result: ResultPersonalization | null }) {
  const styleName = result?.startingStyle.name;

  return (
    <section className="overflow-hidden pb-18 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <MarketingContainer>
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-3.5 py-2 text-xs font-semibold text-primary shadow-sm">
            <Check aria-hidden="true" className="size-3.5" />
            {styleName
              ? `Recommended for Your ${styleName} Starting Style`
              : "A Complete System for Your Next Step"}
          </div>
          <h1 className="mt-6 font-display text-[2.75rem] leading-[.98] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
            Turn Your Starting Plan Into a Routine You Can Keep.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Move Again gives you the weekly structure, shorter backup options, and clear return plan
            that help make walking easier to continue in real life.
          </p>

          {result ? (
            <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-primary/12 bg-secondary/70 p-5 text-left sm:p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Your starting direction
              </div>
              <div className="mt-3 grid gap-4 sm:grid-cols-[.72fr_1.28fr]">
                <div>
                  <div className="text-sm text-muted-foreground">Starting walk</div>
                  <div className="mt-1 font-display text-3xl text-foreground">
                    {result.startingWalk.value}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Your consistency focus</div>
                  <div className="mt-1 text-base font-semibold leading-6 text-foreground">
                    {result.barrier.title}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {result.consistencyStrategy.detail}
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          <a
            href="#whats-included"
            className="marketing-focus group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_18px_38px_-20px_rgba(23,62,53,.75)] transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
          >
            See What’s Included
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <EditorialImage
            src="/images/offer-planner-coffee.jpg"
            alt="A thoughtfully arranged wellness journal and weekly plan"
            sizes="(min-width: 1024px) 70vw, 92vw"
            aspectRatio="16 / 7"
            className="mt-12 text-left"
          />
        </div>
      </MarketingContainer>
    </section>
  );
}
