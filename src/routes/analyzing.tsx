import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppShell } from "../components/AppShell";

const STEPS = [
  "Reviewing your lifestyle",
  "Matching your walking pace",
  "Building your habit stack",
  "Estimating your timeline",
];

export const Route = createFileRoute("/analyzing")({
  component: Analyzing,
});

function Analyzing() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setInterval(() => {
      setStep((s) => (s < STEPS.length ? s + 1 : s));
    }, 900);
    const done = setTimeout(() => navigate({ to: "/results" }), 3800);
    return () => {
      clearInterval(t1);
      clearTimeout(done);
    };
  }, [navigate]);

  return (
    <AppShell>
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative grid h-24 w-24 place-items-center"
        >
          <div className="absolute inset-0 rounded-full border-2 border-border" />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary border-b-transparent border-l-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
          />
          <div className="font-display text-2xl text-primary">SW</div>
        </motion.div>

        <h2 className="mt-10 font-display text-3xl text-foreground">
          Building your plan
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A calm moment while we tailor everything to you.
        </p>

        <ul className="mt-10 flex w-full max-w-sm flex-col gap-3 text-left">
          {STEPS.map((s, i) => {
            const active = i <= step;
            const done = i < step;
            return (
              <motion.li
                key={s}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: active ? 1 : 0.4, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"
              >
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                    done
                      ? "bg-primary text-primary-foreground"
                      : active
                      ? "border border-primary"
                      : "border border-border"
                  }`}
                >
                  {done ? (
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
                  ) : active ? (
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  ) : null}
                </span>
                <span className="text-sm font-medium text-foreground">{s}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </AppShell>
  );
}
