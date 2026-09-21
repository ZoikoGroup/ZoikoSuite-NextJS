"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Are all ZoikoSuite internal policies public?",
    answer: (
      <>
        No. Some policies or standards are restricted because they contain
        security-sensitive or confidential operational detail. Public metadata
        and a controlled evidence request explain what&apos;s available.
      </>
    ),
  },
  {
    question: "How do I know which policy version is current?",
    answer: (
      <>
        Every policy record shows its version, effective date, and status.
        Superseded versions remain distinguishable and traceable, so the
        current published version is never ambiguous.
      </>
    ),
  },
  {
    question: "Do published policies prove the controls are operating?",
    answer: (
      <>
        No. A published policy proves an approved rule exists. The evidence
        trail shows whether the related process operated, and independent
        assurance is shown separately.
      </>
    ),
  },
  {
    question:
      "Where are Terms of Service, Privacy Policy, and other legal documents?",
    answer: (
      <>
        Legal documents are governed by Legal and cross-linked from this page,
        not duplicated. One canonical document owns each piece of content.
      </>
    ),
  },
  {
    question: "Can a policy apply differently by region or deployment?",
    answer: (
      <>
        Yes. Applicability is part of the policy record — defined by product,
        legal entity, deployment, jurisdiction, audience, and explicit
        exclusions — not a footnote.
      </>
    ),
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[880px] flex flex-col gap-2.5">
        {/* Header */}
        <div className="self-stretch pb-10 flex flex-col gap-4">
          <span
            className="text-[#A7852B] text-xs font-normal leading-4 tracking-wider"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            12 / FAQ
          </span>
          <h2
            className="text-[#0D2636] text-3xl md:text-4xl font-semibold leading-10"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="self-stretch bg-white rounded-xl border border-[#DBE3E8] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 flex justify-between items-center gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[#0D2636] text-base font-semibold"
                    style={{ fontFamily: "'Archivo', sans-serif" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="text-[#A7852B] text-lg font-semibold leading-none shrink-0 w-4 text-center"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p
                      className="text-[#3E5A6B] text-sm font-normal leading-6"
                      style={{ fontFamily: "'Archivo', sans-serif" }}
                    >
                      {faq.answer}
                    </p>
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