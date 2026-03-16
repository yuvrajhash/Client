import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Globe, Users, TrendingUp } from "lucide-react";
import { jobs } from "@/data/careers";
import CTASection from "@/components/ui/CTASection";
import FadeUp from "@/components/ui/FadeUp";

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-mineralia-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <FadeUp>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Build the Future of Global Mineral Supply
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Join a team driving innovation in industrial mineral sourcing, logistics, and global trade. We are looking for problem solvers and industry experts.
              </p>
              <Link 
                href="#open-positions" 
                className="inline-flex items-center gap-2 bg-mineralia-teal hover:bg-mineralia-teal-hover text-white px-6 py-3 rounded font-medium transition-colors"
              >
                View Open Positions
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-mineralia-navy mb-4">Why Join Mineralia?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer a dynamic environment where you can make a tangible impact on the global supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeUp delay={0.1}>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 text-center hover:shadow-md transition-shadow h-full">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-mineralia-teal mx-auto mb-6 shadow-sm border border-slate-100">
                  <Globe size={32} />
                </div>
                <h3 className="font-bold text-xl text-mineralia-navy mb-3">Global Impact</h3>
                <p className="text-slate-600 leading-relaxed">Work in a truly international trade environment, connecting mines to manufacturers across continents.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 text-center hover:shadow-md transition-shadow h-full">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-mineralia-teal mx-auto mb-6 shadow-sm border border-slate-100">
                  <Users size={32} />
                </div>
                <h3 className="font-bold text-xl text-mineralia-navy mb-3">Expert Team</h3>
                <p className="text-slate-600 leading-relaxed">Collaborate with geologists, logistics experts, and trade specialists with deep technical expertise.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 text-center hover:shadow-md transition-shadow h-full">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-mineralia-teal mx-auto mb-6 shadow-sm border border-slate-100">
                  <TrendingUp size={32} />
                </div>
                <h3 className="font-bold text-xl text-mineralia-navy mb-3">Innovation</h3>
                <p className="text-slate-600 leading-relaxed">Be part of a company that is digitizing and modernizing the traditional mineral supply chain.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-mineralia-navy mb-12">Open Positions</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job, idx) => (
              <FadeUp key={job.id} delay={idx * 0.1}>
                <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-mineralia-navy mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={16} /> {job.department}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={16} /> {job.location}
                      </span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-xs font-medium text-slate-600 border border-slate-200">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link 
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center gap-2 bg-white border border-mineralia-navy text-mineralia-navy hover:bg-mineralia-navy hover:text-white px-6 py-2.5 rounded font-medium transition-colors whitespace-nowrap"
                  >
                    View Role
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Don't see a fit?" description="Send your resume to careers@mineralia.com and we'll keep you in mind for future opportunities." />
    </div>
  );
}
