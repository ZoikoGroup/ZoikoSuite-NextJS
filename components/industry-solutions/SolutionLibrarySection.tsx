"use client";

import React from "react";

interface SolutionPattern {
  number: string;
  title: string;
  description: string;
  roles: string;
  linkText: string;
}

const SOLUTION_PATTERNS: SolutionPattern[] = [
  {
    number: "SOLUTION 01",
    title: "Multi-Entity & Cross-Border Governance",
    description:
      "Govern entity and jurisdiction complexity with explicit authority, coverage states and reconciliation ownership.",
    roles: "Roles: CFO, GC, group controller, tax lead",
    linkText: "Expansion →",
  },
  {
    number: "SOLUTION 02",
    title: "Regulatory & Obligation Management",
    description:
      "Know what is due, why it is due, who owns it, and what evidence supports completion.",
    roles: "Roles: Compliance, risk, GC, program owners",
    linkText: "Critical challenges →",
  },
  {
    number: "SOLUTION 03",
    title: "Audit & Evidence Readiness",
    description:
      "Preserve evidence that the control operated, retrievable without retrospective assembly.",
    roles: "Roles: Internal audit, controller, compliance",
    linkText: "Evidence model →",
  },
  {
    number: "SOLUTION 04",
    title: "Workforce & Payroll Governance",
    description:
      "Govern worker and pay context, approvals and exceptions across entities and jurisdictions.",
    roles: "Roles: CHRO, people ops, payroll, GC",
    linkText: "Workforce boundaries →",
  },
  {
    number: "SOLUTION 05",
    title: "Finance, Tax & Close Control",
    description:
      "Govern finance and tax actions with close dependencies and decision evidence.",
    roles: "Roles: CFO, controller, tax lead, treasury",
    linkText: "CFOs →",
  },
  {
    number: "SOLUTION 06",
    title: "Contracts, Vendors & Third-Party Accountability",
    description:
      "Govern contracts, signatory authority, vendor obligations and dependency exposure.",
    roles: "Roles: GC, procurement, third-party risk",
    linkText: "General Counsel →",
  },
  {
    number: "SOLUTION 07",
    title: "Governed Change, Approvals & Exceptions",
    description:
      "Control material change with authority in the path and exceptions that carry owner and expiry.",
    roles: "Roles: COO, control owners, program leads",
    linkText: "Governance Platform →",
  },
  {
    number: "SOLUTION 08",
    title: "Integration, Migration & Shadow Mode",
    description:
      "Adopt around specialist systems without big-bang replacement risk.",
    roles: "Roles: CIO, architecture, transformation",
    linkText: "Migration & Shadow Mode →",
  },
];

export default function SolutionLibrarySection() {
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
                SOLUTION LIBRARY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xl font-bold tracking-tight leading-[1.15]">
              Eight approved solution patterns
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              The complete catalog. Each has a buyer outcome, the roles it
              serves, and the published destination that carries its detail.
            </p>
          </div>
        </div>

        {/* 4x2 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOLUTION_PATTERNS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#0F476A] border-t-3 border-t-[#0F476A] flex flex-col justify-between"
            >
              <div>
                {/* Solution Number */}
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#A07A2E] block mb-3">
                  {item.number}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0F172A] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Divider */}
                <div className="border-t border-dashed border-gray-200 pt-4 mb-4">
                  <p className="text-[11px] text-gray-500 font-medium">
                    {item.roles}
                  </p>
                </div>

                {/* Link */}
                <a
                  href="#"
                  className="text-xs font-bold text-[#0F476A] hover:text-[#C59B3F] transition-colors inline-flex items-center gap-1"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
