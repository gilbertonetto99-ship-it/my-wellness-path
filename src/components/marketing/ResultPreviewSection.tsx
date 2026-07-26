import { CalendarCheck, Clock3, Compass, Sparkles } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { MarketingCTA } from "./MarketingCTA";
import { SectionEyebrow } from "./SectionEyebrow";

const PREVIEW_ITEMS = [
  { icon: Clock3, label: "Starting pace", value: "A realistic time you can repeat" },
  {
    icon: Compass,
    label: "Consistency barrier",
    value: "The pattern most likely to interrupt you",
  },
  {
    icon: CalendarCheck,
    label: "First-week direction",
    value: "A simple rhythm for the week ahead",
  },
];

export function ResultPreviewSection() {
  return (
    <section
      className="section-soft-divider py-20 sm:py-24 lg:py-30"
      aria-labelledby="preview-title"
    >
      <MarketingContainer>
        <div className="result-preview-premium overflow-hidden rounded-[2rem] border border-primary/12 bg-primary text-primary-foreground shadow-[0_40px_90px_-50px_rgba(23,62,53,.8)]">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:p-14">
            <div>
              <SectionEyebrow>Free assessment</SectionEyebrow>
              <h2
                id="preview-title"
                className="font-display text-4xl leading-[1.03] tracking-[-0.025em] sm:text-5xl"
              >
                See Your Best Place to Begin.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-primary-foreground/76 sm:text-lg">
                In about three minutes, discover a realistic pace and one clear first-week step.
              </p>
              <MarketingCTA className="mt-9 bg-primary-foreground text-primary shadow-[0_18px_36px_-20px_rgba(0,0,0,.55)] hover:brightness-95">
                See My Free Starting Plan
              </MarketingCTA>
            </div>

            <div className="rounded-[1.6rem] border border-white/15 bg-white/[0.08] p-4 backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-white/12 pb-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/65">
                    Example plan preview
                  </div>
                  <div className="mt-1 font-display text-2xl">Your Starting Direction</div>
                </div>
                <span className="grid size-11 place-items-center rounded-2xl bg-white/12">
                  <Sparkles aria-hidden="true" className="size-5 text-dusty-rose" />
                </span>
              </div>
              <div className="mt-5 grid gap-3">
                {PREVIEW_ITEMS.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="preview-item flex items-start gap-4 rounded-2xl bg-white/[0.09] p-4"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/12">
                      <Icon aria-hidden="true" className="size-4.5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground/60">
                        {label}
                      </div>
                      <div className="mt-1 text-sm font-medium leading-6 text-primary-foreground/95">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
