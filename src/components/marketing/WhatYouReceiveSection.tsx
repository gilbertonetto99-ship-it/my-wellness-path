import {
  Activity,
  CalendarDays,
  ClipboardCheck,
  Clock3,
  Download,
  Infinity,
  NotebookPen,
  Route,
  Sparkles,
  StretchHorizontal,
  UserRoundCheck,
} from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";

const DELIVERABLES = [
  {
    title: "Personalized Walking Score",
    benefit: "See your starting point at a glance.",
    icon: Activity,
  },
  {
    title: "12-Week Walking Roadmap",
    benefit: "Follow a clear path from week one onward.",
    icon: Route,
  },
  {
    title: "Weekly Walking Planner",
    benefit: "Fit each walk naturally into real life.",
    icon: CalendarDays,
  },
  {
    title: "Habit Tracker",
    benefit: "Turn small daily actions into consistency.",
    icon: ClipboardCheck,
  },
  {
    title: "Progress Journal",
    benefit: "Notice wins, patterns, and growing confidence.",
    icon: NotebookPen,
  },
  {
    title: "Stretch Guide",
    benefit: "Move more comfortably with gentle guidance.",
    icon: StretchHorizontal,
  },
  { title: "Lifetime Access", benefit: "Return to your complete system anytime.", icon: Infinity },
  {
    title: "Instant Digital Delivery",
    benefit: "Get everything immediately after access.",
    icon: Download,
  },
];

const ASSESSMENT_BENEFITS = [
  { label: "Takes about 60 seconds", icon: Clock3 },
  { label: "Personalized recommendations", icon: Sparkles },
  { label: "No fitness experience required", icon: UserRoundCheck },
];

export function WhatYouReceiveSection() {
  return (
    <section className="section-warm-flow py-16 sm:py-20 lg:py-24" aria-labelledby="receive-title">
      <MarketingContainer>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            The complete system
          </p>
          <h2
            id="receive-title"
            className="mt-3 font-display text-4xl leading-none tracking-[-0.025em] sm:text-5xl"
          >
            What You&apos;ll Receive
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Everything you need to finally build a walking habit that lasts.
          </p>
        </div>

        <ul
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Move Again system contents"
        >
          {DELIVERABLES.map(({ title, benefit, icon: Icon }) => (
            <li
              key={title}
              className="premium-hover-card rounded-[1.35rem] border border-border/80 bg-card p-5 shadow-[0_20px_48px_-40px_rgba(23,62,53,.5)]"
            >
              <span className="premium-icon-well grid size-10 place-items-center rounded-xl text-primary">
                <Icon aria-hidden="true" className="size-[1.15rem]" strokeWidth={1.7} />
              </span>
              <h3 className="mt-4 text-sm font-semibold leading-5 text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{benefit}</p>
            </li>
          ))}
        </ul>

        <div
          id="assessment-preview"
          className="mt-12 scroll-mt-24 rounded-[1.75rem] border border-primary/10 bg-primary px-6 py-8 text-primary-foreground shadow-[0_28px_70px_-52px_rgba(23,62,53,.9)] sm:px-9 sm:py-9 lg:flex lg:items-center lg:gap-12"
        >
          <div className="max-w-2xl lg:flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/65">
              Your first step
            </p>
            <h2 className="mt-2 font-display text-3xl leading-tight tracking-[-0.02em] sm:text-4xl">
              Why Take the Assessment?
            </h2>
            <p className="mt-4 text-sm leading-6 text-primary-foreground/82 sm:text-base sm:leading-7">
              Your answers help personalize your recommended walking approach.
            </p>
            <p className="mt-2 text-sm leading-6 text-primary-foreground/72 sm:text-base sm:leading-7">
              Instead of generic advice, you&apos;ll receive guidance designed around your current
              habits, confidence and routine.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3 lg:mt-0 lg:w-[25rem] lg:grid-cols-1">
            {ASSESSMENT_BENEFITS.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.07] px-4 py-3 text-sm font-medium"
              >
                <Icon aria-hidden="true" className="size-4 shrink-0 text-gold" strokeWidth={1.9} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </MarketingContainer>
    </section>
  );
}
