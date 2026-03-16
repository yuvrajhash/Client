import { Mineral } from "@/data/minerals";

interface SpecTableProps {
  parameters: Mineral["qualityParameters"];
}

export default function SpecTable({ parameters }: SpecTableProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="py-4 px-6 font-semibold text-mineralia-navy w-1/2">Parameter</th>
            <th className="py-4 px-6 font-semibold text-mineralia-navy w-1/2">Typical Range / Content</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {parameters.map((param, idx) => (
            <tr key={idx} className="hover:bg-slate-50 transition-colors">
              <td className="py-4 px-6 font-medium text-slate-700">{param.parameter}</td>
              <td className="py-4 px-6 text-slate-600 font-mono">{param.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-slate-50 px-6 py-3 border-t border-slate-200">
        <p className="text-xs text-slate-500 italic">
          * Final chemistry, sizing, and commercial grade are supplied subject to confirmed assay, origin, and buyer application.
        </p>
      </div>
    </div>
  );
}
