"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const heroPanels = [
  { id: 1, label: "Mining", image: "https://images.unsplash.com/photo-1578331393699-db0af5b1d48c?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, label: "Processing", image: "https://images.unsplash.com/photo-1587293852726-694360e46123?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, label: "Shipping", image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, label: "End-Use", image: "https://images.unsplash.com/photo-1542453664-96690af09dc6?q=80&w=1200&auto=format&fit=crop" },
];

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const backgroundsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Fade in text on load
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(
      textRef.current!.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.2 }
    );

    // Parallax effect on scroll
    backgroundsRef.current.forEach((bg, index) => {
      gsap.to(bg, {
        yPercent: 20 * (index % 2 === 0 ? 1 : 1.2), // Different parallax speeds
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-primary-dark flex items-center justify-center"
    >
      {/* 4 Split Panels Background */}
      <div className="absolute inset-0 grid grid-cols-4 w-full h-full z-0 pointer-events-none">
        {heroPanels.map((panel, idx) => (
          <div key={panel.id} className="relative h-[120%] -top-[10%] w-full overflow-hidden border-r border-slate-800/50 hidden md:block">
            <div 
              ref={(el) => { if(el) backgroundsRef.current[idx] = el }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={panel.image}
                alt={panel.label}
                fill
                className="object-cover opacity-40 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-1000"
                priority
              />
            </div>
          </div>
        ))}
        {/* Mobile fallback (single image) */}
        <div className="absolute inset-0 block md:hidden">
            <Image
              src={heroPanels[0].image}
              alt="Mining Hero"
              fill
              className="object-cover opacity-30 mix-blend-overlay"
              priority
            />
        </div>
      </div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-primary-dark/60 z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 text-center max-w-5xl" ref={textRef}>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          The Global Standard in <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-terra to-accent-ochre">Critical Mineral</span> Supply
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Powering the world's leading manufacturers with precision-grade industrial minerals, backed by a resilient global supply chain.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/minerals"
            className="group inline-flex items-center gap-2 bg-accent-terra hover:bg-[#A85F33] text-white px-8 py-4 rounded-sm font-medium text-lg transition-transform hover:-translate-y-1 shadow-xl"
          >
            Explore Our Minerals
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-sm font-medium text-lg transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
