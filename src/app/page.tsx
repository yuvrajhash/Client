import HomeHero from "@/components/home/HomeHero";
import CoreMinerals from "@/components/home/CoreMinerals";
import IndustriesSection from "@/components/home/IndustriesSection";
import SourcingMap from "@/components/home/SourcingMap";
import CTASection from "@/components/ui/CTASection";
import StatCounter from "@/components/ui/StatCounter";

export default function Home() {
  return (
    <>
      <HomeHero />
      
      {/* Trusted By / Stats Bar */}
      <section className="bg-white py-12 border-b border-slate-100 relative z-20 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-slate-100">
            <StatCounter end={16} suffix="+" label="Mineral Products" />
            <StatCounter end={40} suffix="+" label="Countries Served" />
            <StatCounter end={9001} prefix="ISO " label="Certified Quality" duration={1.5} />
            <StatCounter end={25} suffix="+" label="Years Heritage" />
          </div>
        </div>
      </section>

      <CoreMinerals />
      
      <IndustriesSection />
      
      <SourcingMap />
      
      <CTASection />
    </>
  );
}
