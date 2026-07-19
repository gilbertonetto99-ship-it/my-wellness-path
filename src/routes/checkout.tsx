import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "../components/AppShell";
import { Button } from "../components/Button";
import { CHECKOUT_URL, PROGRAM } from "../config/checkout";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

function CheckoutPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const valid = name.trim().length > 0 && /.+@.+\..+/.test(email);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    if (CHECKOUT_URL) {
      window.location.href = CHECKOUT_URL;
      return;
    }
    navigate({ to: "/library" });
  }

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
              <div className="font-display text-xl text-foreground">
                {PROGRAM.duration}
              </div>
            </div>
            <div className="font-display text-3xl text-foreground">
              ${PROGRAM.price}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Field label="Your name">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane"
              className="w-full bg-transparent text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
              autoComplete="name"
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-transparent text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
              autoComplete="email"
            />
          </Field>

          <div className="rounded-2xl border border-dashed border-border bg-stone-soft/40 px-5 py-4 text-sm text-muted-foreground">
            Secure payment fields will appear here at checkout.
          </div>

          <Button type="submit" disabled={!valid}>
            Complete order · ${PROGRAM.price}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            You'll be taken to your library right after.
          </p>
        </form>
      </div>
    </AppShell>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 rounded-2xl border border-border bg-card px-5 py-3 focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-ring/30">
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
