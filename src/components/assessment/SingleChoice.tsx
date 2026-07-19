import { motion } from "framer-motion";
import type { Question } from "../../lib/questions";
import { useAssessment } from "../../context/AssessmentContext";
import { cn } from "../../lib/utils";

interface Props {
  question: Question;
  onAdvance: () => void;
}

export function SingleChoice({ question, onAdvance }: Props) {
  const { answers, setAnswer } = useAssessment();
  const current = question.key ? answers[question.key] : undefined;

  return (
    <div className="flex flex-col gap-3">
      {question.options?.map((opt, idx) => {
        const selected = current === opt.value;
        return (
          <motion.button
            key={String(opt.value)}
            type="button"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04, duration: 0.3, ease: "easeOut" }}
            onClick={() => {
              if (question.key) {
                setAnswer(question.key, opt.value as never);
              }
              // small delay so the user sees the selection
              setTimeout(onAdvance, 220);
            }}
            className={cn(
              "group w-full rounded-2xl border bg-card px-5 py-5 text-left transition-all duration-200",
              "hover:border-primary/40 hover:bg-card hover:shadow-[0_1px_2px_rgba(0,0,0,0.03),0_10px_30px_-16px_rgba(0,0,0,0.08)]",
              selected
                ? "border-primary bg-primary/[0.03] shadow-[0_1px_2px_rgba(0,0,0,0.03),0_10px_30px_-16px_rgba(0,0,0,0.08)]"
                : "border-border"
            )}
          >
            <div className="flex items-start gap-4">
              <span
                className={cn(
                  "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors",
                  selected
                    ? "border-primary bg-primary"
                    : "border-border bg-background"
                )}
                aria-hidden
              >
                {selected ? (
                  <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                ) : null}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-base font-medium text-foreground">
                  {opt.label}
                </div>
                {opt.description ? (
                  <div className="mt-1 text-sm text-muted-foreground">
                    {opt.description}
                  </div>
                ) : null}
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
