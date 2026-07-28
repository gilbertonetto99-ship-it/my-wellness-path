import { Clock3, CreditCard, HeartHandshake } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";

const TRUST_ITEMS = [
  {
    icon: HeartHandshake,
    title: "Designed for Women 40+",
    copy: "Built around real schedules, changing energy, and a routine you can return to.",
  },
  {
    icon: Clock3,
    title: "Clear and Simple",
    copy: "Three minutes to find a realistic starting pace and first-week direction.",
  },
  {
    icon: CreditCard,
    title: "Free to Explore",
    copy: "See your personalized starting guidance with no credit card or purchase.",
  },
];

export function TrustSection() {
  return (
    <section
      className="section-soft-divider py-16 sm:py-20"
      aria-label="Why you can feel comfortable getting started"
    >
      <MarketingContainer>
        <div className="grid gap-5 border-y border-border py-8 sm:gap-6 sm:py-10 md:grid-cols-3 md:gap-0">
          {TRUST_ITEMS.map(({ icon: Icon, title, copy }, index) => (
            <article
              key={title}
              className={`flex gap-4 md:px-7 ${index > 0 ? "md:border-l md:border-border" : ""}`}
            >
              <span className="premium-icon-well grid size-10 shrink-0 place-items-center rounded-2xl text-primary">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-foreground">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </MarketingContainer>
    </section>
  );
}
