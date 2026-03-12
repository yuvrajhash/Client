import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";

export default function ChairmanMessagePage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="bg-primary-dark text-white pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Chairman's Message
          </h1>
        </div>
      </section>

      {/* About sub-nav links */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-[72px] z-30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-4 md:gap-8">
            <Link href="/about" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Overview</Link>
            <Link href="/about/chairman-message" className="text-accent-terra font-bold border-b-2 border-accent-terra pb-1">Chairman's Message</Link>
            <Link href="/about/vision" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Vision & Mission</Link>
            <Link href="/about/quality-assurance" className="text-slate-500 hover:text-primary-dark transition-colors font-medium">Quality Assurance</Link>
          </div>
        </div>
      </section>

      {/* Letter Content */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-white border border-slate-200 shadow-xl rounded-sm p-8 md:p-16 lg:p-20 relative">
            
            {/* Watermark / Logo mark */}
            <div className="absolute top-10 right-10 text-slate-100 font-serif text-8xl md:text-9xl font-bold opacity-50 select-none pointer-events-none">
              M
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="relative w-48 h-48 md:w-full md:aspect-[3/4] md:h-auto rounded-sm overflow-hidden mb-6 shadow-md filter grayscale-[30%]">
                  <Image
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
                    alt="Chairman Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-dark mb-1">Elias vander Wahl</h3>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Chairman & CEO</p>
                <Link
                  href="/contact"
                  className="hidden md:inline-flex text-accent-terra hover:text-primary-dark text-sm font-medium transition-colors"
                >
                  Contact Executive Office →
                </Link>
              </div>

              <div className="md:col-span-8 prose prose-lg md:prose-xl max-w-none text-text-secondary leading-relaxed font-sans font-light">
                <h2 className="font-serif text-3xl font-bold text-primary-dark mb-8 mt-0">
                  Building the Foundations of Tomorrow
                </h2>
                
                <p>
                  To our valued partners,
                </p>
                
                <p>
                  For over two decades, Mineralia has operated at the vital intersection of raw terrestrial resources and advanced human engineering. When we founded this company, the industrial landscape was vastly different. Supply chains were localized, specifications were broad, and the pace of innovation was steadier.
                </p>

                <p>
                  Today, the margins for error in global manufacturing have vanished. The transition to high-strength steels, ultra-clear solar glass, and extreme-temperature refractories dictates that the chemistry of inputs must be absolute. <strong>Near enough is no longer good enough.</strong>
                </p>

                <p>
                  This fundamental shift in manufacturing demands is why Mineralia has evolved from a traditional trading house into a true global supply chain partner. We do not simply secure minerals; we secure certainty. By investing heavily in our own state-of-the-art processing facilities, expanding our ISO-certified QA laboratories, and forging deep, generational partnerships with premier mine operators across six continents, we have built a resilient infrastructure designed to absorb global shocks.
                </p>

                <blockquote className="border-l-4 border-accent-terra pl-6 my-8 italic text-slate-700 bg-slate-50 py-4 pr-4 rounded-r-sm">
                  "In an increasingly unpredictable world, our singular mission is to be the most predictable, reliable, and precise variable in your complex manufacturing formula."
                </blockquote>

                <p>
                  As we look to the future, our commitment to sustainable sourcing and transparent logistics will only deepen. We are actively auditing our entire network to reduce our carbon footprint, ensuring that as we empower the industries building the future, we also protect the world that makes it possible.
                </p>

                <p>
                  To our clients who have trusted us to fuel their furnaces and feed their production lines—thank you. And to those who demand a higher standard of industrial mineral supply, we invite you to experience the Mineralia difference.
                </p>

                <div className="mt-12">
                  <span className="font-serif text-4xl block font-bold text-primary-dark italic opacity-80 pb-2">Elias vander Wahl</span>
                  <div className="h-0.5 w-16 bg-accent-terra mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
