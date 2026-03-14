"use client";
import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
} from "lucide-react";
import {FooterBackgroundGradient} from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";

function HoverFooter() {
  // Footer link data
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Quality Assurance", href: "/about/quality-assurance" },
        { label: "Global Supply Chain", href: "/supply-chain" },
        { label: "Market Insights", href: "/insights" },
        { label: "Japanese Market (日本市場向け)", href: "/minerals-for-japanese-industry" },
      ],
    },
    {
      title: "Core Minerals",
      links: [
        { label: "Bauxite", href: "/minerals/bauxite" },
        { label: "Chrome Ore", href: "/minerals/chrome-ore" },
        { label: "Kaolin", href: "/minerals/kaolin" },
        { label: "Manganese Ore", href: "/minerals/manganese-ore" },
        { label: "View All 16 Minerals →", href: "/minerals", pulse: true },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "100 Global Trade Center, Geneva, Switzerland 1204",
      href: "",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+41 22 555 0192",
      href: "tel:+41225550192",
    },
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "supply@mineralia.com",
      href: "mailto:supply@mineralia.com",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-[#0B0F19] relative h-[60rem] md:h-fit rounded-[3rem] overflow-hidden m-4 md:m-8">
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block mb-2">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                Mineralia<span className="text-[#3ca2fa]">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              The global standard in critical mineral supply. Partnering with 
              manufacturing leaders across 40+ countries to deliver premium 
              industrial minerals.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      href={link.href}
                      className="hover:text-[#3ca2fa] text-slate-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-slate-300">
                  <div className="mt-1 shrink-0">{item.icon}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-block w-full text-center border border-white/10 hover:border-[#3ca2fa] hover:bg-[#3ca2fa]/10 text-white py-3 rounded-full text-sm font-medium transition-all duration-300"
            >
              Request a Consultation
            </Link>
          </div>
        </div>

        <hr className="border-t border-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#3ca2fa] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <Link href="#" className="hover:text-[#3ca2fa] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#3ca2fa] transition-colors">Terms of Service</Link>
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-slate-400">
            &copy; {new Date().getFullYear()} Mineralia Hub. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Mineralia" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
