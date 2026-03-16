"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Minerals", href: "/minerals" },
  { name: "Industries", href: "/industries" },
  { name: "Supply Chain", href: "/supply-chain" },
  { name: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b",
          isScrolled
            ? "glass-light py-3 border-slate-200/50 shadow-sm"
            : "bg-transparent py-5 border-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <Image
              src="/Mineralia LOGO.png"
              alt="Mineralia Logo"
              width={180}
              height={50}
              className={cn(
                "h-12 w-auto object-contain transition-all duration-300",
                !isScrolled && "brightness-0 invert"
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors duration-300 relative",
                      pathname === link.href
                        ? "text-accent-copper"
                        : isScrolled
                          ? "text-gray-600 hover:text-gray-900"
                          : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 copper-gradient-bg rounded-full"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border",
                isScrolled
                  ? "bg-primary-dark hover:bg-accent-copper text-white border-primary-dark hover:border-accent-copper"
                  : "bg-white text-primary-dark hover:bg-accent-copper hover:text-white border-white hover:border-accent-copper"
              )}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden z-50 focus:outline-none",
              !isScrolled && !isMobileMenuOpen ? "text-white" : "text-primary-dark"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-surface/98 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 text-center px-4 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-serif text-3xl transition-colors",
                      pathname === link.href ? "text-accent-copper" : "text-primary-dark"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="w-full max-w-xs mt-8 border-t border-slate-200 pt-8"
              >
                <Link
                  href="/contact"
                  className="block w-full bg-primary-dark text-white text-center py-4 rounded-full font-medium text-lg hover:bg-accent-copper transition-colors"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
