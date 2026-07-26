import { ArrowLeft } from "lucide-react";

export function QuizBackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Go back"
      className="marketing-focus grid size-11 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/25 hover:bg-secondary"
    >
      <ArrowLeft aria-hidden="true" className="size-4.5" />
    </button>
  );
}
