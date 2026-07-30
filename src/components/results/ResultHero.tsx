import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, RotateCcw, Sparkles } from "lucide-react";
import type { ResultPersonalization } from "../../lib/result-personalization";
import { LifestyleImage } from "../visuals/EditorialImage";

const INCLUDED_TOOLS = [
  "12-Week Walking Roadmap",
  "Weekly Walking Planner",
  "Daily Habit Tracker",
  "Reflection Journal",
  "Stretch Guide",
];

export function ResultHero({
  result,
  onRetake,
}: {
  result: ResultPersonalization;
  onRetake: () => void;
}) {
  return (
    <section
      aria-labelledby="result-title"
      className="grid items-center gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-12"
    >
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-3.5 py-2 text-xs font-semibold text-primary shadow-sm">
          <Sparkles aria-hidden="true" className="size-3.5" />
          Based on your answers
        </div>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
          We found the starting point most likely to feel realistic and repeatable for you.
        </p>
        <h1
          id="result-title"
          className="mt-4 max-w-4xl font-display text-[2.7rem] leading-[.99] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl"
        >
          {result.goalHeadline}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{result.goalCopy}</p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-foreground/80">
          {result.readinessMessage}
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-3 rounded-3xl border border-primary/12 bg-card p-4 sm:p-5">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Starting Pace
            </dt>
            <dd className="mt-1 text-sm font-semibold leading-6 text-foreground">
              {result.startingWalk.value}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Routine Window
            </dt>
            <dd className="mt-1 text-sm font-semibold leading-6 text-foreground">
              {result.routineWindow.value}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Primary Focus
            </dt>
            <dd className="mt-1 text-sm font-semibold leading-6 text-foreground">
              {result.barrier.title}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              First Week Goal
            </dt>
            <dd className="mt-1 text-sm font-semibold leading-6 text-foreground">
              {result.startingStyle.daysPerWeek} walking days
            </dd>
          </div>
        </dl>
        <div className="mt-6 rounded-3xl border border-primary/12 bg-secondary/60 p-5 sm:p-6">
          <p className="text-sm font-semibold text-foreground">
            Your complete Move Again system includes:
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {INCLUDED_TOOLS.map((tool) => (
              <li
                key={tool}
                className="flex items-start gap-2.5 text-sm leading-6 text-foreground/85"
              >
                <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check aria-hidden="true" className="size-2.5" strokeWidth={3} />
                </span>
                {tool}
              </li>
            ))}
          </ul>
          <Link
            to="/offer"
            className="marketing-focus group mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_18px_34px_-22px_rgba(23,62,53,.75)] transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
          >
            Continue To My Plan
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
        <button
          type="button"
          onClick={onRetake}
          className="marketing-focus mt-6 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          <RotateCcw aria-hidden="true" className="size-3.5" />
          Retake the assessment
        </button>
      </div>
      <LifestyleImage
        src="/images/walking-friends.webp"
        alt="Friends sharing a relaxed walk together"
        sizes="(min-width: 1024px) 38vw, 92vw"
        aspectRatio="4 / 3"
      />
    </section>
  );
}
