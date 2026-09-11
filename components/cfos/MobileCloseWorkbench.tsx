"use client";

import React from "react";
import { MoreHorizontal, Info } from "lucide-react";

interface CloseItem {
  dependency: string;
  entity: string;
  source: string;
  prerequisite: { text: string; color: string };
  evidence: { text: string; color: string };
  owner: string;
  blocking: string;
  status: { text: string; color: string };
  isHighlighted?: boolean;
}

const closeItems: CloseItem[] = [
  {
    dependency: "Bank reconciliation",
    entity: "Northstar UK",
    source: "Treasury portal 8",
    prerequisite: { text: "✓ RECONCILED", color: "border-emerald-300 bg-emerald-50 text-emerald-700" },
    evidence: { text: "✓ ATTACHED", color: "border-emerald-300 bg-emerald-50 text-emerald-700" },
    owner: "Treasury",
    blocking: "None",
    status: { text: "READY", color: "border-emerald-300 bg-emerald-50 text-emerald-700" },
  },
  {
    dependency: "Payables cut-off",
    entity: "Northstar UK",
    source: "Procurement platform",
    prerequisite: { text: "✓ VERIFIED", color: "border-emerald-300 bg-emerald-50 text-emerald-700" },
    evidence: { text: "▲ 1 MISSING", color: "border-rose-300 bg-rose-50 text-rose-700" },
    owner: "Payables",
    blocking: "Supplier verification outstanding",
    status: { text: "PENDING", color: "border-amber-300 bg-amber-50 text-amber-800" },
  },
  {
    dependency: "Intercompany elimination",
    entity: "Group",
    source: "ERP ledger",
    prerequisite: { text: "■ CONFLICT", color: "border-rose-300 bg-rose-50 text-rose-700" },
    evidence: { text: "★ AUDIT PACK", color: "border-amber-300 bg-amber-50 text-amber-800" },
    owner: "Controller",
    blocking: "Unresolved legal discount policy conflict",
    status: { text: "BLOCKED", color: "border-rose-300 bg-rose-50 text-rose-700" },
    isHighlighted: true,
  },
  {
    dependency: "Revenue cut-off",
    entity: "Northstar UK",
    source: "Billing system",
    prerequisite: { text: "✓ VERIFIED", color: "border-emerald-300 bg-emerald-50 text-emerald-700" },
    evidence: { text: "✓ ATTACHED", color: "border-emerald-300 bg-emerald-50 text-emerald-700" },
    owner: "Revenue Accounting",
    blocking: "None",
    status: { text: "READY", color: "border-emerald-300 bg-emerald-50 text-emerald-700" },
  },
  {
    dependency: "Tax provision input",
    entity: "Northstar Singapore",
    source: "Direct statutory filing",
    prerequisite: { text: "▲ UNDER REVIEW", color: "border-amber-300 bg-amber-50 text-amber-800" },
    evidence: { text: "▲ NOT ATTACHED", color: "border-rose-300 bg-rose-50 text-rose-700" },
    owner: "Unassigned",
    blocking: "Federal provision missing",
    status: { text: "BLOCKED", color: "border-rose-300 bg-rose-50 text-rose-700" },
  },
];

export default function MobileCloseWorkbench() {
  return (
    <div className="w-full flex flex-col space-y-4">
      {/* Workbench Card */}
      <div className="w-full rounded-2xl border border-[#14425a] bg-white text-slate-900 shadow-xl overflow-hidden">
        {/* Header Bar */}
        <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              CLOSE WORKBENCH
            </span>
            <span className="text-[10px] font-mono text-slate-300">
              JUL 2026
            </span>
            <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-semibold text-[#b3821a] bg-[#fdf6e7] border border-[#f0d38d]">
              ILLUSTRATIVE DATA
            </span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-slate-400" />
        </div>

        {/* Subheader */}
        <div className="bg-[#F8FAFC] px-4 py-2.5 border-b border-slate-200">
          <span className="text-[10px] font-mono font-bold text-slate-600 tracking-wider uppercase">
            PRE-REQUISITE / PRIMARY DEPENDENCY MATRIX · 5 OF 12 ITEMS
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 text-[9.5px] font-mono font-bold text-slate-400 uppercase bg-white">
                <th className="py-2.5 px-3">DEPENDENCY</th>
                <th className="py-2.5 px-3">ENTITY</th>
                <th className="py-2.5 px-3">SOURCE</th>
                <th className="py-2.5 px-3">PREREQUISITE</th>
                <th className="py-2.5 px-3">EVIDENCE</th>
                <th className="py-2.5 px-3">OWNER</th>
                <th className="py-2.5 px-3">BLOCKING</th>
                <th className="py-2.5 px-3 text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {closeItems.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    row.isHighlighted ? "bg-[#FEF9EE]" : "hover:bg-slate-50/80"
                  }`}
                >
                  <td className="py-2.5 px-3 font-semibold text-slate-900">
                    {row.dependency}
                  </td>
                  <td className="py-2.5 px-3 text-slate-600 font-normal">
                    {row.entity}
                  </td>
                  <td className="py-2.5 px-3 text-slate-600 font-normal">
                    {row.source}
                  </td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border ${row.prerequisite.color}`}
                    >
                      {row.prerequisite.text}
                    </span>
                  </td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border ${row.evidence.color}`}
                    >
                      {row.evidence.text}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-700 font-medium">
                    {row.owner}
                  </td>
                  <td className="py-2.5 px-3 text-slate-600 text-[10.5px]">
                    {row.blocking}
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border ${row.status.color}`}
                    >
                      {row.status.text}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Callout Box */}
      <div className="flex items-start gap-2.5 p-3.5 sm:p-4 rounded-xl border border-blue-200/80 bg-blue-50/70 text-[11px] sm:text-xs text-slate-700 leading-relaxed">
        <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <p>
          <strong className="font-semibold text-slate-900">Close readiness is not audit opinion.</strong> This view is for internal closure and pre-audit readiness. Final assurance requires statutory consultation and external firm sign-off, and this system is agnostic to whatever external account treatment or compliance applies. The process will generate the audit evidence for whatever external parties request.
        </p>
      </div>
    </div>
  );
}
