import type { Personalization } from "../../lib/personalization";

export function HabitStack({ p }: { p: Personalization }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8">
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Your habit stack
      </div>
      <h3 className="mt-2 font-display text-2xl text-foreground">
        Small anchors, chosen for you
      </h3>
      <ul className="mt-6 flex flex-col gap-4">
        {p.habits.map((h, i) => (
          <li
            key={h.title}
            className="flex items-start gap-4 border-t border-border pt-4 first:border-t-0 first:pt-0"
          >
            <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sand/40 font-display text-sm text-sand-foreground">
              {i + 1}
            </span>
            <div className="min-w-0">
              <div className="text-base font-medium text-foreground">{h.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{h.detail}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
