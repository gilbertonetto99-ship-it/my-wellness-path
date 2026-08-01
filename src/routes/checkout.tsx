import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";
import { CHECKOUT_URL, PROGRAM } from "../config/checkout";
import { trackInitiateCheckout } from "../lib/meta-pixel";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

function CheckoutPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-8">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Checkout
          </div>
          <h1 className="mt-2 font-display text-4xl leading-tight text-foreground">
            One last calm step.
          </h1>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-sm text-muted-foreground">{PROGRAM.name}</div>
              <div className="font-display text-xl text-foreground">{PROGRAM.duration}</div>
            </div>
            <div className="text-right">
              <div className="font-display text-3xl text-foreground">
                ${PROGRAM.sellingPrice.toFixed(2)}{" "}
                <span className="font-sans text-xs font-medium text-muted-foreground">
                  {PROGRAM.currency}
                </span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                One-time payment <span aria-hidden="true">·</span> No subscription
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-dashed border-border bg-stone-soft/40 px-5 py-4 text-sm text-muted-foreground">
            Your payment will be completed securely through Hotmart.
          </div>

          <Button
            type="button"
            onClick={() => {
              trackInitiateCheckout();
              window.location.assign(CHECKOUT_URL);
            }}
          >
            Complete Secure Checkout
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Secure checkout powered by Hotmart.
          </p>
          <p className="text-center text-xs text-muted-foreground">
            You will continue to Hotmart to complete your purchase.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
