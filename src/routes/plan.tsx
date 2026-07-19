import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";
import { useAssessment } from "../context/AssessmentContext";
import { personalize } from "../lib/personalization";
import { HabitStack } from "../components/results/HabitStack";

export const Route = createFileRoute("/plan")({
  component: PlanPage,
});

function PlanPage() {
  const navigate = useNavigate();
  const { answers } = useAssessment();

  useEffect(() => {
    if (!answers.currentWeightLb) navigate({ to: "/" });
  }, [answers, navigate]);

  const p = useMemo(() => personalize(answers), [answers]);

  return (
    <AppShell>
      <div className="flex flex-col gap-8">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Your four-week plan
          </div>
          <h1 className="mt-2 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            A quiet ramp, on purpose.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Each week is a small step up. If a day gets busy, the plan bends
            with you — not against you.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {p.weeklyPlan.map((w) => (
            <div
              key={w.week}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-3xl border border-border bg-card p-6 sm:flex sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Week {w.week}
                </div>
                <div className="mt-1 font-display text-2xl text-foreground">
                  {w.focus}
                </div>
              </div>
              <div className="text-right sm:text-left">
                <div className="font-display text-3xl text-primary">
                  {w.minutesPerDay}
                  <span className="text-base text-muted-foreground"> min</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {w.daysPerWeek} days / week
                </div>
              </div>
            </div>
          ))}
        </div>

        <HabitStack p={p} />

        <div className="rounded-3xl border border-border bg-primary/[0.04] p-8">
          <div className="text-xs font-medium uppercase tracking-wider text-primary">
            Ready for the full program?
          </div>
          <h3 className="mt-2 font-display text-3xl text-foreground">
            StrideWell — the complete 12-week experience.
          </h3>
          <p className="mt-3 text-base leading-relaxed text-foreground/90">
            The plan you just saw, extended over 12 weeks. Guided walking
            audio, a printable habit tracker, a library of gentle recipes and
            mindset lessons, and weekly rhythm resets.
          </p>
          <div className="mt-6">
            <Link to="/offer">
              <Button>Unlock the premium program</Button>
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
