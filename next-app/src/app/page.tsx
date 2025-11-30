// Import landing page components
import { LandingHeader } from "@/components/landing-components/LandingHeader";
import { SloganSection } from "@/components/landing-components/SloganSection";
import { PreviewSection } from "@/components/landing-components/PreviewSection";
import { FeaturesSection } from "@/components/landing-components/FeaturesSection";
import { GetStartedSection } from "@/components/landing-components/GetStartedSection";
import { LandingFooter } from "@/components/landing-components/LandingFooter";

export default function Home() {

  return (
    <div>

      <LandingHeader />

      <main>

        <SloganSection />

        <PreviewSection />

        <FeaturesSection />

        <GetStartedSection />

      </main>

      <LandingFooter />

    </div>
  )

}
