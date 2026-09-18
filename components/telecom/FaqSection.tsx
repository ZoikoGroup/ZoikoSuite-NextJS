"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer?: string;
}

const faqList: FaqItem[] = [
  {
    question: "Is ZoikoSuite an OSS or BSS platform?",
    answer:
      "No. It is a governed business operations layer that sits around the systems running telecom services. OSS, BSS, charging engine, mediation, subscriber management, SIM/eSIM lifecycle, provisioning, network inventory, NOC, RAN/core, roaming clearing, fraud engine, lawful intercept and core billing are all outside scope. See the boundary",
  },
  {
    question: "What does it govern, then?",
    answer:
      "It governs cross-functional commercial obligations, multi-entity contract tracking, operational compliance workflows, and policy metadata mapping across systems of record. It acts as an audit-ready orchestration layer.",
  },
  {
    question: "Are you CPNI or FCC compliant?",
    answer:
      "ZoikoSuite is designed with strict data privacy architectures to support your compliance mandates. However, compliance is a shared operational outcome determined by your specific deployment configuration and regulatory framework.",
  },
  {
    question: "How is protected customer information handled?",
    answer:
      "Protected customer information is strictly compartmentalized with role-based access controls, field-level encryption, and automated audit logging. Data residency options ensure records remain within approved jurisdictions.",
  },
  {
    question: "Does it connect to our network or provisioning systems?",
    answer:
      "No. ZoikoSuite operates strictly outside live network paths and core provisioning systems, preventing any direct operational disruption or interference with active network elements.",
  },
  {
    question: "How do you handle partner obligations?",
    answer:
      "Partner obligations are mapped into structured workflows that track notice windows, SLA milestones, financial commitments, and compliance sign-offs automatically across stakeholder teams.",
  },
  {
    question: "How are network incidents handled?",
    answer:
      "Network incidents are managed within your existing NOC and ITSM toolchains. ZoikoSuite tracks the commercial, contractual, and vendor-accountability aspects arising from incidents rather than handling telemetry or troubleshooting.",
  },
  {
    question: "Can AI touch a subscriber or the network?",
    answer:
      "Never. AI models are strictly bounded to analyzing metadata, drafting documentation summaries, and cross-referencing contract provisions. They have zero execution capability or access to subscribers and network elements.",
  },
  {
    question: "Do MVNOs and full MNOs need different deployments?",
    answer:
      "The core platform architecture is unified, but deployment configurations adapt to your specific operating model, boundary conditions, and existing system integrations.",
  },
  {
    question: "Do you have telecom customers you can reference?",
    answer:
      "Yes. References and case studies across full MNOs, MVNOs, and enterprise infrastructure operators are available upon completion of mutual non-disclosure agreements during the evaluation process.",
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
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xl font-bold tracking-tight leading-[1.15]">
              Scope, coexistence, privacy and AI
            </h2>
          </div>

          <div className="lg:col-span-5 flex items-start w-full">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed w-full">
              Direct first sentences, then qualified detail. Every answer is
              present in the page source.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col border-t border-[#D9D3C7]">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#D9D3C7] py-6 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-base sm:text-lg font-bold text-[#08222F] group-hover:text-[#C59B3F] transition-colors">
                    {item.question}
                  </span>
                  <span className="text-lg font-mono font-bold text-[#C59B3F] ml-4 shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && item.answer && (
                  <div className="mt-4 pr-12">
                    <p className="text-sm text-gray-700 leading-relaxed font-mono">
                      {item.answer}{" "}
                      {item.answer.includes("See the boundary") && (
                        <a
                          href="#"
                          className="text-[#08222F] font-bold underline hover:text-[#C59B3F]"
                        >
                          See the boundary
                        </a>
                      )}
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
