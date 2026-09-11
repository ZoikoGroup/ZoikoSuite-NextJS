"use client";

import React from "react";
import Link from "next/link";
import { MoreHorizontal, ChevronDown } from "lucide-react";

interface FinanceItem {
  item: string;
  area: string;
  entity: string;
  amount: string;
  due: string;
  policyText: string;
  policyColor: string;
  nextStep: string;
  isHighlighted?: boolean;
}

const financeItems: FinanceItem[] = [
  {
    item: "Supplier account change",
    area: "Payables",
    entity: "Northstar UK",
    amount: "GBP 400,200",
    due: "12 Aug",
    policyText: "■ BLOCKING",
    policyColor: "border-rose-300 bg-rose-50 text-rose-700",
    nextStep: "Request evidence",
    isHighlighted: true,
  },
  {
    item: "Invoice INV-4471",
    area: "Payables",
    entity: "Northstar UK",
    amount: "GBP 92,400",
    due: "14 Aug",
    policyText: "▲ APPROVAL REQUIRED",
    policyColor: "border-amber-300 bg-amber-50 text-amber-800",
    nextStep: "Route to approver",
  },
  {
    item: "Intercompany journal",
    area: "Close",
    entity: "Northstar GmbH",
    amount: "EUR 210,000",
    due: "Overdue",
    policyText: "▼ POLICY CONFLICT",
    policyColor: "border-rose-300 bg-rose-50 text-rose-700",
    nextStep: "Escalate",
  },
  {
    item: "Credit note approval",
    area: "Receivables",
    entity: "Northstar UK",
    amount: "GBP 30,150",
    due: "16 Aug",
    policyText: "★ AUTHORITY REQUIRED",
    policyColor: "border-amber-300 bg-amber-50 text-amber-800",
    nextStep: "Open packet",
  },
];

const pills = [
  "SOURCE-DEFINED VALUES",
  "CURRENCY-EXPLICIT",
  "AUTHORITY-SEPARATED",
  "EVIDENCE-BACKED",
];

