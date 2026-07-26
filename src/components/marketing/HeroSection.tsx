import { Check, ShieldCheck } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { MarketingCTA } from "./MarketingCTA";

const BENEFITS = ["Low-impact walking", "Realistic weekly pace", "Built for real life"];

export function HeroSection() {
  return (
    <section className="overflow-hidden pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-30 lg:pt-20">
      <MarketingContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/85 px-3.5 py-2 text-xs font-semibold text-primary shadow-sm">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
              Personalized for Women 40+
            </div>
            <h1 className="mt-6 max-w-[760px] font-display text-[clamp(2.8rem,11vw,4.75rem)] leading-[0.98] tracking-[-0.035em] text-foreground">
              Stop Starting Over. Start With a Plan That Fits Your Life Now.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Take the free 3-minute assessment and discover a realistic walking routine shaped
              around your schedule, energy, and starting point.
            </p>
            <div className="mt-8">
              <MarketingCTA />
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck aria-hidden="true" className="size-4 text-primary" />
                Free <span aria-hidden="true">·</span> No Credit Card{" "}
                <span aria-hidden="true">·</span> About 3 Minutes
              </p>
            </div>
            <ul className="mt-9 grid gap-3 sm:grid-cols-3" aria-label="Program qualities">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2.5 text-sm font-medium text-foreground/85"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <Check aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-full bg-primary/8 blur-3xl"
            />
            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-card shadow-[0_36px_90px_-42px_rgba(23,62,53,.5)]">
              <img
                src="/wellness-hero.svg"
                alt="Illustration of a woman enjoying a walk outdoors"
                width="900"
                height="760"
                fetchPriority="high"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/80 bg-card/94 p-4 shadow-[0_20px_45px_-28px_rgba(23,62,53,.5)] backdrop-blur sm:left-8 sm:right-auto sm:min-w-64">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                A calmer approach
              </div>
              <div className="mt-1 font-display text-xl text-foreground">
                Gentle. Personal. Repeatable.
              </div>
            </div>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
