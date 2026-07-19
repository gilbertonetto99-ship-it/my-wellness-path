import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <AppShell>
      <div className="mx-auto flex max-w-xl flex-col items-center pt-8 text-center sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            A personalized walking plan
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="mt-6 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl"
        >
          A gentler way to
          <br />
          feel like yourself again.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
        >
          Answer twelve calm questions. We'll shape a walking plan and a small
          set of habits around the life you actually live.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-10 flex w-full flex-col items-center gap-4"
        >
          <Link to="/assessment" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">Begin your assessment</Button>
          </Link>
          <p className="text-xs text-muted-foreground">
            Takes about 3 minutes · Your answers stay on your device
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-20 grid w-full grid-cols-3 gap-3 sm:gap-4"
        >
          {[
            { k: "Walking", v: "Kind on your body" },
            { k: "Habits", v: "Small and stackable" },
            { k: "Pace", v: "Realistic, not extreme" },
          ].map((f) => (
            <div
              key={f.k}
              className="rounded-2xl border border-border bg-card px-3 py-4 text-left"
            >
              <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {f.k}
              </div>
              <div className="mt-1 text-sm font-medium text-foreground">
                {f.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </AppShell>
  );
}
