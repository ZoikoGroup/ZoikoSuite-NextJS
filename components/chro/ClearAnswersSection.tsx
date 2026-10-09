"use client"
import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function ClearAnswersSection() {
  const [activeId, setActiveId] = useState<string>("q1");

  const faqs: FaqItem[] = [
    {
      id: "q1",
      question: "Is this an HRIS or payroll system?",
      answer:
        "No, this is an orchestration and governance layer designed to trace workforce decisions and responsibilities across systems without replacing your underlying HRIS or payroll platforms.",
    },
    {
      id: "q2",
      question: "Does it track employee productivity?",
      answer:
        "No, it focuses on governance, policy checkpoints, and cross-functional handoffs rather than intrusive employee activity monitoring or productivity tracking.",
    },
    {
      id: "q3",
      question: "Can HR calculate or remit pay here?",
      answer:
        "No, financial transactions, payroll calculations, and funds movement remain strictly owned by authorized payroll and finance source systems.",
    },
    {
      id: "q4",
      question: "Are approvals implemented?",
      answer:
        "Yes, structured multi-departmental approvals and accountability boundaries are explicitly enforced and auditable.",
    },
    {
      id: "q5",
      question: "Can leadership inspect all employee records?",
      answer:
        "No, leadership oversight is minimized and governed by policy, ensuring leaders review verified evidence and metrics without raw personnel record exposure.",
    },
    {
      id: "q6",
      question: "How do we evaluate it?",
      answer:
        "Evaluation is conducted through structured review questions, policy checkpoints, and transparent cross-functional alignment.",
    },
  ];

  return (
    <section className="w-full bg-[#F6F5F1] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-12">
          Clear answers before evaluation.
        </h2>

        {/* Questions List Container */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`w-full bg-white rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden shadow-sm ${
                  isOpen
                    ? "border-gray-300 ring-1 ring-gray-200"
                    : "border-black/5 hover:border-gray-300"
                }`}
              >
                <div className="p-6 sm:p-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Bullet dot */}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421]"></span>
                    {/* Question */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#1F2421] tracking-tight">
                      {item.question}
                    </h3>
                  </div>
                </div>

                {/* Expanded Answer */}
                {isOpen && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 border-t border-gray-100 pt-6 mt-2">
                    <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                      {item.answer}
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
