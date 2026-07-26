import { Check } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const FIT_POINTS = [
  { title: "Busy or tired?", copy: "Choose a pace that fits today." },
  { title: "Starting later?", copy: "Begin exactly where you are." },
  { title: "Stopped before?", copy: "Use a plan designed for returning." },
  { title: "Unsure what to do?", copy: "Follow one clear next step." },
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
              There Is Room for You Here.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              No pressure. No catching up. Just a clear place to begin.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" aria-label="Who Move Again is for">
            {FIT_POINTS.map((point) => (
              <li
                key={point.title}
                className="marketing-card premium-hover-card flex min-h-31 items-start gap-4 p-5 sm:p-6"
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
