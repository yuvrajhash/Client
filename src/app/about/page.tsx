import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, TrendingUp, Users } from "lucide-react";
import CTASection from "@/components/ui/CTASection";
import FadeUp from "@/components/ui/FadeUp";

export default function AboutOverviewPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center bg-mineralia-navy overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/minerals/calcined-alumina.png"
            alt="Mineralia Headquarters"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-white mt-8">
          <FadeUp>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              About Mineralia
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-300 max-w-2xl leading-relaxed">
              25 years of redefining the global industrial mineral supply chain through precision, scale, and uncompromising quality.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* About sub-nav links */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-[72px] z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base">
            <Link href="/about" className="text-mineralia-teal font-bold border-b-2 border-mineralia-teal pb-1">Overview</Link>
            <Link href="/about/chairman-message" className="text-slate-500 hover:text-mineralia-navy transition-colors font-medium">Chairman's Message</Link>
            <Link href="/about/vision" className="text-slate-500 hover:text-mineralia-navy transition-colors font-medium">Vision & Mission</Link>
            <Link href="/about/quality-assurance" className="text-slate-500 hover:text-mineralia-navy transition-colors font-medium">Quality Assurance</Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-mineralia-navy mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in Geneva in 1999, Mineralia began with a singular vision: to bridge the gap between fragmented global mineral extraction and the exacting demands of advanced manufacturing.
                </p>
                <p>
                  Today, we are a $100M+ global supply chain partner, moving critical raw materials—from Bauxite to Zircon Sand—across 40+ countries. We do not simply trade commodities; we engineer supply chain solutions that provide our clients with total chemical and logistical certainty.
                </p>
              </div>
              <Link
                href="/about/chairman-message"
                className="mt-8 inline-flex items-center gap-2 text-mineralia-teal font-medium hover:text-mineralia-teal-hover transition-colors"
              >
                Read the Chairman's Message
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/minerals/feldspar.png"
                alt="Mineralia Processing Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-mineralia-navy mb-4">Our Values</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The foundational principles that guide every metric ton we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 text-mineralia-teal">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-mineralia-navy mb-4">Uncompromising Quality</h3>
              <p className="text-slate-600 leading-relaxed">
                Every shipment is tested to stringent ISO standards. We deliver chemistry, not just rocks.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 text-mineralia-teal">
                <Globe size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-mineralia-navy mb-4">Global Resilience</h3>
              <p className="text-slate-600 leading-relaxed">
                A multi-origin sourcing strategy completely eliminates single-point-of-failure risks.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 text-mineralia-teal">
                <Users size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-mineralia-navy mb-4">Partnership Focus</h3>
              <p className="text-slate-600 leading-relaxed">
                We view our clients as long-term partners, aligning our supply networks with their production goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
