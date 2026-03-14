import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Subtle copper glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-accent-copper/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                Mineralia<span className="text-accent-copper">.</span>
              </span>
            </Link>
            <p className="text-slate-text text-sm leading-relaxed mb-6">
              The global standard in critical mineral supply. Partnering with 
              manufacturing leaders across 40+ countries to deliver premium 
              industrial minerals.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-copper hover:border-accent-copper transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-copper hover:border-accent-copper transition-all duration-300" aria-label="Twitter">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-text hover:text-accent-copper transition-colors text-sm">About Us</Link></li>
              <li><Link href="/about/quality-assurance" className="text-slate-text hover:text-accent-copper transition-colors text-sm">Quality Assurance</Link></li>
              <li><Link href="/supply-chain" className="text-slate-text hover:text-accent-copper transition-colors text-sm">Global Supply Chain</Link></li>
              <li><Link href="/insights" className="text-slate-text hover:text-accent-copper transition-colors text-sm">Market Insights</Link></li>
              <li><Link href="/minerals-for-japanese-industry" className="text-slate-text hover:text-accent-copper transition-colors text-sm">Japanese Market (日本市場向け)</Link></li>
            </ul>
          </div>

          {/* Column 3: Minerals */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Core Minerals</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/minerals/bauxite" className="text-slate-text hover:text-accent-copper transition-colors">Bauxite</Link></li>
              <li><Link href="/minerals/chrome-ore" className="text-slate-text hover:text-accent-copper transition-colors">Chrome Ore</Link></li>
              <li><Link href="/minerals/kaolin" className="text-slate-text hover:text-accent-copper transition-colors">Kaolin</Link></li>
              <li><Link href="/minerals/manganese-ore" className="text-slate-text hover:text-accent-copper transition-colors">Manganese Ore</Link></li>
              <li><Link href="/minerals" className="text-accent-copper hover:text-copper-glow transition-colors mt-2 inline-block">View All 16 Minerals →</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-slate-text text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-copper shrink-0 mt-0.5" />
                <span>100 Global Trade Center,<br />Geneva, Switzerland 1204</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent-copper shrink-0" />
                <span>+41 22 555 0192</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent-copper shrink-0" />
                <span>supply@mineralia.com</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block w-full text-center border border-white/10 hover:border-accent-copper hover:bg-accent-copper/10 text-white py-3 rounded-full text-sm font-medium transition-all duration-300"
            >
              Request a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-text">
          <p>© {new Date().getFullYear()} Mineralia Hub. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-accent-copper transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent-copper transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
