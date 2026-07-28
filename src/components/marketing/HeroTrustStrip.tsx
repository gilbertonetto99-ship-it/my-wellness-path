import { Check } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";

const TRUST_POINTS = [
  "Personalized Starting Plan",
  "Complete 12-Week System",
  "Designed for Women 40+",
  "No Credit Card Required",
];

export function HeroTrustStrip() {
  return (
    <section
      className="border-b border-border bg-card py-4 sm:py-5"
      aria-label="Move Again assessment and program details"
    >
      <MarketingContainer>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-4 lg:gap-6">
          {TRUST_POINTS.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-xs font-semibold leading-5 text-foreground/78 sm:text-sm"
            >
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                <Check aria-hidden="true" className="size-3" strokeWidth={2.5} />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </MarketingContainer>
    </section>
  );
}
