import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

export function MarketingCTA({
  children = "Find My Starting Plan",
  className,
  compact = false,
}: {
  children?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      to="/assessment"
      className={cn(
        "marketing-focus group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-primary font-semibold text-primary-foreground shadow-[0_18px_38px_-20px_rgba(23,62,53,.75)] ring-1 ring-white/15 transition-[transform,filter,box-shadow] duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_24px_44px_-20px_rgba(23,62,53,.8)]",
        compact ? "min-h-11 px-5 text-sm" : "w-full px-8 text-base sm:w-auto",
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </Link>
  );
}
