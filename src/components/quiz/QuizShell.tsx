import type { ReactNode } from "react";
import { LockKeyhole } from "lucide-react";
import { MoveAgainLogo } from "../marketing/MoveAgainLogo";
import { QuizBackButton } from "./QuizBackButton";
import { QuizProgress } from "./QuizProgress";

export function QuizShell({
  children,
  current,
  total,
  onBack,
}: {
  children: ReactNode;
  current: number;
  total: number;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/75 bg-background/95">
        <div className="mx-auto flex min-h-16 w-full max-w-3xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <QuizBackButton onClick={onBack} />
          <MoveAgainLogo />
          <div aria-hidden="true" className="size-11" />
        </div>
      </header>
      <main
        id="quiz-main"
        className="mx-auto w-full max-w-2xl px-5 pb-12 pt-6 sm:px-8 sm:pb-16 sm:pt-9"
      >
        <QuizProgress current={current} total={total} />
        <div className="pt-8 sm:pt-11">{children}</div>
        <div className="mt-8 flex items-start justify-center gap-2 text-center text-xs leading-5 text-muted-foreground sm:mt-10">
          <LockKeyhole aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-primary" />
          <span>Your answers are saved only on this device.</span>
        </div>
      </main>
    </div>
  );
}
