"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What industries does ZoikoSuite support?",
    answer:
      "Financial Service, Banking, Insurance, Healthcare, Telecommunication & MVNOs, Manufacturing, Energy & Utilities, Retail & Commerce, and Government & Public Sector — workflow, jurisdiction, deployment, and product availability can vary; see each child page for status.",
  },
  {
    question: "Is ZoikoSuite an industry-specific ERP or core system?",
    answer:
      "ZoikoSuite provides a unified governance, compliance, and evidence core layer designed to work alongside or overlay your existing specialist systems rather than forcing a monolithic replacement.",
  },
  {
    question: "Can ZoikoSuite support regulated industries?",
    answer:
      "Yes, our architecture is specifically built to handle strict regulatory requirements, jurisdiction-specific constraints, and verifiable audit trails across highly regulated sectors.",
  },
  {
    question:
      "Does ZoikoSuite replace core banking, EHR, BSS/OSS, MES, SCADA, or POS systems?",
    answer:
      "No, ZoikoSuite is designed for coexistence and overlay governance. It integrates with your specialist systems rather than replacing core operational engines by default.",
  },
  {
    question: "How does ZoikoSuite handle multiple entities and jurisdictions?",
    answer:
      "We support structure-specific entity contexts and effective-dated, source-owned jurisdiction mappings to ensure accurate multi-region and multi-subsidiary compliance.",
  },
  {
    question: "What proof can our security or audit team review?",
    answer:
      "Teams can review architecture briefs, data flow models, control objectives, deployment-dependent constraints, and verified customer proof documentation.",
  },
  {
    question: "Can we start without replacing existing systems?",
    answer:
      "Yes. Our governance overlay and integration patterns allow you to start by governing selected actions and evidence around your incumbent systems.",
  },
  {
    question: "Do you offer industry-specific demos?",
    answer:
      "Yes, you can schedule tailored walkthroughs and demos focused on your specific industry's regulatory context, workflows, and compliance requirements.",
  },
  {
    question: "Where can I see every industry?",
    answer:
      "You can explore our full directory index covering each supported industry sector and its specific child pages.",
  },
  {
    question: "Where can I explore cross-industry solution patterns?",
    answer:
      "Cross-industry solution patterns, architecture frameworks, and shared governance models are available throughout our core platform documentation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default as in the screenshot

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-4xl w-full flex flex-col items-start">
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
              FAQ
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15]">
            Common questions about ZoikoSuite by industry
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col divide-y divide-[#D9D3C7] border-t border-b border-[#D9D3C7]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#08222F] pr-4 group-hover:text-[#C59B3F] transition-colors">
                    {item.question}
                  </span>
                  <span className="text-[#08222F] flex-shrink-0 transition-transform">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-4 pr-12">
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-mono">
                      {item.answer}
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
