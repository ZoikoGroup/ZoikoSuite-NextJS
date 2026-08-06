"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answerParagraph1: string;
  answerParagraph2?: string;
}

const faqData: FaqItem[] = [
  {
    question: "How does ZoikoSuite work?",
    answerParagraph1:
      "It connects source signals, business context, policies, roles, human decisions, controlled execution, evidence, and monitoring in one governed action lifecycle.",
    answerParagraph2:
      "Nine stages carry the same action identity from intake through follow-up, and each stage records what it added and who was responsible. See the nine stages",
  },
  {
    question: "Does ZoikoSuite make decisions automatically?",
    answerParagraph1:
      "ZoikoSuite automates policy evaluation, routing, and constraint checks, but final authority remains explicitly assigned to qualified human roles where regulatory standards require it.",
  },
  {
    question: "How are policies applied?",
    answerParagraph1:
      "Policies are evaluated contextually based on entity, jurisdiction, action type, and operational scope, ensuring the correct framework applies prior to execution.",
  },
  {
    question: "How does delegated authority work?",
    answerParagraph1:
      "Delegated authority assigns explicit boundaries, monetary limits, and jurisdictional parameters to designated roles, preventing unauthorized actions at every boundary.",
  },
  {
    question: "What happens when rules or sources conflict?",
    answerParagraph1:
      "Conflicts trigger automated exception routes and priority hierarchies predefined in the policy framework, surfacing the dispute for authorized review rather than failing silently.",
  },
  {
    question: "How is execution controlled?",
    answerParagraph1:
      "Execution requires valid pre-authorization, cryptographic verification of intent, and passing all lifecycle gate checks before any system write or transaction occurs.",
  },
  {
    question: "What evidence is preserved?",
    answerParagraph1:
      "An immutable record of action metadata, policy decisions, identity assertions, inputs, outputs, and tamper-evident hashes is permanently chained for audit readiness.",
  },
  {
    question: "How does governed AI participate?",
    answerParagraph1:
      "AI models act strictly within classification-gated boundaries, providing inputs, analysis, or draft evaluations under supervision with no independent execution rights.",
  },
  {
    question: "Can ZoikoSuite integrate with existing systems?",
    answerParagraph1:
      "Yes, using standardized event envelopes, secure APIs, and connectors designed to preserve governed context across hybrid and multi-system enterprise architectures.",
  },
  {
    question: "What is Shadow Mode?",
    answerParagraph1:
      "Shadow Mode runs the entire governance lifecycle against live or historical signals without executing transactions, allowing safe testing before production deployment.",
  },
  {
    question: "Does ZoikoSuite guarantee compliance?",
    answerParagraph1:
      "ZoikoSuite provides the rigorous infrastructure, evidence tracking, and control frameworks required for compliance, while final regulatory adherence remains the responsibility of the organization.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Main Wrapper with max-w-6xl constraint */}
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Grid: Title on Left, Instructional Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Eyebrow Style (with line) */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Frequently Asked Questions
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Mechanism, boundaries, and adoption
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Direct first sentences, then qualified detail. Every answer is
                in the page source.
              </p>
            </motion.div>
          </div>

          {/* FAQ Accordion List */}
          <div className="w-full border-t border-[#CFDEE7]">
            {faqData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border-b border-[#CFDEE7]">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#0f172a] group-hover:text-[#c5a059] transition-colors">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center rounded-full text-[#c5a059] shrink-0 ml-4">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden pb-6"
                      >
                        <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-3">
                          {faq.answerParagraph1}
                        </p>
                        {faq.answerParagraph2 && (
                          <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                            {faq.answerParagraph2.includes(
                              "See the nine stages",
                            ) ? (
                              <>
                                {faq.answerParagraph2.replace(
                                  "See the nine stages",
                                  "",
                                )}
                                <a
                                  href="#"
                                  className="text-[#c5a059] font-medium hover:underline inline-flex items-center gap-1"
                                >
                                  See the nine stages
                                </a>
                              </>
                            ) : (
                              faq.answerParagraph2
                            )}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
