"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is the ZoikoSuite Resource Center?",
    answer:
      "The Resource Center is the central ZoikoSuite hub for finding Executive Briefs, Documentation, Knowledge Base resources, Training Academy materials, Webinars & Events, Case Studies, Blog & Insights, Templates & Tools, and Support Center pathways. Each destination remains the canonical owner of its content — the Resource Center routes you there, it does not duplicate it.",
  },
  {
    question: "Where can I find ZoikoSuite documentation?",
    answer:
      "Structured product and implementation documentation is published through the Documentation path. It is written and maintained by the owning team, and the navigator above links directly to it.",
  },
  {
    question: "Where can I find training and events?",
    answer:
      "Training Academy materials and Webinars & Events are listed with the availability and dates published by their owning systems. Upcoming sessions show registration status directly on the listing.",
  },
  {
    question: "Where can I find case studies and executive material?",
    answer:
      "Executive Briefs hold concise decision-oriented material for evaluation and leadership review. Case Studies contain customer or implementation stories that have been approved for publication.",
  },
  {
    question: "Where can I get help?",
    answer:
      "Start with the Support Center for help pathways, or the Knowledge Base for practical articles and problem-solving guidance where published. Both are reachable from the navigator at the top of this page.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#F7F5F0] py-[92px] px-6 lg:px-[60px] flex justify-center"
    >
      <div className="max-w-[1320px] w-full flex flex-col items-center">
        {/* Header - Centered Block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left mb-10 sm:mb-12 max-w-[782px] w-full"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[1.5px] bg-[#C5A059]" />
            <div className="justify-center text-[#C5A059] text-xs font-normal font-['JetBrains_Mono'] leading-4 tracking-wider uppercase">
              10 / FAQ
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E293B] leading-tight font-['Archivo']">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* Cards Accordion - Centered Block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-3.5 w-full max-w-[782px]"
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full bg-white rounded-xl border border-[#D4D4D8] shadow-2xs transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`resources-faq-answer-${index}`}
                  suppressHydrationWarning
                  className="w-full h-[60px] px-5 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-base font-semibold text-[#1E293B] font-['Archivo']">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-lg font-semibold font-['JetBrains_Mono'] text-[#C5A059] select-none transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`resources-faq-answer-${index}`}
                    className="px-5 pb-5 pt-2 border-t border-stone-100"
                  >
                    <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed font-['Archivo']">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}