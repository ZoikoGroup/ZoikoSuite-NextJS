"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string[];
  linkText?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Does ZoikoSuite control grid, plant or field infrastructure?",
    answer: [
      "No. Nothing on this page presents ZoikoSuite as controlling operational infrastructure.",
      "Generation, transmission, distribution, treatment, pipelines, substations, meters, field devices, industrial controls, outage restoration, dispatch, protection systems, safety systems and real-time operational networks are all outside scope.",
    ],
    linkText: "See the boundary",
  },
  {
    question: "Does it replace SCADA, OMS, CIS or our asset systems?",
    answer: [
      "No. ZoikoSuite coexists alongside existing operational technology and enterprise asset management systems without replacing SCADA, OMS, CIS, or core ERP infrastructure.",
      "It provides a governance and compliance oversight layer that references these systems of record without altering their authoritative state.",
    ],
  },
  {
    question: "What does it govern, then?",
    answer: [
      "ZoikoSuite governs administrative compliance workflows, third-party vendor and contractor diligence records, audit trails, policy exceptions, and metadata reconciliation.",
      "It ensures complete transparency and traceability across non-operational business processes and regulatory obligations.",
    ],
  },
  {
    question: "How does it handle incidents?",
    answer: [
      "Incidents related to compliance anomalies, lapsed contractor access reviews, or missing documentation are flagged for human review.",
      "The system generates audit-ready decision summaries and change-impact reports, leaving all operational incident response strictly to qualified personnel.",
    ],
  },
  {
    question: "Will it file our regulatory submissions?",
    answer: [
      "No. ZoikoSuite assists in gathering, structuring, and verifying the evidence required for regulatory reviews, but it does not submit filings, communicate directly with regulators, or substitute for legal and compliance judgment.",
    ],
  },
  {
    question:
      "Are you certified against critical infrastructure security frameworks?",
    answer: [
      "Deployment options, platform foundations, and architecture controls are built to adhere to enterprise security standards.",
      "However, specific regulatory certifications or compliance outcomes for your specific footprint depend on your deployment configuration and must be validated through formal commercial agreements.",
    ],
  },
  {
    question: "Can AI touch anything operational?",
    answer: [
      "Never. AI capabilities within ZoikoSuite are strictly bounded to administrative assistance, documentation analysis, exception detection, and drafting summaries.",
      "AI is explicitly prohibited from sending instructions to physical infrastructure, influencing dispatch or safety systems, or executing automated business actions.",
    ],
  },
  {
    question: "How is contractor site access handled?",
    answer: [
      "ZoikoSuite tracks access review cycles, flags overdue diligence or lapsed credentials, and surfaces contractor exceptions across multiple sites for review by authorized personnel.",
      "It does not provision, modify, or revoke physical or digital badges directly.",
    ],
  },
  {
    question: "Can we justify a capital approval years later?",
    answer: [
      "Yes. The platform maintains immutable audit trails linking stage-gate decisions, source documents, and authorizing roles, allowing teams to reconstruct capital approvals and project rationales years into a price control cycle.",
    ],
  },
  {
    question: "Do you have energy or utility customers you can reference?",
    answer: [
      "As reflected in our evidence ladder, no approved customer story or anonymised composite figures are substituted for unverified claims.",
      "Reference availability is provided strictly through approved commercial channels and verified customer records where applicable.",
    ],
  },
];

export default function FrequentlyAskedQuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
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
              Scope, coexistence, security, AI and evidence
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

        {/* Accordion List */}
        <div className="flex flex-col border-t border-[#E6E0D5]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#E6E0D5] py-5 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left group cursor-pointer"
                >
                  <span className="text-base lg:text-lg font-bold text-[#08222F] group-hover:text-[#C59B3F] transition-colors pr-4">
                    {item.question}
                  </span>
                  <span className="text-lg font-mono font-bold text-[#C59B3F] w-6 h-6 flex items-center justify-center shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 flex flex-col gap-3 pr-12 animate-fadeIn">
                    {item.answer.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-xs lg:text-sm text-gray-700 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {item.linkText && (
                      <div className="mt-1">
                        <a
                          href="#"
                          className="text-xs lg:text-sm font-semibold text-[#0F476A] hover:underline inline-flex items-center gap-1"
                        >
                          {item.linkText}
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
