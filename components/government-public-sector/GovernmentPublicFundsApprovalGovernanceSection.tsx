"use client";

import React from "react";

const items = [
  {
    statusType: "blocked",
    leftBorderColor: "border-l-[#8A3B3B]",
    actionScope: {
      title: "Vendor contract award • APR-2026-0412",
      details: [
        "Agency A • Fund 2026-01 • Program 07",
        "Appropriation period: current fiscal year",
      ],
    },
    authorityBasis: {
      requested: "exceeds contracting officer delegation",
      policy: "statutory delegation v6 - effective Apr 2026",
      segregation: "EVALUATOR EXCLUDED FROM AWARD",
      segregationStyle: "bg-red-50 text-red-800 border-red-200",
    },
    statusEvidence: {
      badge: "BLOCKED – ESCALATION REQUIRED",
      badgeStyle: "bg-red-50 text-red-800 border-red-200",
      evidenceText:
        "Evidence: 4 of 6 • solicitation record and evaluation present",
      footerText:
        "Obligation and payment remain in the financial management system",
    },
  },
  {
    statusType: "approved",
    leftBorderColor: "border-l-[#2A6386]",
    actionScope: {
      title: "Grant disbursement authorization • APR-2026-0455",
      details: [
        "Agency B • Program 14 • Fund 2026-04",
        "Appropriation period: multi-year",
      ],
    },
    authorityBasis: {
      requested: "within program delegation",
      policy: "board delegation v2",
      segregation: "SATISFIED",
      segregationStyle: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    statusEvidence: {
      badge: "APPROVED",
      badgeStyle: "bg-emerald-50 text-emerald-800 border-emerald-200",
      evidenceText:
        "Evidence: decision, rationale and eligibility reference retained",
      footerText: "Disbursement executed in the grants system of record",
    },
  },
];

export default function GovernmentPublicFundsApprovalGovernanceSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                PUBLIC FUNDS AND APPROVAL GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Stewardship evidence at the moment of commitment
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Every approval carries its fund, program, delegation source and
              segregation state — resolved before the decision is offered, not
              reconstructed at audit.
            </p>
          </div>
        </div>

        {/* Rows/Cards Container */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 border border-gray-200 border-l-[4px] ${item.leftBorderColor} shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-6 items-start`}
            >
              {/* Column 1: Action and Scope */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono tracking-wider font-semibold text-gray-400 block mb-1">
                  COMMITMENT AND FUND CONTEXT
                </span>
                <h3 className="text-[14px] font-bold text-[#08222F] leading-snug">
                  {item.actionScope.title}
                </h3>
                <div className="text-[12px] font-mono text-gray-600 space-y-0.5 pt-1">
                  <p>{item.actionScope.details[0]}</p>
                  <p>{item.actionScope.details[1]}</p>
                </div>
              </div>

              {/* Column 2: Authority and Basis */}
              <div className="space-y-1.5 text-[12px] font-mono">
                <span className="text-[10px] font-mono tracking-wider font-semibold text-gray-400 block mb-1">
                  AUTHORITY AND BASIS
                </span>
                <p className="text-gray-700">
                  <span className="text-gray-400">Requested authority:</span>{" "}
                  {item.authorityBasis.requested}
                </p>
                <p className="text-gray-700">
                  <span className="text-gray-400">Delegation source:</span>{" "}
                  {item.authorityBasis.policy}
                </p>
                <div className="pt-2 flex items-center gap-2">
                  <span className="text-gray-400 text-[11px]">
                    Segregation:
                  </span>
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold border ${item.authorityBasis.segregationStyle}`}
                  >
                    {item.authorityBasis.segregation}
                  </span>
                </div>
              </div>

              {/* Column 3: Status and Evidence */}
              <div className="space-y-2 text-[12px] font-mono">
                <span className="text-[10px] font-mono tracking-wider font-semibold text-gray-400 block mb-1">
                  STATUS AND EVIDENCE
                </span>
                <div>
                  <span
                    className={`inline-block px-2.5 py-1 rounded text-[10px] font-semibold border ${item.statusEvidence.badgeStyle}`}
                  >
                    {item.statusEvidence.badge}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed pt-1">
                  {item.statusEvidence.evidenceText}
                </p>
                <p className="text-gray-500 text-[11px] pt-1">
                  {item.statusEvidence.footerText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
