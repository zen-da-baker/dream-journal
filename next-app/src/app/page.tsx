// Import landing page components
import { LandingHeader } from "@/components/landing-components/LandingHeader";
import { SloganSection } from "@/components/landing-components/SloganSection";
import { PreviewSection } from "@/components/landing-components/PreviewSection";
import { FeaturesSection } from "@/components/landing-components/FeaturesSection";

export default function Home() {
  return (
    <main>

      <LandingHeader />

      <SloganSection />

      <PreviewSection />

      <FeaturesSection />

    </main>
  );
}
