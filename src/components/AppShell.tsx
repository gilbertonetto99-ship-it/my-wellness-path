import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface ShellProps {
  children: ReactNode;
  progress?: number;
  showBack?: boolean;
  onBack?: () => void;
  wide?: boolean;
}

export function AppShell({ children, progress, showBack, onBack, wide = false }: ShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div
          className={`mx-auto flex h-16 items-center justify-between px-5 ${wide ? "max-w-6xl" : "max-w-2xl"}`}
        >
          <div className="flex items-center gap-3">
            {showBack ? (
              <button
                type="button"
                onClick={onBack}
                aria-label="Back"
                className="marketing-focus grid h-9 w-9 place-items-center rounded-full hover:bg-muted"
              >
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            ) : (
              <div className="w-9" />
            )}
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-white shadow-sm">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M5 18c4-1 5-5 7-9 1 4 3 7 7 8" />
                  <path d="M8 19h8" />
                </svg>
              </span>
              <span className="font-display text-xl">Move Again</span>
            </Link>
          </div>
          <div className="w-9" />
        </div>
        {typeof progress === "number" && (
          <div
            role="progressbar"
            aria-label="Assessment progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(Math.min(100, Math.max(0, progress * 100)))}
            className="h-1 bg-muted"
          >
            <div
              className="h-full rounded-r-full bg-primary transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
            />
          </div>
        )}
      </header>
      <main
        className={`mx-auto w-full px-5 pb-24 pt-10 sm:pt-14 ${wide ? "max-w-6xl" : "max-w-2xl"}`}
      >
        {children}
      </main>
    </div>
  );
}
