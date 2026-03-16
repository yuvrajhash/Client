import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Briefcase, Clock, CheckCircle2 } from "lucide-react";
import { jobs } from "@/data/careers";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        <Link href="/careers" className="inline-flex items-center text-slate-500 hover:text-mineralia-navy mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Careers
        </Link>

        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-8 md:p-12 mb-8">
          <div className="border-b border-slate-100 pb-8 mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-mineralia-navy mb-4">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-slate-600">
              <span className="flex items-center gap-2">
                <Briefcase size={18} className="text-mineralia-teal" /> {job.department}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-mineralia-teal" /> {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-mineralia-teal" /> {job.type}
              </span>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="font-serif text-2xl font-bold text-mineralia-navy mb-4">Role Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {job.description}
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-mineralia-navy mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={20} className="text-mineralia-teal shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-mineralia-navy mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-mineralia-navy mt-2.5 shrink-0"></div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <Link 
              href={`/careers/apply?role=${job.slug}`}
              className="inline-block w-full md:w-auto text-center bg-mineralia-teal hover:bg-mineralia-teal-hover text-white px-8 py-4 rounded font-bold text-lg transition-colors shadow-lg"
            >
              Apply for this Position
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
