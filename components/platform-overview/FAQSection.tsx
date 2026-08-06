"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answerParagraphs: string[];
  linkText?: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is ZoikoSuite?",
    answerParagraphs: [
      "ZoikoSuite is a governed business operations intelligence platform for connecting execution, governance, evidence, analytics, and governed AI across business functions.",
      "It is built for organizations that operate through multiple entities and jurisdictions, where authority, obligations, and evidence cannot be fragmented across systems.",
    ],
    linkText: "See the category definition",
  },
  {
    question: "Is ZoikoSuite an ERP?",
    answerParagraphs: [
      "ZoikoSuite is not a conventional ERP category; it is a governance-first operating layer designed to connect business operations with policy, authority, evidence, jurisdiction context, governed AI, and cross-functional workflows.",
    ],
  },
  {
    question: "Which business functions can ZoikoSuite support?",
    answerParagraphs: [
      "ZoikoSuite supports multiple enterprise domains including finance and banking, payroll and HR, legal and contract systems, tax and filing systems, procurement, data platforms, and APIs & webhooks under a unified governance model.",
    ],
  },
  {
    question: "How does ZoikoSuite support multi-entity organizations?",
    answerParagraphs: [
      "It provides dedicated multi-entity and multi-jurisdiction controls, allowing organizations to manage regional hosting, sovereign deployments, and localized compliance guardrails seamlessly.",
    ],
  },
  {
    question: "How does jurisdiction intelligence work?",
    answerParagraphs: [
      "Jurisdiction intelligence applies automated regulatory rules, tax frameworks, and data residency constraints dynamically based on the operating entities involved in each workflow.",
    ],
  },
  {
    question: "What is governed AI?",
    answerParagraphs: [
      "Governed AI ensures that automated decisions, summaries, and recommendations adhere to declared corporate policies, retain audit trails, and operate strictly within authorization boundaries.",
    ],
  },
  {
    question: "Can ZoikoSuite integrate with existing systems?",
    answerParagraphs: [
      "Yes, ZoikoSuite features a controlled integration layer across nine integration groups with declared scopes, attributable service identities, and typed events.",
    ],
  },
  {
    question: "What deployment options are available?",
    answerParagraphs: [
      "Available deployment models range from regional hosting and dedicated private cloud to enterprise single-tenant, sovereign deployments, on-premise infrastructure, and customer-controlled keys.",
    ],
  },
  {
    question: "How does Migration & Shadow Mode reduce risk?",
    answerParagraphs: [
      "Migration & Shadow Mode allows organizations to observe and compare proposed policy decisions, workflows, exceptions, and evidence in parallel without authorizing production actions prematurely.",
    ],
  },
  {
    question:
      "Does ZoikoSuite provide legal, tax, accounting, audit, employment, or investment advice?",
    answerParagraphs: [
      "No, ZoikoSuite is an operational software and governance platform and does not provide professional legal, tax, accounting, audit, employment, or investment advice.",
    ],
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
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
              {/* Subtitle with line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#c5a059]" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#c5a059]">
                  Frequently Asked Questions
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0f172a]">
                Procurement-grade answers
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Each answer opens with a direct sentence, then adds qualified
                detail. All answers are present in the page source.
              </p>
            </motion.div>
          </div>

          {/* FAQ List */}
          <div className="w-full flex flex-col border-t border-[#DBE3E8]">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-[#DBE3E8] py-6 transition-colors duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0f172a] group-hover:text-[#0F476A] transition-colors pr-4">
                      {item.question}
                    </span>
                    <span className="w-6 h-6 flex items-center justify-center text-[#c5a059] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 pr-12 flex flex-col space-y-3">
                          {item.answerParagraphs.map((para, pIdx) => (
                            <p
                              key={pIdx}
                              className="text-sm sm:text-base text-[#64748b] leading-relaxed"
                            >
                              {para}
                            </p>
                          ))}
                          {item.linkText && (
                            <div className="pt-1">
                              <a
                                href="#"
                                className="text-sm font-semibold text-[#0F476A] hover:underline inline-flex items-center gap-1"
                              >
                                {item.linkText} →
                              </a>
                            </div>
                          )}
                        </div>
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
