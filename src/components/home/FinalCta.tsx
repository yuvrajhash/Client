'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from '@/components/animations/Reveal';

export default function FinalCta() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=2940&auto=format&fit=crop)' }}
      />
      <div className="absolute inset-0 bg-mineralia-navy/90" /> {/* Dark overlay */}

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to secure your supply chain?
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-sans font-light mb-10 max-w-2xl mx-auto">
            Partner with us to guarantee the quality and consistency of your critical industrial minerals. Our experts are ready to discuss your specific requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-mineralia-teal text-white rounded-full text-sm md:text-base font-bold uppercase tracking-wider hover:bg-mineralia-teal-hover transition-colors shadow-lg shadow-mineralia-teal/30"
              >
                Contact Sales
              </motion.button>
            </Link>
            <Link href="/minerals">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full text-sm md:text-base font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                View Product Catalog
              </motion.button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
