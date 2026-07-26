export function QuizProgress({ current, total }: { current: number; total: number }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="mb-2.5 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        <span>
          Question {current} of {total}
        </span>
        <span aria-hidden="true">{percentage}%</span>
      </div>
      <div
        role="progressbar"
        aria-label="Assessment progress"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-valuetext={`Question ${current} of ${total}`}
        className="h-1.5 overflow-hidden rounded-full bg-stone-soft"
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
