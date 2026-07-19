import { motion } from "framer-motion";
import type { Question } from "../../lib/questions";
import { useAssessment } from "../../context/AssessmentContext";
import { cn } from "../../lib/utils";
import { Button } from "../Button";

interface Props {
  question: Question;
  onAdvance: () => void;
}

export function MultiChoice({ question, onAdvance }: Props) {
  const { answers, setAnswer } = useAssessment();
  const key = question.key!;
  const current = (answers[key] as unknown as (string | number)[]) ?? [];

  function toggle(value: string | number) {
    const has = current.includes(value);
    const next = has ? current.filter((v) => v !== value) : [...current, value];
    setAnswer(key, next as never);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        {question.options?.map((opt, idx) => {
          const selected = current.includes(opt.value);
          return (
            <motion.button
              key={String(opt.value)}
              type="button"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04, duration: 0.3, ease: "easeOut" }}
              onClick={() => toggle(opt.value)}
              className={cn(
                "flex w-full items-center gap-4 rounded-2xl border bg-card px-5 py-4 text-left transition-all duration-200 hover:border-primary/40",
                selected
                  ? "border-primary bg-primary/[0.03]"
                  : "border-border"
              )}
            >
              <span
                className={cn(
                  "grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors",
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background"
                )}
                aria-hidden
              >
                {selected ? (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : null}
              </span>
              <span className="min-w-0 flex-1 text-base font-medium text-foreground">
                {opt.label}
              </span>
            </motion.button>
          );
        })}
      </div>
      <Button onClick={onAdvance} disabled={current.length === 0}>
        Continue
      </Button>
    </div>
  );
}
