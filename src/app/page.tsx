'use client';

import HeroCanvasAnimation from '@/components/HeroCanvasAnimation';
import StatsCounter from '@/components/StatsCounter';
import CoreMinerals from '@/components/home/CoreMinerals';
import IndustriesSection from '@/components/home/IndustriesSection';
import SourcingMap from '@/components/home/SourcingMap';
import SupplyChainStory from '@/components/sections/SupplyChainStory';
import InsightsPreview from '@/components/sections/InsightsPreview';

export default function Home() {
  return (
    <main className="bg-mineralia-navy min-h-screen">
      {/* Hero: Scroll-Triggered Canvas Animation */}
      <HeroCanvasAnimation />

      {/* Animated Stats Bar */}
      <StatsCounter />

      {/* Core Minerals Showcase */}
      <CoreMinerals />

      {/* Industries & Applications */}
      <IndustriesSection />

      {/* Global Sourcing Map */}
      <SourcingMap />

      {/* Supply Chain Process */}
      <SupplyChainStory />

      {/* Market Insights */}
      <InsightsPreview />
    </main>
  );
}
