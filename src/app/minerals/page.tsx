"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { minerals } from "@/data/minerals";
import CTASection from "@/components/ui/CTASection";
import MineralCard from "@/components/minerals/MineralCard";
import FadeUp from "@/components/ui/FadeUp";

export default function MineralsHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const allIndustries = ["All", ...Array.from(new Set(minerals.flatMap(m => m.industries))).sort()];

  const filteredMinerals = minerals.filter(mineral => {
    const matchesSearch = mineral.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          mineral.formula.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || mineral.industries.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-mineralia-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <FadeUp>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Industrial Minerals Portfolio
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Precision-grade mineral supply for manufacturing, metallurgical, refractory, and specialty industrial applications.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 border-b border-slate-200 bg-white sticky top-[72px] z-30 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search by name or formula..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-mineralia-teal/50 transition-shadow bg-slate-50 text-mineralia-navy placeholder:text-slate-400"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto scrollbar-hide pb-2 md:pb-0">
            <Filter className="text-slate-400 shrink-0 mr-2" size={20} />
            {allIndustries.map(industry => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === industry 
                    ? "bg-mineralia-navy text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {filteredMinerals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMinerals.map((mineral, idx) => (
                <FadeUp key={mineral.slug} delay={idx * 0.1}>
                  <MineralCard mineral={mineral} />
                </FadeUp>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-serif text-mineralia-navy mb-2">No minerals found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
              <button 
                onClick={() => { setSearchTerm(""); setActiveFilter("All"); }}
                className="mt-6 text-mineralia-teal hover:underline font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
