import { Check, ShieldCheck } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { MarketingCTA } from "./MarketingCTA";

const BENEFITS = ["A complete 12-week path", "A realistic place to begin", "Tools for real life"];
const UNLOCKS = [
  {
    title: "Personalized Starting Plan",
    description: "A realistic first step shaped around your answers.",
  },
  {
    title: "12-Week Walking Roadmap",
    description: "A clear path for building your routine over 12 weeks.",
  },
  {
    title: "Weekly Walking Planner",
    description: "A simple way to plan movement around real life.",
  },
  {
    title: "Daily Habit Tracker",
    description: "A calm view of the actions you complete each day.",
  },
  {
    title: "Reflection Journal",
    description: "A thoughtful place to notice what works for you.",
  },
  {
    title: "Progress Tracker",
    description: "A clear record of the progress that is easy to miss.",
  },
  {
    title: "Stretch Guide",
    description: "Gentle stretching guidance to use at your pace.",
  },
];

export function HeroSection() {
  return (
    <section className="hero-premium relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-primary">
      <img
        src="/images/hero-walking.jpg"
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
          <h1 className="mt-6 font-display text-[clamp(2.85rem,10vw,5.3rem)] leading-[0.92] tracking-[-0.04em]">
            Stop Starting Over.
            <span className="block">Build a Routine You&apos;ll Actually Keep.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/86 sm:text-xl">
            Move Again is a complete 12-week walking system designed for women 40+ who want a
            realistic routine that fits real life.
          </p>
          <p className="mt-3 max-w-xl text-base leading-7 text-primary-foreground/78 sm:text-lg">
            Take the free 3-minute assessment to discover your personalized starting plan and see
            how the complete Move Again system can work for you.
          </p>
          <section
            id="assessment-preview"
            aria-labelledby="assessment-preview-title"
            className="mt-8 scroll-mt-24 rounded-[1.75rem] border border-white/18 bg-[rgba(24,39,32,.58)] p-5 shadow-[0_24px_60px_-38px_rgba(0,0,0,.7)] backdrop-blur-md sm:p-6"
          >
            <h2
              id="assessment-preview-title"
              className="font-display text-3xl leading-tight tracking-[-0.02em] sm:text-4xl"
            >
              Why Start With a 3-Minute Assessment?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-primary-foreground/80 sm:text-base sm:leading-7">
              Every woman starts from a different place. A few thoughtful questions help recommend a
              personalized starting point that feels realistic for your routine, instead of giving
              you generic advice.
            </p>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/72">
              What You&apos;ll Unlock
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-2" aria-label="What you'll unlock">
              {UNLOCKS.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/14 bg-white/[0.08] px-4 py-3"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white/12">
                      <Check aria-hidden="true" className="size-3" strokeWidth={2.5} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold leading-5">{item.title}</div>
                      <p className="mt-0.5 text-xs leading-5 text-primary-foreground/68">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-primary-foreground/76">
              You&apos;ll see your personalized recommendation first, then you can unlock the
              complete Move Again system if it feels like the right fit for you.
            </p>
          </section>

          <div className="mt-6">
            <MarketingCTA className="bg-primary-foreground text-primary hover:brightness-95">
              Find My Starting Plan
            </MarketingCTA>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-primary-foreground/76">
              <ShieldCheck aria-hidden="true" className="size-4" />
              Free 3-minute assessment <span aria-hidden="true">·</span> No credit card{" "}
              <span aria-hidden="true">·</span> Personalized starting guidance
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
