'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/hero-video-compressed.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-mineralia-teal font-semibold mb-4">
            Global critical mineral supply leader
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-white mb-6 leading-[1.1] md:leading-[0.95]">
            Discover Critical Minerals
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-10 font-light">
            Precision-grade industrial minerals sourced from 40+ countries,
            backed by 25+ years of supply chain excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/minerals">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-mineralia-teal text-white rounded-full text-sm md:text-base font-semibold hover:bg-mineralia-teal-hover transition-colors"
              >
                Explore Minerals
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/30 text-white rounded-full text-sm md:text-base font-medium hover:bg-white/10 transition-colors"
              >
                Request Supply
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <p className="text-white/40 text-[11px] tracking-[0.2em] uppercase">
          Scroll
        </p>
        <div className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center pt-1.5">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-0.5 h-2.5 bg-white/60 rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}
