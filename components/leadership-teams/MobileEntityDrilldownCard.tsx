"use client";

import React from "react";
import { MoreHorizontal, ChevronRight } from "lucide-react";

interface EntityRow {
  entity: string;
  jurisdiction: string;
  operatingStatus: string;
  regimes: string;
  exceptions: string;
  signatureReady: string;
  auditBadge: { text: string; style: string };
}

const entityRows: EntityRow[] = [
  {
    entity: "Northstar Holdings",
    jurisdiction: "United Kingdom",
    operatingStatus: "LIVE REGIME",
    regimes: "4",
    exceptions: "0",
    signatureReady: "3",
    auditBadge: { text: "EXEMPT", style: "border-emerald-300 bg-emerald-50 text-emerald-700" },
  },
  {
    entity: "Northstar UK Ltd",
    jurisdiction: "United Kingdom",
    operatingStatus: "LIVE REGIME",
    regimes: "4",
    exceptions: "2",
    signatureReady: "2",
    auditBadge: { text: "REVIEW (2)", style: "border-amber-300 bg-amber-50 text-amber-800 font-bold" },
  },
  {
    entity: "Northstar GmbH",
    jurisdiction: "Germany",
    operatingStatus: "LIVE REGIME",
    regimes: "4",
    exceptions: "0",
    signatureReady: "1",
    auditBadge: { text: "EXEMPT", style: "border-emerald-300 bg-emerald-50 text-emerald-700" },
  },
  {
    entity: "Northstar Singapore Pte Ltd",
    jurisdiction: "Singapore",
    operatingStatus: "LIVE REGIME",
    regimes: "2",
    exceptions: "0",
    signatureReady: "0",
    auditBadge: { text: "STALE", style: "border-rose-300 bg-rose-50 text-rose-700 font-bold" },
  },
  {
    entity: "David Holt (APAC)",
    jurisdiction: "Australia",
    operatingStatus: "—",
    regimes: "—",
    exceptions: "—",
    signatureReady: "—",
    auditBadge: { text: "UNRESOLVED", style: "border-slate-300 bg-slate-100 text-slate-600" },
  },
];

export default function MobileEntityDrilldownCard() {
  return (
    <div className="w-full flex flex-col pt-2">
      {/* Card */}
      <div className="w-full rounded-2xl border border-slate-200/90 bg-white shadow-xl overflow-hidden">
        {/* Dark Header */}
        <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#1c5577]">
          <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
            ENTITY DRILLDOWN — MULTI-UNIT SEPARATION · 5 IDENTIFIED · 1 GAP
          </span>
          <MoreHorizontal className="w-4 h-4 text-slate-400" />
        </div>

        {/* Sub Header */}
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <span className="text-[10px] font-mono font-bold text-slate-500 tracking-wider uppercase">
            FEED MATRIX — EVALUATING TRUE JURISDICTIONAL ALLOCATIONS AND RESIDENT ROLES
          </span>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-slate-200 text-[9.5px] font-mono font-bold text-slate-500 uppercase bg-slate-50/50">
                <th className="py-2.5 px-3.5">ENTITY</th>
                <th className="py-2.5 px-3">JURISDICTION</th>
                <th className="py-2.5 px-3">OPERATING STATUS</th>
                <th className="py-2.5 px-3 text-center">IN FORCE REGIMES</th>
                <th className="py-2.5 px-3 text-center">EXCEPTIONS</th>
                <th className="py-2.5 px-3 text-center">SIGNATURE READY</th>
                <th className="py-2.5 px-3">CURRENT AUDIT</th>
                <th className="py-2.5 px-2 text-center">DRILL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {entityRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-3.5 font-bold text-slate-900">
                    {row.entity}
                  </td>
                  <td className="py-3 px-3 text-slate-600 font-medium">
                    {row.jurisdiction}
                  </td>
                  <td className="py-3 px-3">
                    {row.operatingStatus === "LIVE REGIME" ? (
                      <span className="inline-block px-2 py-0.5 rounded text-[9.5px] font-bold border border-emerald-300 bg-emerald-50 text-emerald-700">
                        LIVE REGIME
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-center font-mono text-slate-700 font-medium">
                    {row.regimes}
                  </td>
                  <td className="py-3 px-3 text-center font-mono text-slate-700 font-medium">
                    {row.exceptions}
                  </td>
                  <td className="py-3 px-3 text-center font-mono text-slate-700 font-medium">
                    {row.signatureReady}
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-bold border ${row.auditBadge.style}`}
                    >
                      {row.auditBadge.text}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-center text-slate-400">
                    <ChevronRight className="w-3.5 h-3.5 inline" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detail Box inside Card */}
        <div className="p-4 bg-[#FAF8F5] border-t border-slate-200 text-xs font-mono space-y-1 text-slate-700">
          <div><strong className="text-slate-900">AGGREGATE:</strong> Multi-currency capital allocation · £1,410,000.00</div>
          <div><strong className="text-slate-900">DENOMINATOR:</strong> 5 base currencies active across international hubs</div>
          <div><strong className="text-rose-700">EVIDENCE GAP:</strong> Singapore subsidiary - non-independent valuation recorded</div>
          <div><strong className="text-slate-900">STATUS:</strong> Overarching summary only accessible when underlying journal is reconciled.</div>
        </div>
      </div>

      {/* Footer Note below Card */}
      <p className="text-[11px] text-slate-500 leading-relaxed mt-3">
        Group-level reporting aggregate may look clean while an individual jurisdiction is stalled. ZoikoSuite preserves sovereign jurisdiction integrity.
      </p>
    </div>
  );
}
