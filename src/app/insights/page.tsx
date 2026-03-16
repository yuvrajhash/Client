import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import CTASection from "@/components/ui/CTASection";
import FadeUp from "@/components/ui/FadeUp";

const articles = [
  {
    id: 1,
    title: "Global Bauxite Supply Trends: 2026 Outlook",
    excerpt: "Analyzing the impact of new mining regulations in Guinea and Australia on the global aluminum supply chain.",
    category: "Mineral Market Insights",
    author: "Sarah Jenkins",
    date: "March 10, 2026",
    image: "/images/minerals/bauxite.png",
    slug: "global-bauxite-supply-trends-2026"
  },
  {
    id: 2,
    title: "Why High-Purity Silica Is Critical for Solar Glass",
    excerpt: "As solar panel demand surges, the requirement for ultra-low iron silica sand has never been higher.",
    category: "Industry Trends",
    author: "Dr. A. Patel",
    date: "February 28, 2026",
    image: "/images/minerals/silica-sand.png",
    slug: "high-purity-silica-solar-glass"
  },
  {
    id: 3,
    title: "The Role of Manganese in Green Steel Production",
    excerpt: "How manganese alloys are evolving to meet the needs of low-carbon steel manufacturing processes.",
    category: "Industry Trends",
    author: "Michael Chen",
    date: "February 15, 2026",
    image: "/images/minerals/manganese-ore.png",
    slug: "manganese-green-steel-production"
  },
  {
    id: 4,
    title: "Navigating Resource Geopolitics in 2026",
    excerpt: "Strategies for diversifying supply chains amidst changing trade policies and export bans.",
    category: "Resource Geopolitics",
    author: "Emma Thompson",
    date: "January 30, 2026",
    image: "/images/minerals/chrome-ore.png",
    slug: "resource-geopolitics-2026"
  },
  {
    id: 5,
    title: "Optimizing Bulk Mineral Logistics",
    excerpt: "Best practices for reducing moisture content and handling loss during ocean freight transport.",
    category: "Supply Chain Intelligence",
    author: "David Wilson",
    date: "January 12, 2026",
    image: "/images/minerals/kaolin.png",
    slug: "optimizing-bulk-mineral-logistics"
  }
];

const categories = [
  "All",
  "Mineral Market Insights",
  "Supply Chain Intelligence",
  "Industry Trends",
  "Resource Geopolitics"
];

export default function InsightsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-mineralia-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <FadeUp>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Market Insights
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Expert analysis on mineral markets, supply chain dynamics, and the future of industrial materials.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 border-b border-slate-200 pb-6">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  idx === 0 
                    ? "bg-mineralia-navy text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article (First one) */}
          <FadeUp>
            <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="relative h-64 lg:h-full min-h-[300px]">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 text-mineralia-teal font-bold text-sm uppercase tracking-wider mb-4">
                  <Tag size={14} />
                  {articles[0].category}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-mineralia-navy mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
                  <span className="flex items-center gap-2"><User size={16} /> {articles[0].author}</span>
                  <span className="flex items-center gap-2"><Calendar size={16} /> {articles[0].date}</span>
                </div>
                <Link href={`/insights/${articles[0].slug}`} className="inline-flex items-center gap-2 text-mineralia-navy font-bold hover:text-mineralia-teal transition-colors">
                  Read Full Article <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, idx) => (
              <FadeUp key={article.id} delay={idx * 0.1}>
                <div className="group flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-mineralia-navy shadow-sm">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.author}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-mineralia-navy mb-3 group-hover:text-mineralia-teal transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link href={`/insights/${article.slug}`} className="text-mineralia-teal font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      <CTASection title="Stay Ahead of the Market" description="Subscribe to our newsletter for weekly updates on mineral prices and supply chain news." />
    </div>
  );
}
