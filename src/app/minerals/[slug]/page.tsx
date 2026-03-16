import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download, FileText, Globe, Truck, Package, MapPin, Phone, Mail } from "lucide-react";
import { minerals } from "@/data/minerals";
import CTASection from "@/components/ui/CTASection";
import SpecTable from "@/components/minerals/SpecTable";
import ApplicationCard from "@/components/minerals/ApplicationCard";
import InquiryForm from "@/components/minerals/InquiryForm";
import FadeUp from "@/components/ui/FadeUp";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return minerals.map((mineral) => ({
    slug: mineral.slug,
  }));
}

export default async function MineralDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const mineral = minerals.find((m) => m.slug === slug);

  if (!mineral) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-mineralia-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <Link href="/minerals" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Minerals
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <span className="text-mineralia-teal font-medium tracking-wider uppercase text-sm mb-2 block">{mineral.category}</span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 tracking-tight">{mineral.name}</h1>
              <p className="font-mono text-xl text-white/80 bg-white/10 px-4 py-2 rounded inline-block border border-white/20">
                {mineral.formula}
              </p>
              <p className="mt-6 text-xl text-slate-300 max-w-2xl leading-relaxed">
                {mineral.shortDescription}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded font-medium transition-colors border border-white/20">
                <Download size={18} />
                Spec Sheet
              </button>
              <Link href="#inquiry" className="flex items-center justify-center gap-2 bg-mineralia-teal hover:bg-mineralia-teal-hover text-white px-6 py-3 rounded font-medium transition-colors shadow-lg">
                <FileText size={18} />
                Request Supply
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* LEFT COLUMN - Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* 2. OVERVIEW SECTION */}
            <section>
              <h2 className="font-serif text-3xl font-bold text-mineralia-navy mb-6">Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {mineral.overview}
              </p>
            </section>

            {/* 3. SOURCE / ORIGIN DETAILS */}
            <section className="bg-slate-50 border border-slate-200 rounded-lg p-8">
              <h2 className="font-serif text-2xl font-bold text-mineralia-navy mb-6 flex items-center gap-2">
                <Globe className="text-mineralia-teal" size={24} />
                Source Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Source Name</h4>
                  <p className="text-mineralia-navy font-medium">{mineral.sourceDetails.sourceName}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Region / Country</h4>
                  <p className="text-mineralia-navy font-medium">{mineral.sourceDetails.region}, {mineral.sourceDetails.country}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Dispatch Ports</h4>
                  <p className="text-mineralia-navy font-medium">{mineral.sourceDetails.dispatchPorts?.join(", ")}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Sourcing Note</h4>
                  <p className="text-slate-600 text-sm">{mineral.sourceDetails.sourcingNote}</p>
                </div>
              </div>
            </section>

            {/* 5. QUALITY PARAMETERS TABLE */}
            <section>
              <h2 className="font-serif text-3xl font-bold text-mineralia-navy mb-6">Quality Parameters</h2>
              <SpecTable parameters={mineral.qualityParameters} />
            </section>

            {/* 6. APPLICATIONS SECTION */}
            <section>
              <h2 className="font-serif text-3xl font-bold text-mineralia-navy mb-6">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mineral.applications.map((app, idx) => (
                  <ApplicationCard key={idx} title={app.title} description={app.description} />
                ))}
              </div>
            </section>

            {/* 7. INDUSTRIES SERVED */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-mineralia-navy mb-6">Industries Served</h2>
              <div className="flex flex-wrap gap-3">
                {mineral.industries.map((industry) => (
                  <span key={industry} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {industry}
                  </span>
                ))}
              </div>
            </section>

            {/* 8. TECHNICAL PROFILE / DOWNLOAD SECTION */}
            <section className="bg-mineralia-navy text-white rounded-lg p-8 md:p-12 text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Technical Documentation</h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Access detailed technical specifications, safety data sheets (SDS), and certificate of analysis (COA) examples.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-mineralia-navy hover:bg-slate-100 px-6 py-3 rounded font-bold transition-colors">
                  {mineral.technicalProfileLabel}
                </button>
                <button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded font-bold transition-colors">
                  Download SDS
                </button>
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN - Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* 4. CONTACT / COMMERCIAL DETAILS */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-8 sticky top-24">
              <h3 className="font-serif text-xl font-bold text-mineralia-navy mb-6 pb-4 border-b border-slate-100">
                Commercial Details
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Package size={14} /> Packaging Options
                  </h4>
                  <ul className="space-y-2">
                    {mineral.packaging.map((pack, idx) => (
                      <li key={idx} className="text-sm text-slate-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-mineralia-teal"></div>
                        {pack}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Truck size={14} /> Export Availability
                  </h4>
                  <p className="text-sm text-slate-700">{mineral.contactDetails.exportAvailability}</p>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Contact Sales</h4>
                  <div className="space-y-3">
                    {mineral.contactDetails.contactPerson && (
                      <p className="text-sm font-medium text-mineralia-navy">{mineral.contactDetails.contactPerson}</p>
                    )}
                    {mineral.contactDetails.phone && (
                      <a href={`tel:${mineral.contactDetails.phone}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-mineralia-teal transition-colors">
                        <Phone size={14} /> {mineral.contactDetails.phone}
                      </a>
                    )}
                    {mineral.contactDetails.email && (
                      <a href={`mailto:${mineral.contactDetails.email}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-mineralia-teal transition-colors">
                        <Mail size={14} /> {mineral.contactDetails.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 9. ENQUIRY SECTION (Sidebar Form) */}
            <div id="inquiry">
              <InquiryForm mineralName={mineral.name} />
            </div>

          </div>

        </div>
      </div>

      <CTASection />
    </div>
  );
}
