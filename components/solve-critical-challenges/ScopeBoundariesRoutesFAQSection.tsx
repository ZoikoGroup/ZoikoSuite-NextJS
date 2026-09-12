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
    question: "What does \"solve critical challenges\" actually mean?",
    answer: [
      "Governed evaluation and operating support — seeing what needs attention, which sources and policies apply, who may decide, what evidence exists and what the permitted next step is.",
      "It does not mean a guaranteed outcome, a professional conclusion, or automatic resolution of the underlying business problem.",
    ],
    link: { text: "See the direct answer", href: "#" },
  },
  {
    question: "Why do all ten challenges use the same proof framework?",
    answer: [
      "Because governance discipline requires a unified operating model across every functional area. Sources, limitations, proposed findings, required reviewers, human decisions, and immutable evidence records remain consistent whether addressing payroll, financial controls, or regulatory filings.",
    ],
  },
  {
    question: "Do we need to replace our ERP, payroll or contract systems?",
    answer: [
      "No. ZoikoSuite coexists above your existing systems of record. Raw transactions remain in your ERP, payroll platforms, and repositories; ZoikoSuite provides the governing context, sanction validation, and audit evidence trails.",
    ],
  },
  {
    question: "Why can't I click through to a challenge page?",
    answer: [
      "Challenge links are enabled only when the registry records an active published route for that specific capability scope. When pending verification, we provide an exploratory scoping conversation instead.",
    ],
  },
  {
    question: "Does this page pick a challenge based on who I am?",
    answer: [
      "No. Nothing is preselected based on identity, cookie tracking, or browsing behavior. You evaluate and choose the challenge relevant to your operational requirements.",
    ],
  },
  {
    question: "Can ZoikoSuite file our regulatory reports?",
    answer: [
      "No. ZoikoSuite models compliance obligations, schedules, and evidence. Filing submissions remain with authorized internal personnel or designated external filing proxies.",
    ],
  },
  {
    question: "Does Entity Management handle company registrations?",
    answer: [
      "ZoikoSuite tracks intercompany agreements, corporate hierarchies, and officer delegations, but does not serve as a registered corporate agent or perform statutory state filings.",
    ],
  },
  {
    question: "Is there a risk score?",
    answer: [
      "No single synthetic composite score replaces granular compliance evidence. ZoikoSuite presents factual exception states, missing sources, and pending human reviews directly.",
    ],
  },
  {
    question: "Can AI resolve a challenge on its own?",
    answer: [
      "Never. Models synthesize data, detect discrepancies, and prepare findings, but execution authorization and risk assumption require a signed human decision.",
    ],
  },
  {
    question: "Does the cross-challenge scenario end in a resolution?",
    answer: [
      "It results in an explicit readiness determination — either sanctioned for execution with documented evidence or blocked due to stale or missing authoritative sources.",
    ],
  },
];

export default function ScopeBoundariesRoutesFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#FAF8F5] text-[#08222F] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#e2dcce]">
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
              Scope, boundaries, routes and coexistence
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Direct first sentences, then qualified detail. Every answer is present in the page source.
            </p>
          </motion.div>
        </div>

        {/* Seamless FAQ List on #FAF8F5 */}
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
                          <p key={pIdx}>
                            {p}
                            {pIdx === faq.answer.length - 1 && faq.link && (
                              <>
                                {" "}
                                <Link
                                  href={faq.link.href}
                                  className="font-bold underline text-[#08222F] hover:text-[#0F476A] inline"
                                >
                                  {faq.link.text}
                                </Link>
                              </>
                            )}
                          </p>
                        ))}
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
