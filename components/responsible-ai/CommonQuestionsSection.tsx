"use client"
import React, { useState } from "react";

export default function CommonQuestionsSection() {
  const faqs = [
    {
      question: "Does AI make decisions for me?",
      answer:
        "ZoikoSuite may provide classifications, summaries, forecasts, scores, and recommendations. Material actions remain subject to the authority and workflow controls configured for the underlying process; not every output is always human-reviewed.",
    },
    {
      question: "Can AI change my source records automatically?",
      answer:
        "The public governance baseline is that AI cannot silently modify immutable truth or bypass required policy/approval controls. Feature-specific behavior is described from current product truth.",
    },
    {
      question: "Is my data used to train AI models?",
      answer:
        "Answered from the AI Data Use Registry by feature/provider/deployment. If there is no universal answer, that's stated directly, with a link to current details.",
    },
    {
      question: "Which AI models does ZoikoSuite use?",
      answer:
        "Named models/providers are published only when current and approved; otherwise, provider details may vary by feature/deployment.",
    },
    {
      question: "Is ZoikoSuite compliant with the EU AI Act?",
      answer:
        "Not answered with a blanket yes/no unless Legal has approved such a scoped claim — obligations are assessed by feature, role, deployment, jurisdiction, and effective date.",
    },
    {
      question: "Does ZoikoSuite follow NIST AI RMF or ISO/IEC 42001?",
      answer:
        "Only approved mapping/use/readiness is stated — a framework is never called a certification unless independently verified.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            FREQUENTLY ASKED
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Common questions
          </h1>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-t border-[#DCD6C8] last:border-b py-6"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-base lg:text-lg font-semibold text-[#0b1329] tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#A8843A] font-semibold text-xl transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-4 pr-12">
                    <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
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
