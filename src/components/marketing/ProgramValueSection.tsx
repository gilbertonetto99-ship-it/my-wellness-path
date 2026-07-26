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
    bullets: ["Notice what helps you keep going", "Celebrate progress you might otherwise miss"],
  },
  {
    title: "Habit Tracker",
    image: "/images/habit-tracker.webp.png",
    bullets: [
      "Turn small actions into a visible rhythm",
      "Stay encouraged without chasing perfection",
    ],
  },
  {
    title: "12-Week Roadmap",
    image: "/images/12-week-roadmap.webp.png",
    bullets: ["See the complete journey at a glance", "Move forward one clear stage at a time"],
  },
  {
    title: "Progress Tracker",
    image: "/images/progress-tracker.webp.png",
    bullets: ["Record the consistency you are building", "Recognize meaningful everyday wins"],
  },
  {
    title: "Members Area",
    image: "/images/members-area.webp.png",
    bullets: [
      "Keep your program organized in one place",
      "Return whenever you need your next step",
    ],
  },
  {
    title: "Stretch Guide",
    image: "/images/stretch-guide.webp.png",
    bullets: ["Add gentle mobility to your routine", "Follow simple, approachable guidance"],
  },
];

export function ProgramValueSection() {
  return (
    <section
      className="program-showcase py-24 sm:py-30 lg:py-38"
      aria-labelledby="program-value-title"
    >
      <MarketingContainer>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>The complete Move Again system</SectionEyebrow>
          <h2
            id="program-value-title"
            className="font-display text-5xl leading-[0.96] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            Everything You&apos;ll Receive
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            A complete step-by-step system designed to help you move more, feel younger, and stay
            consistent.
          </p>
        </div>

        <figure className="program-kit-hero relative mx-auto mt-14 max-w-[1050px] overflow-hidden rounded-[2rem] border border-border bg-card">
          <img
            src="/images/program-kit.webp.png"
            alt="The complete Move Again program kit displayed together"
            loading="lazy"
            decoding="async"
            className="aspect-[3/2] size-full object-cover"
          />
          <figcaption className="absolute inset-x-5 bottom-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/70 bg-card/90 px-5 py-4 backdrop-blur-md sm:inset-x-8 sm:bottom-8">
            <span className="font-display text-xl sm:text-2xl">
              Your complete 12-week experience
            </span>
            <span className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[.12em] text-primary-foreground">
              7 integrated tools
            </span>
          </figcaption>
        </figure>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
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
                  className="aspect-[3/2] size-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </div>
              <div className="p-7 sm:p-9">
                <div className="text-xs font-semibold uppercase tracking-[.16em] text-gold">
                  Included in Move Again
                </div>
                <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
                  {product.title}
                </h3>
                <ul className="mt-6 grid gap-3">
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
        <div className="mx-auto mt-14 max-w-xl text-center">
          <p className="font-display text-3xl leading-tight">
            Your first step takes about 3 minutes.
          </p>
          <MarketingCTA className="mt-7">Find My Starting Plan</MarketingCTA>
          <p className="mt-4 text-sm text-muted-foreground">Free assessment · No credit card</p>
        </div>
      </MarketingContainer>
    </section>
  );
}
