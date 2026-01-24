import { ContactSection } from "@/custom-components/contact-section";
import { FoundingStorySection } from "@/custom-components/founding-story";
import HeroSection from "@/custom-components/hero-section";
import { InsightsSection } from "@/custom-components/insight-section";
import { MyWorkSection } from "@/custom-components/my-work";
import { PortfolioSection } from "@/custom-components/portfolio";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <MyWorkSection />
        <PortfolioSection />
        <FoundingStorySection />
        <InsightsSection />
        <ContactSection/>
      </main>
    </>
  );
}
