"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, FileText, Globe } from "lucide-react";
import allMinerals from "@/data/minerals.json";

// Filter specifically for high-spec minerals popular in JP
const jpMinerals = allMinerals.filter(m => 
  ["Silica Sand (Quartz)", "Kaolin (China Clay)", "Calcined Alumina", "Zircon Sand", "Rutile"].includes(m.name)
);

export default function JapaneseMarketPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="bg-[#FCFCFC] min-h-screen font-sans">
      {/* Hero Header - Minimal & Precise */}
      <header className="pt-32 pb-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 justify-between items-end">
            <div className="max-w-3xl">
              <h4 className="text-slate-400 font-bold tracking-[0.2em] text-xs uppercase mb-4">
                日本市場向け特設ページ | Japan Industrial Market
              </h4>
              <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-[#111827] mb-6 leading-tight">
                Precision Minerals for <br /> Advanced Manufacturing
              </h1>
              <p className="text-[#4B5563] text-lg leading-relaxed max-w-2xl font-light">
                Delivering exact chemical tolerances, rigorous JIS-compliant QA protocols, and a resilient 40-country supply chain trusted by Japan's leading ceramics, steel, and high-tech electronics manufacturers.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Assurance Grid */}
      <section className="py-16 border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="md:pr-8 py-4 md:py-0">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 size={20} className="text-accent-terra" />
                <h3 className="font-bold text-[#111827] tracking-tight">Chemical Accuracy</h3>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Lot-by-lot XRF and XRD analysis ensuring parts-per-million compliance with your exact technical specifications.
              </p>
            </div>
            <div className="md:px-8 py-4 md:py-0">
              <div className="flex items-center gap-3 mb-4">
                <FileText size={20} className="text-accent-terra" />
                <h3 className="font-bold text-[#111827] tracking-tight">JIS standard Alignment</h3>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                All testing and documentation can be mapped to Japanese Industrial Standards criteria upon request.
              </p>
            </div>
            <div className="md:pl-8 py-4 md:py-0">
              <div className="flex items-center gap-3 mb-4">
                <Globe size={20} className="text-accent-terra" />
                <h3 className="font-bold text-[#111827] tracking-tight">Supply Chain Redundancy</h3>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Multi-origin sourcing capabilities to eliminate single-point-of-failure risks in your material flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Data Specification Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-[#111827] mb-2 border-l-4 border-accent-terra pl-4">
              Premium Material Specifications
            </h2>
            <p className="text-[#6B7280] text-sm ml-5">
              Highlighting key minerals frequently requested by Japanese manufacturing partners.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-y border-slate-200">
                  <th className="py-4 px-4 font-semibold text-[#374151] w-1/5">Product (Formula)</th>
                  <th className="py-4 px-4 font-semibold text-[#374151] w-2/5">Typical Composition Range</th>
                  <th className="py-4 px-4 font-semibold text-[#374151] w-1/5">Key Sourcing</th>
                  <th className="py-4 px-4 font-semibold text-[#374151] w-1/5">Data Sheet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {jpMinerals.map(mineral => (
                  <tr key={mineral.slug} className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="py-5 px-4">
                      <div className="font-bold text-[#111827] mb-1">{mineral.name}</div>
                      <div className="font-mono text-xs text-[#6B7280]">{mineral.formula}</div>
                    </td>
                    <td className="py-5 px-4 font-mono text-xs text-[#4B5563]">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 w-full max-w-xs">
                        {Object.entries(mineral.composition).map(([key, val]) => (
                          <div key={key} className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                            <span className="font-medium text-[#374151]">{key}</span>
                            <span>{val as string}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-5 px-4 text-[#4B5563]">
                      {mineral.origin.join(" · ")}
                    </td>
                    <td className="py-5 px-4">
                      <Link href={`/minerals/${mineral.slug}`} className="group inline-flex items-center gap-1 text-accent-terra font-medium text-xs hover:text-[#A85F33] transition-colors">
                        View Spec 
                        <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-right">
             <Link href="/minerals" className="text-sm text-[#6B7280] hover:text-[#111827] underline transition-colors">
               View Full Catalog (16 Minerals)
             </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-[#111827] text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-normal tracking-wide mb-4">Request Consultation</h2>
            <p className="text-slate-400 font-light text-sm max-w-xl mx-auto">
              Please submit your technical requirements below. Our specialized engineering team will review your specifications and reply rapidly.
              <br /><span className="text-xs opacity-70 block mt-2">(日本語での対応可能 / Japanese support available)</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm backdrop-blur-sm">
            {formStatus === "success" ? (
              <div className="text-center py-16">
                <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Inquiry Received</h3>
                <p className="text-slate-300">Thank you. Our technical sales team will contact you shortly.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Company Name (会社名)</label>
                    <input required type="text" className="w-full bg-transparent border-b border-slate-600 focus:border-accent-terra focus:outline-none py-2 text-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Contact Name (担当者名)</label>
                    <input required type="text" className="w-full bg-transparent border-b border-slate-600 focus:border-accent-terra focus:outline-none py-2 text-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Email (メールアドレス)</label>
                    <input required type="email" className="w-full bg-transparent border-b border-slate-600 focus:border-accent-terra focus:outline-none py-2 text-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Target Mineral</label>
                    <select className="w-full bg-transparent border-b border-slate-600 focus:border-accent-terra focus:outline-none py-2 text-slate-300 transition-colors appearance-none">
                      <option className="bg-[#111827]" value="silica">Silica Sand</option>
                      <option className="bg-[#111827]" value="alumina">Calcined Alumina</option>
                      <option className="bg-[#111827]" value="zircon">Zircon Sand</option>
                      <option className="bg-[#111827]" value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="pt-4">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Specification Requirements / inquiry Details</label>
                  <textarea required rows={4} className="w-full bg-transparent border-b border-slate-600 focus:border-accent-terra focus:outline-none py-2 text-white transition-colors resize-none placeholder:text-slate-600" placeholder="Please list desired grading, purity thresholds, or delivery volumes..."></textarea>
                </div>

                <div className="pt-8 text-center">
                  <button 
                    type="submit" 
                    disabled={formStatus === "submitting"}
                    className="bg-accent-terra hover:bg-[#A85F33] text-white px-12 py-3 rounded-sm font-medium tracking-wide transition-all min-w-[200px]"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
