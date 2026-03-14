"use client";

import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import TextSplit from "@/components/animations/TextSplit";
import Magnetic from "@/components/animations/Magnetic";

const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false });
const ParticleField = dynamic(() => import("@/components/3d/ParticleField"), { ssr: false });
const MineralFragments = dynamic(() => import("@/components/3d/MineralFragments"), { ssr: false });

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-primary-dark flex items-center justify-center"
    >
      {/* 3D Background Canvas */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]}>
          <ParticleField count={300} />
          <MineralFragments />
        </Canvas>
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/30 via-primary-dark/50 to-primary-dark z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/40 via-transparent to-primary-dark/40 z-10 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="container relative z-20 mx-auto px-4 text-center max-w-5xl"
        style={{ y: yText, opacity }}
      >
        {/* Micro label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-sans backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent-copper animate-pulse" />
            Global Critical Mineral Supply Leader
          </span>
        </motion.div>

        {/* Hero Title — word by word reveal */}
        <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-white mb-8 leading-[1.1] tracking-tight">
          <TextSplit text="Discover Critical Minerals" delay={0.5} />
          <br className="hidden md:block" />
          <span className="copper-gradient-text">
            <TextSplit text="Powering Global Industry" delay={1.0} />
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-sans font-light leading-relaxed"
        >
          Precision-grade industrial minerals sourced from 40+ countries, backed by 25+ years of supply chain excellence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic>
            <Link
              href="/minerals"
              className="group inline-flex items-center gap-3 copper-gradient-bg text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-[0_0_40px_rgba(184,115,51,0.2)] hover:shadow-[0_0_60px_rgba(184,115,51,0.4)]"
            >
              Explore Minerals
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Request Supply
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 font-sans tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
