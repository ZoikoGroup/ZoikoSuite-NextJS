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
    question: "What does ZoikoSuite provide for General Counsel?",
    answer: [
      "It connects contracts, obligations, jurisdiction context, policies, delegated authority, human decisions and evidence to governed business execution.",
      "It helps legal and business teams understand what requires review, why it matters and which approved path comes next. ZoikoSuite does not provide legal advice or replace qualified counsel.",
    ],
    link: { text: "See the six-step model →", href: "#how-governed-legal-work-runs" },
  },
  {
    question: "Does ZoikoSuite give legal advice?",
    answer: [
      "Never. ZoikoSuite models compliance context, authority structures, and evidence trails. It does not provide legal opinions, practice law, or substitute for licensed legal professionals.",
    ],
  },
  {
    question: "Does a permission in the product mean someone has authority to approve?",
    answer: [
      "No. Software permissions govern tool access; corporate authority is legal and organizational. ZoikoSuite keeps authority delegations distinct from software privileges.",
    ],
  },
  {
    question: "Does the platform determine legal privilege?",
    answer: [
      "No. Classification labels support organizational data handling and audit discovery, but privilege determinations require human legal judgment by qualified counsel.",
    ],
  },
  {
    question: "Is the evidence legally admissible?",
    answer: [
      "Evidence is attributable and traceable, with an integrity history drawn from two live approved data stores. Admissibility and privilege are legal determinations that no software state can make.",
    ],
  },
  {
    question: "What happens when a jurisdictional source changes?",
    answer: [
      "A change event is detected and recorded as a fact, but no legal conclusion or applicability state shifts until a qualified legal reviewer completes human assessment.",
    ],
  },
  {
    question: "Do you claim coverage for every jurisdiction?",
    answer: [
      "No. Coverage is explicitly declared per jurisdiction and subject matter in the publication registry. Unsupported or pending jurisdictions are never silently marked clear.",
    ],
  },
  {
    question: "How does it handle a missing or conflicting source?",
    answer: [
      "When an authoritative source is missing or conflicting, affected findings are suppressed or downgraded, flagging an explicit exception rather than guessing.",
    ],
  },
  {
    question: "Can we keep our existing contract management system?",
    answer: [
      "Yes. ZoikoSuite coexists above CLMs, ERPs, and document repositories. Your systems of record remain authoritative; ZoikoSuite provides cross-system governance.",
    ],
  },
  {
    question: "Will we have to share confidential matter details to evaluate this?",
    answer: [
      "No. Product evaluations use synthetic governance scenarios and generic structural models. No confidential terms, counter-party data, or privileged material are required.",
    ],
  },
];

export default function GeneralCounselFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

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
            className="lg:col-span-7 flex flex-col text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase font-mono">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Advice, authority, privilege and coverage
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end text-left"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Direct first sentences. Raw qualified detail. Every answer is present in the page context.
            </p>
          </motion.div>
        </div>

        {/* Seamless FAQ List on #FAF8F5 */}
        <div className="w-full divide-y divide-[#e2dcce] border-y border-[#e2dcce]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="transition-colors duration-150 text-left">
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
