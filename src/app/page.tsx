import HeroVideo from '@/components/home/HeroVideo';
import ValueProposition from '@/components/home/ValueProposition';
import CapabilitiesGrid from '@/components/home/CapabilitiesGrid';
import GlobalFootprint from '@/components/home/GlobalFootprint';
import Sustainability from '@/components/home/Sustainability';
import FinalCta from '@/components/home/FinalCta';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <HeroVideo />
      <ValueProposition />
      <CapabilitiesGrid />
      <GlobalFootprint />
      <Sustainability />
      <FinalCta />
    </main>
  );
}
