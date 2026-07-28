import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";

const EXIT_DIALOG_SESSION_KEY = "move-again:exit-intent-shown";
const DESKTOP_ARM_DELAY_MS = 8_000;
const MOBILE_ARM_DELAY_MS = 45_000;

function hasReachedHalfway() {
  const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollableDistance <= 0) return false;
  return window.scrollY / scrollableDistance >= 0.5;
}

export function LandingConversionSupport() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [modalPresent, setModalPresent] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const assessmentClickedRef = useRef(false);
  const dialogShownRef = useRef(false);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const primaryDialogCtaRef = useRef<HTMLAnchorElement | null>(null);

  const markAssessmentClick = useCallback(() => {
    assessmentClickedRef.current = true;
  }, []);

  const showDialog = useCallback(() => {
    if (assessmentClickedRef.current || dialogShownRef.current) return;

    try {
      if (window.sessionStorage.getItem(EXIT_DIALOG_SESSION_KEY)) {
        dialogShownRef.current = true;
        return;
      }
      window.sessionStorage.setItem(EXIT_DIALOG_SESSION_KEY, "true");
    } catch {
      // Keep the in-memory guard when sessionStorage is unavailable.
    }

    dialogShownRef.current = true;
    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setDialogOpen(true);
  }, []);

  useEffect(() => {
    try {
      dialogShownRef.current = Boolean(window.sessionStorage.getItem(EXIT_DIALOG_SESSION_KEY));
    } catch {
      dialogShownRef.current = false;
    }

    const handleAssessmentClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest('a[href="/assessment"]')) markAssessmentClick();
    };

    document.addEventListener("click", handleAssessmentClick, true);
    return () => document.removeEventListener("click", handleAssessmentClick, true);
  }, [markAssessmentClick]);

  useEffect(() => {
    let animationFrame = 0;

    const updateStickyVisibility = () => {
      const heroCta = document.querySelector<HTMLElement>('main a[href="/assessment"]');
      const passedHeroCta = heroCta ? heroCta.getBoundingClientRect().bottom < 0 : false;
      const passedFallbackThreshold = window.scrollY >= 600;
      setStickyVisible(window.scrollY > 120 && (passedHeroCta || passedFallbackThreshold));
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateStickyVisibility);
    };

    updateStickyVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia(
      "(min-width: 768px) and (hover: hover) and (pointer: fine)",
    );
    let desktopArmed = false;
    const armTimer = window.setTimeout(() => {
      desktopArmed = true;
    }, DESKTOP_ARM_DELAY_MS);

    const handlePointerExit = (event: MouseEvent) => {
      if (
        !desktopArmed ||
        !desktopQuery.matches ||
        event.relatedTarget !== null ||
        event.clientY > 8
      ) {
        return;
      }
      showDialog();
    };

    document.addEventListener("mouseout", handlePointerExit);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", handlePointerExit);
    };
  }, [showDialog]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    let timeRequirementMet = false;

    const checkMobileFallback = () => {
      if (
        mobileQuery.matches &&
        timeRequirementMet &&
        hasReachedHalfway() &&
        !assessmentClickedRef.current
      ) {
        showDialog();
      }
    };

    const timer = window.setTimeout(() => {
      timeRequirementMet = true;
      checkMobileFallback();
    }, MOBILE_ARM_DELAY_MS);

    window.addEventListener("scroll", checkMobileFallback, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", checkMobileFallback);
    };
  }, [showDialog]);

  useEffect(() => {
    if (!dialogOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [dialogOpen]);

  useEffect(() => {
    const updateModalPresence = () => {
      setModalPresent(Boolean(document.querySelector('[role="dialog"], [aria-modal="true"]')));
    };
    const observer = new MutationObserver(updateModalPresence);

    updateModalPresence();
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const stickyIsVisible = stickyVisible && !dialogOpen && !modalPresent;

  return (
    <>
      <div
        aria-hidden={!stickyIsVisible}
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-gold/35 bg-background/96 px-4 pt-3 shadow-[0_-18px_45px_-28px_rgba(23,62,53,.7)] backdrop-blur-xl transition-[transform,opacity] duration-200 md:hidden ${
          stickyIsVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-md items-center gap-3">
          <p className="min-w-0 flex-1 text-xs font-medium leading-5 text-muted-foreground">
            Free 3-minute assessment
          </p>
          <Link
            to="/assessment"
            onClick={markAssessmentClick}
            tabIndex={stickyIsVisible ? 0 : -1}
            className="marketing-focus inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-[0_14px_28px_-18px_rgba(23,62,53,.75)]"
          >
            Find My Starting Plan
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="max-h-[min(90svh,36rem)] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-[1.75rem] border-border bg-card p-6 shadow-[0_32px_90px_-36px_rgba(23,62,53,.65)] sm:p-8"
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            primaryDialogCtaRef.current?.focus();
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            previouslyFocusedRef.current?.focus();
          }}
        >
          <div className="pr-8">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Before You Go
            </div>
            <DialogTitle className="mt-3 font-display text-4xl leading-[0.98] tracking-[-0.025em] text-foreground">
              Still Wondering Where to Begin?
            </DialogTitle>
            <DialogDescription className="mt-4 text-base leading-7 text-muted-foreground">
              Take the free 3-minute assessment and discover a starting plan designed around your
              schedule, current activity, and real life.
            </DialogDescription>
          </div>

          <Link
            ref={primaryDialogCtaRef}
            to="/assessment"
            onClick={markAssessmentClick}
            className="marketing-focus mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_18px_34px_-22px_rgba(23,62,53,.8)]"
          >
            Find My Starting Plan
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <p className="text-center text-xs leading-5 text-muted-foreground">
            No credit card <span aria-hidden="true">·</span> Personalized starting guidance
          </p>
          <DialogClose asChild>
            <button
              type="button"
              className="marketing-focus mx-auto rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Not right now
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
