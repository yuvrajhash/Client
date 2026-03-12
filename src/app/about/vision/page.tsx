import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

export default function VisionMissionPage() {
  const milestones = [
    { year: "1999", title: "Inception in Geneva", desc: "Mineralia founded with a focus on European refractory and ceramics markets." },
    { year: "2005", title: "Asian Expansion", desc: "Opened first processing facility in India to manage high-grade Kaolin and Bauxite." },
    { year: "2012", title: "ISO Certification", desc: "Achieved global ISO 9001 certification across all operating facilities." },
    { year: "2018", title: "Sustainable Sourcing Initiative", desc: "Launched our comprehensive environmental audit program for all mining partners." },
    { year: "2024", title: "Next-Gen Processing", desc: "Invested $25M in continuous-kiln calcination tech to refine high-alumina grades." },
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="bg-primary-dark text-white pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Vision & Mission
          </h1>
        </div>
      </section>

      {/* About sub-nav links */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-[72px] z-30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-4 md:gap-8">
            <Link href="/about" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Overview</Link>
            <Link href="/about/chairman-message" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Chairman's Message</Link>
            <Link href="/about/vision" className="text-accent-terra font-bold border-b-2 border-accent-terra pb-1">Vision & Mission</Link>
            <Link href="/about/quality-assurance" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Quality Assurance</Link>
          </div>
        </div>
      </section>

      {/* Statements */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-sm border-t-8 border-accent-terra shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-accent-terra mb-8">
                <Target size={32} />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary-dark mb-6">Our Mission</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                To engineer absolute certainty into the global industrial materials supply chain. We extract variability so our manufacturing partners can focus entirely on innovation and production scale.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-sm border-t-8 border-accent-ochre shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-accent-ochre mb-8">
                <Lightbulb size={32} />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary-dark mb-6">Our Vision</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                To become the $1B standard-bearer for sustainable, precision-processed critical minerals worldwide—where every high-tech ceramic component and structural steel beam traces its flawless chemistry back to Mineralia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl cursor-default">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-dark mb-6">
              A Legacy of Growth
            </h2>
            <p className="text-lg text-text-secondary">
              Key milestones in our 25-year journey of supplying global industries.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-1/2">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="mb-12 relative pl-8 md:pl-0">
                
                {/* Timeline Dot */}
                <div className="absolute top-0 left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent-terra border-4 border-white shadow-sm z-10"></div>
                
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                  <div className="font-serif text-3xl font-bold text-primary-dark opacity-30 mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
