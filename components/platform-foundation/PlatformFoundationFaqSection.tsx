"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Platform Foundation?",
    answer: (
      <div className="space-y-3">
        <p className="font-semibold text-slate-900">
          It is the shared architecture layer for organizational scope, jurisdiction context, data location, APIs, integrations, developer access, evidence, events and contextual adoption.
        </p>
        <p className="text-slate-600">
          Ten canonical capabilities sit beneath governed operations, keeping policy ownership, identities, failures, evidence and implementation boundaries visible. Availability varies by agreement tier, tenant model and deployment scope.{" "}
          <a href="#capabilities" className="text-[#c5a059] hover:underline font-medium">
            See the capability map
          </a>
        </p>
      </div>
    ),
  },
  {
    question: "How is architecture different from deployment?",
    answer:
      "Architecture defines canonical invariants, entity models, jurisdiction boundaries, and cryptographic verification rules. Deployment specifies where containers run, which key management vaults are invoked, and how network routing is partitioned for a given customer tenant.",
  },
  {
    question: "Does Platform Foundation replace our ERP or HCM?",
    answer:
      "No. Platform Foundation does not replace transactional core systems. It wraps, observes, governs, and correlates their entities into a unified organizational scope with immutable lineage, event envelopes, and audit proofs.",
  },
  {
    question: "What does multi-jurisdiction actually mean here?",
    answer:
      "Multi-jurisdiction means every entity, employee, asset, and contract has an explicit legal home and operating presence with automated policy evaluation across contradictory regulatory regimes (e.g. EU GDPR vs US CLOUD Act).",
  },
  {
    question: "How does data residency work?",
    answer:
      "Data residency is enforced at ingestion, persistence, and query time through cryptographic policy gates and hardware-isolated tenancy zones. Data tagged for a jurisdiction never transits or settles outside compliant geo-fences.",
  },
  {
    question: "Are the APIs and integrations publicly available?",
    answer:
      "APIs are published under strictly governed publication classes. Public endpoints are accessible via standard developer documentation, while partner and core banking/ERP connectors require gated authorization tokens and contract attestation.",
  },
  {
    question: "How are failures handled?",
    answer:
      "Failures are treated as first-class architectural events. With eight explicit failure states and default refusal semantics, no malformed, out-of-order, or delayed event is silently swallowed; each is quarantined with cryptographic audit trace.",
  },
  {
    question: "What is Shadow Mode?",
    answer:
      "Shadow Mode allows new governance policies, routing rules, or integration endpoints to process live production traffic concurrently without mutating underlying state, verifying behavioral parity prior to active enforcement.",
  },
  {
    question: "Is the evidence immutable or legally admissible?",
    answer:
      "Evidence logs use append-only cryptographic Merkle trees with hardware timestamping, ensuring tamper-evident chains of custody suitable for internal audit, external regulatory inquiry, and judicial proceedings.",
  },
  {
    question: "Are uptime or recovery targets published?",
    answer:
      "Yes. Platform Foundation publishes continuous real-time system metrics, deterministic failover targets (RTO < 60s, RPO = 0), and contractual SLAs transparently to authorized tenant administrators.",
  },
];

export default function PlatformFoundationFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#e8e4dc]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#c5a059]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-tight">
              Architecture, deployment, sources and evidence
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
              Direct first sentences, then qualified detail. Every answer is present in the page source.
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
                  {/* Clean, bare plus/minus glyph in gold */}
                  <span className="text-[#c5a059] font-light text-2xl shrink-0 ml-4 select-none leading-none">
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
                      <div className="pb-6 sm:pb-8 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                        {item.answer}
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
