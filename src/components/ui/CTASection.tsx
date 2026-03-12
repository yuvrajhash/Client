import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export default function CTASection({
  title = "Partner With a Global Mineral Supply Leader",
  description = "Secure your supply chain with premium industrial minerals, backed by 25+ years of excellence and global logistics expertise.",
  buttonText = "Request a Consultation",
  buttonLink = "/contact",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("py-24 relative overflow-hidden bg-primary-dark text-white", className)}>
      {/* Decorative background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-accent-terra/10 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent-ochre/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <Link
          href={buttonLink}
          className="inline-flex items-center gap-2 bg-accent-terra hover:bg-[#A85F33] text-white px-8 py-4 rounded-sm font-medium text-lg transition-transform hover:scale-105 shadow-xl shadow-accent-terra/20"
        >
          {buttonText}
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
