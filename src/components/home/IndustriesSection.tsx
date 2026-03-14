"use client";

import Link from "next/link";
import { Factory, Construction, Diamond, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal, { RevealContainer, RevealItem } from "@/components/animations/Reveal";

const industries = [
  {
    title: "Ceramics",
    slug: "ceramics",
    icon: Diamond,
    desc: "Premium clays, feldspars, and calcined aluminas for precise thermal properties and stunning glazes.",
    minerals: ["Kaolin", "Feldspar", "Talc", "Zircon Sand"],
  },
  {
    title: "Refractories",
    slug: "refractories",
    icon: Factory,
    desc: "High-purity bauxite and magnesite essential for extreme heat environments and industrial furnaces.",
    minerals: ["Bauxite", "Magnesite", "Dolomite", "Chrome Ore"],
  },
  {
    title: "Steel & Metallurgy",
    slug: "steel",
    icon: Construction,
    desc: "Critical ferroalloys and fluxes like chrome ore and fluorspar for high-grade steel manufacturing.",
    minerals: ["Chrome Ore", "Manganese Ore", "Fluorspar", "Dolomite"],
  },
  {
    title: "Glass Manufacturing",
    slug: "glass",
    icon: Zap,
    desc: "Ultra-pure silica sand and dolomite to ensure unmatched clarity, strength, and perfection.",
    minerals: ["Silica Sand", "Feldspar", "Dolomite", "CaCO₃"],
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-40 -right-20 w-80 h-80 rounded-full bg-accent-copper/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-accent-copper font-sans text-sm font-medium tracking-widest uppercase mb-4 block">Industries We Empower</span>
            <h2 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-primary-dark mb-6">
              Powering Global Manufacturing
            </h2>
            <p className="text-slate-text text-lg font-sans font-light leading-relaxed">
              Our raw materials form the critical backbone of global manufacturing. From high-tech ceramics to foundational steel, we deliver the chemistry that drives innovation.
            </p>
          </div>
        </Reveal>

        <RevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <RevealItem key={industry.slug}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-surface p-8 border border-slate-200 hover:border-accent-copper/40 transition-all duration-500 flex flex-col h-full overflow-hidden"
                >
                  {/* Hover copper glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent-copper/10 rounded-full blur-[60px]" />
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary-dark/5 flex items-center justify-center mb-6 text-slate-text group-hover:bg-accent-copper group-hover:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary-dark mb-3 group-hover:text-accent-copper transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-slate-text leading-relaxed mb-6 flex-grow font-sans text-sm">
                      {industry.desc}
                    </p>

                    {/* Mineral relationship tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {industry.minerals.map((m) => (
                        <span key={m} className="text-[11px] bg-primary-dark/5 text-slate-text px-2.5 py-1 rounded-full font-sans">
                          {m}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/industries/${industry.slug}`}
                      className="inline-flex items-center gap-2 text-accent-copper font-medium hover:text-copper-glow transition-colors text-xs tracking-wider uppercase"
                    >
                      Learn More
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealContainer>
      </div>
    </section>
  );
}
