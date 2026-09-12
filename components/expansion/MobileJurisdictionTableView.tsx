"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

interface JurisdictionItem {
  country: string;
  statusBadge: { text: string; color: string };
  scope: string;
  sourceReviewed: string;
  limitations: string;
  readinessReview: string;
  isHighlighted?: boolean;
}

const jurisdictions: JurisdictionItem[] = [
  {
    country: "United Kingdom",
    statusBadge: { text: "✓ QUALIFIED", color: "border-emerald-300 bg-emerald-50 text-emerald-700" },
    scope: "Full entity & payroll coverage v4",
    sourceReviewed: "Gov.UK / HMRC live feed · Q2 2026",
    limitations: "Standard UK SOX",
    readinessReview: "Tax & payroll",
  },
  {
    country: "Germany",
    statusBadge: { text: "✓ QUALIFIED", color: "border-sky-300 bg-sky-50 text-sky-700" },
    scope: "Customer & workforce §3",
    sourceReviewed: "BAFA / BMF feeds · Q1 2026",
    limitations: "Works Council approval required for payroll setup",
    readinessReview: "Compliance",
  },
  {
    country: "Netherlands",
    statusBadge: { text: "■ NOT AVAILABLE", color: "border-rose-300 bg-rose-50 text-rose-700" },
    scope: "No registered entity",
    sourceReviewed: "—",
    limitations: "No configured authoritative feeds for this jurisdiction",
    readinessReview: "■ BLOCKING — See REVIEW-01",
    isHighlighted: true,
  },
  {
    country: "Singapore",
    statusBadge: { text: "▲ PARTIAL REVIEW", color: "border-sky-300 bg-sky-50 text-sky-700" },
    scope: "Asset / commercial",
    sourceReviewed: "ACRA / IRAS · In review 2026",
    limitations: "Coverage active for commercial entities only",
    readinessReview: "Tax lead",
  },
  {
    country: "India",
    statusBadge: { text: "▲ SOURCE QUALIFIED", color: "border-amber-300 bg-amber-50 text-amber-800" },
    scope: "GIC tech center",
    sourceReviewed: "MCA / GSTN feeds · Q1 2026",
    limitations: "Withholding tax regime requires confirmation",
    readinessReview: "Governance",
  },
  {
    country: "Brazil",
    statusBadge: { text: "■ NOT AVAILABLE", color: "border-rose-300 bg-rose-50 text-rose-700" },
    scope: "—",
    sourceReviewed: "—",
    limitations: "Future planned expansion territory",
    readinessReview: "—",
  },
];

const pills = [
  { text: "QUALIFIED", color: "border-emerald-300 bg-emerald-50 text-emerald-700" },
  { text: "PARTIAL", color: "border-sky-300 bg-sky-50 text-sky-700" },
  { text: "PENDING REVIEW (LOCAL)", color: "border-slate-300 bg-slate-50 text-slate-700" },
  { text: "SOURCE MISSING", color: "border-amber-300 bg-amber-50 text-amber-800" },
  { text: "CONFIGURATION REQUIRED", color: "border-indigo-300 bg-indigo-50 text-indigo-700" },
  { text: "NOT AVAILABLE", color: "border-rose-300 bg-rose-50 text-rose-700" },
];

export default function MobileJurisdictionTableView() {
  return (
    <div className="w-full flex flex-col space-y-4">
      {/* Top Banner Warning: No map is displayed on this page */}
      <div className="rounded-xl border border-[#f0d38d] bg-[#FDF6E7] p-3.5 sm:p-4 text-xs text-slate-800 leading-relaxed flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
        <p className="text-[11px] sm:text-xs">
          <strong className="font-semibold text-slate-900">No map is displayed on this page.</strong> Broadly painted regional maps are navigation tools only. The table available explicitly is the primary evidence and must be readable without interpretation. A shaded boundary or overlay surface markings never confirm that an underlying statutory rule may be ignored, so the register is maintained strictly verbatim.
        </p>
      </div>

      {/* Pill Filter Badges */}
      <div className="flex flex-wrap gap-1.5 pb-1">
        {pills.map((pill, idx) => (
          <span
            key={idx}
            className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold border uppercase tracking-wider ${pill.color}`}
          >
            ● {pill.text}
          </span>
        ))}
      </div>

      {/* Interactive Table Container */}
      <div className="w-full rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-xl overflow-hidden">
        {/* Top Dark Bar */}
        <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              JURISDICTION REGISTER
            </span>
            <span className="text-[10px] font-mono text-slate-400">·</span>
            <span className="text-[10px] font-mono tracking-wider text-slate-300 uppercase">
              EXPLICIT EVIDENCE TABLE
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          </div>
        </div>

        {/* Subtitle */}
        <div className="bg-[#F8FAFC] px-4 py-2 border-b border-slate-200 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
          ALL CELLS ARE VERIFIABLE &middot; PHYSICAL DATA STORED WITHIN TERRITORY BOUNDARIES
        </div>

        {/* Scrollable Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-200 text-[9.5px] font-mono font-bold text-slate-400 uppercase bg-white">
                <th className="py-2.5 px-3">JURISDICTION</th>
                <th className="py-2.5 px-3">COVERAGE</th>
                <th className="py-2.5 px-3">SCOPE</th>
                <th className="py-2.5 px-3">EFFECTIVE / LAST REVIEWED</th>
                <th className="py-2.5 px-3">LIMITATIONS</th>
                <th className="py-2.5 px-3 text-right">READINESS REVIEW</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {jurisdictions.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    row.isHighlighted ? "bg-[#FEF9EE]" : "hover:bg-slate-50/80"
                  }`}
                >
                  <td className="py-2.5 px-3 font-semibold text-slate-900">
                    {row.country}
                  </td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold border tracking-wider uppercase ${row.statusBadge.color}`}
                    >
                      {row.statusBadge.text}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-700">
                    {row.scope}
                  </td>
                  <td className="py-2.5 px-3 font-mono text-[10.5px] text-slate-600">
                    {row.sourceReviewed}
                  </td>
                  <td className="py-2.5 px-3 text-slate-600 text-[10.5px]">
                    {row.limitations}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-[10px]">
                    {row.isHighlighted ? (
                      <span className="inline-block px-1.5 py-0.5 rounded border border-rose-300 bg-rose-50 text-rose-700 font-bold">
                        {row.readinessReview}
                      </span>
                    ) : (
                      <span className="text-slate-800">{row.readinessReview}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Callout Notice at bottom */}
        <div className="p-3.5 bg-amber-50/70 border-t border-amber-200/80 flex items-start gap-2 text-[10.5px] text-amber-950 leading-relaxed">
          <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Validation blocker for Non-permitted items:</strong> A sovereign country code that is missing a clear audit trail may cause the entire transition gate to freeze pending review. Specific exception approval is logged on the platform data room, and the resolution route is documented through an authenticated technical gateway.
          </p>
        </div>
      </div>

      {/* Monospace Note under table */}
      <p className="text-[10px] font-mono text-slate-500 leading-relaxed pt-1">
        Verifiable canonical sources include government and statutory tax authorities, local employment frameworks, GDPR/data-residency portals, or approved commercial partners via secure gateway integrations. Rates are approved source-policy, with expirations integrity.
      </p>
    </div>
  );
}
