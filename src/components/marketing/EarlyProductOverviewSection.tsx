import {
  CalendarCheck,
  CalendarRange,
  Check,
  ClipboardCheck,
  NotebookPen,
  StretchHorizontal,
} from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const DELIVERABLES = [
  { icon: CalendarRange, label: "12-Week Walking Roadmap" },
  { icon: CalendarCheck, label: "Weekly Walking Planner" },
  { icon: ClipboardCheck, label: "Daily Habit Tracker" },
  { icon: NotebookPen, label: "Reflection Journal" },
  { icon: StretchHorizontal, label: "Stretch Guide" },
];

export function EarlyProductOverviewSection() {
  return (
    <section className="program-showcase py-20 sm:py-24 lg:py-30" aria-labelledby="overview-title">
      <MarketingContainer>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>The complete Move Again system</SectionEyebrow>
          <h2
            id="overview-title"
            className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
          >
            More Than A Walking Plan
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Move Again is a complete 12-week system designed to help you build a routine you can
            actually maintain.
          </p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_32px_80px_-58px_rgba(23,62,53,.34)] lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div className="overflow-hidden bg-warm-beige">
            <img
              src="/images/program-kit.webp.png"
              alt="The complete Move Again 12-week program kit"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] size-full object-cover sm:aspect-[3/2]"
            />
          </div>
          <div className="p-6 sm:p-10 lg:p-12">
            <h3 className="font-display text-3xl leading-tight text-foreground">
              Clear tools for each step of your routine
            </h3>
            <ul className="mt-6 grid gap-3" aria-label="Move Again system deliverables">
              {DELIVERABLES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium last:border-0 last:pb-0 sm:text-base"
                >
                  <span className="premium-icon-well grid size-9 shrink-0 place-items-center rounded-xl text-primary">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <span className="flex-1">{label}</span>
                  <Check aria-hidden="true" className="size-4 shrink-0 text-primary" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
