import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Mineral } from "@/data/minerals";

interface MineralCardProps {
  mineral: Mineral;
}

export default function MineralCard({ mineral }: MineralCardProps) {
  return (
    <Link
      href={`/minerals/${mineral.slug}`}
      className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
        <Image
          src={mineral.image}
          alt={mineral.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif text-2xl font-bold text-white mb-1 drop-shadow-md">
            {mineral.name}
          </h3>
          <p className="text-sm font-mono text-white/90 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded inline-block border border-white/30">
            {mineral.formula}
          </p>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed text-sm">
          {mineral.shortDescription}
        </p>

        <div className="space-y-4 mt-auto">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
              <MapPin size={12} /> Origin
            </h4>
            <div className="text-sm font-medium text-slate-700 line-clamp-1">
              {mineral.sourceDetails.country}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Industries</h4>
            <div className="flex flex-wrap gap-2">
              {mineral.industries.slice(0, 3).map((industry) => (
                <span
                  key={industry}
                  className="text-xs font-medium bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-100"
                >
                  {industry}
                </span>
              ))}
              {mineral.industries.length > 3 && (
                <span className="text-xs font-medium bg-slate-50 text-slate-400 px-2 py-1 rounded border border-slate-100">
                  +{mineral.industries.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-50 border-t border-slate-100">
        <div className="flex items-center justify-between text-mineralia-teal font-medium group-hover:text-mineralia-teal-hover transition-colors text-sm">
          View Details
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
