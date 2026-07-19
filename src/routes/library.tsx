import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AppShell } from "../components/AppShell";

const MODULES = [
  {
    title: "Your walking plan",
    detail: "12 weeks · personalized cadence",
    icon: "walk",
  },
  { title: "Guided walking audio", detail: "24 sessions · 10–30 min", icon: "audio" },
  { title: "Habit tracker", detail: "Printable · weekly view", icon: "check" },
  { title: "Recipes library", detail: "60 gentle recipes", icon: "leaf" },
  { title: "Mindset lessons", detail: "12 short reads", icon: "book" },
  { title: "Weekly rhythm reset", detail: "Sunday check-in", icon: "cycle" },
];

export const Route = createFileRoute("/library")({
  component: LibraryPage,
});

function LibraryPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-medium uppercase tracking-wider text-primary">
            Welcome to StrideWell
          </div>
          <h1 className="mt-2 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Your library is ready.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Everything is here whenever you need it. Start with the walking
            plan — the rest will meet you along the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {MODULES.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-[0_1px_2px_rgba(0,0,0,0.03),0_10px_30px_-16px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start gap-4">
                <ModuleIcon name={m.icon} />
                <div className="min-w-0">
                  <div className="text-base font-medium text-foreground">
                    {m.title}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {m.detail}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl border border-dashed border-border bg-card/50 p-6 text-center text-sm text-muted-foreground">
          Progress tracking, daily check-ins, and audio playback are on the way.
        </div>
      </div>
    </AppShell>
  );
}

function ModuleIcon({ name }: { name: string }) {
  const common =
    "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/[0.06] text-primary";
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <span className={common} aria-hidden>
      {name === "walk" ? (
        <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
          <circle cx="13" cy="4.5" r="1.5" />
          <path d="M6 22l3-6 2 2 2-5 4 5" />
          <path d="M11 12l-1-4 4-1 3 3" />
        </svg>
      ) : name === "audio" ? (
        <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
          <path d="M3 12a9 9 0 0118 0" />
          <rect x="3" y="12" width="5" height="8" rx="1.5" />
          <rect x="16" y="12" width="5" height="8" rx="1.5" />
        </svg>
      ) : name === "check" ? (
        <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8 12l3 3 5-6" />
        </svg>
      ) : name === "leaf" ? (
        <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
          <path d="M20 4c-9 0-14 5-14 12 0 2 1 4 3 4 7 0 12-5 12-14V4z" />
          <path d="M6 20c3-6 8-10 14-12" />
        </svg>
      ) : name === "book" ? (
        <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
          <path d="M4 4h9a3 3 0 013 3v13H7a3 3 0 01-3-3V4z" />
          <path d="M16 4h4v13" />
        </svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
          <path d="M4 12a8 8 0 0113-6l3-2" />
          <path d="M20 12a8 8 0 01-13 6l-3 2" />
          <path d="M20 4v4h-4M4 20v-4h4" />
        </svg>
      )}
    </span>
  );
}
