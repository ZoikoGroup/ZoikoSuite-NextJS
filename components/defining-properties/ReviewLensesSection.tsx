"use client"
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface LensItem {
  propertyNumber: string;
  title: string;
  description: string;
  badge: string;
  details?: string;
}

export default function ReviewLensesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const lenses: LensItem[] = [
    {
      propertyNumber: "PROPERTY 01",
      title: "Accountable ownership",
      description: "Who initiates, reviews, approves and owns exceptions.",
      badge: "CONCEPT FOR REVIEW",
      details:
        "Defines clear operational boundaries so that every action has a designated owner from start to finish without ambiguity.",
    },
    {
      propertyNumber: "PROPERTY 02",
      title: "Policy-bound decisions",
      description: "How policy may constrain requests, approvals and outcomes.",
      badge: "CONCEPT FOR REVIEW",
      details:
        "Ensures that all decisions adhere strictly to predefined organizational policies and governance rules.",
    },
    {
      propertyNumber: "PROPERTY 03",
      title: "Controlled handoffs",
      description: "Transitions between teams or systems, made explicit.",
      badge: "CONCEPT FOR REVIEW",
      details:
        "Tracks every cross-team or cross-system transfer with explicit acknowledgment and traceability.",
    },
    {
      propertyNumber: "PROPERTY 04",
      title: "Evidence and traceability",
      description: "How records, decisions and changes can be evaluated.",
      badge: "CONCEPT FOR REVIEW",
      details:
        "Maintains immutable and verifiable logs for all evaluation steps and recorded modifications.",
    },
    {
      propertyNumber: "PROPERTY 05",
      title: "Exception transparency",
      description:
        "How blocked, overdue or mismatched cases are surfaced and resolved.",
      badge: "CONCEPT FOR REVIEW",
      details:
        "Provides visibility into bottlenecks and deviations, establishing ownership for timely resolution.",
    },
    {
      propertyNumber: "PROPERTY 06",
      title: "Management oversight",
      description:
        "Executive visibility, kept distinct from operational ownership.",
      badge: "CONCEPT FOR REVIEW",
      details:
        "Empowers leadership with dashboards and review cadence without interfering with daily operational duties.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F6F5F1] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-12 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            Review each lens in detail.
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg max-w-2xl leading-relaxed">
            Open a lens to see what it means, why it matters, who owns it, what
            to ask and what evidence to request. Every lens follows the same
            parts.
          </p>
        </div>

        {/* Lenses Accordion Stack */}
        <div className="w-full flex flex-col gap-4">
          {lenses.map((lens, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm transition-all"
              >
                {/* Accordion Header / Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-xs font-bold text-[#B49347] tracking-wider">
                      {lens.propertyNumber}
                    </span>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1F2421] tracking-tight group-hover:text-[#B49347] transition-colors">
                        {lens.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#F1EDF9] border border-[#DDD0EF] text-[#57408A] text-[10px] sm:text-xs font-semibold tracking-wide">
                        {lens.badge}
                      </span>
                    </div>
                    <p className="text-[#4B5563] text-sm sm:text-base mt-1">
                      {lens.description}
                    </p>
                  </div>

                  {/* Chevron Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#F6F5F1] flex items-center justify-center flex-shrink-0 ml-4 transition-transform">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#1F2421]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#1F2421]" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-6 pb-8 sm:px-8 pt-0 border-t border-black/5 mt-2">
                    <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed pt-4">
                      {lens.details}
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
