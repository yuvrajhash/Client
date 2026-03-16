import { CheckCircle2 } from "lucide-react";

interface ApplicationCardProps {
  title: string;
  description: string;
}

export default function ApplicationCard({ title, description }: ApplicationCardProps) {
  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-mineralia-teal/30 hover:shadow-md transition-all duration-300 h-full">
      <div className="flex items-start gap-4">
        <div className="mt-1 bg-white p-2 rounded-full shadow-sm text-mineralia-teal shrink-0">
          <CheckCircle2 size={20} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-mineralia-navy mb-2">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
