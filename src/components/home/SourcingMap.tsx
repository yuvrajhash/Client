"use client";

import dynamic from "next/dynamic";
import FadeUp from "@/components/ui/FadeUp";

// Import the new react-globe.gl based component dynamically
const EarthGlobe = dynamic(() => import("@/components/Globe"), { ssr: false });

export default function SourcingMap() {
  return (
    <section className="py-24 bg-primary-dark text-white overflow-hidden relative border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-20">
        <FadeUp>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white">
              Global Sourcing Precision
            </h2>
            <p className="text-slate-300 text-lg font-sans font-light">
              We operate a robust, diversified supply chain spanning 40+ countries. Discover our primary mineral extraction and processing hubs connected by a seamless logistics network.
            </p>
          </div>
        </FadeUp>

        {/* 3D Globe Container */}
        <FadeUp delay={0.2} className="relative w-full aspect-square md:aspect-[2/1] max-w-6xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-b from-[#0B0F19] to-primary-dark border border-slate-800 hover:border-accent-copper/30 transition-colors duration-500 shadow-2xl shadow-black/50">
          
          <div className="absolute inset-0">
            <EarthGlobe />
          </div>

          {/* UI Overlay on Map */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-primary-dark/80 backdrop-blur-md p-6 rounded-xl border border-white/10 pointer-events-none z-10">
            <h4 className="font-serif text-xl font-bold text-white mb-2">The Mineralia Network</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                <span className="text-sm text-slate-300 font-sans">Global Headquarters</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-accent-copper shadow-[0_0_10px_rgba(184,115,51,0.8)]"></span>
                <span className="text-sm text-slate-300 font-sans">Primary Extraction Hubs</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
