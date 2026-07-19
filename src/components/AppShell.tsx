import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface ShellProps {
  children: ReactNode;
  progress?: number; // 0..1
  showBack?: boolean;
  onBack?: () => void;
}

export function AppShell({ children, progress, showBack, onBack }: ShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-5">
          <div className="flex items-center gap-3">
            {showBack ? (
              <button
                type="button"
                onClick={onBack}
                aria-label="Back"
                className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            ) : (
              <div className="w-9" />
            )}
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium tracking-tight text-foreground"
            >
              <LogoMark />
              <span className="font-display text-lg leading-none">StrideWell</span>
            </Link>
          </div>
          <div className="w-9" />
        </div>
        {typeof progress === "number" ? (
          <div className="h-0.5 w-full bg-transparent">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
            />
          </div>
        ) : null}
      </header>
      <main className="mx-auto w-full max-w-2xl px-5 pb-24 pt-10 sm:pt-16">
        {children}
      </main>
    </div>
  );
}

function LogoMark() {
  return (
    <span
      aria-hidden
      className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 20l4-9 4 5 4-8" />
      </svg>
    </span>
  );
}
