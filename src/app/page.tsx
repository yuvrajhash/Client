import HomeHero from "@/components/home/HomeHero";
import CoreMinerals from "@/components/home/CoreMinerals";
import IndustriesSection from "@/components/home/IndustriesSection";
import SourcingMap from "@/components/home/SourcingMap";
import SupplyChainStory from "@/components/sections/SupplyChainStory";
import InsightsPreview from "@/components/sections/InsightsPreview";
import CTASection from "@/components/ui/CTASection";
import StatCounter from "@/components/ui/StatCounter";
import Reveal from "@/components/animations/Reveal";

export default function Home() {
  return (
    <>
      {/* Section 1: Cinematic Hero */}
      <HomeHero />
      
      {/* Stats Bar */}
      <Reveal>
        <section className="bg-white py-12 border-b border-slate-100 relative z-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-slate-100">
              <StatCounter end={16} suffix="+" label="Mineral Products" />
              <StatCounter end={40} suffix="+" label="Countries Served" />
              <StatCounter end={9001} prefix="ISO " label="Certified Quality" duration={1.5} />
              <StatCounter end={25} suffix="+" label="Years Heritage" />
            </div>
          </div>
        </section>
      </Reveal>

      {/* Section 2: Global Supply Visualization */}
      <SourcingMap />

      {/* Section 3: Core Minerals Explorer */}
      <CoreMinerals />
      
      {/* Section 4: Industries */}
      <IndustriesSection />

      {/* Section 5: Supply Chain Story */}
      <SupplyChainStory />

      {/* Section 6: Market Insights */}
      <InsightsPreview />
      
      {/* Section 7: Enterprise CTA */}
      <CTASection />
    </>
  );
}
