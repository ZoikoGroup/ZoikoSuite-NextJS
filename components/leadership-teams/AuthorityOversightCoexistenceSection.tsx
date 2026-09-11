"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

interface AccordionItem {
  question: string;
  answerParagraphs: string[];
  link?: {
    text: string;
    href: string;
  };
}

const faqItems: AccordionItem[] = [
  {
    question: "What does ZoikoSuite give a leadership team that a dashboard does not?",
    answerParagraphs: [
      "A dashboard tells you the status of something after the fact. It cannot tell you who approved what, under what authority, what policy applied, what evidence accompanied it, and whether the record can be altered. A dashboard shows you the weather; ZoikoSuite gives you the climate.",
      "A single source of truth is not an improvement if it is not governed. Every record in ZoikoSuite has provenance: who created it, who signed it off, and who verified it is preserved.",
    ],
    link: {
      text: "Read the overview",
      href: "/platform-overview",
    },
  },
  {
    question: "Does executive/board governance require us to approve?",
    answerParagraphs: [
      "No. ZoikoSuite does not replace executive discretion or force rigid approval gates on routine operational flows. Instead, it defines clear authority boundaries and evidence requirements, ensuring that when an approval is legally or institutionally mandated, it is verified against active policy before execution.",
    ],
  },
  {
    question: "Can internal audit and the audit committee have their own direct access to technical evidence?",
    answerParagraphs: [
      "Yes. ZoikoSuite provides dedicated, read-only inspection access specifically engineered for internal auditors, external audit partners, and audit committee members. They can verify cryptographic signatures, raw logs, and source evidence directly without requesting manual extracts from operations.",
    ],
  },
  {
    question: "Do we need to replace our existing systems first?",
    answerParagraphs: [
      "No. ZoikoSuite operates as a coexistence and governance fabric above your existing enterprise architecture. Your operational systems of record—ERP, CRM, HRIS, and treasury engines—remain authoritative for transaction execution, while ZoikoSuite provides cross-functional context, policy gating, and immutable decision journals.",
    ],
  },
  {
    question: "How is jurisdiction coverage represented?",
    answerParagraphs: [
      "Jurisdiction coverage is represented across six explicit, empirical states—never through green inference or assumed cross-border equivalence. Every entity, subsidiary, and operating node displays exact regulatory standing, local statutory requirements, and real-time compliance posture.",
    ],
  },
  {
    question: "Is ZoikoSuite's audit certification legally admissible?",
    answerParagraphs: [
      "Yes. Every decision packet and journal record is cryptographically sealed with immutable timestamps and digital signatures adhering to international evidentiary standards (including ISO/IEC 27001, SOC 2 Type II, and Federal Rules of Evidence compliance).",
    ],
  },
  {
    question: "Will leadership teams require a specialist in data control on their board?",
    answerParagraphs: [
      "No. ZoikoSuite was specifically architected to synthesize complex underlying data, technical logs, and regulatory telemetry into plain-English executive briefs. Board members and senior executives can review clarity of accountability and risk posture in seconds without requiring specialized data engineers.",
    ],
  },
  {
    question: "Why are some decision making-issues the fatal kind now?",
    answerParagraphs: [
      "Regulatory scrutiny across corporate governance, AI usage, cross-border data transfers, and ESG disclosures has shifted from corporate entity fines to individual executive liability. A single unevidenced executive decision or unverified policy exception now carries personal regulatory exposure.",
    ],
  },
  {
    question: "Are the executive briefs and decision records audit-proof?",
    answerParagraphs: [
      "Yes. Executive briefs and decision records are strictly decoupled and stored in tamper-proof cryptographic ledgers. Once finalized, neither administrators nor executives can modify historical context, policy citations, or signed participant records.",
    ],
  },
  {
    question: "Does ZoikoSuite guarantee full compliance or regulatory approval?",
    answerParagraphs: [
      "ZoikoSuite guarantees that every action taken, evidenced, and reported within the platform strictly adheres to your configured policies and verifiable legal boundaries. While ultimate statutory approval rests with regulatory authorities, ZoikoSuite provides the complete evidentiary defense necessary to satisfy rigorous inquiry.",
    ],
  },
];

export default function AuthorityOversightCoexistenceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-16 sm:py-24 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
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
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase font-mono">
                GOVERNANCE, AUDIT, COEXISTENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08222F] leading-tight">
              Authority, oversight, coexistence and boundaries
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
              Three first sentences, manageable detail, 2-sec answers in plain English page section.
            </p>
          </motion.div>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-[#e2ded5]">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-[#e2ded5] transition-colors duration-200"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between text-left gap-4 focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-[17px] font-semibold text-[#08222F] group-hover:text-[#185d85] transition-colors leading-snug">
                    {item.question}
                  </span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center text-[#c5a059] transition-transform duration-200">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pb-8 pt-1 pr-4 sm:pr-12 text-sm sm:text-[15px] text-slate-600 leading-relaxed flex flex-col gap-3">
                        {item.answerParagraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}

                        {item.link && (
                          <div className="pt-2">
                            <Link
                              href={item.link.href}
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                            >
                              <span>{item.link.text}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
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
