"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, ArrowRight } from "lucide-react";

import allMinerals from "@/data/minerals.json";
import CTASection from "@/components/ui/CTASection";

export default function MineralsHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const industries = ["All", ...Array.from(new Set(allMinerals.flatMap(m => m.industries)))].sort();

  const filteredMinerals = allMinerals.filter(mineral => {
    const matchesSearch = mineral.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          mineral.formula.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || mineral.industries.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <section className="bg-primary-dark text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive Mineral Portfolio
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Explore our extensive catalog of 16 highly-refined industrial minerals, tailored to meet the exacting specifications of global manufacturers.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 border-b border-slate-200 bg-white sticky top-[72px] z-30 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search by name or chemical formula..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-terra/50 transition-shadow bg-surface"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto scrollbar-hide pb-2 md:pb-0">
            <Filter className="text-slate-400 shrink-0" size={20} />
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === industry 
                    ? "bg-primary-dark text-white" 
                    : "bg-surface text-slate-600 hover:bg-slate-200"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {filteredMinerals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center lg:grid-cols-4 gap-6 md:gap-8">
              {filteredMinerals.map(mineral => (
                <Link
                  key={mineral.slug}
                  href={`/minerals/${mineral.slug}`}
                  className="group bg-white rounded-sm shadow-sm border border-slate-100 overflow-hidden relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block"
                >
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
                      <span className="text-sm font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">{mineral.formula}</span>
                    </div>

                    <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 ease-in-out">
                      <p className="text-sm text-text-secondary line-clamp-2">
                        {mineral.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-serif text-primary-dark mb-2">No minerals found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
              <button 
                onClick={() => { setSearchTerm(""); setActiveFilter("All"); }}
                className="mt-6 text-accent-terra hover:underline font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Technical Comparison Matrix
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl">
              Compare primary compositions and key properties across our entire portfolio. 
              Swipe left and right on mobile to view all data.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden">
            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full text-left min-w-[1000px]">
                <thead className="bg-[#F8FAFC] border-b border-slate-200 sticky top-0 z-10">
                  <tr>
                    <th className="py-5 px-6 font-semibold text-primary-dark whitespace-nowrap">Mineral Name</th>
                    <th className="py-5 px-6 font-semibold text-primary-dark whitespace-nowrap">Formula</th>
                    <th className="py-5 px-6 font-semibold text-primary-dark min-w-[300px]">Key Composition</th>
                    <th className="py-5 px-6 font-semibold text-primary-dark min-w-[250px]">Main Properties</th>
                    <th className="py-5 px-6 font-semibold text-primary-dark">Primary Industries</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {allMinerals.map(mineral => (
                    <tr key={mineral.slug} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6">
                        <Link href={`/minerals/${mineral.slug}`} className="font-semibold text-primary-dark hover:text-accent-terra transition-colors">
                          {mineral.name}
                        </Link>
                      </td>
                      <td className="py-4 px-6 font-mono text-sm text-slate-600">{mineral.formula}</td>
                      <td className="py-4 px-6 text-sm text-slate-600">
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(mineral.composition).map(([key, val]) => (
                            <span key={key} className="bg-white border border-slate-200 px-2 py-1 rounded text-xs shadow-sm">
                              <strong className="font-medium mr-1">{key}:</strong>{val as string}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-600">
                        <ul className="list-disc pl-4 space-y-1">
                          {mineral.properties.map((prop, i) => (
                            <li key={i}>{prop}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-600">
                        {mineral.industries.join(", ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-terra hover:bg-[#A85F33] text-white px-8 py-4 rounded-sm font-medium text-lg transition-transform hover:-translate-y-1 shadow-lg"
            >
              Request Full Technical Data Sheets
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
