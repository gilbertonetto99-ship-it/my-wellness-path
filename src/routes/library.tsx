import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Headphones,
  Lock,
  Salad,
  Sparkles,
} from "lucide-react";
import { AppShell } from "../components/AppShell";
const modules = [
  { t: "12-Week Walking Roadmap", d: "Week 1 ready", i: CalendarDays, p: 18 },
  { t: "Guided walking audio", d: "24 audio sessions", i: Headphones, p: 0 },
  { t: "Daily Habit Tracker", d: "Weekly check-ins", i: CheckCircle2, p: 0 },
  { t: "Simple recipe library", d: "60 practical recipes", i: Salad, p: 0 },
  { t: "Mindset lessons", d: "12 short lessons", i: BookOpen, p: 0 },
];
export const Route = createFileRoute("/library")({ component: LibraryPage });
function LibraryPage() {
  return (
    <AppShell wide>
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="premium-pill">
            <Sparkles size={14} /> Welcome back
          </span>
          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h1 className="font-display text-5xl">Your wellness space.</h1>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Start small today. Your next step is already waiting for you.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-5 py-3">
              <div className="text-xs text-muted-foreground">Current streak</div>
              <div className="font-display text-2xl text-primary">3 gentle days</div>
            </div>
          </div>
        </motion.div>
        <section className="mt-9 overflow-hidden rounded-[2rem] bg-primary p-7 text-primary-foreground shadow-xl sm:p-9">
          <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest opacity-75">
                Continue your plan
              </div>
              <h2 className="mt-2 font-display text-4xl">Week 1 · Build your rhythm</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-80">
                Today's goal: an easy 18-minute walk followed by your two-minute evening check-in.
              </p>
              <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary">
                Start today's walk
              </button>
            </div>
            <div className="grid h-28 w-28 place-items-center rounded-full bg-white/10">
              <div className="text-center">
                <div className="font-display text-3xl">18</div>
                <div className="text-xs opacity-70">minutes</div>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {modules.map((m, i) => {
            const Icon = m.i;
            return (
              <motion.div
                key={m.t}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="premium-card group flex items-start gap-4"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </span>
                <div className="flex-1">
                  <div className="flex justify-between gap-3">
                    <h3 className="font-semibold">{m.t}</h3>
                    {i > 0 && <Lock size={15} className="text-muted-foreground" />}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
                  {m.p > 0 && (
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${m.p}%` }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
