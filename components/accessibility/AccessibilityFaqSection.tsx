"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    question: "Are you WCAG 2.2 AA conformant?",
    answer: (
      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#475467] leading-5 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
          WCAG 2.2 Level AA is the design and testing target. Conformance is published only for scopes fully evaluated and approved — and most scopes currently read &quot;verified — partial&quot;.
        </p>
        <p className="text-xs text-[#475467] leading-5 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
          Visual, contrast and reflow conforms. Keyboard, screen reader and forms are partial. Data tables and charts are in remediation. Documents, media and mobile are in testing.{" "}
          <a
            href="#current-status"
            className="text-[#101828] font-semibold underline hover:text-orange-500 transition-colors"
          >
            See the statuses
          </a>
        </p>
      </div>
    ),
  },
  {
    question: "Are you certified accessible?",
    answer: (
      <p className="text-xs text-[#475467] leading-5 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        No. WCAG is not a certification programme — it is a technical standard. Conformance claims are made by content providers, not issued by a third party. We make no claim to certification.
      </p>
    ),
  },
  {
    question: "Do you have an ACR or VPAT?",
    answer: (
      <p className="text-xs text-[#475467] leading-5 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        An ACR following the VPAT format is in preparation and not yet published. A test evidence summary and known-issues register are available on request ahead of that publication.
      </p>
    ),
  },
  {
    question: "What are the current known barriers?",
    answer: (
      <p className="text-xs text-[#475467] leading-5 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        Sixteen open issues: two high, five medium, nine low. The two high-severity items are detailed above. The full register is available on request.
      </p>
    ),
  },
  {
    question: "Why are no fix dates published?",
    answer: (
      <p className="text-xs text-[#475467] leading-5 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        Publishing a date before a fix is approved for release creates a commitment we cannot keep without overclaiming. Dates are published once a fix is approved.
      </p>
    ),
  },
  {
    question: "Do I need an account to report a problem?",
    answer: (
      <p className="text-xs text-[#475467] leading-5 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        No. The reporting form above requires no account, no marketing consent, and no contact details. You can report a barrier entirely anonymously.
      </p>
    ),
  },
  {
    question: "Is accessibility limited to certain plans?",
    answer: (
      <p className="text-xs text-[#475467] leading-5 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        No. Access is never gated. Procurement artifacts may be sales-assisted, but the product&apos;s accessibility itself is not a premium feature.
      </p>
    ),
  },
  {
    question: "What assistive technologies do you test with?",
    answer: (
      <p className="text-xs text-[#475467] leading-5 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        Screen reader testing is conducted on NVDA + Chrome (Windows), JAWS + Chrome (Windows), VoiceOver + Safari (macOS), and VoiceOver + Safari (iOS). The AT coverage matrix image above contains detail on status per combination.
      </p>
    ),
  },
  {
    question: "What about embedded third-party components?",
    answer: (
      <p className="text-xs text-[#475467] leading-5 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        One embedded vendor component has a known keyboard issue (A11Y-2026-0388). A non-embedded equivalent path is provided. Vendor accessibility evidence has been requested; the response is pending.
      </p>
    ),
  },
  {
    question: "Is this your legal accessibility statement?",
    answer: (
      <p className="text-xs text-[#475467] leading-5 font-normal" style={{ fontFamily: "'Archivo', sans-serif" }}>
        This page is our public accessibility disclosure. A separate legal accessibility statement meeting regulatory format requirements (e.g. EN 301 549, EAA) is maintained where mandated.
      </p>
    ),
  },
];

export default function AccessibilityFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-28 flex justify-center">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-10"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 pt-2.5">
            <span className="w-4 h-[1.5px] bg-[#A07A2E]" />
            <span
              className="text-xs font-medium tracking-widest text-[#A07A2E] uppercase leading-5 font-['JetBrains_Mono']"
            >
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          {/* Heading left — subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#101828] leading-[48px] shrink-0"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Conformance, evidence,<br />
              support and scope
            </h2>
            <p
              className="text-[15px] sm:text-base text-[#475467] leading-6 mt-1 max-w-[480px]"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Direct first sentences, then qualified detail. Every answer is<br />
              present in the page source.
            </p>
          </div>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-t border-stone-200 w-full"
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-stone-200">
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`accessibility-faq-answer-${index}`}
                  className="w-full py-4 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span
                    className="text-xs font-bold text-[#101828] leading-5"
                    style={{ fontFamily: "'Archivo', sans-serif" }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="text-orange-500 ml-4 shrink-0 font-mono text-base font-bold"
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`accessibility-faq-answer-${index}`}
                    className="pb-4 pr-6 max-w-[800px]"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
