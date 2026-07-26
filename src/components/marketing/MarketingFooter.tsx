import { MarketingContainer } from "./MarketingContainer";
import { MoveAgainLogo } from "./MoveAgainLogo";

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-muted/55 py-10">
      <MarketingContainer>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <MoveAgainLogo />
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              A calmer way for women 40+ to build a realistic walking routine around real life.
            </p>
          </div>
          <p className="max-w-md text-xs leading-5 text-muted-foreground sm:text-right">
            Move Again provides educational wellness content and is not a substitute for medical
            advice, diagnosis, or treatment. Talk with a qualified health professional before
            beginning a new exercise program when appropriate.
          </p>
        </div>
        <div className="mt-8 border-t border-border pt-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Move Again. All rights reserved.
        </div>
      </MarketingContainer>
    </footer>
  );
}
