import Image from "next/image";
import { Truck, Search, Factory, ShieldCheck, Leaf, Anchor, Globe, Beaker, ArrowRight } from "lucide-react";
import SourcingMap from "@/components/home/SourcingMap";
import CTASection from "@/components/ui/CTASection";
import FadeUp from "@/components/ui/FadeUp";

const processSteps = [
  {
    icon: Search,
    title: "Global Sourcing",
    desc: "Identifying and partnering with premier mines across 40+ countries to secure high-yield, consistent raw materials."
  },
  {
    icon: Factory,
    title: "Processing",
    desc: "Advanced milling, calcination, and grading technologies to ensure exact physical and chemical specifications."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Rigorous lot-by-lot testing in ISO-certified laboratories, including SGS inspection and chemical analysis."
  },
  {
    icon: Package,
    title: "Packaging",
    desc: "Customized packaging solutions including bulk bags, jumbo bags, and palletized options for safe transport."
  },
  {
    icon: Anchor,
    title: "Port Dispatch",
    desc: "Strategic consolidation at major export terminals for efficient loading and customs clearance."
  },
  {
    icon: Truck,
    title: "Delivery",
    desc: "Resilient global logistics ensuring on-time delivery to your manufacturing facility."
  }
];

import { Package } from "lucide-react";

export default function SupplyChainPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/minerals/bauxite.png"
            alt="Global Logistics Port"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-mineralia-navy/80 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-white mt-8">
          <FadeUp>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Resilient Global <br /> Supply Chain
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-300 max-w-3xl leading-relaxed">
              Delivering critical minerals with certainty. From mine to factory gate, our infrastructure ensures reliability in an unpredictable world.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Process Pipeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-mineralia-navy mb-6">
              The Mineralia Pipeline
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We own the process end-to-end. Our integrated approach bridges the gap between raw extraction and your refined production needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden xl:block absolute top-[44px] left-[8%] right-[8%] h-[2px] bg-slate-100 z-0"></div>
            
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="relative z-10 flex flex-col items-center text-center group h-full">
                    <div className="w-24 h-24 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center text-mineralia-teal mb-6 relative group-hover:border-mineralia-teal transition-colors">
                      <Icon size={32} />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-mineralia-navy text-white flex items-center justify-center font-bold font-serif shadow-md border-2 border-white">
                        {idx + 1}
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-mineralia-navy mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logistics Detail */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-mineralia-navy mb-6">
                Global Logistics Network
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our logistics team manages complex international trade routes to ensure your materials arrive on time, every time. We handle all documentation, customs clearance, and freight coordination.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-mineralia-teal shrink-0 shadow-sm">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-mineralia-navy text-lg">Mine to Port</h4>
                    <p className="text-slate-600">Efficient inland transport from remote mining sites to major export terminals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-mineralia-teal shrink-0 shadow-sm">
                    <Anchor size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-mineralia-navy text-lg">Ocean Freight</h4>
                    <p className="text-slate-600">Strategic partnerships with major shipping lines for bulk and containerized cargo.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-mineralia-teal shrink-0 shadow-sm">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-mineralia-navy text-lg">Last Mile Delivery</h4>
                    <p className="text-slate-600">Door-to-door delivery services to your manufacturing facility or warehouse.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
               <Image 
                src="/images/minerals/kaolin.png"
                alt="Logistics Operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Map */}
      <SourcingMap />

      {/* Quality Assurance */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-mineralia-navy mb-6">
              Uncompromising Quality
            </h2>
            <p className="text-lg text-slate-600">
              We understand that consistency is key to your production process. Our multi-stage quality control ensures every shipment meets your exact specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200 rounded-lg hover:border-mineralia-teal transition-colors group">
              <ShieldCheck size={48} className="mx-auto text-mineralia-teal mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl text-mineralia-navy mb-3">Third-Party Testing</h3>
              <p className="text-slate-600">Independent analysis by SGS, Intertek, or Bureau Veritas for every lot.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-lg hover:border-mineralia-teal transition-colors group">
              <Beaker size={48} className="mx-auto text-mineralia-teal mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl text-mineralia-navy mb-3">Chemical Analysis</h3>
              <p className="text-slate-600">Detailed chemical composition reports (XRF/XRD) provided with all shipments.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-lg hover:border-mineralia-teal transition-colors group">
              <Leaf size={48} className="mx-auto text-mineralia-teal mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl text-mineralia-navy mb-3">Batch Traceability</h3>
              <p className="text-slate-600">Full traceability from the mine face to your factory gate.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Secure Your Supply Chain Today" />
    </div>
  );
}
