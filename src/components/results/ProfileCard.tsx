import type { Personalization } from "../../lib/personalization";

export function ProfileCard({ p }: { p: Personalization }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8">
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Your wellness profile
      </div>
      <h2 className="mt-3 font-display text-4xl leading-tight text-foreground">
        {p.archetype.name}
      </h2>
      <p className="mt-2 text-base italic text-muted-foreground">
        {p.archetype.tagline}
      </p>
      <p className="mt-6 text-base leading-relaxed text-foreground/90">
        {p.archetype.read}
      </p>
    </div>
  );
}
