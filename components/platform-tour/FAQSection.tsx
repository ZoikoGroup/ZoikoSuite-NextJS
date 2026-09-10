"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answerParagraphs: string[];
  linkText?: string;
  linkHref?: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is the ZoikoSuite Platform Tour?",
    answerParagraphs: [
      "The Platform Tour is an interactive, fictitious evaluation environment that shows how one agency or corporate scenario is governed across systems, policies, authority, human review, controlled execution, evidence, governed AI, analytics, and enterprise deployment.",
      "One synthetic action, ACT-001, permits a single central enterprise context to demonstrate authority, policy, authority thresholds, and reviewable evidence manifest trails.",
    ],
    linkText: "Read the tour guide",
    linkHref: "#",
  },
  {
    question: "Can I test with private enterprise data?",
    answerParagraphs: [
      "No. The public tour environment runs solely on synthetic mock records. Private pilots and enterprise proof-of-concepts with dedicated sovereign isolation are handled under formal evaluation agreements.",
    ],
  },
  {
    question: "Does the tour execute live production transactions?",
    answerParagraphs: [
      "No. All system events, ledger connectors, and API outputs within this tour are safe sandbox replays. No real financial, employee, or commercial ledger actions take place.",
    ],
  },
  {
    question: "Does the tour produce live evidence?",
    answerParagraphs: [
      "The tour demonstrates the exact evidence manifest structure, hash validation, and cryptographic attribution models used by ZoikoSuite, but all records are generated against synthetic tour events.",
    ],
  },
  {
    question: "Are all platform modules and integrations available in every contract?",
    answerParagraphs: [
      "Capabilities, connectors, regional compliance packs, and deployment topologies depend on your subscription tier, approved integration scope, and operational jurisdiction.",
    ],
  },
  {
    question: "How deep does replay exposure run?",
    answerParagraphs: [
      "The tour provides full field-level visibility across all 12 stages, including raw policy definitions, authority thresholds, AI confidence scores, and immutable audit entries.",
    ],
  },
  {
    question: "How does the tour represent jurisdiction?",
    answerParagraphs: [
      "The scenario demonstrates how conflicting jurisdictional rules (e.g. UK domicile vs. US governing contract terms) are detected and escalated for explicit human legal resolution rather than arbitrary system fallback.",
    ],
  },
  {
    question: "Can I take the tour mock evidence to our reviewers?",
    answerParagraphs: [
      "Yes. The tour generates an independent, unbranded evaluation summary artifact detailing what was demonstrated and what still requires internal procurement validation.",
    ],
  },
  {
    question: "Can I return to where I left the session?",
    answerParagraphs: [
      "Yes. Your tour progression and active path selections are persisted in your local browser session so you can explore stops in any order without losing marked checkpoints.",
    ],
  },
  {
    question: "What is stored if I inspect a stop?",
    answerParagraphs: [
      "Nothing is tracked back to your company, IP, or identity. Inspection actions only update client-side session state for displaying completed badges.",
    ],
  },
  {
    question: "Is the platform tour accessible?",
    answerParagraphs: [
      "Yes. All 12 stop transcripts, policy tables, and audit logs are fully rendered in semantic HTML with keyboard accessibility and full screen-reader support.",
    ],
  },
  {
    question: "Where should I go for technical questions?",
    answerParagraphs: [
      "For deeper architecture reviews, data residency inquiries, or enterprise deployment discussions, you can reach out directly to our solutions architecture team.",
    ],
    linkText: "Talk to a solutions architect",
    linkHref: "/platform/deployment",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-24 px-6 lg:px-20 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                PROCUREMENT-GRADE ANSWERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.15]">
              Data, actions, availability and
              <br />
              accessibility
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Every answer is present in this page source and matches the FAQ
              schema exactly.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col border-t border-[#d8e2e8]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#d8e2e8] py-5 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="text-[14.5px] sm:text-[15.5px] font-bold text-[#08222F] group-hover:text-[#0F476A] transition-colors pr-4">
                    {item.question}
                  </span>
                  <span className="w-5 h-5 flex items-center justify-center text-[#c5a059] shrink-0">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-2 pr-10 flex flex-col space-y-2.5">
                        {item.answerParagraphs.map((para, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-[13px] sm:text-[13.5px] text-[#5a6a75] leading-relaxed"
                          >
                            {para}
                          </p>
                        ))}
                        {item.linkText && (
                          <div className="pt-1">
                            <a
                              href={item.linkHref || "#"}
                              className="text-xs font-semibold text-[#0F476A] hover:underline inline-flex items-center gap-1"
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
    </section>
  );
}
