"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FaqItem[] = [
  {
    question: "What is ZoikoSuite Migration & Shadow Mode?",
    answer: (
      <div className="space-y-3">
        <p>
          It is a controlled adoption approach for mapping current systems and
          responsibilities, validating data, controls, integrations and
          evidence, and comparing proposed ZoikoSuite behaviour with current
          operation before production activation.
        </p>
        <p className="text-[#6A7C85]">
          Seven phases run from discovery through legacy exit, and phases can
          overlap by workstream. Activation, recovery, timelines and
          replacement scope require customer-specific validation and
          accountable approval.{" "}
          <Link
            href="#lifecycle"
            className="text-[#0B1E28] font-semibold underline underline-offset-4 hover:text-[#C59A41] transition-colors"
          >
            See the lifecycle
          </Link>
        </p>
      </div>
    ),
  },
  {
    question: "Does Shadow Mode authorise live actions?",
    answer: (
      <p>
        No. Shadow Mode operates exclusively in parallel observation and
        dry-run reconciliation mode. It never writes directly to authoritative
        ledgers or authorises live actions until the cutover gate has been
        formally signed off by the named authority.
      </p>
    ),
  },
  {
    question: "Do we have to replace our existing systems?",
    answer: (
      <p>
        No. Coexistence is a first-class operational state. Systems may
        complement, consolidate, or defer integration indefinitely based on
        business necessity and risk appetite.
      </p>
    ),
  },
  {
    question: "How long does a migration take?",
    answer: (
      <p>
        There is no arbitrary time limit or promised duration. Each phase
        proceeds based on evidentiary gate criteria rather than artificial
        calendar deadlines.
      </p>
    ),
  },
  {
    question: "How is readiness measured?",
    answer: (
      <p>
        Readiness is evaluated across fifteen independent gates supported by
        named criteria, verifiable artifacts, and sign-offs—never by an
        aggregated percentage or automated dial.
      </p>
    ),
  },
  {
    question: "What does the reconciliation manifest actually prove?",
    answer: (
      <p>
        It proves exact parity or identified variance between current production
        outputs and proposed shadow outputs across all transaction sets within
        the bounded scope.
      </p>
    ),
  },
  {
    question: "Can everything be rolled back?",
    answer: (
      <p>
        Not everything can be reversed directly. Every recovery
        mechanism—rollback, restore, failover, re-index, or irreversible
        operation—is explicitly documented with true irreversibility stated
        plainly.
      </p>
    ),
  },
  {
    question: "When can legacy systems be switched off?",
    answer: (
      <p>
        Only after all post-cutover stabilization gates are satisfied,
        retention obligations are verified, and the decommissioning authority
        produces signed evidence of closure.
      </p>
    ),
  },
  {
    question: "Is the product interface on this page live?",
    answer: (
      <p>
        The representations shown illustrate live production-grade data models
        and manifest records used in actual enterprise shadow deployments.
      </p>
    ),
  },
  {
    question: "Does ZoikoSuite guarantee a migration outcome?",
    answer: (
      <p>
        ZoikoSuite guarantees rigorous, verifiable governance and transparency
        through empirical evidence, rather than unsupportable algorithmic
        guarantees.
      </p>
    ),
  },
];

export default function MigrationShadowModeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FBF9F4] py-14 sm:py-20 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C59A41] mb-2">
              — FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1E28] tracking-tight">
              Shadow Mode, coexistence,
              <br className="hidden md:inline" /> readiness and recovery
            </h2>
          </div>
          <p className="text-sm text-[#5A6D77] max-w-md leading-relaxed md:pt-6">
            Direct first sentences, then qualified detail. Every answer is
            present in the page source.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#E5E0D8] divide-y divide-[#E5E0D8]">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[13px] sm:text-base font-semibold text-[#0B1E28] group-hover:text-[#C59A41] transition-colors leading-snug">
                    {item.question}
                  </span>
                  <span className="text-lg sm:text-xl font-light text-[#C59A41] shrink-0 w-6 text-right select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 sm:pt-3.5 pr-2 sm:pr-8 text-xs sm:text-sm text-[#5A6D77] leading-relaxed transition-all">
                    {item.answer}
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
