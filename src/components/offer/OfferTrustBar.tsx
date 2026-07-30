import { CalendarCheck, CreditCard, RefreshCcw } from "lucide-react";
import { MarketingContainer } from "../marketing/MarketingContainer";

const ITEMS = [
  {
    icon: CalendarCheck,
    title: "12 weeks of clear structure",
    copy: "A defined path from your first week through a routine you can continue.",
  },
  {
    icon: RefreshCcw,
    title: "Built for real-life interruptions",
    copy: "Shorter options and reentry guidance are part of the system—not an afterthought.",
  },
  {
    icon: CreditCard,
    title: "One-time purchase",
    copy: "Pay once for the complete system with no subscription. Access instructions are provided after purchase.",
  },
];

export function OfferTrustBar() {
  return (
    <section
      aria-label="What to expect from Move Again"
      className="border-y border-border bg-muted/60 py-9"
    >
      <MarketingContainer>
        <div className="grid gap-7 md:grid-cols-3 md:gap-0">
          {ITEMS.map(({ icon: Icon, title, copy }, index) => (
            <article
              key={title}
              className={`flex gap-4 md:px-7 ${index > 0 ? "md:border-l md:border-border" : ""}`}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
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
