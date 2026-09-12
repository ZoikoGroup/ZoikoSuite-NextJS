"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string[];
  link?: { text: string; href: string };
}

const faqs: FAQItem[] = [
  {
    question: "What does ZoikoSuite provide for CFOs?",
    answer: [
      "Governed context for material financial decisions — entity, period, currency, source and freshness, plus the policy, delegated authority, evidence and accountable owner that apply.",
      "It coordinates finance work across approved systems while authoritative records remain where they already sit.",
    ],
    link: { text: "See the ownership badges", href: "#" },
  },
  {
    question: "Does it replace our ERP or banking platform?",
    answer: [
      "No. ZoikoSuite coordinates the human and policy boundaries above your core ledgers and banking connections. Authoritative records remain in NetSuite, SAP, UBS, or your treasury portals, eliminating costly migration risks.",
    ],
  },
  {
    question: "Why is there no single cash figure?",
    answer: [
      "Because book balances, bank settled figures, and available cash represent different operational realities. ZoikoSuite labels each balance by its source, freshness, and reconciled state rather than presenting false artificial uniformity.",
    ],
  },
  {
    question: "Will you show us a liquidity or runway figure?",
    answer: [
      "Liquidity projections are derived from verified payment batches, unreleased payroll holds, and committed authority thresholds, giving leadership actionable foresight without speculative guesswork.",
    ],
  },
  {
    question: "How are group totals handled across currencies?",
    answer: [
      "Rollup balances preserve their source transaction currency and explicitly link the timestamped FX rate table utilized. Stale feeds trigger warnings before consolidation numbers are locked.",
    ],
  },
  {
    question: "Can one person approve and pay?",
    answer: [
      "Approval permissions and payment execution permissions are structurally separated. The executive who authorizes a release cannot execute the bank wire, ensuring compliance with strict dual-control standards.",
    ],
  },
  {
    question: "Does \"evidence ready\" mean we are audit ready?",
    answer: [
      "\"Ready\" is a workflow verification state denoting that all prerequisite schedules, reconciliations, and exception clearances have been completed. It is an operational milestone, never a substitute for external statutory audit assurance.",
    ],
  },
  {
    question: "Does ZoikoSuite determine accounting treatment?",
    answer: [
      "No. Accounting treatments are governed by your organizational policy and chartered accountants. ZoikoSuite enforces adherence to those approved policies and generates immutable audit trails.",
    ],
  },
  {
    question: "Can AI approve a finance action?",
    answer: [
      "No. All material financial approvals require authenticated, accountable human signatories within delegated authority limits. AI assists only with anomaly detection, preparation, and evidence gathering.",
    ],
  },
  {
    question: "Will you give us an ROI or savings figure?",
    answer: [
      "We assert zero default ROI. True economic value is proven through reduced restatement risks, automated compliance audit packaging, and the elimination of manual reconciliation rework in your specific environment.",
    ],
  },
];

export default function DefinitionsAuthorityCoexistenceBoundariesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#e2dcce]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Definitions, authority, coexistence and boundaries
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Direct first sentences, then qualified detail. Every answer is present in this page source.
            </p>
          </motion.div>
        </div>

        {/* Clean FAQ List without white box wrapper */}
        <div className="border-t border-[#e2dcce]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="border-b border-[#e2dcce]">
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-[15px] font-bold text-[#08222F] group-hover:text-[#c5a059] transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-[#c5a059] shrink-0 font-bold text-base sm:text-lg">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pt-1 text-xs sm:text-[13.5px] text-slate-700 leading-relaxed space-y-3 max-w-[900px]">
                        {faq.answer.map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))}
                        {faq.link && (
                          <div className="pt-1">
                            <Link
                              href={faq.link.href}
                              className="text-xs font-semibold text-[#0F476A] hover:text-[#c5a059] transition-colors inline-block"
                            >
                              {faq.link.text}
                            </Link>
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
