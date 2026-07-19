import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";
import { useAssessment } from "../context/AssessmentContext";
import { personalize } from "../lib/personalization";
import { ProfileCard } from "../components/results/ProfileCard";
import { PlanPreview } from "../components/results/PlanPreview";
import { HabitStack } from "../components/results/HabitStack";
import { TimelineChart } from "../components/results/TimelineChart";

export const Route = createFileRoute("/results")({
  component: Results,
});

function Results() {
  const navigate = useNavigate();
  const { answers } = useAssessment();

  // If someone hits /results directly with no answers, send them home.
  useEffect(() => {
    if (!answers.currentWeightLb || !answers.goalWeightLb) {
      navigate({ to: "/" });
    }
  }, [answers, navigate]);

  const p = useMemo(() => personalize(answers), [answers]);

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  });

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <motion.div {...reveal(0)}>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Your personalized read
          </div>
          <h1 className="mt-2 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Here's what we noticed.
          </h1>
        </motion.div>

        <motion.div {...reveal(0.1)}>
          <ProfileCard p={p} />
        </motion.div>

        <motion.div {...reveal(0.2)}>
          <PlanPreview p={p} />
        </motion.div>

        <motion.div {...reveal(0.3)}>
          <HabitStack p={p} />
        </motion.div>

        <motion.div {...reveal(0.4)}>
          <TimelineChart p={p} />
        </motion.div>

        <motion.div {...reveal(0.5)} className="mt-4 flex flex-col items-center gap-3">
          <Link to="/plan" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">See my full plan</Button>
          </Link>
          <p className="text-xs text-muted-foreground">
            Nothing here is medical advice · Lifestyle guidance only
          </p>
        </motion.div>
      </div>
    </AppShell>
  );
}
