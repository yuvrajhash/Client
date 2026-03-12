import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import allMinerals from "@/data/minerals.json";
import CTASection from "@/components/ui/CTASection";

const industryData = [
  {
    slug: "ceramics",
    name: "Ceramics",
    heroImage: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1920&auto=format&fit=crop",
    description: "From traditional tableware to advanced technical ceramics, our high-purity minerals provide the structural integrity, thermal stability, and perfect glaze finishes your manufacturing process demands.",
    caseStudy: {
      title: "Advanced Porcelain Production",
      content: "A leading European sanitaryware manufacturer optimized their firing cycle and reduced defect rates by 18% after switching to our premium grade Kaolin and controlled-particle Feldspar."
    }
  },
  {
    slug: "refractories",
    name: "Refractories",
    heroImage: "https://images.unsplash.com/photo-1504280620857-4560a5e8e815?q=80&w=1920&auto=format&fit=crop",
    description: "Our dead-burned magnesite and high-alumina bauxite are critical components for the world's most demanding high-temperature environments, from steel furnaces to cement kilns.",
    caseStudy: {
      title: "Extending Furnace Lining Life",
      content: "By employing our calcined bauxite and fused magnesite, a major Asian steelworks extended their ladle lining lifespan by an unprecedented 25 heats, significantly reducing maintenance downtime."
    }
  },
  {
    slug: "steel",
    name: "Steel",
    heroImage: "https://images.unsplash.com/photo-1558236109-17a3a9bf4af8?q=80&w=1920&auto=format&fit=crop",
    description: "Mineralia supplies the vital ferroalloys and fluxes required to produce advanced high-strength steels, ensuring precise chemical control over the melt and exceptional final product quality.",
    caseStudy: {
      title: "Precision Alloying for Auto Manufacturing",
      content: "Working with a Japanese automotive steel producer, our guaranteed-spec Chrome Ore enabled tighter control over austenitic grain size, resulting in stronger, lighter crash-safety components."
    }
  },
  {
    slug: "glass",
    name: "Glass",
    heroImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1920&auto=format&fit=crop",
    description: "Clarity, strength, and thermal resistance start with the highest quality raw materials. Our ultra-pure silica sand and dolomite ensure the perfection of float glass, fiberglass, and specialty optical products.",
    caseStudy: {
      title: "Solar Panel Glass Clarity",
      content: "We partnered with a top-tier solar panel manufacturer to provide <0.01% Fe2O3 Silica Sand, increasing their photovoltaic transmittance efficiency by 1.2% across their entire product line."
    }
  }
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industryData.map((ind) => ({
    slug: ind.slug,
  }));
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industryData.find(i => i.slug === slug);

  if (!industry) {
    notFound();
  }

  // Find all minerals that list this industry
  const relevantMinerals = allMinerals.filter(m => 
    m.industries.some(ind => ind.toLowerCase().includes(industry.name.toLowerCase()) || industry.name.toLowerCase().includes(ind.toLowerCase()))
  );

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={industry.heroImage}
            alt={industry.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-dark/80 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-white mt-8">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-mono tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-white transition-colors">INDUSTRIES</Link>
            <span>/</span>
            <span className="text-white font-bold">{industry.name.toUpperCase()}</span>
          </nav>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {industry.name}
          </h1>
          <p className="text-xl md:text-2xl font-light text-slate-300 max-w-3xl leading-relaxed">
            {industry.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left Col: Case Study & Details */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-primary-dark mb-8">
                Application Excellence
              </h2>
              
              <div className="bg-surface p-8 md:p-10 border-l-4 border-accent-terra rounded-r-sm shadow-sm mb-12">
                <h3 className="font-serif text-2xl font-bold text-primary-dark mb-4">
                  Case Study: {industry.caseStudy.title}
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {industry.caseStudy.content}
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-text-secondary">
                <p>
                  At Mineralia, we understand that {industry.name.toLowerCase()} requires precise chemistry and absolute consistency. Variability in raw materials leads to unacceptable production defects. Our rigorous quality assurance protocols ensure that every shipment of minerals meets your exacting tolerances, providing the stable foundation necessary for optimized, high-yield manufacturing.
                </p>
              </div>
            </div>

            {/* Right Col: Minerals List */}
            <div className="lg:col-span-1 border-l border-slate-100 pl-0 lg:pl-10 mt-12 lg:mt-0">
              <h3 className="font-serif text-2xl font-bold text-primary-dark mb-8">
                Key Minerals for {industry.name}
              </h3>
              
              <div className="space-y-4">
                {relevantMinerals.map(mineral => (
                  <Link 
                    key={mineral.slug}
                    href={`/minerals/${mineral.slug}`}
                    className="group block bg-white border border-slate-200 p-4 rounded-sm shadow-sm hover:border-accent-terra hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-primary-dark group-hover:text-accent-terra transition-colors">{mineral.name}</h4>
                      <ArrowRight size={16} className="text-slate-400 group-hover:text-accent-terra transition-colors" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">{mineral.formula}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
