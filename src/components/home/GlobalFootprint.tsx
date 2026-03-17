'use client';

import { ShieldCheck, Award, MapPin } from 'lucide-react';
import Reveal, { RevealContainer, RevealItem } from '@/components/animations/Reveal';

const stats = [
  { value: '40+', label: 'Countries Served', icon: MapPin },
  { value: '25+', label: 'Years Experience', icon: Award },
  { value: 'ISO', label: '9001:2015 Certified', icon: ShieldCheck },
];

export default function GlobalFootprint() {
  return (
    <section className="py-24 bg-mineralia-navy text-white relative overflow-hidden">
      {/* Abstract map pattern or grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-mineralia-teal font-sans text-sm font-medium tracking-widest uppercase mb-4 block">
              Global Footprint & Trust
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              A Network Built on Quality
            </h2>
            <p className="text-gray-300 text-lg font-sans font-light leading-relaxed">
              Operating across six continents, we connect premier extraction sites directly to the world’s most demanding manufacturing facilities, backed by uncompromising quality assurance.
            </p>
          </div>
        </Reveal>

        <RevealContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" staggerDelay={0.2}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <RevealItem key={idx}>
                <div className="bg-white/5 border border-white/10 p-10 rounded-3xl flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-mineralia-teal/20 flex items-center justify-center mb-6 text-mineralia-teal">
                    <Icon size={32} />
                  </div>
                  <div className="font-serif text-5xl md:text-6xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm uppercase tracking-widest text-mineralia-teal font-medium">
                    {stat.label}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealContainer>
      </div>
    </section>
  );
}
