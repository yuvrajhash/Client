import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileText, Globe, CheckCircle2 } from "lucide-react";
import allMinerals from "@/data/minerals.json";
import CTASection from "@/components/ui/CTASection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allMinerals.map((mineral) => ({
    slug: mineral.slug,
  }));
}

export default async function MineralDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const mineral = allMinerals.find(m => m.slug === slug);

  if (!mineral) {
    notFound();
  }

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={`/images/minerals/${mineral.slug}.png`}
            alt={mineral.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-dark/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-90"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-white mt-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/minerals" className="hover:text-white transition-colors">Minerals</Link>
            <span>/</span>
            <span className="text-white font-medium">{mineral.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-6 md:items-end justify-between">
            <div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                {mineral.name}
              </h1>
              <p className="font-mono text-2xl text-accent-terra bg-white/10 px-4 py-1.5 rounded-sm inline-block border border-white/20">
                {mineral.formula}
              </p>
            </div>
            
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent-terra hover:bg-[#A85F33] text-white px-6 py-3 rounded-sm font-medium transition-colors shadow-lg"
              >
                Request TDS
                <FileText size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left: Description & Composition */}
            <div className="lg:col-span-2 space-y-16">
              
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary-dark mb-6">Overview</h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {mineral.description}
                </p>
              </div>

              {/* Chemical Composition */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary-dark mb-6">Chemical Composition</h2>
                <div className="bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-[#F8FAFC] border-b border-slate-200">
                      <tr>
                        <th className="py-4 px-6 font-semibold text-primary-dark w-1/2">Compound</th>
                        <th className="py-4 px-6 font-semibold text-primary-dark w-1/2">Typical Percentage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {Object.entries(mineral.composition).map(([key, value]) => (
                        <tr key={key} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-medium text-slate-700">{key}</td>
                          <td className="py-4 px-6 text-slate-600 font-mono">{value as string}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Right: Quick Facts Card */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-slate-200 rounded-sm shadow-md p-8 sticky top-28">
                <h3 className="font-serif text-2xl font-bold text-primary-dark mb-8 pb-4 border-b border-slate-100">
                  Quick Facts
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-slate-400 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-terra"></span>
                      Key Properties
                    </h4>
                    <ul className="space-y-3">
                      {mineral.properties.map((prop, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 size={18} className="text-accent-terra shrink-0 mt-0.5" />
                          <span className="leading-snug">{prop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-slate-400 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-ochre"></span>
                      Main Industries
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {mineral.industries.map(industry => (
                        <div key={industry} className="bg-slate-50 border border-slate-200 text-primary-dark px-3 py-1.5 text-sm rounded-sm font-medium">
                          {industry}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-slate-400 mb-3">
                      <Globe size={16} className="text-slate-400 shrink-0" />
                      Sourcing Origins
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {mineral.origin.map(country => (
                        <span key={country} className="text-slate-700 font-medium bg-surface px-3 py-1 rounded-sm border border-slate-100">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100 space-y-4">
                  <Link
                    href="/contact"
                    className="flex justify-center items-center gap-2 w-full bg-primary-dark hover:bg-slate-800 text-white py-3.5 rounded-sm font-medium transition-colors"
                  >
                    Contact Sales Team
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
