import { HeroSection, FeaturesSection, CTASection, ReviewCarousel, Footer, TrustIndicators } from "@/components/landing";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <ReviewCarousel />
      <TrustIndicators />
      <Footer />
    </main>
  );
}
