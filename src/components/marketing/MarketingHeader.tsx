import { MarketingContainer } from "./MarketingContainer";
import { MarketingCTA } from "./MarketingCTA";
import { MoveAgainLogo } from "./MoveAgainLogo";

export function MarketingHeader() {
  return (
    <header className="marketing-header-premium sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <MarketingContainer className="flex min-h-16 items-center justify-between gap-2 py-2">
        <MoveAgainLogo />
        <nav aria-label="Primary navigation" className="flex items-center gap-5">
          <a
            href="#how-it-works"
            className="marketing-focus hidden rounded-md text-sm font-medium text-foreground/75 transition-colors hover:text-foreground sm:inline-flex"
          >
            How It Works
          </a>
          <MarketingCTA
            compact
            href="#assessment-preview"
            className="min-h-11 gap-1 px-3 text-xs [&>svg]:hidden sm:gap-2.5 sm:px-5 sm:text-sm sm:[&>svg]:block"
          >
            Find My Starting Plan
          </MarketingCTA>
        </nav>
      </MarketingContainer>
    </header>
  );
}
