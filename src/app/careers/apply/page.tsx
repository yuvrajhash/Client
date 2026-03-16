"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Upload, Linkedin, CheckCircle } from "lucide-react";

function ApplicationForm() {
  const searchParams = useSearchParams();
  const roleSlug = searchParams.get("role");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSubmittingSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmittingSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-12 text-center">
        <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h2 className="font-serif text-3xl font-bold text-mineralia-navy mb-4">Application Received</h2>
        <p className="text-slate-600 mb-8">
          Thank you for your interest in joining Mineralia. Our team will review your application and get back to you shortly.
        </p>
        <Link href="/careers" className="inline-block bg-mineralia-navy text-white px-8 py-3 rounded font-medium hover:bg-slate-800 transition-colors">
          Back to Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-8 md:p-12">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-mineralia-navy mb-2">
        Apply Now
      </h1>
      <p className="text-slate-500 mb-8">
        Please fill out the form below to apply{roleSlug ? " for this position" : ""}.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
            <input required type="text" className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-2 focus:ring-mineralia-teal focus:border-transparent outline-none transition-all" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
            <input required type="email" className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-2 focus:ring-mineralia-teal focus:border-transparent outline-none transition-all" placeholder="jane@example.com" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
            <input required type="tel" className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-2 focus:ring-mineralia-teal focus:border-transparent outline-none transition-all" placeholder="+1 (555) 000-0000" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">LinkedIn Profile</label>
            <div className="relative">
              <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="url" className="w-full pl-10 pr-4 py-3 rounded border border-slate-300 focus:ring-2 focus:ring-mineralia-teal focus:border-transparent outline-none transition-all" placeholder="https://linkedin.com/in/..." />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Resume / CV *</label>
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
            <Upload className="mx-auto text-slate-400 mb-3" size={32} />
            <p className="text-sm text-slate-600 font-medium">Click to upload or drag and drop</p>
            <p className="text-xs text-slate-400 mt-1">PDF, DOCX up to 10MB</p>
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Cover Letter</label>
          <textarea rows={5} className="w-full px-4 py-3 rounded border border-slate-300 focus:ring-2 focus:ring-mineralia-teal focus:border-transparent outline-none transition-all" placeholder="Tell us why you're a great fit..."></textarea>
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-mineralia-teal hover:bg-mineralia-teal-hover text-white py-4 rounded font-bold text-lg transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <Link href="/careers" className="inline-flex items-center text-slate-500 hover:text-mineralia-navy mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Careers
        </Link>
        
        <Suspense fallback={<div>Loading form...</div>}>
          <ApplicationForm />
        </Suspense>
      </div>
    </div>
  );
}
