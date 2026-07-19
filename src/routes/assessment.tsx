import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AppShell } from "../components/AppShell";
import { SingleChoice } from "../components/assessment/SingleChoice";
import { MultiChoice } from "../components/assessment/MultiChoice";
import { SliderChoice } from "../components/assessment/SliderChoice";
import {
  Measurements,
  WeightGoal,
} from "../components/assessment/Measurements";
import { QUESTIONS, isAnswered, CHAPTERS } from "../lib/questions";
import { useAssessment } from "../context/AssessmentContext";

export const Route = createFileRoute("/assessment")({
  component: AssessmentPage,
});

function AssessmentPage() {
  const navigate = useNavigate();
  const { answers } = useAssessment();
  const [index, setIndex] = useState(0);
  const [showChapter, setShowChapter] = useState(true);

  const q = QUESTIONS[index];
  const progress = (index + 1) / QUESTIONS.length;

  function advance() {
    if (!isAnswered(q, answers)) return;
    const next = index + 1;
    if (next >= QUESTIONS.length) {
      navigate({ to: "/analyzing" });
      return;
    }
    const chapterChanged = QUESTIONS[next].chapter !== q.chapter;
    setIndex(next);
    if (chapterChanged) setShowChapter(true);
  }

  function back() {
    if (index === 0) {
      navigate({ to: "/" });
      return;
    }
    setIndex((i) => Math.max(0, i - 1));
  }

  if (showChapter) {
    const info = CHAPTERS[q.chapter];
    return (
      <AppShell progress={progress} showBack onBack={back}>
        <motion.div
          key={`chapter-${q.chapter}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex min-h-[60vh] flex-col items-start justify-center"
        >
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {info.title}
          </div>
          <h2 className="mt-4 font-display text-5xl leading-[1.05] text-foreground">
            {info.intro}
          </h2>
          <button
            onClick={() => setShowChapter(false)}
            className="mt-10 inline-flex h-14 items-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_color-mix(in_oklab,var(--primary)_45%,transparent)] transition-all hover:brightness-110"
          >
            Begin
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </AppShell>
    );
  }

  return (
    <AppShell progress={progress} showBack onBack={back}>
      <div className="flex flex-col gap-8">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {q.chapterTitle} · Question{" "}
            {QUESTIONS.slice(0, index + 1).filter((x) => x.chapter === q.chapter).length}
          </div>
          <AnimatePresence mode="wait">
            <motion.h2
              key={q.id + "-prompt"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl"
            >
              {q.prompt}
            </motion.h2>
          </AnimatePresence>
          {q.helper ? (
            <p className="mt-2 text-sm text-muted-foreground">{q.helper}</p>
          ) : null}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={q.id + "-body"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {q.kind === "single" ? (
              <SingleChoice question={q} onAdvance={advance} />
            ) : q.kind === "multi" ? (
              <MultiChoice question={q} onAdvance={advance} />
            ) : q.kind === "slider" ? (
              <SliderChoice question={q} onAdvance={advance} />
            ) : q.kind === "measurements" ? (
              <Measurements onAdvance={advance} />
            ) : q.kind === "weight-goal" ? (
              <WeightGoal onAdvance={advance} />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </AppShell>
  );
}
