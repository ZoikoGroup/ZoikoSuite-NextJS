"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  number: string;
  title: string;
  subtitle: string;
  details?: string;
}

const topicsAccordionData: AccordionItem[] = [
  {
    number: "01",
    title: "Company and organizational information",
    subtitle: "High-level questions about company identity and organization.",
    details:
      "Includes corporate registration details, structure disclosures, parent entity relations, and general organizational history.",
  },
  {
    number: "02",
    title: "Governance and corporate accountability",
    subtitle:
      "Questions about organizational governance, oversight, and accountability.",
    details:
      "Covers board oversight framework, committee charters, executive responsibility boundaries, and ethics governance policies.",
  },
  {
    number: "03",
    title: "Official notices and documentation",
    subtitle: "General questions about where to direct official documentation.",
    details:
      "Provides direction for service of legal notices, regulatory filings routing, official correspondence, and formal notices.",
  },
  {
    number: "04",
    title: "Corporate events and participation",
    subtitle:
      "General organizational questions about events and institutional participation.",
    details:
      "Covers company sponsorship guidelines, corporate presence at industry summits, and institutional event participation.",
  },
  {
    number: "05",
    title: "General business correspondence",
    subtitle:
      "Organizational questions outside sales, media, partnerships, and support.",
    details:
      "Addresses miscellaneous corporate communications, non-commercial inquiries, and administrative contact routing.",
  },
  {
    number: "06",
    title: "Regional and special-purpose routing",
    subtitle:
      "Help identifying a global, European, or specialist contact destination.",
    details:
      "Assists in identifying jurisdictional contact points across global, UK/EU, and specific regional operational hubs.",
  },
];

export default function CorporateTopicsAccordion() {
  const [openNumber, setOpenNumber] = useState<string | null>(null);

  const toggleAccordion = (number: string) => {
    setOpenNumber(openNumber === number ? null : number);
  };

  return (
    <section className="bg-[#F6F5F1] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C9A34C]" />
              <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
                CORPORATE CONVERSATION TOPICS
              </p>
            </div>
            <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight leading-[1.12]">
              A little clarity. <br />A more relevant enquiry.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-[#64748B] text-xs md:text-sm leading-relaxed">
              Explore these prompts to decide whether a general corporate
              enquiry is the right place for your question.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {topicsAccordionData.map((item) => {
            const isOpen = openNumber === item.number;
            return (
              <div
                key={item.number}
                className="rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden transition-all duration-200 hover:border-[#CBD5E1]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.number)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start md:items-center space-x-4 md:space-x-6">
                    <span className="text-[#386665] text-xs font-bold tracking-wider pt-0.5 md:pt-0 flex-shrink-0">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-[#1E293B] text-base md:text-lg font-bold leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[#64748B] text-xs md:text-sm mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="text-[#386665] flex-shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#386665]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#386665]" />
                    )}
                  </div>
                </button>

                {isOpen && item.details && (
                  <div className="px-6 pb-6 pt-2 md:px-8 md:pb-6 border-t border-[#E2E8F0]/60">
                    <p className="text-[#475569] text-xs md:text-sm leading-relaxed pl-8 md:pl-11">
                      {item.details}
                    </p>
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
