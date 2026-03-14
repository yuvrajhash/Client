"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Ship, Warehouse, Cog, Truck } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

const stages = [
  {
    icon: Warehouse,
    title: "Extraction & Mining",
    desc: "Raw minerals sourced from premium deposits across 40+ countries.",
    color: "#B87333",
  },
  {
    icon: Cog,
    title: "Processing & QC",
    desc: "ISO 9001-certified processing with rigorous compositional analysis.",
    color: "#D59A4A",
  },
  {
    icon: Ship,
    title: "Global Logistics",
    desc: "Optimized shipping routes connecting mines to manufacturing hubs.",
    color: "#E0A75E",
  },
  {
    icon: Truck,
    title: "Delivery & Support",
    desc: "Just-in-time delivery with dedicated supply chain management.",
    color: "#B87333",
  },
];

export default function SupplyChainStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="py-24 bg-primary-dark text-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <Reveal>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-accent-copper font-sans text-sm font-medium tracking-widest uppercase mb-4 block">End-to-End Supply Chain</span>
            <h2 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-white mb-6">
              From Mine to Manufacturer
            </h2>
            <p className="text-slate-300 text-lg font-sans font-light leading-relaxed">
              A resilient, vertically integrated supply chain spanning extraction, processing, logistics, and delivery.
            </p>
          </div>
        </Reveal>

        {/* Progress line */}
        <div className="relative mb-16 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2" />
          <motion.div
            className="absolute top-1/2 left-0 h-px -translate-y-1/2 copper-gradient-bg"
            style={{ width: lineWidth }}
          />
        </div>

        {/* Stages */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <Reveal key={stage.title} delay={idx * 0.15}>
                <div className="relative group">
                  {/* Step number */}
                  <div className="text-[80px] font-serif font-bold text-white/[0.03] absolute -top-8 -left-2 select-none pointer-events-none">
                    0{idx + 1}
                  </div>

                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent-copper/40 transition-colors duration-300"
                      style={{ background: `${stage.color}15` }}
                    >
                      <Icon size={24} style={{ color: stage.color }} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-3">{stage.title}</h3>
                    <p className="text-slate-300 font-sans text-sm leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
