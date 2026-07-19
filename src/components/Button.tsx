import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, variant = "primary", size = "lg", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-40",
          size === "lg" ? "h-14 px-8 text-base" : "h-11 px-5 text-sm",
          variant === "primary" &&
            "bg-primary text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_color-mix(in_oklab,var(--primary)_45%,transparent)] hover:brightness-110 active:scale-[0.99]",
          variant === "outline" &&
            "border border-border bg-background text-foreground hover:bg-muted",
          variant === "ghost" && "text-foreground hover:bg-muted",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
