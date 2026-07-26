import { Clock3, CreditCard, HeartHandshake } from "lucide-react";
import { MarketingContainer } from "./MarketingContainer";

const TRUST_ITEMS = [
  {
    icon: HeartHandshake,
    title: "Designed for Women 40+",
    copy: "A calm starting experience centered on real schedules, changing energy, and sustainable movement.",
  },
  {
    icon: Clock3,
    title: "Clear and Simple",
    copy: "The assessment takes about three minutes and gives you a practical direction for getting started.",
  },
  {
    icon: CreditCard,
    title: "Free to Explore",
    copy: "See your starting recommendation without entering a credit card or making a purchase.",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 sm:py-20" aria-label="Why you can feel comfortable getting started">
      <MarketingContainer>
        <div className="grid gap-6 border-y border-border py-10 md:grid-cols-3 md:gap-0">
          {TRUST_ITEMS.map(({ icon: Icon, title, copy }, index) => (
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
