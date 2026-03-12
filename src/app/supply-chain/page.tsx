import Image from "next/image";
import { Truck, Search, Factory, ShieldCheck, Leaf } from "lucide-react";
import SourcingMap from "@/components/home/SourcingMap";
import CTASection from "@/components/ui/CTASection";

const processSteps = [
  {
    icon: Search,
    title: "Global Sourcing",
    desc: "Identifying and partnering with premier mines across 40+ countries to secure high-yield, consistent raw materials."
  },
  {
    icon: Factory,
    title: "Precision Processing",
    desc: "Advanced milling, calcination, and grading technologies to ensure exact physical and chemical specifications."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Rigorous lot-by-lot testing in ISO-certified laboratories before any shipment leaves our facilities."
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    desc: "A resilient global logistics network ensuring on-time delivery from port to your manufacturing floor, reducing supply chain risk."
  }
];

export default function SupplyChainPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c66a7b?q=80&w=1920&auto=format&fit=crop"
            alt="Global Logistics Port"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-dark/80 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-white mt-8">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Resilient Global <br /> Supply Chain
          </h1>
          <p className="text-xl md:text-2xl font-light text-slate-300 max-w-3xl leading-relaxed">
            Delivering critical minerals with certainty. From mine to factory gate, our infrastructure ensures reliability in an unpredictable world.
          </p>
        </div>
      </section>

      {/* Process Pipeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-dark mb-6">
              The Mineralia Pipeline
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              We own the process end-to-end. Our integrated approach bridges the gap between raw extraction and your refined production needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-slate-100 z-0"></div>
            
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center text-accent-terra mb-6 relative">
                    <Icon size={36} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-dark text-white flex items-center justify-center font-bold font-serif shadow-md border-2 border-white">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary-dark mb-4">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embed Sourcing Map component here */}
      <SourcingMap />

      {/* Sustainability Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="bg-white border border-slate-200 shadow-sm rounded-sm p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-8">
                <Leaf size={32} />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-dark mb-6">
                Sustainable & Ethical Sourcing
              </h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  As an industry leader, Mineralia recognizes the environmental impact of mineral extraction. We are committed to transparency, responsible sourcing, and ongoing environmental remediation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                    <span>Auditing suppliers against strict environmental standards.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                    <span>Investing in lower-carbon maritime shipping logistics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                    <span>Partnering with local communities for positive economic impact in source regions.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-sm overflow-hidden hidden lg:block">
              <Image 
                src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1920&auto=format&fit=crop"
                alt="Renewable Energy Logistics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Strengthen Your Supply Chain Today" />
    </div>
  );
}
