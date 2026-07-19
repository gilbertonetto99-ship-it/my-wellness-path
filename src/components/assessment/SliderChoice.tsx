import { motion } from "framer-motion";
import type { Question } from "../../lib/questions";
import { useAssessment } from "../../context/AssessmentContext";
import { Button } from "../Button";
import { cn } from "../../lib/utils";

interface Props {
  question: Question;
  onAdvance: () => void;
}

export function SliderChoice({ question, onAdvance }: Props) {
  const { answers, setAnswer } = useAssessment();
  const key = question.key!;
  const min = question.min ?? 1;
  const max = question.max ?? 5;
  const current = (answers[key] as number | undefined) ?? Math.ceil((min + max) / 2);

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-3xl border border-border bg-card px-6 py-10">
        <div className="text-center">
          <div className="font-display text-6xl text-primary">{current}</div>
          <div className="mt-1 text-sm text-muted-foreground">out of {max}</div>
        </div>
        <div className="mt-8 grid grid-cols-5 gap-2">
          {Array.from({ length: max - min + 1 }).map((_, i) => {
            const val = min + i;
            const active = val <= current;
            return (
              <motion.button
                key={val}
                type="button"
                onClick={() => setAnswer(key, val as never)}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "h-2.5 rounded-full transition-colors",
                  active ? "bg-primary" : "bg-stone-soft"
                )}
                aria-label={`${val}`}
              />
            );
          })}
        </div>
        <div className="mt-4 flex justify-between text-xs text-muted-foreground">
          <span>{question.minLabel}</span>
          <span>{question.maxLabel}</span>
        </div>
      </div>
      <Button onClick={onAdvance}>Continue</Button>
    </div>
  );
}
