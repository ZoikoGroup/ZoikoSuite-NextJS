"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function CommonQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who leads ZoikoSuite?",
      answer:
        "See the current verified public leadership roster and role scopes below. If a full roster is not yet approved, this explains the operating leadership model and links to published profiles rather than improvising names.",
    },
    {
      question: "Is ZoikoSuite part of Zoiko Tech or Zoiko Group?",
      answer:
        "ZoikoSuite is developed and operated by Zoiko Tech, a Zoiko Group company. (Confirm final legal wording before publication.)",
    },
    {
      question: "Who is accountable for security and compliance?",
      answer:
        "Trust & Governance is the accountable function — see Security, Compliance, Privacy, Evidence, and Certifications. No personal certification or guarantee is claimed.",
    },
    {
      question: "How is Responsible AI governed?",
      answer:
        "AI operates within policy, approval, evidence, human oversight, and defined control boundaries — see Responsible AI.",
    },
    {
      question: "How do customers escalate critical issues?",
      answer:
        "Existing customers use the governed support/account escalation process; personal executive contact data is never published.",
    },
    {
      question: "How can I contact leadership for media or partnerships?",
      answer:
        "Use the Media enquiries or Partner enquiries routes, with subject-based routing.",
    },
  ] as const;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            FREQUENTLY ASKED
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[38px] lg:text-[46px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Common questions
          </h1>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full border-b border-[#DCD6C8] py-6 cursor-pointer transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-semibold text-[#0b1329]">
                    {faq.question}
                  </h3>
                  <div className="text-[#A8843A] shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4 pr-12">
                    <p className="text-gray-600 text-base font-light leading-relaxed">
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
