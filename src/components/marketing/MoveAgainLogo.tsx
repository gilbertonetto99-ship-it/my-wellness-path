import { Link } from "@tanstack/react-router";

export function MoveAgainLogo() {
  return (
    <Link
      to="/"
      aria-label="Move Again home"
      className="marketing-focus inline-flex items-center gap-2.5 rounded-lg"
    >
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm"
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
          <path
            d="M5 17.5c4.2-.9 5.1-4.6 7-9 1.2 4.1 3.1 7.1 7 8.2"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8 19h8" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
        </svg>
      </span>
      <span className="font-display text-[1.65rem] leading-none tracking-[-0.02em] text-foreground max-[359px]:sr-only">
        Move Again
      </span>
    </Link>
  );
}
