"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, TrendingUp, Globe2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

const insights = [
  {
    title: "Critical Minerals Demand Forecast 2025",
    category: "Market Analysis",
    icon: TrendingUp,
    excerpt: "Global demand for critical minerals is projected to grow 4x by 2030, driven by green energy transitions.",
    date: "Mar 2025",
  },
  {
    title: "Supply Chain Resilience in Volatile Markets",
    category: "Industry Report",
    icon: Globe2,
    excerpt: "How diversified sourcing across 40+ countries provides stability against geopolitical disruption.",
    date: "Feb 2025",
  },
  {
    title: "Quality Standards in Industrial Mineral Trade",
    category: "Technical Brief",
    icon: BookOpen,
    excerpt: "Understanding ISO 9001 compliance, compositional analysis, and buyer-side verification protocols.",
    date: "Jan 2025",
  },
  {
    title: "The Rise of Rare Earth Alternatives",
    category: "Research",
    icon: TrendingUp,
    excerpt: "Exploring substitute minerals for rare earth elements in advanced manufacturing applications.",
    date: "Dec 2024",
  },
];

export default function InsightsPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-accent-copper font-sans text-sm font-medium tracking-widest uppercase mb-4 block">Market Intelligence</span>
              <h2 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-primary-dark">
                Industry Insights
              </h2>
            </div>
            <Link
              href="/insights"
              className="group flex items-center gap-2 text-accent-copper font-medium hover:text-copper-glow transition-colors text-sm"
            >
              View All Insights
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        {/* Horizontal scroll */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
          {insights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 0.1} direction="right">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group min-w-[320px] md:min-w-[380px] flex-shrink-0 bg-white border border-slate-200 hover:border-accent-copper/30 p-8 transition-all duration-500 flex flex-col snap-start"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-copper/10 flex items-center justify-center text-accent-copper">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-medium text-accent-copper uppercase tracking-wider">{item.category}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-primary-dark mb-3 group-hover:text-accent-copper transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-text text-sm leading-relaxed mb-6 flex-grow font-sans">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-text font-sans">{item.date}</span>
                    <span className="text-accent-copper text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
