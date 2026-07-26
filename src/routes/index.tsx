import { createFileRoute } from "@tanstack/react-router";
import { AudienceSection } from "../components/marketing/AudienceSection";
import { FinalCTASection } from "../components/marketing/FinalCTASection";
import { HeroSection } from "../components/marketing/HeroSection";
import { MarketingFooter } from "../components/marketing/MarketingFooter";
import { MarketingHeader } from "../components/marketing/MarketingHeader";
import { MethodSection } from "../components/marketing/MethodSection";
import { RecognitionSection } from "../components/marketing/RecognitionSection";
import { ResultPreviewSection } from "../components/marketing/ResultPreviewSection";
import { TrustSection } from "../components/marketing/TrustSection";
import { TransformationSection } from "../components/marketing/TransformationSection";
import { ProgramValueSection } from "../components/marketing/ProgramValueSection";
import { LifestyleResetSection } from "../components/marketing/LifestyleResetSection";
import { YoungerAgainSection } from "../components/marketing/YoungerAgainSection";
import { ImageSection } from "../components/visuals/ImageSection";

export const Route = createFileRoute("/")({ component: LandingPage });

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="marketing-focus fixed left-4 top-3 z-50 -translate-y-20 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <MarketingHeader />
      <main id="main-content" className="landing-premium">
        <HeroSection />
        <RecognitionSection />
        <TransformationSection />
        <MethodSection />
        <ImageSection
          src="/images/gentle-stretch.webp"
          alt="A gentle stretching ritual in a calm space"
        />
        <YoungerAgainSection />
        <LifestyleResetSection />
        <ProgramValueSection />
        <ImageSection
          src="/images/planning-routine.webp"
          alt="A calm morning routine prepared for the day"
          align="left"
        />
        <AudienceSection />
        <TrustSection />
        <ResultPreviewSection />
        <FinalCTASection />
      </main>
      <MarketingFooter />
    </div>
  );
}
