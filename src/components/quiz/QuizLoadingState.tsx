export function QuizLoadingState() {
  return (
    <div
      className="mx-auto flex min-h-[55vh] max-w-xl flex-col justify-center"
      aria-busy="true"
      aria-label="Restoring your assessment"
    >
      <div className="h-3 w-28 animate-pulse rounded-full bg-stone-soft" />
      <div className="mt-6 h-11 w-full animate-pulse rounded-2xl bg-stone-soft/80" />
      <div className="mt-3 h-6 w-4/5 animate-pulse rounded-xl bg-stone-soft/60" />
      <div className="mt-9 grid gap-3">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="h-16 animate-pulse rounded-2xl bg-stone-soft/60" />
        ))}
      </div>
      <span className="sr-only">Restoring your assessment…</span>
    </div>
  );
}
