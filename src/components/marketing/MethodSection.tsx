import { MarketingContainer } from "./MarketingContainer";
import { SectionEyebrow } from "./SectionEyebrow";

const STEPS = [
  {
    number: "01",
    title: "Take the free 3-minute assessment.",
    copy: "Answer a few simple questions about your starting point and real life.",
  },
  {
    number: "02",
    title: "Discover your personalized starting plan.",
    copy: "See a realistic place to begin based on your answers.",
  },
  {
    number: "03",
    title: "See how the complete Move Again system fits your lifestyle.",
    copy: "Explore the 12-week structure and the tools that support your routine.",
  },
  {
    number: "04",
    title: "Start building a routine you’ll actually keep.",
    copy: "Move forward with clear guidance designed to work with real life.",
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
            Your Path Into Move Again.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Four simple steps from finding your starting point to building a routine that lasts.
          </p>
        </div>
        <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="marketing-card method-card premium-hover-card relative overflow-hidden p-6 sm:p-8"
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
              <h3 className="mt-7 font-display text-2xl leading-tight text-foreground sm:mt-8 sm:text-3xl">
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
