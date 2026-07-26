import type { ReactNode } from "react";
import { MoveAgainLogo } from "../marketing/MoveAgainLogo";

export function ResultShell({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/75 bg-background/95">
        <div
          className={`mx-auto flex min-h-16 items-center px-5 sm:px-8 ${wide ? "max-w-[1180px]" : "max-w-3xl"}`}
        >
          <MoveAgainLogo />
        </div>
      </header>
      <main
        className={`mx-auto w-full px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-12 ${wide ? "max-w-[1180px]" : "max-w-3xl"}`}
      >
        {children}
      </main>
    </div>
  );
}
