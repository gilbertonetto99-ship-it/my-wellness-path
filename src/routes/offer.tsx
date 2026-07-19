import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";
import { PROGRAM } from "../config/checkout";

export const Route = createFileRoute("/offer")({
  head: () => ({
    meta: [
      { title: "StrideWell Program — 12 weeks of gentle walking" },
      {
        name: "description",
        content:
          "The full 12-week StrideWell walking wellness program built around your life.",
      },
      { property: "og:title", content: "StrideWell Program — 12 weeks" },
      {
        property: "og:description",
        content:
          "A calm, personalized walking-based wellness program for women 40+.",
      },
    ],
  }),
  component: OfferPage,
});

const INCLUDES = [
  {
    title: "Your personalized walking plan",
    detail: "The full 12 weeks, extended from the plan you just saw.",
  },
  {
    title: "Guided walking audio",
    detail: "Short audio companions for your daily walks — no phone-scrolling required.",
  },
  {
    title: "Printable habit tracker",
    detail: "The habit stack we built, on paper. A gentle check-in each evening.",
  },
  {
    title: "Recipes library",
    detail: "Balanced, uncomplicated meals designed around real weeknights.",
  },
  {
    title: "Mindset lessons",
    detail:
      "Short weekly reads on motivation, emotional eating, and building an identity around consistency.",
  },
  {
    title: "Rhythm resets",
    detail: "A weekly cadence to reflect, adjust, and keep the plan flexible.",
  },
];

function OfferPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-8">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            The full program
          </div>
          <h1 className="mt-2 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            {PROGRAM.name}
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            {PROGRAM.duration} · personalized to your assessment
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <div className="flex items-baseline gap-2">
            <div className="font-display text-5xl text-foreground">
              ${PROGRAM.price}
            </div>
            <div className="text-sm text-muted-foreground">
              one time · lifetime access
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No subscription. No auto-renew. If StrideWell isn't for you within
            14 days, we'll refund it, quietly.
          </p>
          <div className="mt-6">
            <Link to="/checkout" className="block sm:inline-block">
              <Button className="w-full sm:w-auto">Continue to checkout</Button>
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <h3 className="font-display text-2xl text-foreground">
            What's included
          </h3>
          <ul className="mt-6 flex flex-col gap-5">
            {INCLUDES.map((it) => (
              <li
                key={it.title}
                className="flex items-start gap-4 border-t border-border pt-5 first:border-t-0 first:pt-0"
              >
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <div>
                  <div className="text-base font-medium text-foreground">
                    {it.title}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {it.detail}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center text-xs text-muted-foreground">
          StrideWell is a lifestyle wellness program. Not medical advice.
        </div>
      </div>
    </AppShell>
  );
}
