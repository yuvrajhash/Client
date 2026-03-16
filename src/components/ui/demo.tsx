"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
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
        { label: "Careers", href: "/careers" },
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
    {
      title: "Quick Links",
      links: [
        { label: "Industries", href: "/industries" },
        { label: "Supply Chain", href: "/supply-chain" },
        { label: "Insights", href: "/insights" },
        { label: "Contact", href: "/contact" },
      ]
    }
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "HEAD OFFICE : KHASRA NO - 1204, DELHI MEERUT ROAD, MORTA, NEAR - METRO PILLAR NO - 688, DISTRICT GHAZIABAD, UTTAR PRADESH - 201003",
      href: "",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+41 22 555 0192",
      href: "tel:+41225550192",
    },
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "contact@mineralia.com",
      href: "mailto:contact@mineralia.com",
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
    <footer className="bg-gray-50 relative h-[60rem] md:h-fit rounded-[3rem] overflow-hidden m-4 md:m-8 border border-gray-200">
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 lg:gap-8 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block mb-2">
              <Image
                src="/Mineralia LOGO.png"
                alt="Mineralia Logo"
                width={200}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-600">
              The global standard in critical mineral supply. Partnering with 
              manufacturing leaders across 40+ countries to deliver premium 
              industrial minerals.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-gray-900 text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      href={link.href}
                      className="hover:text-[#3ca2fa] text-gray-600 transition-colors"
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
            <h4 className="text-gray-900 text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-gray-600">
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
              className="mt-8 inline-block w-full text-center border border-gray-200 hover:border-[#3ca2fa] hover:bg-[#3ca2fa]/10 text-gray-900 py-3 rounded-full text-sm font-medium transition-all duration-300"
            >
              Request a Consultation
            </Link>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 pb-8 relative z-50 bg-gray-50">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-500">
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

          <div className="flex items-center gap-6 text-gray-500">
            <Link href="#" className="hover:text-[#3ca2fa] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#3ca2fa] transition-colors">Terms of Service</Link>
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-gray-500">
            &copy; {new Date().getFullYear()} MINERALIA IMPEX PVT. LTD. All rights reserved.
          </p>
        </div>

        <hr className="border-t border-gray-200" />
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[20rem] -mt-10 mb-0 justify-center items-center overflow-hidden">
        <TextHoverEffect text="MINERALIA" className="z-10" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
