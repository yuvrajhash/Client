"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const regions = [
  { id: "india", name: "India", top: "45%", left: "68%", minerals: "Calcium Carbonate, Kaolin, Bauxite, Talc" },
  { id: "south-africa", name: "South Africa", top: "72%", left: "53%", minerals: "Chrome Ore, Manganese Ore, Fluorspar" },
  { id: "australia", name: "Australia", top: "75%", left: "85%", minerals: "Bauxite, Silica Sand, Zircon Sand, Rutile" },
  { id: "china", name: "China", top: "35%", left: "75%", minerals: "Magnesite, Kaolin, Calcium Carbonate" },
  { id: "turkey", name: "Turkey", top: "35%", left: "55%", minerals: "Chrome Ore, Feldspar, Dolomite" },
  { id: "brazil", name: "Brazil", top: "65%", left: "30%", minerals: "Kaolin, Quartz, Manganese Ore" },
];

export default function SourcingMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    // Reveal map container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );

    // Stagger dots appearance
    gsap.fromTo(
      dotsRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 bg-primary-dark text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Global Sourcing Precision
          </h2>
          <p className="text-slate-400 text-lg">
            We operate a robust, diversified supply chain spanning 40+ countries. Discover our primary mineral extraction and processing hubs.
          </p>
        </div>

        {/* Map Container */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-[2/1] md:aspect-[2.5/1] max-w-5xl mx-auto rounded-xl bg-[#161F2C] border border-slate-800 shadow-2xl overflow-visible"
        >
          {/* Abstract World Map Background (SVG) */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="none">
            <path fill="currentColor" d="M150,150 Q180,100 250,120 T350,80 T450,150 T500,200 T550,150 T650,120 T750,180 T850,250 T900,350 T800,400 T700,350 T600,450 T500,400 T400,350 T300,450 T200,400 T150,300 Z" />
            <path fill="currentColor" opacity="0.5" d="M50,200 Q80,180 120,250 T200,350 T150,450 T80,400 Z" />
            <path fill="currentColor" opacity="0.6" d="M800,100 Q850,80 950,150 T980,250 T900,300 T850,200 Z" />
          </svg>

          {/* Sourcing Dots */}
          {regions.map((region, index) => (
            <div
              key={region.id}
              ref={(el) => { dotsRef.current[index] = el; }}
              className="absolute group z-20"
              style={{ top: region.top, left: region.left }}
              onMouseEnter={() => setActiveTooltip(region.id)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <div className="relative -ml-2 -mt-2 w-4 h-4 cursor-pointer">
                <div className="absolute inset-0 rounded-full bg-accent-terra animate-ping opacity-75"></div>
                <div className="absolute inset-0 rounded-full bg-accent-terra border-2 border-white"></div>
              </div>
              
              {/* Tooltip */}
              <div 
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white text-primary-dark p-4 rounded-sm shadow-xl transition-all duration-300 pointer-events-none ${
                  activeTooltip === region.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                <div className="font-bold text-sm mb-1">{region.name}</div>
                <div className="text-xs text-text-secondary leading-tight">{region.minerals}</div>
                
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
