import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const STEPS = [
  {
    number: "01",
    title: "Start Where You Are",
    copy: "Choose a starting point that feels realistic enough to repeat—not one based on pressure or perfection.",
  },
  {
    number: "02",
    title: "Build a Flexible Weekly Rhythm",
    copy: "Use simple walking windows and smaller backup options that fit around your real schedule.",
  },
  {
    number: "03",
    title: "Know How to Return",
    copy: "Learn how to come back after a missed day or difficult week without starting from zero.",
  },
];

export function MethodSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-30"
      aria-labelledby="method-title"
    >
      <MarketingContainer>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2
            id="method-title"
            className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
          >
            A Routine Built for Repeatability—Not Perfection.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Move Again helps you create a steady rhythm through small decisions that remain workable
            when life changes.
          </p>
        </div>
        <ol className="relative mt-12 grid gap-5 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.number} className="marketing-card relative overflow-hidden p-7 sm:p-8">
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
