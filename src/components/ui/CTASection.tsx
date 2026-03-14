import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/animations/Magnetic";
import Reveal from "@/components/animations/Reveal";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export default function CTASection({
  title = "Reliable Mineral Supply for Global Industry",
  description = "Secure your supply chain with precision-grade industrial minerals, backed by 25+ years of excellence and a network spanning 40+ countries.",
  buttonText = "Request Supply Quote",
  buttonLink = "/contact",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("py-32 relative overflow-hidden", className)}>
      {/* Copper gradient background */}
      <div className="absolute inset-0 copper-gradient-bg opacity-90" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
        <Reveal>
          <h2 className="font-serif text-[clamp(1.75rem,5vw,3rem)] font-bold mb-6 leading-tight text-white">
            {title}
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            {description}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <Magnetic>
            <Link
              href={buttonLink}
              className="group inline-flex items-center gap-3 bg-white text-primary-dark px-10 py-5 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
            >
              {buttonText}
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
