"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answerParagraph1: string;
  answerParagraph2?: string;
  linkText?: string;
  linkHref?: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is the ZoikoSuite Governance Platform?",
    answerParagraph1:
      "It brings policy, jurisdiction context, approvals, delegated authority, segregation of duties, evidence, audit readiness, governed AI and analytics into business decision workflows.",
    answerParagraph2:
      "Ten canonical capabilities compose one decision context and one auditable record. Exact availability, coverage and implementation behavior depend on approved product and deployment status.",
    linkText: "See the ten capabilities",
    linkHref: "#ten-capabilities",
  },
  {
    question: "How is this different from GRC, workflow or specialist systems?",
    answerParagraph1:
      "Traditional GRC systems record compliance post-facto as passive documentation, while workflow engines route tasks without statutory or jurisdictional awareness. Specialist compliance point solutions remain siloed from core transactional databases.",
    answerParagraph2:
      "ZoikoSuite operates synchronously inside the operational decision path—binding statutory limits, role-based segregation of duties, and jurisdiction rules before any execution or external write occurs.",
  },
  {
    question: "Does a control outcome mean the action is approved?",
    answerParagraph1:
      "No. A control outcome indicates whether an evaluated invariant or statutory rule is satisfied. Approval is a distinct delegated duty performed by an authorized human or designated gatekeeper according to the segregation matrix.",
    answerParagraph2:
      "Passing all controls is a necessary condition for execution, but does not substitute for formal authorization.",
  },
  {
    question: "Can AI approve actions?",
    answerParagraph1:
      "Never. Under the platform's core invariants, AI models and automated agents may propose actions or evaluate contextual evidence, but they cannot hold approval authority.",
    answerParagraph2:
      "All authorization duties require cryptographically verifiable human sign-off with explicit delegated limits.",
  },
  {
    question: "What happens when two policies conflict?",
    answerParagraph1:
      "The Governance Platform resolves conflicts through explicit jurisdiction hierarchy, effective date precedence, and the principle of strictest constraint.",
    answerParagraph2:
      "If an irreconcilable ambiguity remains, the decision state transitions to degraded/review required rather than silently defaulting to permitted.",
  },
  {
    question: "Does configured authority create legal authority?",
    answerParagraph1:
      "No. Configured authority in ZoikoSuite reflects organizational delegations and operational thresholds established by the customer.",
    answerParagraph2:
      "It does not grant, supersede, or modify statutory, corporate, or fiduciary legal authority defined by applicable laws and corporate charters.",
  },
  {
    question: "How is jurisdiction coverage represented?",
    answerParagraph1:
      "Jurisdiction coverage is represented through four explicit states: In Scope (statutorily supported and verified), Partial (specific local rules qualified), Monitoring (active statutory tracking without automated enforcement), and Out of Scope.",
    answerParagraph2:
      "Each rule carries a verified source date and jurisdiction identifier.",
  },
  {
    question: "Is the evidence audit certified or legally admissible?",
    answerParagraph1:
      "ZoikoSuite generates tamper-evident, cryptographically sealed audit dossiers containing full provenance, timestamps, evaluator identities, and invariant states.",
    answerParagraph2:
      "However, legal admissibility and audit acceptance are determinations made solely by competent courts, certified external auditors, and regulatory bodies.",
  },
  {
    question: "Does ZoikoSuite guarantee compliance?",
    answerParagraph1:
      "No software platform can guarantee statutory or regulatory compliance. ZoikoSuite provides deterministic controls, operational invariants, and tamper-evident records to enforce internal policy and support regulatory scrutiny.",
    answerParagraph2:
      "Ultimate responsibility rests with the operating organization and qualified legal counsel.",
  },
  {
    question: "What happens if a governance service is unavailable?",
    answerParagraph1:
      "The platform implements a fail-closed architecture. Where a statutory evaluation connector, evidence service, or verification node becomes unreachable, the transaction transitions into a degraded state with explicit error categorization.",
    answerParagraph2:
      "The platform refuses to fall through to permitted without manual emergency escalation protocols.",
  },
];

export default function GovernancePlatformFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#c5a059]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-tight">
              Scope, GRC comparison, authority and boundaries
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
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </motion.div>
        </div>

        {/* Accordion List with subtle warm borders */}
        <div className="w-full border-t border-[#e8e4dc]">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-[#e8e4dc] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#0f172a] group-hover:text-[#c5a059] transition-colors pr-4">
                    {item.question}
                  </span>
                  {/* Clean, bare plus/minus icon without any circle or border */}
                  <span className="text-[#c5a059] font-normal text-xl sm:text-2xl shrink-0 ml-4 select-none leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pb-7 pr-6 max-w-4xl text-xs sm:text-sm leading-relaxed flex flex-col gap-2.5">
                        <p className="text-slate-800 font-normal">
                          {item.answerParagraph1}
                        </p>
                        {item.answerParagraph2 && (
                          <p className="text-slate-500 font-normal">
                            {item.answerParagraph2}{" "}
                            {item.linkText && (
                              <Link
                                href={item.linkHref || "#"}
                                className="font-medium text-[#1e445b] hover:underline underline-offset-2 ml-1 inline-block"
                              >
                                {item.linkText}
                              </Link>
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
