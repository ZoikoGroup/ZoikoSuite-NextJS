"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  firstSentence: string;
  qualifiedDetail?: string;
  linkText?: string;
  linkHref?: string;
}

const faqList: FAQItem[] = [
  {
    question: "What are ZoikoSuite Core Modules?",
    firstSentence:
      "The ten canonical business operating domains listed on this page, connected to shared governance and platform foundation capabilities.",
    qualifiedDetail:
      "These ten names are the canonical taxonomy. Grouping them into four domains is a display convenience and implies no priority or ordering beyond the canonical list.",
    linkText: "See the ten modules",
    linkHref: "#all-modules",
  },
  {
    question: "Are all modules available in every market or plan?",
    firstSentence:
      "No. Module availability, specific connectors and jurisdiction features depend on your enterprise deployment agreement and market scope.",
    qualifiedDetail:
      "The Module Publication Registry governs public claims; pending or unverified modules never claim general market readiness.",
  },
  {
    question: "Does ZoikoSuite replace my ERP, HCM, payroll, CLM or procurement systems?",
    firstSentence:
      "No. ZoikoSuite coexists non-destructively with your existing authoritative systems of record.",
    qualifiedDetail:
      "It adds unified governance, cross-module evidence, obligation calendars, and human-in-the-loop approvals around existing operational data.",
  },
  {
    question: "Can modules work across multiple entities?",
    firstSentence:
      "Yes. Every canonical module is built natively with multi-entity and multi-jurisdiction awareness.",
    qualifiedDetail:
      "Corporate boundaries, intercompany agreements, and jurisdictional tax rules are enforced continuously across all transactions and events.",
  },
  {
    question: "Does the Tax Management module provide tax advice?",
    firstSentence:
      "No. The Tax Management module organizes obligations, calendars, and review pipelines but never issues formal tax advisory opinions.",
    qualifiedDetail:
      "Regulated tax determinations and filings must be reviewed and executed by qualified corporate tax professionals.",
  },
  {
    question: "Does Legal & Contracts provide legal advice?",
    firstSentence:
      "No. It extracts obligations, manages approval hierarchies, and tracks contract conditions without providing legal counsel.",
    qualifiedDetail:
      "Material legal commitments and interpretations remain under the exclusive purview of corporate counsel or qualified legal teams.",
  },
  {
    question: "Does Compliance & Obligations guarantee compliance?",
    firstSentence:
      "No software system can legally guarantee absolute regulatory compliance.",
    qualifiedDetail:
      "ZoikoSuite provides the evidence manifests, policy boundaries, and audit provenance required to prove diligent governance to regulators.",
  },
  {
    question: "Can AI approve actions in a module?",
    firstSentence:
      "No. AI is never granted autonomous approval or non-reviewable execution authority in any ZoikoSuite module.",
    qualifiedDetail:
      "AI provides suggested triage, anomaly correlation, and draft classifications, while all material outcomes require authenticated human sign-off.",
  },
  {
    question: "Is the product UI on this page live software?",
    firstSentence:
      "Yes. The interface patterns and data structures represent the unified ZoikoSuite Command Center console.",
    qualifiedDetail:
      "Specific connector health, tenant configurations, and live signals reflect individual authenticated customer environments.",
  },
];

export default function CoreModulesFAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
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
              Scope, availability, coexistence
              <br />
              and boundaries
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              Direct first sentences, then qualified detail. Every answer is present in the page source.
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
                      <Minus className="w-4 h-4 text-[#c5a059]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#c5a059]" />
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
                      <div className="pt-3.5 pr-8 space-y-2 text-xs sm:text-[13px] text-[#475569] leading-relaxed">
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
