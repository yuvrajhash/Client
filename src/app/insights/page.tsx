import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import CTASection from "@/components/ui/CTASection";

const insights = [
  {
    id: 1,
    title: "The Critical Role of High-Purity Silica in Next-Gen Solar Panels",
    excerpt: "As photovoltaic efficiency demands increase, the tolerance for iron impurities in solar glass drops. We analyze the market shift towards <0.01% Fe₂O₃ silica sand.",
    category: "Market Trends",
    date: "October 12, 2024",
    image: "/images/minerals/bauxite.png",
  },
  {
    id: 2,
    title: "Navigating Bauxite Supply Chain Disruptions in West Africa",
    excerpt: "Recent logistical bottlenecks have highlighted the necessity of multi-origin sourcing for refractory grade bauxite. How Mineralia ensures uninterrupted supply.",
    category: "Logistics",
    date: "September 28, 2024",
    image: "/images/minerals/kaolin.png",
  },
  {
    id: 3,
    title: "Decarbonizing Calcination: Our $25M Investment in Rotary Kilns",
    excerpt: "A deep dive into how new heat-recovery technologies are reducing the carbon footprint of high-alumina calcination by up to 30%.",
    category: "Sustainability",
    date: "September 15, 2024",
    image: "/images/minerals/silica-sand.png",
  },
  {
    id: 4,
    title: "Quality Control Standards for Japanese Auto Steel Manufacturing",
    excerpt: "Examining the strict JIS requirements for Chrome Ore ferroalloys and why stringent lot-by-lot XRF analysis is no longer optional.",
    category: "Technical Specs",
    date: "August 30, 2024",
    image: "/images/minerals/bentonite.png",
  },
  {
    id: 5,
    title: "The Future of Solid-State Batteries: Manganese Demand Surges",
    excerpt: "Analysis of the projected battery-grade manganese market and how supply networks must adapt to satisfy EV production timelines.",
    category: "Market Trends",
    date: "August 12, 2024",
    image: "/images/minerals/rutile.png",
  },
  {
    id: 6,
    title: "Particle Size Distribution (PSD) in Ceramic Glazes: A Tutorial",
    excerpt: "Why the difference between d50 and d90 measurements in Kaolin and Zircon Sand dictates the ultimate surface finish of sanitaryware.",
    category: "Technical Specs",
    date: "July 22, 2024",
    image: "/images/minerals/manganese-ore.png",
  }
];

export default function InsightsPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="bg-primary-dark text-white pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Market Insights
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Technical papers, supply chain analysis, and sustainability reports from the leading minds in industrial minerals.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((post) => (
              <article key={post.id} className="bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden flex flex-col group hover:shadow-lg transition-shadow">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary-dark text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <Calendar size={14} />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-primary-dark mb-4 group-hover:text-accent-terra transition-colors leading-snug">
                    <Link href="#" className="before:absolute before:inset-0">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-accent-terra font-medium text-sm mt-auto">
                    Read Article <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="border border-slate-300 bg-white hover:bg-slate-50 text-primary-dark px-8 py-3 rounded-sm font-medium transition-colors">
              Load More Insights
            </button>
          </div>
        </div>
      </section>

      <CTASection title="Stay Informed on Critical Mineral Economics" buttonText="Subscribe to Newsletter" />
    </div>
  );
}