export default function MobileCFOCommandCenter() {
  return (
    <div className="w-full flex flex-col pt-6 pb-2 text-white">
      {/* View Platform Tour Link */}
      <div className="mb-6">
        <Link
          href="/platform-tour"
          className="text-xs sm:text-sm text-[#D0AA55] hover:text-[#b89547] transition-colors inline-flex items-center gap-1 font-semibold"
        >
          View platform tour →
        </Link>
      </div>

      {/* 4 Monospace Pills */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        {pills.map((pill, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-wider text-[#A0D4EE] bg-[#051c27] border border-[#14425a] text-center"
          >
            {pill}
          </span>
        ))}
      </div>

      {/* Callout Quote */}
      <div className="border-l-2 border-[#D0AA55] pl-3.5 py-1.5 mb-6">
        <p className="text-xs text-[#A0B0BA] leading-relaxed">
          Capabilities, integrations, source ownership, data freshness and jurisdiction coverage vary by approved implementation scope.
        </p>
      </div>

      {/* CFO Command Center Mockup Card */}
      <div className="w-full rounded-2xl border border-[#14425a] bg-white text-slate-900 shadow-2xl overflow-hidden">
        {/* Card Header Bar */}
        <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              CFO COMMAND CENTER
            </span>
            <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-semibold text-[#b3821a] bg-[#fdf6e7] border border-[#f0d38d]">
              ILLUSTRATIVE DATA
            </span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-slate-400" />
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#F8FAFC] px-4 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-700">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 font-medium bg-white px-2 py-1 rounded border border-slate-200">
              <span className="text-slate-400 font-mono text-[10px]">ENTITY:</span>
              <span className="font-semibold text-slate-800">All · 4</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>
            <div className="flex items-center gap-1 font-medium bg-white px-2 py-1 rounded border border-slate-200">
              <span className="text-slate-400 font-mono text-[10px]">PERIOD:</span>
              <span className="font-semibold text-slate-800">Aug 2026</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>
            <div className="flex items-center gap-1 font-medium bg-white px-2 py-1 rounded border border-slate-200">
              <span className="text-slate-400 font-mono text-[10px]">CURRENCY:</span>
              <span className="font-semibold text-slate-800">Source</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            As of 04 Aug 09:12 CET
          </span>
        </div>

        {/* 2 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-b border-slate-200 p-4 gap-4 bg-white">
          {/* Metric 1 */}
          <div className="p-3 rounded-xl border border-slate-100 bg-[#FAFAFA] flex flex-col justify-between">
            <span className="text-[9.5px] font-mono font-semibold text-slate-500 tracking-wider uppercase mb-1">
              APPROVALS AWAITING AUTHORITY
            </span>
            <div className="text-2xl font-bold font-mono text-slate-900 my-1">
              6
            </div>
            <div className="space-y-1 font-mono text-[10px] text-slate-500 pt-2 border-t border-slate-200/60">
              <p><strong className="text-slate-700">Definition:</strong> Open finance approvals with no delegated authority</p>
              <p><strong className="text-slate-700">Source:</strong> Governance workflow</p>
              <p><strong className="text-slate-700">As of:</strong> 09:11 today · current</p>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="p-3 rounded-xl border border-slate-100 bg-[#FAFAFA] flex flex-col justify-between">
            <span className="text-[9.5px] font-mono font-semibold text-slate-500 tracking-wider uppercase mb-1">
              CLOSE BLOCKERS
            </span>
            <div className="text-2xl font-bold font-mono text-[#D94F4F] my-1">
              3
            </div>
            <div className="space-y-1 font-mono text-[10px] text-slate-500 pt-2 border-t border-slate-200/60">
              <p><strong className="text-slate-700">Definition:</strong> Open dependencies preventing period close</p>
              <p><strong className="text-slate-700">Source:</strong> Close checklist</p>
              <p><strong className="text-slate-700">As of:</strong> 08:45 today · current</p>
            </div>
          </div>
        </div>

        {/* Finance Items Table */}
        <div className="w-full">
          <div className="bg-[#F8FAFC] px-4 py-2 border-b border-slate-200">
            <span className="text-[10px] font-mono font-bold text-slate-600 tracking-wider uppercase">
              FINANCE ITEMS REQUIRING ATTENTION
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px] border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-slate-200 text-[9.5px] font-mono font-bold text-slate-400 uppercase bg-white">
                  <th className="py-2.5 px-3">ITEM</th>
                  <th className="py-2.5 px-3">AREA</th>
                  <th className="py-2.5 px-3">ENTITY</th>
                  <th className="py-2.5 px-3">AMOUNT</th>
                  <th className="py-2.5 px-3">DUE</th>
                  <th className="py-2.5 px-3">POLICY</th>
                  <th className="py-2.5 px-3">NEXT STEP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {financeItems.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      row.isHighlighted ? "bg-[#FEF9EE]" : "hover:bg-slate-50/80"
                    }`}
                  >
                    <td className="py-2.5 px-3 font-semibold text-slate-900">
                      {row.item}
                    </td>
                    <td className="py-2.5 px-3 text-slate-600 font-normal">
                      {row.area}
                    </td>
                    <td className="py-2.5 px-3 text-slate-600 font-normal">
                      {row.entity}
                    </td>
                    <td className="py-2.5 px-3 font-mono font-semibold text-slate-800">
                      {row.amount}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[10.5px] text-slate-500">
                      {row.due}
                    </td>
                    <td className="py-2.5 px-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border ${row.policyColor}`}
                      >
                        {row.policyText}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 font-medium">
                      {row.nextStep}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-3 bg-slate-50 border-t border-slate-200">
          <p className="text-[10px] text-slate-500 leading-relaxed">
            Amounts display in source currency. No composite financial-health score appears in this view, and no control performs a live action.
          </p>
        </div>
      </div>
    </div>
  );
}
