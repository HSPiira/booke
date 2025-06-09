import { HeroSection, FeaturesSection, CTASection, ReviewCarousel, Footer, TrustIndicators } from "@/components/landing";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <ReviewCarousel />
      <TrustIndicators />
      <Footer />
    </main>
  );
}
