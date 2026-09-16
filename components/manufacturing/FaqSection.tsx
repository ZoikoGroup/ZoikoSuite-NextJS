"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string[];
  link?: { text: string; href: string };
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Does ZoikoSuite control machinery or production equipment?",
    answer: [
      "No. No CTA, illustration or UI mockup suggests that ZoikoSuite sends control commands to production assets.",
      "PLCs, SCADA and DCS, robots, machine tools, safety-instrumented systems, setpoints, recipes, production execution, shop-floor dispatch, inspection execution, warehouse movements and maintenance work orders are all outside scope.",
    ],
    link: { text: "See the OT safety rule", href: "#" },
  },
  {
    question: "Does it replace our ERP, MES, PLM or QMS?",
    answer: [
      "No. ZoikoSuite coexists with your existing enterprise and plant-floor systems, acting as a governance and verification layer rather than a system of record replacement.",
    ],
  },
  {
    question: "What does it govern, then?",
    answer: [
      "It governs supplier obligations, contract compliance, workflow metadata, and human-in-the-loop review processes without ever altering authoritative source truth in connected systems.",
    ],
  },
  {
    question: "Are you ISA/IEC 62443 or NIST certified?",
    answer: [
      "ZoikoSuite is built with architectural alignment to stringent security and control frameworks, but specific certifications are subject to commercial documentation and deployment scope.",
    ],
  },
  {
    question: "Does it perform quality inspection or determine conformance?",
    answer: [
      "No. ZoikoSuite never determines quality disposition, regulatory compliance, or product conformance. All critical evaluations remain strictly under human engineering judgment.",
    ],
  },
  {
    question: "Will it file our environmental or regulatory reports?",
    answer: [
      "No. ZoikoSuite may draft summaries or aggregate data for human review, but it never approves, authorizes, or executes regulatory filings or business actions autonomously.",
    ],
  },
  {
    question: "Can AI touch anything on the plant floor?",
    answer: [
      "No. The AI boundary is unambiguous: it is strictly prohibited from sending any instruction to a machine, control system, or production asset, or influencing safety systems and recipes.",
    ],
  },
  {
    question: "How do supplier risk labels work?",
    answer: [
      "Supplier risk labels prioritize exceptions and surface anomalies based on configured business expectations, providing transparency with provenance and confidence scores for human reviewers.",
    ],
  },
  {
    question: "Do we have to roll out to every plant at once?",
    answer: [
      "No. Adoption is progressive and modular, allowing you to deploy by specific site, system, or workflow boundary according to your operational readiness.",
    ],
  },
  {
    question: "Do you have manufacturing customers you can reference?",
    answer: [
      "No approved manufacturing customer story exists. No anonymised composite, plant count, downtime figure or representative outcome is substituted.",
    ],
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Scope, coexistence, OT, AI and evidence
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col border-t border-gray-300">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-300 py-6 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left cursor-pointer group"
                >
                  <span className="text-base lg:text-lg font-bold text-[#08222F] group-hover:text-[#C59B3F] transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-xl font-mono text-[#C59B3F] ml-4 shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 flex flex-col gap-3 pr-8">
                    {faq.answer.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className={`text-sm lg:text-base leading-relaxed ${
                          pIdx === 0
                            ? "font-medium text-[#08222F]"
                            : "text-gray-600"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                    {faq.link && (
                      <div className="mt-2">
                        <a
                          href={faq.link.href}
                          className="text-xs font-mono font-bold uppercase tracking-wider text-[#08222F] underline hover:text-[#C59B3F] transition-colors"
                        >
                          {faq.link.text}
                        </a>
                      </div>
                    )}
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
