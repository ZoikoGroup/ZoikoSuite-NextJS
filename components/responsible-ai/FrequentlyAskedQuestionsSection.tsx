"use client"
import React, { useState } from "react";

export default function FrequentlyAskedQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can AI make decisions without a human?",
      answer:
        "No. AI may not make any autonomous material decision, bypass approval or authority, or silently alter an authoritative record.\n\nFive boundaries are in current use — observe, suggest, forecast, recommend and draft. Execute-governed is tightly gated and not depicted for material financial or legal actions. Prohibited actions are absolute under any configuration.",
      linkText: "See the taxonomy",
    },
    {
      question: "How do we tell AI output from a real record?",
      answer:
        "All AI-generated outputs are explicitly labelled at the point of use with model version, provider, and confidence indicators where applicable.",
    },
    {
      question: "What happens if nobody reviews a suggestion?",
      answer:
        "An unreviewed proposal expires past its timeout rather than proceeding by default, ensuring no silent auto-acceptance occurs.",
    },
    {
      question: "How accurate is the AI?",
      answer:
        "Accuracy percentages and benchmark scores are not claimed. Evaluation is specific to your use case, and known limitations are explicitly stated.",
    },
    {
      question: "What happens when an evaluation fails?",
      answer:
        "Below threshold, the release is refused. If a system is already released, it is disabled until re-evaluated and corrected.",
    },
    {
      question: "Can we turn the AI off?",
      answer:
        "Yes. Systems can be disabled entirely or rolled back to a prior approved model version or non-AI path immediately.",
    },
    {
      question: "What data can the AI use?",
      answer:
        "Only permitted data classes confirmed during registration and review may be used, with restricted-class exclusions strictly applied.",
    },
    {
      question: "Do providers train on our data?",
      answer:
        "Data-use posture is governed strictly per provider contract and inventory settings.",
    },
    {
      question: "Are you compliant with AI regulations?",
      answer:
        "AI regulatory frameworks are referenced as external context for design, never as conformance. Applicability depends on your specific jurisdiction and sector.",
    },
    {
      question: "Is any AI system independently certified?",
      answer:
        "No independent certification of any AI system against any standard is claimed.",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      {/* Top Header Row with Title and Description */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col items-start">
          {/* Subtitle / Breadcrumb */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C29B38]" />
            <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight max-w-xl">
            Autonomy, accuracy, data use and failure
          </h2>
        </div>

        {/* Right Description Text */}
        <div className="max-w-md">
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Direct first sentences, then qualified detail. Every answer is
            present in the page source.
          </p>
        </div>
      </div>

      {/* FAQ List Container */}
      <div className="max-w-6xl w-full bg-transparent border-t border-slate-300/60">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border-b border-slate-300/60 py-5 transition-colors cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[#111827] font-semibold text-base sm:text-lg">
                  {faq.question}
                </h3>
                <span className="text-[#C29B38] font-bold text-xl ml-4 select-none">
                  {isOpen ? "–" : "+"}
                </span>
              </div>

              {isOpen && (
                <div className="mt-4 pr-12 animate-fadeIn">
                  <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed whitespace-pre-line mb-3">
                    {faq.answer}
                  </p>
                  {faq.linkText && (
                    <a
                      href="#"
                      className="text-[#0F476A] hover:underline text-sm font-semibold inline-block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {faq.linkText}
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
