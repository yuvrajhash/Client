'use client';

import { Leaf, RefreshCcw, Shield } from 'lucide-react';
import Reveal, { RevealContainer, RevealItem } from '@/components/animations/Reveal';
import Image from 'next/image';

const features = [
  {
    icon: Leaf,
    title: 'Environmental Stewardship',
    description: 'Committed to minimizing extraction footprints and restoring landscapes post-mining.'
  },
  {
    icon: Shield,
    title: 'Ethical Labor',
    description: 'Strict adherence to international labor standards, ensuring safe and fair conditions across all sites.'
  },
  {
    icon: RefreshCcw,
    title: 'Resource Optimization',
    description: 'Advanced processing techniques to reduce waste and maximize yield from raw ores.'
  }
];

export default function Sustainability() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <Reveal className="w-full lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop" 
                alt="Sustainability in mineral extraction" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-mineralia-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white max-w-xs">
                <p className="font-serif text-2xl font-bold mb-2">Committed to Tomorrow</p>
                <p className="text-white/80 text-sm">Balancing industrial progress with planetary health.</p>
              </div>
            </div>
          </Reveal>

          <div className="w-full lg:w-1/2">
            <Reveal>
              <span className="text-mineralia-teal font-sans text-sm font-medium tracking-widest uppercase mb-4 block">
                Responsible Sourcing
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-mineralia-navy mb-6">
                Mining With Integrity
              </h2>
              <p className="text-gray-600 text-lg font-sans font-light mb-10 leading-relaxed">
                We believe that supplying the world’s critical minerals must not come at the cost of the environment or human dignity. Our sustainable sourcing framework dictates every partnership we make.
              </p>
            </Reveal>

            <RevealContainer className="space-y-8" staggerDelay={0.15}>
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <RevealItem key={idx}>
                    <div className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-full bg-mineralia-teal/10 flex items-center justify-center shrink-0 text-mineralia-teal">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-mineralia-navy mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 font-sans leading-relaxed text-sm md:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealContainer>
          </div>
          
        </div>
      </div>
    </section>
  );
}
