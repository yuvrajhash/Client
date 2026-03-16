'use client';

import HeroCanvasAnimation from '@/components/HeroCanvasAnimation';
import StatsCounter from '@/components/StatsCounter';

export default function Home() {
  return (
    <main className="bg-mineralia-navy min-h-screen">
      {/* Hero: Scroll-Triggered Canvas Animation */}
      <HeroCanvasAnimation />

      {/* Animated Stats Bar */}
      <StatsCounter />

      {/* ↓ Add remaining homepage sections below */}
    </main>
  );
}
