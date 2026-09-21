"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Is client telemetry used to train external models?",
    answer:
      "Absolutely not. All external model endpoints are governed by strict Data Processing Addendums (DPAs) that legally prohibit model training on client inputs, metadata, or queries. Outbound data residency US-East is enforced.",
  },
  {
    question: "Can AI make autonomous containment or quarantine actions?",
    answer:
      "No. The system is designed with strict human-in-the-loop boundaries (L1 to L3). High-impact write operations (such as isolating a host or revoking an Entra directory session) require explicit multi-party cryptographic authorization.",
  },
  {
    question: "Does Zoiko Shield claim certification under the NIST AI RMF?",
    answer:
      "No. The NIST AI Risk Management Framework (AI RMF 1.0) is a voluntary, non-certifiable guideline. Zoiko Shield uses its taxonomy (Govern, Map, Measure, Manage) to structure evidence and policies, not as a conformance seal.",
  },
  {
    question: "How are model prompt injections prevented?",
    answer:
      "We deploy real-time PII and instruction scrubbing engines. System directions are locked at the API configuration level, and incoming telemetries are parsed as deterministic key-value strings rather than raw text blocks.",
  },
];

export default function ResponsibleAiFaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3]);

  const toggle = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="w-full bg-[#F0EDE6] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            Detailed Architecture & Control Inquiries
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3.5">
          {faqData.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={item.question}
                className="bg-white rounded-xl border border-[#123B4C]/10 shadow-sm overflow-hidden transition-all hover:border-[#123B4C]/25"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0A2029]">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5B6670] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5B6670] leading-relaxed border-t border-[#123B4C]/5">
                    {item.answer}
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
