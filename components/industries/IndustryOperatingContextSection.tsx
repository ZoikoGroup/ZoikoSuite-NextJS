"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface SectorItem {
  title: string;
  headline: string;
  operatingContext: string;
  domains: string;
  boundary: string;
  trustRoute: string;
}

const sectorsData: SectorItem[] = [
  {
    title: "Healthcare",
    headline:
      "Govern business operations around healthcare delivery — without blurring clinical-system boundaries.",
    operatingContext:
      "High data sensitivity; complex workforce models; vendor/procurement obligations; entity/facility structures; finance; legal/compliance; evidence and audit needs.",
    domains:
      "Finance & Tax; Workforce & Payroll; Legal & Commercial; Compliance & Obligations; Evidence & Audit; Intelligence & Reporting — subject to actual product status.",
    boundary:
      "Not described as an EHR, clinical decision system, medical device, claims adjudication platform, or healthcare compliance certification.",
    trustRoute:
      "Security, Privacy Architecture, Data Residency, Accessibility, Evidence Architecture, Responsible AI, relevant compliance status.",
  },
  {
    title: "Telecommunication & MVNOs",
    headline:
      "Govern business operations around telecom/BSS/OSS ecosystems with compliance and workforce alignment.",
    operatingContext:
      "Complex partner ecosystems, high-volume workforce models, regulatory filing requirements, and network infrastructure contracting.",
    domains:
      "Finance & Tax; Workforce & Payroll; Legal & Commercial; Compliance & Obligations; Evidence & Audit; Intelligence & Reporting.",
    boundary:
      "Not described as a BSS/OSS core, network switching platform, or carrier billing engine.",
    trustRoute:
      "Security, Privacy Architecture, Data Residency, Accessibility, Evidence Architecture, Responsible AI, relevant compliance status.",
  },
  {
    title: "Manufacturing",
    headline:
      "Connect governed corporate operations across enterprise supply chain estates.",
    operatingContext:
      "Multi-facility structures, vendor/procurement obligations, operational data sensitivity, and workforce safety compliance.",
    domains:
      "Finance & Tax; Workforce & Payroll; Legal & Commercial; Compliance & Obligations; Evidence & Audit; Intelligence & Reporting.",
    boundary:
      "Not described as an ERP, MES, or SCM shop-floor execution system.",
    trustRoute:
      "Security, Privacy Architecture, Data Residency, Accessibility, Evidence Architecture, Responsible AI, relevant compliance status.",
  },
  {
    title: "Energy & Utilities",
    headline:
      "Govern business operations around asset and utility operating systems.",
    operatingContext:
      "Asset-heavy compliance, public accountability, field workforce complexity, and strict regulatory oversight.",
    domains:
      "Finance & Tax; Workforce & Payroll; Legal & Commercial; Compliance & Obligations; Evidence & Audit; Intelligence & Reporting.",
    boundary:
      "Not described as a SCADA system, grid management software, or utility SCADA core.",
    trustRoute:
      "Security, Privacy Architecture, Data Residency, Accessibility, Evidence Architecture, Responsible AI, relevant compliance status.",
  },
  {
    title: "Retail & Commerce",
    headline:
      "Coordinate multi-entity finance and workforce models across commerce platforms.",
    operatingContext:
      "Multi-entity tax structures, high-turnover workforce management, POS integration frameworks, and commercial contracts.",
    domains:
      "Finance & Tax; Workforce & Payroll; Legal & Commercial; Compliance & Obligations; Evidence & Audit; Intelligence & Reporting.",
    boundary:
      "Not described as a point-of-sale terminal, e-commerce storefront platform, or merchant gateway.",
    trustRoute:
      "Security, Privacy Architecture, Data Residency, Accessibility, Evidence Architecture, Responsible AI, relevant compliance status.",
  },
  {
    title: "Government & Public Sector",
    headline:
      "Support governed finance, procurement, and authority with public-accountability context.",
    operatingContext:
      "Strict regulatory frameworks, public record mandates, specialized procurement rules, and civil service workforce structures.",
    domains:
      "Finance & Tax; Workforce & Payroll; Legal & Commercial; Compliance & Obligations; Evidence & Audit; Intelligence & Reporting.",
    boundary:
      "Not described as a citizen registry, legislative voting system, or public administration line-of-business portal.",
    trustRoute:
      "Security, Privacy Architecture, Data Residency, Accessibility, Evidence Architecture, Responsible AI, relevant compliance status.",
  },
];

export default function IndustryOperatingContextSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="w-4 h-[1px]"
              style={{ backgroundColor: "#C59B3F" }}
            ></span>
            <span
              className="text-xs font-semibold tracking-widest uppercase font-mono"
              style={{ color: "#C59B3F" }}
            >
              INDUSTRY OPERATING CONTEXT
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15] mb-4">
            Operating context, relevant domains, and explicit boundaries — by
            sector.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base max-w-xl leading-relaxed font-mono">
            Each destination names what ZoikoSuite governs and what specialist
            system it does not claim to replace.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="w-full flex flex-col gap-4">
          {sectorsData.map((sector, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full bg-white border border-[#D9D3C7] rounded-2xl overflow-hidden transition-all"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 sm:px-8 py-6 cursor-pointer hover:bg-[#FBFAF7] flex items-center justify-between text-left focus:outline-none transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#08222F]">
                    {sector.title}
                  </span>
                  <div className="w-7 h-7 rounded-full border border-[#D9D3C7] flex items-center justify-center text-gray-600 bg-white">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Accordion Content Box */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 flex flex-col gap-6 border-t border-[#D9D3C7]/60 bg-[#FBFAF7]">
                    {/* Section Headline */}
                    <div className="flex flex-col pt-4">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#C59B3F] uppercase mb-1">
                        SECTION HEADLINE
                      </span>
                      <p className="text-sm sm:text-base font-bold text-[#08222F]">
                        {sector.headline}
                      </p>
                    </div>

                    {/* Operating Context */}
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#C59B3F] uppercase mb-1">
                        OPERATING CONTEXT
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700 font-mono leading-relaxed">
                        {sector.operatingContext}
                      </p>
                    </div>

                    {/* Relevant ZoikoSuite Domains */}
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#C59B3F] uppercase mb-1">
                        RELEVANT ZOIKOSUITE DOMAINS
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700 font-mono leading-relaxed">
                        {sector.domains}
                      </p>
                    </div>

                    {/* Explicit Boundary */}
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#C59B3F] uppercase mb-1">
                        EXPLICIT BOUNDARY
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700 font-mono leading-relaxed">
                        {sector.boundary}
                      </p>
                    </div>

                    {/* Trust Route */}
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#C59B3F] uppercase mb-1">
                        TRUST ROUTE
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700 font-mono leading-relaxed">
                        {sector.trustRoute}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
