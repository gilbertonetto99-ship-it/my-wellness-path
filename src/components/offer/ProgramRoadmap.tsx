import { MarketingContainer } from "../marketing/MarketingContainer";
import { SectionEyebrow } from "../marketing/SectionEyebrow";

const PHASES = [
  {
    weeks: "Weeks 1–2",
    title: "Start",
    copy: "Find a realistic rhythm and learn how to use your shorter backup option.",
  },
  {
    weeks: "Weeks 3–6",
    title: "Build",
    copy: "Add consistency and simple strength without abandoning the flexibility that keeps the plan workable.",
  },
  {
    weeks: "Weeks 7–10",
    title: "Strengthen",
    copy: "Continue building confidence and capacity gradually through an organized weekly structure.",
  },
  {
    weeks: "Weeks 11–12",
    title: "Continue",
    copy: "Create a routine you understand, can maintain, and know how to return to after interruptions.",
  },
];

export function ProgramRoadmap() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" aria-labelledby="roadmap-title">
      <MarketingContainer>
        <div className="max-w-3xl">
          <SectionEyebrow>How the 12 weeks work</SectionEyebrow>
          <h2
            id="roadmap-title"
            className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
          >
            A Calm Progression With a Clear Purpose at Every Stage.
          </h2>
        </div>
        <ol className="mt-12 grid gap-4 lg:grid-cols-4">
          {PHASES.map((phase, index) => (
            <li key={phase.title} className="marketing-card relative overflow-hidden p-6">
              <div
                aria-hidden="true"
                className="absolute -right-2 -top-5 font-display text-8xl text-primary/[0.05]"
              >
                {index + 1}
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {phase.weeks}
              </div>
              <h3 className="mt-7 font-display text-3xl text-foreground">{phase.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{phase.copy}</p>
            </li>
          ))}
        </ol>
      </MarketingContainer>
    </section>
  );
}
