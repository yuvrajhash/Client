"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

import allMinerals from "@/data/minerals.json";

gsap.registerPlugin(ScrollTrigger);

// Pick the top 8 minerals for the homepage
const coreMinerals = allMinerals.slice(0, 8);

export default function CoreMinerals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Heading fade-in
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    // Staggered cards fade-in
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 bg-surface" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" ref={headingRef}>
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-dark mb-4">
              Premium Industrial Minerals
            </h2>
            <p className="text-text-secondary text-lg">
              Sourced globally. Processed with precision. Delivered consistently.
            </p>
          </div>
          <Link
            href="/minerals"
            className="group flex items-center gap-2 text-accent-terra font-medium hover:text-[#A85F33] transition-colors"
          >
            View All 16 Minerals
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreMinerals.map((mineral, idx) => (
            <Link
              key={mineral.slug}
              href={`/minerals/${mineral.slug}`}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="group bg-white rounded-sm shadow-sm border border-slate-100 overflow-hidden relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block"
            >
              {/* Thumbnail Placeholder */}
              <div className="h-48 relative overflow-hidden bg-slate-100">
                <Image
                  src={`https://images.unsplash.com/photo-1629807490025-a4b5ff50e395?q=80&w=600&auto=format&fit=crop&text=${mineral.name}`}
                  alt={mineral.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-sm text-xs font-semibold text-white uppercase tracking-wider shadow-sm">
                  {mineral.industries[0]}
                </div>
              </div>

              <div className="p-6 relative bg-white z-10">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-primary-dark group-hover:text-accent-terra transition-colors">{mineral.name}</h3>
                  <span className="text-sm font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{mineral.formula}</span>
                </div>

                {/* Hidden description revealed on hover */}
                <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 ease-in-out">
                  <p className="text-sm text-text-secondary line-clamp-2">
                    {mineral.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
