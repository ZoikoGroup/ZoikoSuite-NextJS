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
    question: "What does ZoikoSuite provide for expansion?",
    answer: [
      "A governed way to evaluate and run geographic, entity, regulatory, transaction-driven or scale-driven operating change.",
      "Each pathway connects jurisdiction and source status, professional review, governance and authority, evidence, systems ownership, phased transition and human accountability. Coverage and availability depend on approved sources and configuration.",
    ],
    link: { text: "See the pathways", href: "#" },
  },
  {
    question: "Will ZoikoSuite set up our entity or handle registrations and filings?",
    answer: [
      "No. ZoikoSuite coordinates the operational readiness, policies, controls and evidence workflows above approved local corporate services and regulatory filing agents. Authoritative legal filings and entity setups remain with your registered agents and local statutory bodies.",
    ],
  },
  {
    question: "Do you have coverage for our target country?",
    answer: [
      "Coverage is determined by the availability of authoritative statutory sources, jurisdiction qualification rules, and configured local policies in the Jurisdiction Registry. Review the registry table to verify specific territory readiness.",
    ],
  },
  {
    question: "Why is there no coverage map?",
    answer: [
      "Because graphical territory maps convey false impressions of blanket readiness. ZoikoSuite displays verifiable jurisdiction evidence rows with explicit source timestamps, policy boundaries, and qualification states.",
    ],
  },
  {
    question: "Does the platform give tax, legal or regulatory advice?",
    answer: [
      "No. ZoikoSuite does not provide statutory, tax, legal, or accounting advice. Professional reviews are modeled as explicit tracked objects requiring named responsible external counsel or in-house experts.",
    ],
  },
  {
    question: "What happens when a mandatory source is missing or stale?",
    answer: [
      "The system raises a blocking status in the readiness workbench. Unverified assumptions cannot silently commit into live financial, payroll, or operational workflows without explicit senior exception sign-off.",
    ],
  },
  {
    question: "Can AI mark an expansion gate as ready?",
    answer: [
      "Never. Readiness decisions and activation require human accountability. AI and heuristics can highlight detected changes, inconsistencies, and dependencies, but gating decisions must be signed by named accountable officers.",
    ],
  },
  {
    question: "Does this support M&A?",
    answer: [
      "Yes. The M&A and divestiture pathway provides baseline workstreams for tracking Day 1 and Day 100 transition items, entity separation rules, system cutovers, and interim service level agreements.",
    ],
  },
  {
    question: "Does \"sustainable growth\" mean ESG?",
    answer: [
      "No. In ZoikoSuite, sustainable growth refers to operational scalability, control resilience, authority enforcement, and evidence integrity as entity count and operational complexity expand.",
    ],
  },
  {
    question: "Why are there no customer logos or country counts?",
    answer: [
      "Because generic marketing statistics do not validate your specific jurisdictional compliance. Each expansion pathway is built on verifiable evidence, explicit authority delegations, and factual source health.",
    ],
  },
];

export default function CoverageAdviceAuthorityTransitionFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
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
              Coverage, advice, authority and transition
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

        {/* Seamless FAQ List on #F7F5F0 */}
        <div className="w-full divide-y divide-[#e2dcce] border-y border-[#e2dcce]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="transition-colors duration-150">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 flex items-center justify-between text-left gap-4 hover:opacity-80 transition-opacity focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#08222F]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 flex items-center justify-center w-6 h-6 text-[#c5a059]">
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
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 sm:pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-[960px] space-y-2">
                        {faq.answer.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}

                        {faq.link && (
                          <div className="pt-1">
                            <Link
                              href={faq.link.href}
                              className="text-xs font-semibold text-[#0F476A] hover:text-[#08222F] underline inline-flex items-center gap-1"
                            >
                              {faq.link.text} →
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
