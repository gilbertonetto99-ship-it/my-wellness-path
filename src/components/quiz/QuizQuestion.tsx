import { useEffect, useRef } from "react";
import type { QuizQuestionDefinition } from "../../lib/questions";
import { QuizOptionCard } from "./QuizOptionCard";

export function QuizQuestion({
  question,
  selectedValue,
  transitioning,
  onSelect,
}: {
  question: QuizQuestionDefinition;
  selectedValue?: string;
  transitioning: boolean;
  onSelect: (value: string) => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [question.id]);

  return (
    <section
      aria-labelledby={`question-${question.id}`}
      className="animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <div className="mb-7 sm:mb-8">
        <h1
          ref={headingRef}
          id={`question-${question.id}`}
          tabIndex={-1}
          className="max-w-2xl font-display text-[2.15rem] leading-[1.06] tracking-[-0.025em] text-foreground outline-none sm:text-[2.75rem]"
        >
          {question.prompt}
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          {question.purpose}
        </p>
      </div>

      <fieldset disabled={transitioning} className="grid gap-2.5 sm:gap-3">
        <legend className="sr-only">Choose one answer</legend>
        {question.options.map((option) => (
          <QuizOptionCard
            key={option.value}
            name={question.id}
            value={option.value}
            label={option.label}
            selected={selectedValue === option.value}
            disabled={transitioning}
            onSelect={onSelect}
          />
        ))}
      </fieldset>
      <p className="sr-only" aria-live="polite">
        {transitioning ? "Answer selected. Moving to the next question." : ""}
      </p>
    </section>
  );
}
