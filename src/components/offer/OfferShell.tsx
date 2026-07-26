import type { ReactNode } from "react";
import { MarketingContainer } from "../marketing/MarketingContainer";
import { MoveAgainLogo } from "../marketing/MoveAgainLogo";

export function OfferShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/75 bg-background/95">
        <MarketingContainer className="flex min-h-16 items-center justify-between gap-4 py-2">
          <MoveAgainLogo />
          <span className="hidden text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground sm:block">
            The 12-Week Midlife Walking System
          </span>
        </MarketingContainer>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-muted/55 py-9">
        <MarketingContainer>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <MoveAgainLogo />
            <p className="max-w-lg text-xs leading-5 text-muted-foreground sm:text-right">
              Move Again provides educational wellness content and is not a substitute for medical
              advice, diagnosis, or treatment. Talk with a qualified health professional before
              beginning a new exercise program when appropriate.
            </p>
          </div>
        </MarketingContainer>
      </footer>
    </div>
  );
}
