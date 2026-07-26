import { Check, LoaderCircle } from "lucide-react";

export function AnalyzingStep({
  label,
  state,
}: {
  label: string;
  state: "waiting" | "active" | "complete";
}) {
  return (
    <li
      className={`flex items-center gap-3 rounded-2xl border bg-card px-4 py-3.5 transition-opacity duration-300 ${state === "waiting" ? "border-border opacity-45" : "border-primary/15 opacity-100"}`}
    >
      <span
        className={`grid size-8 shrink-0 place-items-center rounded-full ${state === "complete" ? "bg-primary text-primary-foreground" : state === "active" ? "bg-secondary text-primary" : "bg-muted text-muted-foreground"}`}
      >
        {state === "complete" ? (
          <Check aria-hidden="true" className="size-4" />
        ) : state === "active" ? (
          <LoaderCircle
            aria-hidden="true"
            className="size-4 animate-spin motion-reduce:animate-none"
          />
        ) : (
          <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
        )}
      </span>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </li>
  );
}
