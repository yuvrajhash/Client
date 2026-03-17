'use client';

import { motion } from 'framer-motion';
import { Globe, Microscope, Truck } from 'lucide-react';
import Reveal, { RevealContainer, RevealItem } from '@/components/animations/Reveal';

const pillars = [
  {
    icon: Globe,
    title: 'Global Sourcing',
    description: 'We source premium minerals from over 40 countries, ensuring a resilient and diversified supply chain resistant to regional disruptions.',
  },
  {
    icon: Microscope,
    title: 'Precision Processing',
    description: 'ISO 9001-certified facilities guarantee exacting physical and chemical specifications, lot by lot, every single time.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'Our vertically integrated logistics network ensures your raw materials arrive just-in-time, preventing costly manufacturing delays.',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-mineralia-teal font-sans text-sm font-medium tracking-widest uppercase mb-4 block">
              Why Partner With Us
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-mineralia-navy mb-6">
              The Foundation of Your Manufacturing
            </h2>
            <p className="text-gray-600 text-lg font-sans font-light leading-relaxed">
              We don&apos;t just deliver minerals; we deliver certainty. Our commitment to quality, scale, and reliability makes us the preferred partner for industry leaders worldwide.
            </p>
          </div>
        </Reveal>

        <RevealContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" staggerDelay={0.2}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <RevealItem key={idx}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-mineralia-teal/5 flex items-center justify-center mb-6 text-mineralia-teal group-hover:bg-mineralia-teal group-hover:text-white transition-colors duration-300">
                    <Icon strokeWidth={1.5} size={36} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-mineralia-navy mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealContainer>
      </div>
    </section>
  );
}
