import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const STEPS = [
  {
    number: "01",
    title: "Build Confidence",
    copy: "Begin at a level that feels comfortable and clear.",
  },
  {
    number: "02",
    title: "Create Consistency",
    copy: "Build a flexible rhythm around your real week.",
  },
  {
    number: "03",
    title: "Enjoy Movement Naturally",
    copy: "Enjoy showing up—and know how to return after a pause.",
  },
];

export function MethodSection() {
  return (
    <section
      id="how-it-works"
      className="section-soft-divider scroll-mt-24 py-20 sm:py-24 lg:py-30"
      aria-labelledby="method-title"
    >
      <MarketingContainer>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2
            id="method-title"
            className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
          >
            The Move Again Method.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Three simple stages. One realistic path you can keep returning to.
          </p>
        </div>
        <ol className="relative mt-12 grid gap-5 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="marketing-card method-card premium-hover-card relative overflow-hidden p-7 sm:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-6 font-display text-8xl text-primary/[0.055]"
              >
                {step.number}
              </div>
              <div className="text-xs font-semibold tracking-[0.16em] text-primary">
                STEP {step.number}
              </div>
              <h3 className="mt-8 font-display text-3xl leading-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{step.copy}</p>
            </li>
          ))}
        </ol>
      </MarketingContainer>
    </section>
  );
}
