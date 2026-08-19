"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  directAnswer: string;
  qualifiedDetail?: string;
  linkText?: string;
  linkHref?: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is ZoikoSuite an ERP?",
    directAnswer:
      "No. ZoikoSuite is not positioned as a conventional ERP; it is designed around governed execution across functions, systems, entities, jurisdictions, authority, evidence, and governed AI.",
    qualifiedDetail:
      "Conventional ERP products generally organize transactional modules and records, and individual products vary widely in the governance, workflow, analytics, and AI they include.",
    linkText: "See the comparison snapshot",
    linkHref: "#",
  },
  {
    id: "faq-2",
    question: "Does ZoikoSuite replace an existing ERP?",
    directAnswer:
      "Not necessarily. ZoikoSuite can coexist with existing ERP systems, acting as an overarching governance layer above your current systems of record.",
    qualifiedDetail:
      "While it can selectively replace specific legacy workflows or modules over time, total replacement is never required to realize value.",
  },
  {
    id: "faq-3",
    question: "Can an ERP remain the system of record?",
    directAnswer:
      "Yes. Your existing ERPs, CRMs, and financial databases can continue operating as primary systems of record.",
    qualifiedDetail:
      "ZoikoSuite orchestrates policy decisions, approvals, and compliance verification across these databases without forcing a migration of underlying data records.",
  },
  {
    id: "faq-4",
    question: "What is actually different about governance?",
    directAnswer:
      "Governance in ZoikoSuite is active, continuous, and integrated directly into execution paths rather than audited passively after the fact.",
    qualifiedDetail:
      "It enforces multi-entity rules, delegation matrices, and regulatory requirements before actions execute in downstream systems.",
  },
  {
    id: "faq-5",
    question: "How does ZoikoSuite work across multiple systems?",
    directAnswer:
      "ZoikoSuite utilizes bidirectional API integrations, webhooks, and event streams to link disparate enterprise systems into a unified workflow layer.",
    qualifiedDetail:
      "This enables synchronized controls, cross-platform visibility, and continuous compliance checks without displacing existing IT infrastructure.",
  },
  {
    id: "faq-6",
    question: "What is Shadow Mode?",
    directAnswer:
      "Shadow Mode allows ZoikoSuite to observe live operational events and simulate policy application without making production changes.",
    qualifiedDetail:
      "This lets teams validate proposed rules and evaluate performance against legacy outcomes with zero operational risk prior to activation.",
  },
  {
    id: "faq-7",
    question: "What can ZoikoSuite consolidate?",
    directAnswer:
      "It consolidates approval matrices, audit logging, evidence collection, and policy enforcement into a single governed control layer.",
    qualifiedDetail:
      "This reduces the fragmentation of managing separate governance tools, manual compliance spreadsheets, and siloed workflow engines.",
  },
  {
    id: "faq-8",
    question: "How does governed AI differ from an AI assistant?",
    directAnswer:
      "Governed AI executes within strict boundary constraints, enforcing authority roles, audit logging, and explicit policy controls on every action.",
    qualifiedDetail:
      "Unlike conversational assistants that generate unverified suggestions, governed AI cannot bypass approval matrices or output non-compliant decisions.",
  },
  {
    id: "faq-9",
    question: "Does ZoikoSuite guarantee compliance or professional outcomes?",
    directAnswer:
      "No. ZoikoSuite provides structural tools and evidence mechanics to enforce your policies, but compliance responsibility remains with authorized owners.",
    qualifiedDetail:
      "Legal, regulatory, and audit reviews require qualified human approval; automated systems serve to support, rather than replace, governance leadership.",
  },
  {
    id: "faq-10",
    question: "Which deployment and integration options are available?",
    directAnswer:
      "ZoikoSuite supports cloud, private tenant, and hybrid deployment models with comprehensive API and connector options.",
    qualifiedDetail:
      "Deployment targets can be tailored based on your organization's data residency, sovereignty requirements, and existing infrastructure constraints.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 lg:py-24 px-6 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {/* Header Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Eyebrow + Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col space-y-3"
          >
            {/* Eyebrow Header */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-semibold text-[#c5a059]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Category, coexistence, and replacement
            </h2>
          </motion.div>

          {/* Right Column: Paragraph */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#E2E8F0] divide-y divide-[#E2E8F0]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between text-left py-2 group transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] pr-4">
                    {faq.question}
                  </span>
                  <div className="text-[#c5a059] shrink-0">
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
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-4 space-y-3 text-xs sm:text-sm text-[#475569] leading-relaxed max-w-4xl">
                        <p className="font-normal text-[#334155]">
                          {faq.directAnswer}
                        </p>
                        {faq.qualifiedDetail && (
                          <p className="font-normal text-[#64748B]">
                            {faq.qualifiedDetail}{" "}
                            {faq.linkText && faq.linkHref && (
                              <a
                                href={faq.linkHref}
                                className="font-bold text-[#0F476A] underline hover:text-[#0c3955] transition-colors inline-block ml-1"
                              >
                                {faq.linkText}
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
