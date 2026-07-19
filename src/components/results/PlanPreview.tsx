import type { Personalization } from "../../lib/personalization";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

export function PlanPreview({ p }: { p: Personalization }) {
  const first = p.weeklyPlan[0];
  return (
    <div className="rounded-3xl border border-border bg-card p-8">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Week 1 · {first.focus}
          </div>
          <div className="mt-2 font-display text-3xl text-foreground">
            {first.minutesPerDay} min walks · {first.daysPerWeek} days
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-7 gap-2">
        {p.sampleWeek.map((mins, i) => {
          const active = mins > 0;
          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className={`grid aspect-square w-full place-items-center rounded-2xl border transition-colors ${
                  active
                    ? "border-primary/20 bg-primary text-primary-foreground"
                    : "border-border bg-stone-soft text-muted-foreground"
                }`}
              >
                <span className="text-sm font-medium">
                  {active ? mins : "·"}
                </span>
              </div>
              <span className="text-[10px] font-medium uppercase text-muted-foreground">
                {DAYS[i]}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-4 gap-3">
        {p.weeklyPlan.map((w) => (
          <div
            key={w.week}
            className="rounded-xl border border-border bg-background px-3 py-3 text-center"
          >
            <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Week {w.week}
            </div>
            <div className="mt-1 text-lg font-medium text-foreground">
              {w.minutesPerDay}
            </div>
            <div className="text-[10px] text-muted-foreground">min · {w.daysPerWeek}d</div>
          </div>
        ))}
      </div>
    </div>
  );
}
