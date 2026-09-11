"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";

interface JurisdictionRow {
  jurisdiction: string;
  statusBadge: { text: string; style: string };
  regime: string;
  effective: string;
  lastReviewed: string;
  profReviewBadge?: { text: string; style: string };
  evidenceBadge?: { text: string; style: string };
  rowHighlight?: string;
}

const jurisdictionRows: JurisdictionRow[] = [
  {
    jurisdiction: "United Kingdom",
    statusBadge: { text: "GOVERNED", style: "border-emerald-300 bg-emerald-50 text-emerald-700" },
    regime: "Internal policy standard v4",
    effective: "Apr 2026",
    lastReviewed: "22 Jul 2026 · Compliance",
    profReviewBadge: { text: "NOT REQUIRED", style: "border-blue-200 bg-blue-50 text-blue-700" },
    evidenceBadge: { text: "COMPLETE", style: "border-emerald-300 bg-emerald-50 text-emerald-700" },
  },
  {
    jurisdiction: "Germany",
    statusBadge: { text: "PARTIAL", style: "border-blue-300 bg-blue-50 text-blue-700" },
    regime: "Statutory report v2",
    effective: "Jan 2026",
    lastReviewed: "09 Jun 2026 · Tax Advisor",
    profReviewBadge: { text: "REQUIRED", style: "border-amber-300 bg-amber-50 text-amber-800 font-bold" },
    evidenceBadge: { text: "DEFICIENT", style: "border-amber-300 bg-amber-50 text-amber-800" },
  },
  {
    jurisdiction: "India",
    statusBadge: { text: "REVIEW", style: "border-amber-300 bg-amber-50 text-amber-800 font-bold" },
    regime: "Direct inquiry",
    effective: "Nov 2025",
    lastReviewed: "16 Feb 2026 · Unassigned",
    profReviewBadge: { text: "PENDING", style: "border-amber-300 bg-amber-50 text-amber-800" },
    evidenceBadge: { text: "OPEN", style: "border-rose-300 bg-rose-50 text-rose-700 font-bold" },
    rowHighlight: "bg-amber-50/70",
  },
  {
    jurisdiction: "Singapore",
    statusBadge: { text: "CONFIGURATION REQUIRED", style: "border-slate-300 bg-slate-100 text-slate-700" },
    regime: "Local statute",
    effective: "Feb 2026",
    lastReviewed: "02 Jan 2026 · Tax Lead",
    profReviewBadge: { text: "NOT REQUIRED", style: "border-blue-200 bg-blue-50 text-blue-700" },
    evidenceBadge: { text: "PENDING", style: "border-amber-300 bg-amber-50 text-amber-800" },
  },
  {
    jurisdiction: "Brazil",
    statusBadge: { text: "NOT APPLICABLE", style: "border-rose-200 bg-rose-50 text-rose-700" },
    regime: "—",
    effective: "—",
    lastReviewed: "—",
  },
];

const coverageStateTags = [
  { label: "Governed", color: "bg-emerald-500" },
  { label: "Partial", color: "bg-blue-500" },
  { label: "Review required", color: "bg-amber-500" },
  { label: "Configuration required", color: "bg-slate-400" },
  { label: "Not applicable", color: "bg-slate-300" },
  { label: "Blocked", color: "bg-rose-500" },
];

export default function MobileJurisdictionStatusTable() {
  return (
    <div className="w-full flex flex-col pt-2">
      {/* 6 Coverage State Tags */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-5">
        {coverageStateTags.map((state, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border border-slate-200 bg-white text-slate-700 shadow-2xs"
          >
            <span className={`w-2 h-2 rounded-full ${state.color}`} />
            <span>{state.label}</span>
          </span>
        ))}
      </div>

      {/* Regional Status Summary Card */}
      <div className="w-full rounded-2xl border border-slate-200/90 bg-white shadow-xl overflow-hidden mb-4">
        {/* Dark Header */}
        <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#1c5577]">
          <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
            OBLIGATION AND JURISDICTION REGISTER — REGIONAL STATUS SUMMARY
          </span>
          <MoreHorizontal className="w-4 h-4 text-slate-400" />
        </div>

        {/* Sub Header */}
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <span className="text-[10px] font-mono font-bold text-slate-500 tracking-wider uppercase">
            EVENT POLICIES AND ACTIONS — COVERAGE MATRIX TRAFFIC LIGHTING AND AUDITOR AUDIT
          </span>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-slate-200 text-[9.5px] font-mono font-bold text-slate-500 uppercase bg-slate-50/50">
                <th className="py-2.5 px-3.5">JURISDICTION</th>
                <th className="py-2.5 px-3.5">STATUS</th>
                <th className="py-2.5 px-3.5">REGIME</th>
                <th className="py-2.5 px-3.5">EFFECTIVE</th>
                <th className="py-2.5 px-3.5">LAST REVIEWED</th>
                <th className="py-2.5 px-3.5">PROFESSIONAL REVIEW</th>
                <th className="py-2.5 px-3.5">EVIDENCE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {jurisdictionRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-slate-50/90 transition-colors ${
                    row.rowHighlight || ""
                  }`}
                >
                  <td className="py-3 px-3.5 font-bold text-slate-900">
                    {row.jurisdiction}
                  </td>
                  <td className="py-3 px-3.5">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-bold border ${row.statusBadge.style}`}
                    >
                      {row.statusBadge.text}
                    </span>
                  </td>
                  <td className="py-3 px-3.5 text-slate-700 font-medium">
                    {row.regime}
                  </td>
                  <td className="py-3 px-3.5 text-slate-500 font-mono text-[10px]">
                    {row.effective}
                  </td>
                  <td className="py-3 px-3.5 text-slate-600">
                    {row.lastReviewed}
                  </td>
                  <td className="py-3 px-3.5">
                    {row.profReviewBadge ? (
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-semibold border ${row.profReviewBadge.style}`}
                      >
                        {row.profReviewBadge.text}
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                  <td className="py-3 px-3.5">
                    {row.evidenceBadge ? (
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-semibold border ${row.evidenceBadge.style}`}
                      >
                        {row.evidenceBadge.text}
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card Footer Note */}
        <div className="bg-slate-50/80 px-4 py-2.5 border-t border-slate-200">
          <p className="text-[10.5px] text-slate-500 leading-relaxed">
            A jurisdiction without a bar or state is not &quot;in compliance&quot;. It is not tracked, and the interface is clear about it — so that no gap escapes governance notice. Explicit omission beats false reassurance.
          </p>
        </div>
      </div>

      {/* Professional Boundary Callout */}
      <div className="rounded-xl border border-amber-200 bg-[#FFFDF5] p-4 text-xs text-amber-900 leading-relaxed shadow-2xs flex items-start gap-2.5">
        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1" />
        <p>
          <strong className="font-bold">Professional boundary.</strong> ZoikoSuite does not provide legal, tax, accounting, audit or regulatory advice, and does not guarantee compliance or any regulated outcome. Qualified professionals remain responsible for regulated judgment.
        </p>
      </div>
    </div>
  );
}
