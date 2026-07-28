import { Check } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const FIT_POINTS = [
  { title: "Know what to do each week.", copy: "Follow a clear next step instead of guessing." },
  { title: "Start at a realistic level.", copy: "Begin from where you are without catching up." },
  { title: "Fit movement into real life.", copy: "Plan around the time and energy you have." },
  {
    title: "Stay consistent without pressure.",
    copy: "Track small actions and return after interruptions.",
  },
];

export function AudienceSection() {
  return (
    <section className="section-rose-wash py-20 sm:py-24 lg:py-30" aria-labelledby="audience-title">
      <MarketingContainer>
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-18">
          <div>
            <SectionEyebrow>Made for your real life</SectionEyebrow>
            <h2
              id="audience-title"
              className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
            >
              Clear Guidance for Your Real Life.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              No complicated workouts or perfect streaks—just practical guidance for building a
              routine you can maintain.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" aria-label="Who Move Again is for">
            {FIT_POINTS.map((point) => (
              <li
                key={point.title}
                className="marketing-card premium-hover-card flex items-start gap-4 p-5 sm:min-h-31 sm:p-6"
              >
                <span className="premium-icon-well mt-0.5 grid size-8 shrink-0 place-items-center rounded-full text-primary">
                  <Check aria-hidden="true" className="size-4" strokeWidth={2.5} />
                </span>
                <span className="text-base leading-7 text-foreground/90">
                  <strong className="block font-semibold text-foreground">{point.title}</strong>
                  <span className="text-muted-foreground">{point.copy}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </MarketingContainer>
    </section>
  );
}
