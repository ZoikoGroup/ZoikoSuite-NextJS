"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";

interface RollupRow {
  entity: string;
  currency: string;
  localBalance: string;
  baseConversion: string;
  variance: string;
  statusText: string;
  statusStyle: string;
  detailRef: string;
  isGroupTotal?: boolean;
  groupNote?: string;
}

const rollupRows: RollupRow[] = [
  {
    entity: "Northstar UK Ltd",
    currency: "GBP",
    localBalance: "GBP 2,240,000",
    baseConversion: "GBP 2,240,000",
    variance: "0",
    statusText: "✓ CURRENT",
    statusStyle: "border-emerald-300 bg-emerald-50 text-emerald-700",
    detailRef: "Link",
  },
  {
    entity: "Northstar GmbH",
    currency: "EUR",
    localBalance: "EUR 865,000",
    baseConversion: "GBP 735,250",
    variance: "0",
    statusText: "✓ CURRENT",
    statusStyle: "border-emerald-300 bg-emerald-50 text-emerald-700",
    detailRef: "View",
  },
  {
    entity: "Northstar Singapore Pte. Ltd.",
    currency: "SGD",
    localBalance: "SGD 340,000",
    baseConversion: "? UNKNOWN",
    variance: "0",
    statusText: "▲ STALE (>12H) - NO FX",
    statusStyle: "border-rose-300 bg-rose-50 text-rose-700",
    detailRef: "Audit",
  },
  {
    entity: "Northstar Holdings",
    currency: "GBP",
    localBalance: "GBP 42,000",
    baseConversion: "GBP 0",
    variance: "0",
    statusText: "✓ CURRENT",
    statusStyle: "border-emerald-300 bg-emerald-50 text-emerald-700",
    detailRef: "Audit",
  },
  {
    entity: "Group Total",
    currency: "(Mix)",
    localBalance: "● PARTIAL · NOT AGGREGATED",
    baseConversion: "—",
    variance: "—",
    statusText: "▲ PARTIAL",
    statusStyle: "border-amber-300 bg-amber-50 text-amber-800",
    detailRef: "—",
    isGroupTotal: true,
    groupNote: "Rate unknown: SGD to GBP for Northstar Singapore Pte Ltd. 1 subsidiary data is stale (>12h). Rollup stopped by policy gate.",
  },
];

export default function MobileSourceCurrencyRollupView() {
  return (
    <div className="w-full flex flex-col space-y-4">
      {/* Group Finance Rollup Card */}
      <div className="w-full rounded-2xl border border-[#14425a] bg-white text-slate-900 shadow-xl overflow-hidden">
        {/* Header Bar */}
        <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              GROUP FINANCE ROLLUP
            </span>
            <span className="text-[10px] font-mono text-slate-300">
              MAY 2026
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
            REAL BALANCE + SOURCE CURRENCY MATRIX WITH PROVABLE FX AND FRESHNESS
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 text-[9.5px] font-mono font-bold text-slate-400 uppercase bg-white">
                <th className="py-2.5 px-3">ENTITY</th>
                <th className="py-2.5 px-3">SOURCE CURRENCY</th>
                <th className="py-2.5 px-3">LOCAL BALANCE</th>
                <th className="py-2.5 px-3">BASE CONVERSION</th>
                <th className="py-2.5 px-3">UNRESOLVED VARIANCE</th>
                <th className="py-2.5 px-3">RATE AS-OF / STATUS</th>
                <th className="py-2.5 px-3 text-right">DETAIL REF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {rollupRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    row.isGroupTotal ? "bg-[#FEF9EE]" : "hover:bg-slate-50/80"
                  }`}
                >
                  <td className="py-2.5 px-3 font-semibold text-slate-900">
                    {row.entity}
                  </td>
                  <td className="py-2.5 px-3 font-mono text-slate-600">
                    {row.currency}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-semibold text-slate-900">
                    {row.localBalance}
                    {row.groupNote && (
                      <span className="block text-[10px] text-amber-800 font-sans font-normal mt-1 leading-snug">
                        {row.groupNote}
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 font-mono text-slate-700">
                    {row.baseConversion}
                  </td>
                  <td className="py-2.5 px-3 font-mono text-slate-600">
                    {row.variance}
                  </td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border ${row.statusStyle}`}
                    >
                      {row.statusText}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-right font-semibold text-blue-600">
                    {row.detailRef}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Amber Conversion Requirements Box */}
        <div className="p-4 bg-[#FEF9EE] border-t border-amber-200/80 text-xs font-mono space-y-1.5">
          <div className="text-[10.5px] font-bold text-amber-900 tracking-wider uppercase mb-1">
            CONVERSION REQUIREMENTS — ACCORDING TO POLICY B-14 (HISTORICAL / LIVE AS-OF)
          </div>
          <p><strong className="text-slate-800">FX SOURCE:</strong> Federal Reserve / European Central Bank combined feed</p>
          <p><strong className="text-slate-800">RATE TIME:</strong> 01 Aug 2026 09:00 UTC</p>
          <p><strong className="text-slate-800">RATE TYPE:</strong> Closing daily spot (audited FX provider LLC)</p>
          <p><strong className="text-slate-800">RULE REF:</strong> Currency and FX Policy v3.2</p>
          <p><strong className="text-slate-800">POLICY GATE:</strong> Rollup paused: 1 feed is beyond staleness limit and no substitution is permitted</p>
        </div>

        {/* Footer Disclaimer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[10.5px] text-slate-600 leading-relaxed">
          Where source rate cannot be applied, the rollup is paused or marked partial, not completed with guesswork. Automated approvals and execution flow require confirmed real-time or verified historical rates by individual currency and jurisdiction.
        </div>
      </div>
    </div>
  );
}
