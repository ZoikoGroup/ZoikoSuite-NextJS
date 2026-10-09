"use client"
import React, { useState } from "react";

interface DisclosureItem {
  id: string;
  code: string;
  title: string;
  description: string;
  exceptionsLabel?: string;
  exceptionsText?: string;
  authorityLabel?: string;
  authorityText?: string;
}

export default function TraceResponsibility() {
  const [activeId, setActiveId] = useState<string>("D1");

  const disclosures: DisclosureItem[] = [
    {
      id: "D1",
      code: "D1",
      title: "Workforce Planning & Capacity Decisions",
      description:
        "Plan workforce decisions with visible accountability, not a claimed forecasting engine.",
      exceptionsLabel: "Exceptions / recovery",
      exceptionsText:
        "Conceptual / Evidence pending / Source unavailable; no live headcount.",
      authorityLabel: "Authority",
      authorityText:
        "Functional process owners, IT/data, Security and applicable policy owners validate real capability and permissions.",
    },
    {
      id: "D2",
      code: "D2",
      title: "Employee Lifecycle & HR Service Handoffs",
      description:
        "Manage lifecycle events smoothly across HR, IT, and department heads.",
    },
    {
      id: "D3",
      code: "D3",
      title: "Payroll Coordination & Change Controls",
      description:
        "Ensure accurate alignment between payroll updates and organizational structure changes.",
    },
    {
      id: "D4",
      code: "D4",
      title: "Policy, Privacy & Employee Trust",
      description:
        "Balance organizational visibility with strict data privacy and compliance standards.",
    },
    {
      id: "D5",
      code: "D5",
      title: "Cross-Functional Approvals & Accountability",
      description:
        "Streamline multi-departmental sign-offs without creating compliance blind spots.",
    },
    {
      id: "D6",
      code: "D6",
      title: "Leadership Reporting & Workforce Evidence",
      description:
        "Provide executives with verified, auditable workforce metrics and supporting evidence.",
    },
  ];

  return (
    <section className="w-full bg-[#F6F5F1] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Top Tag */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
          SIX QUESTION-LED DISCLOSURES
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-12">
          Trace responsibility through the workforce decision.
        </h2>

        {/* Accordion / List Container */}
        <div className="w-full flex flex-col gap-4">
          {disclosures.map((item) => {
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
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Bullet dot & Code */}
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421]"></span>
                      <span className="text-sm sm:text-base font-semibold text-[#C8963D]">
                        {item.code}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#1F2421] tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Expanded Content for D1 (or any active item with extra details) */}
                {isOpen && item.exceptionsText && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 flex flex-col gap-5 border-t border-gray-100 pt-6 mt-2">
                    <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-sm font-semibold text-[#374151]">
                        {item.exceptionsLabel}
                      </h4>
                      <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                        {item.exceptionsText}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-sm font-semibold text-[#374151]">
                        {item.authorityLabel}
                      </h4>
                      <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                        {item.authorityText}
                      </p>
                    </div>
                  </div>
                )}

                {isOpen && !item.exceptionsText && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 border-t border-gray-100 pt-6 mt-2">
                    <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                      {item.description}
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
