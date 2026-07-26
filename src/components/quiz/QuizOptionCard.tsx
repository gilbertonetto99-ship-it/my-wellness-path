import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

export function QuizOptionCard({
  name,
  value,
  label,
  selected,
  disabled,
  onSelect,
}: {
  name: string;
  value: string;
  label: string;
  selected: boolean;
  disabled: boolean;
  onSelect: (value: string) => void;
}) {
  return (
    <label
      className={cn(
        "group relative flex min-h-15 cursor-pointer items-center gap-4 rounded-2xl border bg-card px-4 py-3.5 text-left shadow-[0_12px_30px_-28px_rgba(23,62,53,.45)] transition-[border-color,background-color,box-shadow,transform] duration-200 sm:min-h-17 sm:px-5 sm:py-4",
        selected
          ? "border-primary bg-secondary shadow-[0_16px_32px_-26px_rgba(23,62,53,.6)]"
          : "border-border hover:-translate-y-px hover:border-primary/35 hover:shadow-[0_18px_36px_-28px_rgba(23,62,53,.5)]",
        disabled && "cursor-wait",
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        disabled={disabled}
        onChange={() => onSelect(value)}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          "grid size-6 shrink-0 place-items-center rounded-full border transition-colors peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-ring/60",
          selected
            ? "border-primary bg-primary text-primary-foreground"
            : "border-input bg-background text-transparent group-hover:border-primary/45",
        )}
      >
        <Check className="size-3.5" strokeWidth={3} />
      </span>
      <span className="text-[15px] font-medium leading-6 text-foreground sm:text-base">
        {label}
      </span>
    </label>
  );
}
