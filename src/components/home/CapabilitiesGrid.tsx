'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal, { RevealContainer, RevealItem } from '@/components/animations/Reveal';

const bentoItems = [
  {
    title: 'Ceramics & Glass',
    description: 'Ultra-pure silica, feldspar, and kaolin ensuring stunning clarity, thermal resistance, and structural integrity.',
    link: '/industries/ceramics-glass',
    bgClass: 'bg-mineralia-teal',
    textClass: 'text-white',
    colSpan: 'md:col-span-2 md:row-span-2',
    image: '/images/ceramics-glass-manufacturing.png',
  },
  {
    title: 'Metallurgy & Steel',
    description: 'Essential ferroalloys and fluxes critical to the modern steelmaking process.',
    link: '/industries/metallurgy-steel',
    bgClass: 'bg-mineralia-navy',
    textClass: 'text-white',
    colSpan: 'md:col-span-1 md:row-span-1',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2784&auto=format&fit=crop',
  },
  {
    title: 'Refractories',
    description: 'High-purity bauxite and magnesite for extreme heat environments.',
    link: '/industries/refractories',
    bgClass: 'bg-gray-100',
    textClass: 'text-mineralia-navy',
    colSpan: 'md:col-span-1 md:row-span-1',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2940&auto=format&fit=crop',
  }
];

export default function CapabilitiesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-mineralia-teal font-sans text-sm font-medium tracking-widest uppercase mb-4 block">
                Capabilities
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-mineralia-navy mb-4">
                Powering Essential Industries
              </h2>
              <p className="text-gray-600 text-lg font-sans font-light">
                Our raw materials are the foundational chemistry behind the world’s most critical manufacturing sectors.
              </p>
            </div>
            <Link
              href="/industries"
              className="group flex items-center gap-2 text-mineralia-teal font-medium hover:text-mineralia-teal-hover transition-colors text-sm uppercase tracking-wider"
            >
              View All Industries
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <RevealContainer className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px]" staggerDelay={0.15}>
          {bentoItems.map((item, idx) => (
            <RevealItem key={idx} className={`relative overflow-hidden rounded-3xl group ${item.colSpan} ${item.bgClass}`}>
              <Link href={item.link} className="block w-full h-full p-8 md:p-10 flex flex-col justify-end relative z-10">
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 ${item.bgClass !== 'bg-gray-100' ? 'mix-blend-multiply' : ''}`} />
                
                <div className="relative z-20 text-white">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/80 font-sans text-sm md:text-base max-w-md mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-mineralia-navy transition-all duration-300">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealContainer>
      </div>
    </section>
  );
}
