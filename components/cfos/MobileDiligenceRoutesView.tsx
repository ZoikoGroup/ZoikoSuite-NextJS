"use client";

import React from "react";
import Link from "next/link";

interface MobileDiligenceCard {
  category: string;
  title?: string;
  items?: string[];
  body?: string;
  subtext?: string;
  buttonText: string;
  buttonStyle: string;
  isHighlight?: boolean;
}

const mobileCards: MobileDiligenceCard[] = [
  {
    category: "TECHNICAL STACK MATURITY",
    items: [
      "Architecture Review",
      "Authoritative Integration",
      "Direct Ledger Feeds",
    ],
    buttonText: "ROUTE 01 REVIEW",
    buttonStyle: "border-emerald-300 bg-emerald-50 text-emerald-700",
  },
  {
    category: "ORGANIZATIONAL SCOPE",
    items: [
      "Entity Structure Map",
      "Delegated Authority Matrix",
      "Policy Exemption Limits",
    ],
    buttonText: "ROUTE 02 REVIEW",
    buttonStyle: "border-emerald-300 bg-emerald-50 text-emerald-700",
  },
  {
    category: "AUDIT TRACEABILITY",
    items: [
      "Statutory Evidence",
      "Cryptographic Audit Trail Generation",
      "Sub-Ledger Integration",
      "Auditor Access Portal",
    ],
    buttonText: "ROUTE 03 · TAX / DUAL SIGN-OFF",
    buttonStyle: "border-amber-300 bg-amber-50 text-amber-800",
  },
  {
    category: "DEMONSTRATED EVIDENCE",
    title: "Demonstrated evidence",
    body: "Real-world implementations demonstrate continuous close verification, zero unexplained variances during statutory audit, and immediate detection of unauthorized changes or stale data.",
    subtext: "Supported by 24 Case Studies",
    buttonText: "STUDIES & CASE VERIFICATION",
    buttonStyle: "border-blue-300 bg-blue-50 text-blue-700",
    isHighlight: true,
  },
  {
    category: "DEFENSIBLE",
    items: [
      "Zero Base Model (No Defaults)",
      "Defensible Assumptions",
      "Risk-Weighted Analysis",
    ],
    buttonText: "DOWNLOAD TEMPLATE (XLSX)",
    buttonStyle: "border-slate-300 bg-slate-100 text-slate-700",
  },
  {
    category: "ASSUMPTION FREE MODEL",
    body: "No synthetic ROI claims are fabricated; all return assertions must be derived from reduced restatement risk, eliminated manual audit rework, and provable balance accuracy across entities.",
    buttonText: "OPEN MODEL IN DATA ROOM",
    buttonStyle: "border-amber-300 bg-amber-50 text-amber-800",
    isHighlight: true,
  },
];

const docPills = ["Sign in", "Documentation", "Support", "System status"];

export default function MobileDiligenceRoutesView() {
  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Risk-Clearance Matrix Card */}
      <div className="w-full rounded-2xl border border-[#14425a] bg-white text-slate-900 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
          <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
            RISK-CLEARANCE MATRIX
          </span>
          <span className="text-[10px] font-mono text-slate-300">
            SEVERITY CRITERIA · KEY ACTIONS
          </span>
        </div>

        {/* 4 Risk Sub-Sections */}
        <div className="p-4 sm:p-6 space-y-4 text-xs font-mono divide-y divide-slate-100">
          {/* Section 1 */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>TAXATION &amp; STATUTORY JURISDICTION RISK</span>
            </div>
            <ul className="text-[11px] text-slate-600 space-y-1 pl-4">
              <li>• All local statutory filings reconciled to live ledger</li>
              <li>• Separation between transfer pricing policy and entries</li>
              <li>• Global minimum tax impact tested against threshold</li>
              <li>• Local accounting firm sign-off records stored in data room</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-1.5 pt-3">
            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>AUTHORITY &amp; SYSTEM LEVEL BREACH OR ABUSE</span>
            </div>
            <ul className="text-[11px] text-slate-600 space-y-1 pl-4">
              <li>• Two signature rule enforced on all bank wires above standard threshold</li>
              <li>• Manager cannot approve transactions involving direct reports</li>
              <li>• System credentials partitioned: read-only vs live operational</li>
              <li>• Off-boarding immediately revokes all system and policy authorizations</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-1.5 pt-3">
            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>CURRENCY &amp; RUNWAY / FORECAST STALE</span>
            </div>
            <ul className="text-[11px] text-slate-600 space-y-1 pl-4">
              <li>• Live conversion rates must be refreshed within 4 hours before close sign-off</li>
              <li>• Group rollup aggregates only on confirmed rate tables (no estimates)</li>
              <li>• Runway and burn calculations require human assumption sign-off</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-1.5 pt-3">
            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <span>RESULT</span>
            </div>
            <ul className="text-[11px] text-slate-600 space-y-1 pl-4">
              <li>• 0 audit findings across 14 statutory entities for past year</li>
              <li>• Proven governance architecture in board and investor data rooms</li>
            </ul>
          </div>
        </div>

        {/* Rose Disclaimer Note */}
        <div className="p-3.5 bg-rose-50/50 border-t border-rose-200/80 text-[11px] text-rose-900 leading-relaxed font-sans">
          <strong>No hypothetical financial model, estimated time savings or software benefit is used as evidence.</strong> Real returns derive from eliminating restatement risk, legal exposure and manual reconciliation rework during external audit.
        </div>
      </div>

      {/* 6 Cards Grid (1 col on mobile, 2 col on sm) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mobileCards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border p-5 flex flex-col justify-between transition-all ${
              card.isHighlight
                ? "border-[#D0AA55]/50 bg-gradient-to-br from-white to-[#FAF6EE] shadow-sm"
                : "border-slate-200/80 bg-white shadow-sm"
            }`}
          >
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                {card.category}
              </div>
              {card.title && (
                <h3 className="text-base font-bold text-[#08222F] mb-2">
                  {card.title}
                </h3>
              )}
              {card.items && (
                <ul className="space-y-1.5 mb-5">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs text-slate-700 flex items-start gap-1.5">
                      <span className="text-[#c5a059]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {card.body && (
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {card.body}
                </p>
              )}
              {card.subtext && (
                <div className="text-[10.5px] font-mono text-slate-400 mb-4">
                  {card.subtext}
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span
                className={`inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider border ${card.buttonStyle}`}
              >
                {card.buttonText}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Documentation Pills Bar */}
      <div className="pt-2">
        <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-500 uppercase block mb-1">
          EXPLORE TECHNICAL DOCUMENTATION:
        </span>
        <h3 className="text-sm font-bold text-[#08222F] mb-3">
          Operational routes, no bans
        </h3>
        <div className="flex flex-wrap gap-2">
          {docPills.map((pill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-800 shadow-xs"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* Custom Route Link */}
      <div className="text-xs text-slate-600">
        Need a custom diligence route?{" "}
        <Link href="#contact" className="font-semibold text-[#0F476A] hover:underline">
          Speak to an expert
        </Link>
      </div>
    </div>
  );
}
