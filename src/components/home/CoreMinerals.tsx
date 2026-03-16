"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import allMinerals from "@/data/minerals.json";
import Reveal, { RevealContainer, RevealItem } from "@/components/animations/Reveal";

const coreMinerals = allMinerals.slice(0, 8);

function TiltCard({ mineral }: { mineral: typeof coreMinerals[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { width, height, left, top } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / width;
    const y = (e.clientY - top - height / 2) / height;
    setTransform(`perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const resetTransform = () => setTransform("");

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={resetTransform}
      style={{ transform, transition: transform ? "transform 0.1s ease" : "transform 0.5s ease" }}
      className="group"
    >
      <Link
        href={`/minerals/${mineral.slug}`}
        className="block bg-white border border-slate-200 hover:border-accent-copper/40 transition-colors duration-500 overflow-hidden relative"
      >
        {/* Image */}
        <div className="h-56 relative overflow-hidden bg-industrial-steel">
          <Image
            src={`/images/minerals/${mineral.slug}.png`}
            alt={mineral.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider rounded-full">
            {mineral.industries[0]}
          </div>
          {/* Origin indicator */}
          <div className="absolute bottom-4 right-4 flex gap-1">
            {mineral.origin.map((o) => (
              <span key={o} className="text-[10px] bg-white/10 backdrop-blur-sm text-white/80 px-2 py-0.5 rounded-full">{o}</span>
            ))}
          </div>
        </div>

        <div className="p-6 relative bg-white z-10">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-xl font-bold text-primary-dark">{mineral.name}</h3>
            <span className="text-sm font-mono text-slate-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-copper group-hover:to-copper-glow transition-all duration-500">
              {mineral.formula}
            </span>
          </div>
          <p className="text-sm text-slate-text line-clamp-2 mt-2 font-sans">{mineral.description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function CoreMinerals() {
  return (
    <section className="py-24 bg-surface relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-accent-copper font-sans text-sm font-medium tracking-widest uppercase mb-4 block">16+ Mineral Products</span>
              <h2 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-primary-dark mb-4">
                Premium Industrial Minerals
              </h2>
              <p className="text-slate-text text-lg font-sans font-light">
                Sourced globally. Processed with precision. Delivered consistently.
              </p>
            </div>
            <Link
              href="/minerals"
              className="group flex items-center gap-2 text-accent-copper font-medium hover:text-copper-glow transition-colors text-sm"
            >
              View All Minerals
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <RevealContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {coreMinerals.map((mineral) => (
            <RevealItem key={mineral.slug}>
              <TiltCard mineral={mineral} />
            </RevealItem>
          ))}
        </RevealContainer>
      </div>
    </section>
  );
}
