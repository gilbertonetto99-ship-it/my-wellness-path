import { CheckCircle2, Play, Sheet, Video } from "lucide-react";
import { MarketingContainer } from "../marketing/MarketingContainer";
import { SectionEyebrow } from "../marketing/SectionEyebrow";
import { ProgramMockup } from "../visuals/EditorialImage";

const WEEK_ITEMS = [
  { icon: Play, label: "Weekly overview", meta: "Start here" },
  { icon: Sheet, label: "Walking plan", meta: "Weekly guide" },
  { icon: Video, label: "Simple strength", meta: "Short session" },
  { icon: CheckCircle2, label: "Planner and check-in", meta: "Printable tools" },
];

export function ProgramPreview() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" aria-labelledby="preview-program-title">
      <MarketingContainer>
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <SectionEyebrow>Inside the system</SectionEyebrow>
            <h2
              id="preview-program-title"
              className="font-display text-4xl leading-[1.03] tracking-[-0.025em] text-foreground sm:text-5xl"
            >
              Open the Week and Know Where to Begin.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The program is organized so you do not need to sort through a large content library.
              Each week brings the relevant plan, session, and planning tools together in one place.
            </p>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              This preview represents the organization of a typical week. Final materials may vary
              in visual presentation.
            </p>
          </div>
          <div className="rounded-[2rem] border border-primary/12 bg-secondary/60 p-4 shadow-[0_34px_80px_-52px_rgba(23,62,53,.55)] sm:p-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <ProgramMockup
                src="/assets/mockups/program-preview.webp"
                alt="Preview of the weekly program materials"
                sizes="(min-width: 1024px) 24vw, 44vw"
                aspectRatio="4 / 5"
                className="col-span-2"
              />
              <ProgramMockup
                src="/assets/mockups/habit-tracker.webp"
                alt="Preview of the Daily Habit Tracker"
                sizes="(min-width: 1024px) 12vw, 44vw"
                aspectRatio="4 / 5"
              />
              <ProgramMockup
                src="/images/stretch-guide.webp.png"
                alt="Preview of the Stretch Guide"
                sizes="(min-width: 1024px) 12vw, 44vw"
                aspectRatio="4 / 5"
              />
            </div>
            <div className="mt-4 rounded-3xl border border-border bg-card p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Example weekly organization
                  </div>
                  <div className="mt-1 font-display text-3xl text-foreground">Week 1 · Start</div>
                </div>
                <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  01
                </span>
              </div>
              <div className="mt-5 grid gap-2.5">
                {WEEK_ITEMS.map(({ icon: Icon, label, meta }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl bg-muted/70 p-3.5"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-sm">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-foreground">{label}</div>
                      <div className="text-xs text-muted-foreground">{meta}</div>
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
