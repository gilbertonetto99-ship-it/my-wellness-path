import {
  AudioLines,
  BookOpen,
  CalendarRange,
  ClipboardCheck,
  Dumbbell,
  Footprints,
  ListRestart,
  MoonStar,
  NotebookPen,
} from "lucide-react";
import { MarketingContainer } from "../marketing/MarketingContainer";
import { SectionEyebrow } from "../marketing/SectionEyebrow";
import { ProgramMockup } from "../visuals/EditorialImage";

const DELIVERABLES = [
  {
    icon: CalendarRange,
    title: "12-Week Walking Roadmap",
    format: "Digital guide",
    benefit: "See what to focus on each week and how the routine develops over time.",
    preview: "/assets/program/walking-planner.webp",
  },
  {
    icon: AudioLines,
    title: "Guided Walking Sessions",
    format: "Guided audio and video",
    benefit: "Reduce decisions by having clear support you can take into selected walks.",
    preview: "/assets/program/weekly-schedule.webp",
  },
  {
    icon: Dumbbell,
    title: "Simple Strength Sessions",
    format: "Short videos",
    benefit: "Add approachable strength work alongside your walking rhythm.",
    preview: "/assets/program/strength-routine.webp",
  },
  {
    icon: MoonStar,
    title: "Stretch Guide",
    format: "Digital guide",
    benefit: "Choose a lighter movement option when recovery or flexibility is the better fit.",
    preview: "/images/stretch-guide.webp.png",
  },
  {
    icon: NotebookPen,
    title: "Weekly Walking Planner",
    format: "Printable PDF",
    benefit: "Turn good intentions into specific walking windows for the week ahead.",
    preview: "/assets/program/journal.webp",
  },
  {
    icon: BookOpen,
    title: "Reflection Journal",
    format: "Printable journal",
    benefit: "Notice what supports your routine and reflect without judging an imperfect week.",
    preview: "/images/walking-journal.webp.png",
  },
  {
    icon: ClipboardCheck,
    title: "Daily Habit Tracker",
    format: "Printable tracker",
    benefit: "Make completed actions visible without relying on a perfect streak.",
    preview: "/assets/program/habit-tracker.webp",
  },
  {
    icon: Footprints,
    title: "Minimum-Day Plan",
    format: "Quick checklist",
    benefit: "Keep a smaller version of the routine available for busy or lower-energy days.",
    preview: "/assets/program/minimum-day-plan.webp",
  },
  {
    icon: ListRestart,
    title: "Missed-Week Reentry Guide",
    format: "Short digital guide",
    benefit: "Know how to return after an interruption without catching up or starting from zero.",
    preview: "/assets/program/progress-tracker.webp",
  },
];

export function OfferStack() {
  return (
    <section
      id="whats-included"
      className="scroll-mt-8 bg-muted/60 py-20 sm:py-24 lg:py-28"
      aria-labelledby="offer-stack-title"
    >
      <MarketingContainer>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>The complete system</SectionEyebrow>
          <h2
            id="offer-stack-title"
            className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-6xl"
          >
            Everything You Need to Turn a Starting Point Into a Weekly Rhythm.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Each part has one job: make the next step clearer, the routine easier to adapt, and the
            return simpler after life interrupts.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {DELIVERABLES.map(({ icon: Icon, title, format, benefit, preview }) => (
            <article
              key={title}
              className="marketing-card grid gap-5 p-5 sm:grid-cols-[8.5rem_1fr] sm:p-6"
            >
              <ProgramMockup
                src={preview}
                alt={`Preview of ${title}`}
                sizes="(min-width: 640px) 136px, 88vw"
                aspectRatio="4 / 5"
              />
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <Icon aria-hidden="true" className="size-5.5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.13em] text-primary">
                    {format}
                  </div>
                  <h3 className="mt-1.5 font-display text-2xl leading-tight text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{benefit}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </MarketingContainer>
    </section>
  );
}
