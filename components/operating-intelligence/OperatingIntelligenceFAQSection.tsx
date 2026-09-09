"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  firstSentence: string;
  qualifiedDetail: string;
  linkText?: string;
  linkHref?: string;
}

const faqList: FAQItem[] = [
  {
    question: "What is ZoikoSuite Operating Intelligence?",
    firstSentence:
      "An actionable view of operational signals, context, obligations, governance, evidence, exceptions, source status and governed AI that helps authorized teams understand what needs attention and why.",
    qualifiedDetail:
      "Eight intelligence domains contribute to that view, and each carries its own product proof rather than a single aggregate indicator.",
    linkText: "See the domains",
    linkHref: "#eight-domains",
  },
  {
    question: "Is Operating Intelligence the same as business intelligence?",
    firstSentence:
      "No. Business intelligence reports historical aggregations and analytical trends; Operating Intelligence surfaces active work items requiring review or decision.",
    qualifiedDetail:
      "Where BI produces dashboards and offline charts, Operating Intelligence produces deterministic attention lists, explainable priority factors, evidence chains, and bounded execution paths.",
  },
  {
    question: "Does Operating Intelligence make decisions automatically?",
    firstSentence:
      "No. Operating Intelligence never makes autonomous material business decisions or claims machine authority.",
    qualifiedDetail:
      "The platform suggests, classifies, and summarizes within configured parameters, but all material outcomes, approvals, dispensations, and overrides require explicit, authenticated human execution.",
  },
  {
    question: "How is priority determined?",
    firstSentence:
      "Priority is determined through an explainable multi-factor calculation, never a single black-box score.",
    qualifiedDetail:
      "Every item exposes its nine contributing factors—including lifecycle state, entity jurisdiction, SLA age, bound contractual obligations, and evidence completeness—with age and due date maintained as distinct variables.",
  },
  {
    question: "How current is the data?",
    firstSentence:
      "Data currency reflects the last synchronized timestamp of each connected integration source.",
    qualifiedDetail:
      "Lists are never automatically reordered while an operator is reading them. Fresh records appear via a visible 'Updated items available' banner with an explicit manual refresh action.",
  },
  {
    question: "Can existing systems remain authoritative?",
    firstSentence:
      "Yes. ZoikoSuite does not replace your ERP, CRM, or ledger systems of record.",
    qualifiedDetail:
      "It connects non-destructively to existing enterprise software, pulling operational context, verifying policy compliance, and routing approvals back through authoritative connectors.",
  },
  {
    question: "How are jurisdiction and compliance topics handled?",
    firstSentence:
      "Jurisdiction, source dates, and review requirements always travel together as a unified triplet.",
    qualifiedDetail:
      "The system does not present simple geographical maps as proof of compliance; instead, each entity-level statutory rule is pinned to verified territory boundaries and legal entity definitions.",
  },
  {
    question: "How is AI used?",
    firstSentence:
      "AI is used strictly for correlation, triage suggestion, summarization, and anomaly surfacing within strict governance boundaries.",
    qualifiedDetail:
      "The platform never displays 'AI approved' or 'AI authorized' for any material operational event. AI findings remain permanently distinct from human decision records.",
  },
  {
    question: "What happens if a source or integration is degraded?",
    firstSentence:
      "The affected scope and its last known valid state are immediately and transparently identified.",
    qualifiedDetail:
      "Degradation does not invalidate previously synchronized records or hide behind a generic loading spinner; operators can see exactly which data fields are stale and proceed with informed caution.",
  },
  {
    question: "Is implementation required?",
    firstSentence:
      "Yes. Connecting live enterprise systems, policy libraries, and role permissions requires structured onboarding.",
    qualifiedDetail:
      "The platform is configured to match your organization's entity hierarchy, approval matrices, and specific compliance obligations rather than imposing generic workflow templates.",
  },
  {
    question: "Does ZoikoSuite guarantee compliance?",
    firstSentence:
      "No software platform can legally guarantee absolute regulatory compliance.",
    qualifiedDetail:
      "ZoikoSuite provides the verifiable evidence trails, boundary enforcement, and governance controls necessary to demonstrate diligent operational compliance to auditors and authorities.",
  },
];

export default function OperatingIntelligenceFAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-20 flex justify-center border-t border-[#e6e2d8]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Category, priority, sources
              <br />
              and AI
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Direct first sentences, then qualified detail. Every answer is
              present in this page source.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-[#e2ddd3] border-t border-b border-[#e2ddd3]">
          {faqList.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-[15px] font-bold text-[#08222F] group-hover:text-[#c5a059] transition-colors leading-snug">
                    {item.question}
                  </span>
                  <div className="shrink-0 w-6 h-6 flex items-center justify-center text-[#c5a059]">
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4 text-[#c5a059]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-[#c5a059]" />
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
                      className="overflow-hidden"
                    >
                      <div className="pt-3.5 pr-8 space-y-2.5 text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                        <p>{item.firstSentence}</p>
                        {item.qualifiedDetail && (
                          <p>
                            {item.qualifiedDetail}{" "}
                            {item.linkText && (
                              <a
                                href={item.linkHref || "#"}
                                className="text-[#08222F] font-semibold underline hover:text-[#c5a059] transition-colors inline-block ml-1"
                              >
                                {item.linkText}
                              </a>
                            )}
                          </p>
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
