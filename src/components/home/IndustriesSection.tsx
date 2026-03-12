"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Factory, Construction, Diamond, Zap, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Ceramics",
    slug: "ceramics",
    icon: Diamond,
    desc: "Premium clays, feldspars, and calcined aluminas for precise thermal properties and stunning glazes.",
  },
  {
    title: "Refractories",
    slug: "refractories",
    icon: Factory,
    desc: "High-purity bauxite and magnesite essential for extreme heat environments and industrial furnaces.",
  },
  {
    title: "Steel & Metallurgy",
    slug: "steel",
    icon: Construction,
    desc: "Critical ferroalloys and fluxes like chrome ore and fluorspar for high-grade steel manufacturing.",
  },
  {
    title: "Glass Manufacturing",
    slug: "glass",
    icon: Zap,
    desc: "Ultra-pure silica sand and dolomite to ensure unmatched clarity, strength, and perfection.",
  },
];

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 bg-white border-t border-slate-100" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-dark mb-6">
            Industries We Empower
          </h2>
          <p className="text-text-secondary text-lg">
            Our raw materials form the critical backbone of global manufacturing. From high-tech ceramics to foundational steel, we deliver the chemistry that drives innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={industry.slug}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative bg-surface p-8 rounded-sm hover:-translate-y-2 transition-transform duration-300 border border-slate-100 hover:border-slate-200 shadow-sm flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100 text-accent-terra group-hover:bg-accent-terra group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-dark mb-4">
                  {industry.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                  {industry.desc}
                </p>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="inline-flex items-center gap-2 text-accent-terra font-medium hover:text-[#A85F33] transition-colors mt-auto"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
