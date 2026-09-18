"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  subAnswer?: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Can you guarantee our data stays in one country?",
    answer:
      'No blanket guarantee is offered, and "all data stays in-region" is not a claim this page makes.',
    subAnswer:
      "That requirement resolves into seven separate dimensions — storage, processing, backup, replication, recovery, telemetry and support access. Storage is usually the easy one; telemetry, support access and backup geography are usually the hard ones. See the matrix",
  },
  {
    question: "Is processing in the same region as storage?",
    answer: "Not uniformly across all workloads and background tasks.",
    subAnswer:
      "Certain analytical pipelines or auxiliary services may route across regional boundaries depending on your deployment tier and feature configuration.",
  },
  {
    question: "Where are backups stored?",
    answer:
      "Backups are retained within designated secure replication zones aligned with your chosen compliance framework.",
    subAnswer:
      "Retention periods and physical backup geographies are explicitly stated per deployment configuration rather than generalized.",
  },
  {
    question: "Do you offer sovereign deployment?",
    answer:
      "Yes, under specific enterprise architecture agreements and isolated control planes.",
    subAnswer:
      "Sovereign options establish strict boundaries around operational personnel, key custody, and external subprocessor dependencies.",
  },
  {
    question: "Can we hold our own encryption keys?",
    answer:
      "Customer-managed keys (CMK) are supported for eligible deployment regions.",
    subAnswer:
      "Revoking key access has direct operational consequences for service availability and is fully documented during the assessment phase.",
  },
  {
    question: "If we delete data, is it gone immediately?",
    answer:
      "Live data is removed upon an authorized request, but copies persist in backups until the retention window expires.",
    subAnswer:
      "The backup expiry window is stated explicitly per deployment, and replica propagation follows a governed schedule.",
  },
  {
    question: "Does configuring residency make us compliant?",
    answer:
      "No. Residency configuration is an infrastructure capability, not a legal compliance guarantee.",
    subAnswer:
      "Compliance depends on jurisdiction, legal basis, data classification, and regulatory interpretation beyond technical controls.",
  },
  {
    question: "Where does support access come from?",
    answer:
      "Support access requests are governed by strict role-based access controls and regional routing limits.",
    subAnswer:
      "Depending on your support tier, access may be restricted to personnel located within authorized jurisdictions.",
  },
  {
    question: "What happens if the configuration drifts?",
    answer:
      "Drift detection mechanisms log deviations and trigger alerts to designated record owners.",
    subAnswer:
      "Open exceptions, change history, and resolution timestamps are captured as part of residency evidence records.",
  },
  {
    question: "Why is there no map on this page?",
    answer: "Because marketing maps obscure operational reality.",
    subAnswer:
      "Jurisdictional boundaries, subprocessor paths, and recovery topologies are complex engineering realities best conveyed through precise specifications rather than graphical world maps.",
  },
];

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Location, backup, sovereign, keys and transfers
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#E5E7EB]">
          {faqItems.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="border-b border-[#E5E7EB] py-6 transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-base md:text-lg font-bold text-[#111827] group-hover:text-[#0F476A] transition-colors pr-4">
                    {item.question}
                  </span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#A07A2E]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#A07A2E]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-[14px] text-[#4B5563] space-y-3 leading-relaxed animate-fadeIn">
                    <p>{item.answer}</p>
                    {item.subAnswer && (
                      <p className="text-[13px] text-[#6B7280]">
                        {item.subAnswer.includes("See the matrix") ? (
                          <>
                            {item.subAnswer.replace("See the matrix", "")}{" "}
                            <a
                              href="#"
                              className="text-[#0F476A] font-semibold underline hover:text-black"
                            >
                              See the matrix
                            </a>
                          </>
                        ) : (
                          item.subAnswer
                        )}
                      </p>
                    )}
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
