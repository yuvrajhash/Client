"use client";

import { useState } from "react";
import { Download, MapPin, Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import allMinerals from "@/data/minerals.json";
import CTASection from "@/components/ui/CTASection";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    if (!formData.get("name")) newErrors.name = "Name is required.";
    if (!formData.get("email")?.toString().includes("@")) newErrors.email = "Valid email is required.";
    if (!formData.get("message")) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (validateForm(formData)) {
      setFormStatus("submitting");
      setTimeout(() => setFormStatus("success"), 1500);
    }
  };

  return (
    <div className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="bg-primary-dark text-white pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Contact Global Sales
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Our technical engineering team is standing by to evaluate your mineral requirements and design a robust supply chain solution.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 shadow-md rounded-sm p-8 md:p-12">
                <h2 className="font-serif text-3xl font-bold text-primary-dark mb-2">
                  Request a Consultation
                </h2>
                <p className="text-text-secondary mb-8">
                  Please fill out the form below. For technical specifications, precision is critical.
                </p>

                {formStatus === "success" ? (
                  <div className="text-center py-16 bg-slate-50 border border-slate-100 rounded-sm">
                    <CheckCircle2 size={64} className="text-emerald-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">Request Received</h3>
                    <p className="text-slate-600">Our technical sales engineers will review your requirements and respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                        <input id="name" name="name" type="text" className={`w-full border rounded-sm p-3 focus:outline-none focus:border-accent-terra ${errors.name ? 'border-red-500' : 'border-slate-300'}`} placeholder="Jane Doe" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name</label>
                        <input id="company" name="company" type="text" className="w-full border border-slate-300 rounded-sm p-3 focus:outline-none focus:border-accent-terra" placeholder="Acme Industries" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">Work Email *</label>
                        <input id="email" name="email" type="email" className={`w-full border rounded-sm p-3 focus:outline-none focus:border-accent-terra ${errors.email ? 'border-red-500' : 'border-slate-300'}`} placeholder="jane@acme.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                        <input id="phone" name="phone" type="tel" className="w-full border border-slate-300 rounded-sm p-3 focus:outline-none focus:border-accent-terra" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="country" className="text-sm font-medium text-slate-700">Country</label>
                        <select id="country" name="country" className="w-full border border-slate-300 rounded-sm p-3 focus:outline-none focus:border-accent-terra bg-white">
                          <option value="US">United States</option>
                          <option value="JP">Japan</option>
                          <option value="DE">Germany</option>
                          <option value="KR">South Korea</option>
                          <option value="CH">Switzerland</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="mineral" className="text-sm font-medium text-slate-700">Primary Mineral Interest</label>
                        <select id="mineral" name="mineral" className="w-full border border-slate-300 rounded-sm p-3 focus:outline-none focus:border-accent-terra bg-white">
                          <option value="">Select a mineral...</option>
                          {allMinerals.map(m => (
                            <option key={m.slug} value={m.slug}>{m.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="inquiryType" className="text-sm font-medium text-slate-700">Inquiry Type</label>
                      <select id="inquiryType" name="inquiryType" className="w-full border border-slate-300 rounded-sm p-3 focus:outline-none focus:border-accent-terra bg-white">
                        <option value="trading">Spot Trading / Supply Order</option>
                        <option value="technical">Technical Consultancy & Specs</option>
                        <option value="partnership">Long-term Supply Partnership</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">Message / Technical Requirements *</label>
                      <textarea id="message" name="message" rows={5} className={`w-full border rounded-sm p-3 focus:outline-none focus:border-accent-terra resize-y ${errors.message ? 'border-red-500' : 'border-slate-300'}`} placeholder="Please provide details regarding expected volumes, required purity grades, and delivery schedules..."></textarea>
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="bg-accent-terra hover:bg-[#A85F33] text-white px-8 py-4 rounded-sm font-medium text-lg transition-colors w-full md:w-auto min-w-[250px] shadow-md"
                    >
                      {formStatus === "submitting" ? "Submitting Request..." : "Submit Technical Inquiry"}
                    </button>
                    
                    <p className="text-xs text-slate-500 mt-4">
                      By submitting this form, you agree to our Privacy Policy regarding the handling of corporate information.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Side Panel Info */}
            <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-slate-200 pt-12 lg:pt-0 lg:pl-8 space-y-12">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary-dark mb-6">
                  Global Headquarters
                </h3>
                <div className="bg-slate-100 h-48 w-full rounded-sm mb-6 flex items-center justify-center border border-slate-200 relative overflow-hidden">
                  {/* Decorative map placeholder */}
                   <div className="absolute inset-0 bg-[url('/images/minerals/dolomite.png')] bg-cover opacity-50 grayscale mix-blend-multiply"></div>
                   <div className="relative z-10 w-12 h-12 bg-accent-terra rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                      <MapPin size={24} />
                   </div>
                </div>
                
                <ul className="space-y-4 text-text-secondary">
                  <li className="flex items-start gap-4">
                    <MapPin size={20} className="text-accent-terra shrink-0 mt-1" />
                    <span className="leading-relaxed">
                      HEAD OFFICE : KHASRA NO - 1204, <br />
                      DELHI MEERUT ROAD, MORTA, <br />
                      NEAR - METRO PILLAR NO - 688, <br />
                      DISTRICT GHAZIABAD, UTTAR PRADESH - 201003
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone size={20} className="text-accent-terra shrink-0" />
                    <span>+41 22 555 0192</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail size={20} className="text-accent-terra shrink-0" />
                    <a href="mailto:supply@mineralia.com" className="hover:text-accent-terra transition-colors w-full truncate">supply@mineralia.com</a>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock size={20} className="text-accent-terra shrink-0 mt-1" />
                    <span className="leading-relaxed">
                      Mon-Fri: 08:00 - 18:00 (CET) <br />
                      Sat-Sun: Closed
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-dark text-white p-6 rounded-sm border border-slate-800 shadow-lg">
                <h3 className="font-serif text-xl font-bold mb-4">Corporate Resources</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Download our 2024 corporate profile, including our complete 16-mineral technical catalog and global ISO certifications.
                </p>
                <button className="flex items-center justify-center gap-2 w-full border border-white/20 hover:bg-white/10 py-3 rounded-sm text-sm font-medium transition-colors">
                  <Download size={18} />
                  Download Company Profile (PDF)
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
