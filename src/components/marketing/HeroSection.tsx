import { Check, ShieldCheck } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { MarketingCTA } from "./MarketingCTA";

const BENEFITS = ["A complete 12-week path", "A pace shaped around you", "Tools for real life"];

export function HeroSection() {
  return (
    <section className="hero-premium relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-primary">
      <img
        src="/images/hero-walking.webp"
        alt="A woman enjoying a calm, confident walk outdoors"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full scale-[1.025] object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,39,32,.9)_0%,rgba(24,39,32,.67)_46%,rgba(24,39,32,.12)_78%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,39,32,.5)_0%,transparent_48%)] lg:hidden" />
      <MarketingContainer className="relative flex min-h-[calc(100svh-4rem)] items-end py-10 sm:py-14 lg:items-center lg:py-16">
        <div className="max-w-[690px] text-primary-foreground">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-card/10 px-3.5 py-2 text-xs font-semibold shadow-sm backdrop-blur-md">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-dusty-rose" />
            The personalized walking program for women 40+
          </div>
          <h1 className="mt-6 font-display text-[clamp(3.2rem,11vw,5.6rem)] leading-[0.92] tracking-[-0.04em]">
            Feel Stronger in Your Life—One Walk at a Time.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/86 sm:text-xl">
            A complete 12-week movement system shaped around your energy, schedule, and starting
            point—so you can build a rhythm that finally feels like yours.
          </p>
          <div className="mt-8">
            <MarketingCTA className="bg-primary-foreground text-primary hover:brightness-95">
              Discover My Starting Plan
            </MarketingCTA>
            <p className="mt-4 flex items-center gap-2 text-sm text-primary-foreground/76">
              <ShieldCheck aria-hidden="true" className="size-4" />
              Free <span aria-hidden="true">·</span> No credit card{" "}
              <span aria-hidden="true">·</span> About 3 minutes
            </p>
          </div>
          <ul
            className="mt-8 grid gap-3 border-t border-white/18 pt-6 sm:grid-cols-3"
            aria-label="Program qualities"
          >
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2.5 text-sm font-medium text-primary-foreground/88"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/14">
                  <Check aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </MarketingContainer>
    </section>
  );
}
