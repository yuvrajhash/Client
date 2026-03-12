"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
          isScrolled
            ? "bg-surface/95 backdrop-blur-md shadow-sm py-4 border-slate-200"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-primary-dark">
              Mineralia<span className="text-accent-terra">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-accent-terra",
                      pathname === link.href
                        ? "text-accent-terra"
                        : "text-text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="bg-accent-terra text-white px-6 py-2.5 rounded-sm font-medium text-sm transition-transform hover:scale-105 shadow-sm"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-primary-dark z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-surface/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <nav className="flex flex-col items-center gap-8 text-center px-4 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-serif text-3xl transition-colors",
                pathname === link.href ? "text-accent-terra" : "text-primary-dark"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full max-w-xs mt-8 border-t border-slate-200 pt-8">
            <Link
              href="/contact"
              className="block w-full bg-accent-terra text-white text-center py-4 rounded-sm font-medium text-lg"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
