import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
      {children}
    </div>
  );
}
