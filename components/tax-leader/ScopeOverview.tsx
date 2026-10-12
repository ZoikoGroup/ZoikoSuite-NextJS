"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface AccordionItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
}

const accordionData: AccordionItem[] = [
  {
    id: "01",
    number: "01",
    title: "Scope & Tax Responsibilities",
    subtitle: "How the responsibility works",
    description1:
      "Understand which entity, jurisdiction, reporting period, and obligation category a responsibility belongs to.",
    description2:
      "Coverage and statutory applicability need confirmation for each scope.",
  },
  {
    id: "02",
    number: "02",
    title: "Accountability & Assignment",
    subtitle: "How the responsibility works",
    description1:
      "Assign clear ownership to designated preparers, reviewers, and final sign-off authorities.",
    description2:
      "Ensure all handoffs between teams are logged and tracked without ambiguity.",
  },
  {
    id: "03",
    number: "03",
    title: "Obligations & Review Milestones",
    subtitle: "How the responsibility works",
    description1:
      "Set up timeline checkpoints and mandatory reviews before final filing or reporting stages.",
    description2:
      "Track dependencies across internal accounting and external advisory inputs.",
  },
  {
    id: "04",
    number: "04",
    title: "Exceptions & Escalation",
    subtitle: "How the responsibility works",
    description1:
      "Identify anomalies or data discrepancies quickly and route them through proper escalation channels.",
    description2:
      "Document rationale for any resolved exceptions to maintain compliance integrity.",
  },
  {
    id: "05",
    number: "05",
    title: "Evidence & Review Trail",
    subtitle: "How the responsibility works",
    description1:
      "Preserve supporting documents, calculations, and revision history in an immutable audit log.",
    description2:
      "Make context easily accessible to authorized internal reviewers and auditors.",
  },
  {
    id: "06",
    number: "06",
    title: "Leadership Oversight & Handoffs",
    subtitle: "How the responsibility works",
    description1:
      "Deliver high-level progress summaries and final sign-off reports to leadership stakeholders.",
    description2:
      "Ensure seamless transition across multi-departmental governance phases.",
  },
];

export default function ScopeOverview() {
  const [openId, setOpenId] = useState<string>("01");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section id="how-it-works" className="bg-[#F6F5F1] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Header and description */}
        <div className="lg:col-span-5 lg:sticky lg:top-20">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            SCOPE, OWNERSHIP & REVIEW
          </p>
          <h2 className="text-[#1E293B] text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.15]">
            Keep the source
            <br />
            beside the step.
          </h2>
          <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-6 font-normal">
            Explore how a responsibility might be scoped, assigned, reviewed,
            escalated, documented, and summarized. These are conceptual examples
            with unverified sample states.
          </p>
          <p className="text-[#64748B] text-xs md:text-sm leading-relaxed font-normal">
            Dates, obligations, and applicability require authoritative sources.
            Unknown information stays visible.
          </p>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-7 space-y-4">
          {accordionData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-6">
                    <span className="text-[#A2783A] text-sm font-bold">
                      {item.number}
                    </span>
                    <span className="text-[#1E293B] text-base md:text-lg font-bold">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-[#64748B]">
                    {isOpen ? (
                      <X className="w-5 h-5 text-[#64748B]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#64748B]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#F1F5F9]">
                    <h4 className="text-[#1E293B] text-sm font-bold mb-3">
                      {item.subtitle}
                    </h4>
                    <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                      {item.description1}
                    </p>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      {item.description2}
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
