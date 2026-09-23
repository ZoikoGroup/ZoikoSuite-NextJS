"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Who employs people working on ZoikoSuite?",
    answer:
      "The employing legal entity is shown on each job posting. ZoikoSuite is a platform brand; employment terms depend on the specific role and entity.",
  },
  {
    question: "Where can I work from?",
    answer:
      "Each role lists its approved work location and model. Office presence does not mean every role can be hired in every country.",
  },
  {
    question: "Does ZoikoSuite offer remote jobs?",
    answer:
      "Remote eligibility is role-specific. The role detail names the geography from which remote work is permitted.",
  },
  {
    question: "Does ZoikoSuite use AI in recruiting?",
    answer:
      "If AI-assisted tools are used in a material way, the candidate experience discloses the relevant use and preserves human accountability. Autonomous final hiring decisions are not permitted by default.",
  },
  {
    question: "Can I apply if no role matches?",
    answer:
      "If a governed talent community is active, candidates may opt in for future opportunities. Otherwise, the page does not collect unmanaged speculative applications.",
  },
  {
    question: "How can I verify a recruiter or job offer?",
    answer:
      "Use the official careers page and approved verification route. Suspicious requests for payment or sensitive data should be reported through the careers safety channel.",
  },
] as const;

export default function CareersFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            FREQUENTLY ASKED
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-[38px] lg:text-[46px] font-bold font-serif text-[#16223A] leading-tight tracking-tight">
            Common questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="w-full border-b border-[#DCD6C8] py-6 cursor-pointer transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[#16223A] text-base md:text-lg font-semibold">
                    {faq.question}
                  </h3>
                  <span
                    className={`text-[#A8843A] text-xl font-extrabold shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </span>
                </div>

                {isOpen && (
                  <div className="mt-4 pr-12 max-w-3xl">
                    <p className="text-[#4B5872] text-sm font-light leading-relaxed">
                      {faq.answer}
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
