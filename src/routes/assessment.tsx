import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { QuizLoadingState } from "../components/quiz/QuizLoadingState";
import { QuizQuestion } from "../components/quiz/QuizQuestion";
import { QuizShell } from "../components/quiz/QuizShell";
import { useAssessment, type AssessmentAnswers } from "../context/AssessmentContext";
import { isQuizAnswered, QUIZ_QUESTIONS } from "../lib/questions";
import { trackQuizComplete, trackQuizStart } from "../lib/meta-pixel";

export const Route = createFileRoute("/assessment")({
  component: AssessmentPage,
});

function AssessmentPage() {
  const navigate = useNavigate();
  const { answers, setAnswer, isHydrated, isComplete } = useAssessment();
  const [index, setIndex] = useState(0);
  const [hasRestored, setHasRestored] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const question = QUIZ_QUESTIONS[index];

  useEffect(() => {
    if (!isHydrated || hasRestored) return;

    if (isComplete) {
      navigate({ to: "/analyzing", replace: true });
      return;
    }

    const firstUnanswered = QUIZ_QUESTIONS.findIndex((item) => !isQuizAnswered(item, answers));
    setIndex(firstUnanswered >= 0 ? firstUnanswered : 0);
    setHasRestored(true);
  }, [answers, hasRestored, isComplete, isHydrated, navigate]);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  function selectAnswer(value: string) {
    if (transitioning) return;
    if (!question.options.some((option) => option.value === value)) return;

    trackQuizStart();
    setAnswer(question.key, value as AssessmentAnswers[typeof question.key]);
    setTransitioning(true);

    advanceTimer.current = setTimeout(() => {
      if (index === QUIZ_QUESTIONS.length - 1) {
        trackQuizComplete();
        navigate({ to: "/analyzing" });
        return;
      }
      setIndex((current) => current + 1);
      setTransitioning(false);
      advanceTimer.current = null;
    }, 320);
  }

  function goBack() {
    if (advanceTimer.current) {
      clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
    setTransitioning(false);

    if (index === 0) {
      navigate({ to: "/" });
      return;
    }
    setIndex((current) => current - 1);
  }

  if (!isHydrated || !hasRestored) {
    return (
      <QuizShell current={1} total={QUIZ_QUESTIONS.length} onBack={goBack}>
        <QuizLoadingState />
      </QuizShell>
    );
  }

  const selectedValue = answers[question.key];

  return (
    <QuizShell current={index + 1} total={QUIZ_QUESTIONS.length} onBack={goBack}>
      <QuizQuestion
        key={question.id}
        question={question}
        selectedValue={typeof selectedValue === "string" ? selectedValue : undefined}
        transitioning={transitioning}
        onSelect={selectAnswer}
      />
    </QuizShell>
  );
}
