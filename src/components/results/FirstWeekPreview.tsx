import { CalendarDays, Check } from "lucide-react";
import type { ResultPersonalization } from "../../lib/result-personalization";

export function FirstWeekPreview({ result }: { result: ResultPersonalization }) {
  return (
    <section aria-labelledby="week-title" className="marketing-card p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
          <CalendarDays aria-hidden="true" className="size-5" />
        </span>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Your first-week preview
          </div>
          <h2 id="week-title" className="mt-2 font-display text-3xl leading-tight text-foreground">
            A clear week with room to adjust.
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            This is a suggested starting rhythm based on the time and activity level you selected.
          </p>
        </div>
      </div>

      <ol className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-7">
        {result.week.map((item) => (
          <li
            key={item.day}
            className={`rounded-2xl border p-3.5 lg:min-h-35 ${item.active ? "border-primary/20 bg-secondary" : "border-border bg-muted/55"}`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {item.day}
              </span>
              {item.active ? <Check aria-hidden="true" className="size-3.5 text-primary" /> : null}
            </div>
            <div className="mt-3 text-sm font-semibold leading-5 text-foreground">
              {item.activity}
            </div>
            <div className="mt-1 text-xs leading-5 text-muted-foreground">{item.detail}</div>
          </li>
        ))}
      </ol>

      <div className="mt-5 rounded-2xl border border-primary/10 bg-secondary/70 px-4 py-3 text-sm leading-6 text-foreground/85">
        <span className="font-semibold text-primary">Your minimum-day option:</span>{" "}
        {result.minimumDay}. A smaller walk still counts as keeping the rhythm.
      </div>
    </section>
  );
}
