"use client";

import React from "react";
import { MoreHorizontal, Info } from "lucide-react";

interface AdjustmentItem {
  id: string;
  action: string;
  entity: string;
  amount: string;
  reason: string;
  actionClass: string;
  authority: string;
  statusText: string;
  statusStyle: string;
  isHighlighted?: boolean;
}

const adjustments: AdjustmentItem[] = [
  {
    id: "ADJ-00428",
    action: "Customer balance adj",
    entity: "Northstar UK",
    amount: "GBP 85,250",
    reason: "All items",
    actionClass: "Credit note",
    authority: "Primary controller authority",
    statusText: "✓ VERIFIED",
    statusStyle: "border-emerald-300 bg-emerald-50 text-emerald-700",
  },
  {
    id: "ADJ-00756",
    action: "Customer balance adj",
    entity: "Northstar UK",
    amount: "GBP 124,500",
    reason: "All items",
    actionClass: "Write-off",
    authority: "■ PENDING: $100K DUAL SIGN-OFF",
    statusText: "▲ IN REVIEW",
    statusStyle: "border-amber-300 bg-amber-50 text-amber-800",
    isHighlighted: true,
  },
  {
    id: "ADJ-00912",
    action: "Customer write-off - part",
    entity: "Northstar GmbH",
    amount: "EUR 53,400",
    reason: "All items",
    actionClass: "Dispute hold",
    authority: "Head of revenue ops",
    statusText: "✓ VERIFIED",
    statusStyle: "border-emerald-300 bg-emerald-50 text-emerald-700",
  },
  {
    id: "ADJ-00412",
    action: "Customer balance adj - AR",
    entity: "Northstar US",
    amount: "USD 9,200",
    reason: "All items",
    actionClass: "Return adjustment",
    authority: "Revenue operations",
    statusText: "✓ VERIFIED",
    statusStyle: "border-emerald-300 bg-emerald-50 text-emerald-700",
  },
];

export default function MobileAdjustmentsAndWriteOffsView() {
  return (
    <div className="w-full flex flex-col space-y-4">
      {/* Governed Adjustments Card */}
      <div className="w-full rounded-2xl border border-[#14425a] bg-white text-slate-900 shadow-xl overflow-hidden">
        {/* Header Bar */}
        <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              GOVERNED ADJUSTMENTS
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
            GOVERNANCE ACTION INITIAL CLASS · 4 TYPES / REASON AND CRITERIA HIERARCHY
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 text-[9.5px] font-mono font-bold text-slate-400 uppercase bg-white">
                <th className="py-2.5 px-3">TRANSACTION</th>
                <th className="py-2.5 px-3">ACTION</th>
                <th className="py-2.5 px-3">ENTITY</th>
                <th className="py-2.5 px-3">AMOUNT</th>
                <th className="py-2.5 px-3">REASON</th>
                <th className="py-2.5 px-3">ACTION CLASS</th>
                <th className="py-2.5 px-3">AUTHORITY</th>
                <th className="py-2.5 px-3 text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {adjustments.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    row.isHighlighted ? "bg-[#FEF9EE]" : "hover:bg-slate-50/80"
                  }`}
                >
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-900">
                    {row.id}
                  </td>
                  <td className="py-2.5 px-3 text-slate-700">
                    {row.action}
                  </td>
                  <td className="py-2.5 px-3 text-slate-600">
                    {row.entity}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-semibold text-slate-900">
                    {row.amount}
                  </td>
                  <td className="py-2.5 px-3 text-slate-500 font-mono text-[10.5px]">
                    {row.reason}
                  </td>
                  <td className="py-2.5 px-3 text-slate-800 font-medium">
                    {row.actionClass}
                  </td>
                  <td className="py-2.5 px-3 text-slate-700 text-[10.5px]">
                    {row.authority.startsWith("■") ? (
                      <span className="inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border border-rose-300 bg-rose-50 text-rose-700">
                        {row.authority}
                      </span>
                    ) : (
                      row.authority
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border ${row.statusStyle}`}
                    >
                      {row.statusText}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Callout Box under table */}
        <div className="p-3.5 bg-blue-50/60 border-t border-blue-200/80 flex items-start gap-2.5 text-[11px] text-slate-700 leading-relaxed">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p>
            <strong className="font-semibold text-slate-900">This table is for the inspection of the decisions and justification.</strong> A write-off doesn&apos;t re-create receipts from all historical activity or accounting systems, and it does not commit until all steps are approved in an audit pack with supporting evidence in the data room.
          </p>
        </div>
      </div>
    </div>
  );
}
