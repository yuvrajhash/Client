import Image from "next/image";
import Link from "next/link";
import { Hammer, Beaker, BrickWall, Flame, Construction, Droplet, ArrowRight } from "lucide-react";
import CTASection from "@/components/ui/CTASection";
import FadeUp from "@/components/ui/FadeUp";

const industries = [
  {
    name: "Steel & Metallurgy",
    description: "Essential additives for steel production, improving strength, resistance, and malleability.",
    minerals: ["Manganese Ore", "Chrome Ore", "Silica Sand", "Fluorspar", "Dolomite"],
    icon: Hammer,
    slug: "steel-metallurgy"
  },
  {
    name: "Glass Manufacturing",
    description: "High-purity silica and feldspar for flat glass, container glass, and fiberglass production.",
    minerals: ["Silica Sand", "Feldspar", "Dolomite", "Limestone"],
    icon: Beaker,
    slug: "glass-manufacturing"
  },
  {
    name: "Ceramics",
    description: "Raw materials for tiles, sanitaryware, and advanced technical ceramics.",
    minerals: ["Kaolin", "Feldspar", "Silica Sand"],
    icon: BrickWall,
    slug: "ceramics"
  },
  {
    name: "Refractories",
    description: "Heat-resistant minerals for furnace linings and high-temperature industrial processes.",
    minerals: ["Bauxite", "Chrome Ore", "Dolomite", "Magnesite"],
    icon: Flame,
    slug: "refractories"
  },
  {
    name: "Construction Materials",
    description: "Aggregates and binders for concrete, cement, and infrastructure projects.",
    minerals: ["Limestone", "Gypsum", "Bauxite", "Dolomite"],
    icon: Construction,
    slug: "construction"
  },
  {
    name: "Chemical Processing",
    description: "Feedstock for industrial chemicals, fertilizers, and water treatment.",
    minerals: ["Barite", "Fluorspar", "Salt", "Kaolin"],
    icon: Droplet,
    slug: "chemical-processing"
  }
];

export default function IndustriesOverview() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-mineralia-navy text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 hidden md:block">
          <Image
            src="/images/minerals/chrome-ore.png"
            alt="Industrial Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <FadeUp>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Industries We Serve
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Supplying high-grade industrial minerals to critical manufacturing sectors worldwide.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-mineralia-teal shadow-sm mb-6 group-hover:bg-mineralia-teal group-hover:text-white transition-colors border border-slate-100">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-mineralia-navy mb-4">{industry.name}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                      {industry.description}
                    </p>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Minerals</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {industry.minerals.map((mineral) => (
                          <span key={mineral} className="text-xs font-medium bg-white text-slate-700 px-2 py-1 rounded border border-slate-200">
                            {mineral}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href="/minerals" 
                        className="inline-flex items-center text-mineralia-teal font-medium hover:text-mineralia-teal-hover transition-colors text-sm"
                      >
                        Explore Minerals <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection 
        title="Need Technical Assistance?"
        description="Our team of application engineers can help you select the exact mineral grade required for your specific manufacturing process."
      />
    </div>
  );
}
