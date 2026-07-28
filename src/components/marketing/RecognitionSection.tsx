import { BatteryMedium, CalendarDays, RefreshCcw } from "lucide-react";
import { EarlyProductOverviewSection } from "./EarlyProductOverviewSection";
import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const RECOGNITION_POINTS = [
  {
    icon: CalendarDays,
    title: "You keep having to start again.",
    copy: "A routine should survive a busy week instead of sending you back to day one.",
  },
  {
    icon: BatteryMedium,
    title: "Motivation cannot carry the whole plan.",
    copy: "You need clear options for the days when your energy or schedule changes.",
  },
  {
    icon: RefreshCcw,
    title: "Consistency should not require a perfect streak.",
    copy: "You need a sustainable way to keep going—and a simple way back after a pause.",
  },
];

export function RecognitionSection() {
  return (
    <>
      <section
        className="section-rose-wash py-20 sm:py-24 lg:py-30"
        aria-labelledby="recognition-title"
      >
        <MarketingContainer>
          <div className="max-w-3xl">
            <SectionEyebrow>You are not the problem</SectionEyebrow>
            <h2
              id="recognition-title"
              className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
            >
              The Plan Was Too Rigid. You Were Never the Problem.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Starting over is exhausting. A sustainable routine should work with your real
              schedule—not depend on perfect motivation.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {RECOGNITION_POINTS.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="marketing-card premium-hover-card p-6 sm:p-7">
                <span className="premium-icon-well grid size-11 place-items-center rounded-2xl text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold leading-7 text-foreground">{title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </MarketingContainer>
      </section>
      <EarlyProductOverviewSection />
    </>
  );
}
