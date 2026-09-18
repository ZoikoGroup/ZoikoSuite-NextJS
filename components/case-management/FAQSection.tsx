import React from "react";

const faqData = [
  {
    question: "What is ZoikoShield Case Management?",
    answer:
      "A conditional destination for investigation, evidence, communications and decision history.",
  },
  {
    question: "Is Case Management available now?",
    answer: "CONDITIONAL; availability depends on readiness.",
  },
  {
    question: "Does a case mean incident confirmed?",
    answer:
      "No. It organizes context and history and does not establish compromise or causality.",
  },
  {
    question: "What evidence is stored?",
    answer:
      "Only exact implemented behavior may be described; Evidence Ledger remains authoritative.",
  },
  {
    question: "What communication tools?",
    answer:
      "The source does not name channels; this page does not claim email, chat, threads or templates.",
  },
  {
    question: "Can a case trigger response automatically?",
    answer: "Do not claim this. Governed Response is separate and conditional.",
  },
  {
    question: "Does Case Management have SLAs?",
    answer: "The source specifies none.",
  },
  {
    question: "Where is live service health?",
    answer: "System Status is authoritative.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-7 sm:px-14 md:px-28 py-16 bg-[#F7F5F0] flex flex-col justify-start items-start gap-8 overflow-hidden">
      {/* Section Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3.5">
        <div className="inline-flex justify-start items-center gap-2.5">
          <div className="w-5 h-0.5 bg-[#C44242]" />
          <span className="text-[#C44242] text-xs font-medium font-['JetBrains_Mono'] uppercase tracking-wider">
            FAQ · #faq
          </span>
        </div>
        <h2 className="w-full text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight sm:leading-10">
          Clear answers. No invented capability.
        </h2>
      </div>

      {/* FAQ Items List */}
      <div className="w-full flex flex-col justify-start items-start">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="w-full py-5 border-b border-[#0A2029]/10 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-10 overflow-hidden"
          >
            <h3 className="flex-1 text-slate-900 text-lg font-extrabold font-['Hanken_Grotesk']">
              {item.question}
            </h3>
            <p className="flex-1 text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
