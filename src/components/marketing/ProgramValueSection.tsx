import { Check } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { MarketingCTA } from "./MarketingCTA";
import { SectionEyebrow } from "./SectionEyebrow";

const PRODUCTS = [
  {
    title: "Weekly Walking Planner",
    image: "/images/walking-planner.webp.png",
    bullets: ["Know exactly what to do each week", "Plan around your real schedule"],
  },
  {
    title: "Reflection Journal",
    image: "/images/walking-journal.webp.png",
    bullets: ["See which routines work best for you", "Reflect without judging a missed day"],
  },
  {
    title: "Daily Habit Tracker",
    image: "/images/habit-tracker.webp.png",
    bullets: [
      "Make completed actions easy to see",
      "Track consistency without pressure or perfect streaks",
    ],
  },
  {
    title: "12-Week Walking Roadmap",
    image: "/images/12-week-roadmap.webp.png",
    bullets: [
      "Know what each stage is helping you build",
      "Move through all 12 weeks with clarity",
    ],
  },
  {
    title: "Progress Tracker",
    image: "/images/progress-tracker.webp.png",
    bullets: [
      "See progress that is easy to overlook",
      "Focus on repeatable actions, not perfection",
    ],
  },
  {
    title: "Members Area",
    image: "/images/members-area.webp.png",
    bullets: [
      "Keep the complete system organized in one place",
      "Find your next step without sorting through scattered files",
    ],
  },
  {
    title: "Stretch Guide",
    image: "/images/stretch-guide.webp.png",
    bullets: [
      "Add gentle movement alongside your walks",
      "Use clear stretching guidance at your pace",
    ],
  },
];

export function ProgramValueSection() {
  return (
    <section
      className="program-showcase py-20 sm:py-26 lg:py-32"
      aria-labelledby="program-value-title"
    >
      <MarketingContainer>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>The complete Move Again system</SectionEyebrow>
          <h2
            id="program-value-title"
            className="font-display text-4xl leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            Everything You&apos;ll Receive
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Seven connected tools that show you what to do, help you plan around real life, and make
            steady progress easier to see across all 12 weeks.
          </p>
        </div>

        <figure className="program-kit-hero relative mx-auto mt-10 max-w-[1080px] overflow-hidden rounded-[2rem] border border-border bg-card sm:mt-14">
          <img
            src="/images/program-kit.webp.png"
            alt="The complete Move Again program kit displayed together"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] size-full object-cover sm:aspect-[3/2]"
          />
          <figcaption className="relative flex flex-wrap items-center justify-between gap-3 border-t border-border bg-card px-5 py-4 sm:absolute sm:inset-x-8 sm:bottom-8 sm:rounded-2xl sm:border sm:border-white/70 sm:bg-card/90 sm:backdrop-blur-md">
            <span className="font-display text-xl leading-tight sm:text-2xl">
              One complete system for all 12 weeks
            </span>
            <span className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[.12em] text-primary-foreground">
              7 integrated tools
            </span>
          </figcaption>
        </figure>

        <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6 md:grid-cols-2">
          {PRODUCTS.map((product, index) => (
            <article
              key={product.title}
              className={`product-unboxing-card group overflow-hidden rounded-[2rem] border border-border bg-card ${
                index === PRODUCTS.length - 1 ? "md:col-span-2 md:grid md:grid-cols-2" : ""
              }`}
            >
              <div className="overflow-hidden bg-warm-beige">
                <img
                  src={product.image}
                  alt={`${product.title} preview`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] size-full object-cover transition-transform duration-500 sm:aspect-[3/2] group-hover:scale-[1.025]"
                />
              </div>
              <div className="p-6 sm:p-9">
                <div className="text-xs font-semibold uppercase tracking-[.16em] text-gold">
                  Included in Move Again
                </div>
                <h3 className="mt-3 font-display text-[2rem] leading-tight sm:text-4xl">
                  {product.title}
                </h3>
                <ul className="mt-5 grid gap-3 sm:mt-6">
                  {product.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm leading-6 text-muted-foreground sm:text-base"
                    >
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                        <Check aria-hidden="true" className="size-3" strokeWidth={2.5} />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-14">
          <p className="font-display text-3xl leading-tight sm:text-4xl">
            Start with guidance shaped around your real life.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
            Your free assessment identifies a realistic starting point, then shows you how the
            complete 12-week system can support the routine ahead.
          </p>
          <MarketingCTA className="mt-6 sm:mt-7">Find My Starting Plan</MarketingCTA>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Free 3-minute assessment <span aria-hidden="true">·</span> No credit card{" "}
            <span aria-hidden="true">·</span> Personalized starting guidance
          </p>
        </div>
      </MarketingContainer>
    </section>
  );
}
