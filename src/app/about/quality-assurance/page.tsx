import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";
import { Shield, Microscope, Award, FileCheck, FlaskConical, Target } from "lucide-react";

export default function QualityAssurancePage() {
  const certifications = [
    { title: "ISO 9001:2015", desc: "Quality Management Systems certified across all processing sites.", icon: Award },
    { title: "ISO 14001:2015", desc: "Environmental Management Systems for sustainable mine operations.", icon: Shield },
    { title: "OHSAS 18001", desc: "Occupational Health and Safety standards rigorously enforced.", icon: FileCheck },
    { title: "JIS Compliance", desc: "Materials tested against Japanese Industrial Standards upon request.", icon: Target },
  ];

  const processes = [
    { step: "01", title: "Mine-Site Sampling", desc: "Core sampling and initial XRF analysis before extraction begins, ensuring we only mine veins meeting base purity requirements." },
    { step: "02", title: "Post-Processing Grading", desc: "After crushing and milling, particle size distribution (PSD) is verified using laser diffraction technology." },
    { step: "03", title: "Chemical Validation", desc: "Final X-Ray Fluorescence (XRF) and X-Ray Diffraction (XRD) testing to confirm precise compound percentages." },
    { step: "04", title: "Pre-Shipment Certification", desc: "Issuance of a detailed Certificate of Analysis (CoA) tied to a specific lot number, guaranteeing traceability." },
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="bg-primary-dark text-white pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Quality Assurance
          </h1>
        </div>
      </section>

      {/* About sub-nav links */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-[72px] z-30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-4 md:gap-8">
            <Link href="/about" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Overview</Link>
            <Link href="/about/chairman-message" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Chairman's Message</Link>
            <Link href="/about/vision" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Vision & Mission</Link>
            <Link href="/about/quality-assurance" className="text-accent-terra font-bold border-b-2 border-accent-terra pb-1">Quality Assurance</Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-accent-terra font-bold tracking-wider uppercase text-sm mb-4">
                <Microscope size={18} />
                Laboratory-Grade Precision
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-dark mb-6">
                Zero Tolerance for Impurity
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                In advanced manufacturing, a 0.5% variance in iron oxide or silica can result in catastrophic product failure. That is why Mineralia operates industry-leading testing laboratories at every major logistical node.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                We do not rely on third-party assurances. We verify, validate, and certify every ton of material before it enters your supply chain.
              </p>
            </div>
            <div className="relative h-[400px] rounded-sm overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
                alt="Laboratory Testing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Badges */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Global Certifications
            </h2>
            <p className="text-text-secondary text-lg">
              Independently audited and verified to meet the highest international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => {
               const Icon = cert.icon;
               return (
                 <div key={idx} className="bg-surface p-8 rounded-sm border border-slate-200 text-center hover:border-accent-terra hover:shadow-md transition-all group">
                   <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-primary-dark group-hover:bg-accent-terra group-hover:text-white transition-colors mb-6 shadow-sm border border-slate-100">
                     <Icon size={32} />
                   </div>
                   <h3 className="font-bold text-primary-dark text-xl mb-3">{cert.title}</h3>
                   <p className="text-slate-600 text-sm">{cert.desc}</p>
                 </div>
               );
            })}
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-24 bg-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-16">
             <div className="inline-flex items-center gap-3 mb-6 border border-white/20 bg-white/5 py-2 px-4 rounded-full text-sm font-medium">
               <FlaskConical size={18} className="text-accent-terra" />
               <span>The Verification Protocol</span>
             </div>
             <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">4-Stage Quality Framework</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((proc, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-serif font-bold text-white/5 absolute -top-10 left-0 select-none pointer-events-none">
                  {proc.step}
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-sm h-full relative z-10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-4 font-serif text-accent-terra">{proc.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Request Sample Materials with CoAs" />
    </div>
  );
}
