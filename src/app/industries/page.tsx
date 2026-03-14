import Image from "next/image";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTASection from "@/components/ui/CTASection";

export default function IndustriesOverview() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white pt-24 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 hidden md:block">
          <Image
            src="/images/minerals/chrome-ore.png"
            alt="Industrial Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Driving Global Manufacturing
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From the extreme heat of steel furnaces to the precise chemistry of glassmaking, Mineralia provides the foundational elements for the world's most critical industries.
          </p>
        </div>
      </section>

      {/* Reusing the Industries Section component */}
      <div className="bg-white">
        <IndustriesSection />
      </div>

      <CTASection 
        title="Need Technical Assistance for Your Application?"
        description="Our team of application engineers can help you select the exact mineral grade required for your specific manufacturing process."
      />
    </div>
  );
}
