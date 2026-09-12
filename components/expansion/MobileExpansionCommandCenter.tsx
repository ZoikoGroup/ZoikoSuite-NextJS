"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown, Info, ShieldAlert } from "lucide-react";

interface ExpansionRow {
  pathway: string;
  source: string;
  jurisdiction: string;
  statusText: string;
  statusStyle: string;
  reviewText: string;
  reviewStyle: string;
  readinessText: string;
  readinessStyle: string;
  isHighlighted?: boolean;
}

const expansionRows: ExpansionRow[] = [
  {
    pathway: "Entity expansion",
    source: "HRIS + Payroll feeds",
    jurisdiction: "Netherlands",
    statusText: "▲ SOURCE QUALIFIED",
    statusStyle: "border-rose-300 bg-rose-50 text-rose-700",
    reviewText: "▲ REVIEW IN PROGRESS",
    reviewStyle: "border-amber-300 bg-amber-50 text-amber-800",
    readinessText: "NOT READY",
    readinessStyle: "border-rose-300 bg-rose-50 text-rose-700",
    isHighlighted: true,
  },
  {
    pathway: "Global operating model",
    source: "Ledger/ERP (SAP)",
    jurisdiction: "Germany",
    statusText: "✓ COMPLETE",
    statusStyle: "border-emerald-300 bg-emerald-50 text-emerald-700",
    reviewText: "✓ REVIEWED COMPLETE",
    reviewStyle: "border-sky-300 bg-sky-50 text-sky-700",
    readinessText: "GATE READY",
    readinessStyle: "border-amber-300 bg-amber-50 text-amber-800",
  },
  {
    pathway: "Tax discipline regime",
    source: "Tax engine (statutory)",
    jurisdiction: "Singapore",
    statusText: "■ BLOCKED — SOURCE MISSING",
    statusStyle: "border-rose-300 bg-rose-50 text-rose-700",
    reviewText: "UNASSIGNED",
    reviewStyle: "border-amber-300 bg-amber-50 text-amber-800",
    readinessText: "BLOCKED",
    readinessStyle: "border-rose-300 bg-rose-50 text-rose-700",
  },
  {
    pathway: "Compliance discipline",
    source: "Local filings",
    jurisdiction: "France",
    statusText: "✓ COMPLETE",
    statusStyle: "border-emerald-300 bg-emerald-50 text-emerald-700",
    reviewText: "CNIL VERIFIED",
    reviewStyle: "border-slate-300 bg-slate-50 text-slate-700",
    readinessText: "GATE READY",
    readinessStyle: "border-emerald-300 bg-emerald-50 text-emerald-700",
  },
  {
    pathway: "Cross-border data transit",
    source: "Tenant infra",
    jurisdiction: "United Kingdom",
    statusText: "▲ PENDING — SOD CONFLICT",
    statusStyle: "border-amber-300 bg-amber-50 text-amber-800",
    reviewText: "IN PROGRESS",
    reviewStyle: "border-amber-300 bg-amber-50 text-amber-800",
    readinessText: "NOT READY",
    readinessStyle: "border-amber-300 bg-amber-50 text-amber-800",
  },
];

export default function MobileExpansionCommandCenter() {
  return (
    <div className="w-full flex flex-col pt-6 pb-2 text-white">
      {/* Scope / Advisory Warning Banner */}
      <div className="rounded-xl border border-[#14425a] bg-[#0A2A3A]/90 p-3.5 mb-6 flex items-start gap-2.5 text-[11px] text-[#A0D4EE] leading-relaxed">
        <ShieldAlert className="w-4 h-4 text-[#D0AA55] shrink-0 mt-0.5" />
        <p>
          ZoikoSuite does not become a legal, tax, accounting, employment, regulatory or M&amp;A advisor. No compliance guarantee is made outside an approved commercial agreement.
        </p>
      </div>

      {/* Mobile Command Center Card */}
      <div className="w-full rounded-2xl border border-[#14425a] bg-white text-slate-900 shadow-2xl overflow-hidden">
        {/* Card Header Bar */}
        <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              EXPANSION READINESS CONSOLE
            </span>
            <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-rose-900/80 text-rose-200 border border-rose-700">
              ILLUSTRATIVE SIMULATION · 16 GATES ACTIVE
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#F8FAFC] px-3 sm:px-4 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-700">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 font-medium bg-white px-2 py-1 rounded border border-slate-200">
              <span className="text-slate-400 font-mono text-[9.5px]">SCOPE:</span>
              <span className="font-semibold text-slate-800 text-[10.5px]">All 6 Pathways</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>
            <div className="flex items-center gap-1 font-medium bg-white px-2 py-1 rounded border border-slate-200">
              <span className="text-slate-400 font-mono text-[9.5px]">TARGET:</span>
              <span className="font-semibold text-slate-800 text-[10.5px]">Europe / UK / SG</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>
            <div className="flex items-center gap-1 font-medium bg-white px-2 py-1 rounded border border-slate-200">
              <span className="text-slate-400 font-mono text-[9.5px]">STATUS:</span>
              <span className="font-semibold text-slate-800 text-[10.5px]">All Statuses</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>
          </div>
          <span className="text-[9.5px] font-mono text-slate-400">
            Real-time sync
          </span>
        </div>

        {/* 6 Metric KPI Stats */}
        <div className="grid grid-cols-3 divide-x divide-y divide-slate-100 border-b border-slate-200 bg-white">
          <div className="p-2.5 sm:p-3">
            <div className="text-[9px] font-mono text-slate-400 uppercase">Phase 01 Readiness</div>
            <div className="text-xs sm:text-sm font-bold text-rose-600 mt-0.5">▲ Blocked</div>
            <div className="text-[9px] text-slate-500">2 source omissions</div>
          </div>
          <div className="p-2.5 sm:p-3">
            <div className="text-[9px] font-mono text-slate-400 uppercase">Statutory Review</div>
            <div className="text-xs sm:text-sm font-bold text-amber-700 mt-0.5">▲ 1 In progress</div>
            <div className="text-[9px] text-slate-500">Works council</div>
          </div>
          <div className="p-2.5 sm:p-3">
            <div className="text-[9px] font-mono text-slate-400 uppercase">Diligence Clear</div>
            <div className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5">✓ 11 of 14</div>
            <div className="text-[9px] text-slate-500">3 pending</div>
          </div>
          <div className="p-2.5 sm:p-3">
            <div className="text-[9px] font-mono text-slate-400 uppercase">Exception Risk</div>
            <div className="text-xs sm:text-sm font-bold text-amber-700 mt-0.5">▲ Low (Manual)</div>
            <div className="text-[9px] text-slate-500">Policy overrides</div>
          </div>
          <div className="p-2.5 sm:p-3">
            <div className="text-[9px] font-mono text-slate-400 uppercase">Shadow Comparison</div>
            <div className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5">▲ 2 Dual runs</div>
            <div className="text-[9px] text-slate-500">Delta 0.0%</div>
          </div>
          <div className="p-2.5 sm:p-3">
            <div className="text-[9px] font-mono text-slate-400 uppercase">Activation State</div>
            <div className="text-xs sm:text-sm font-bold text-rose-600 mt-0.5">■ Pending Gate</div>
            <div className="text-[9px] text-slate-500">Sign-off required</div>
          </div>
        </div>

        {/* Scrollable Table of Pathways & Jurisdictions */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-200 text-[9.5px] font-mono font-bold text-slate-400 uppercase bg-[#F8FAFC]">
                <th className="py-2 px-3">PATHWAY</th>
                <th className="py-2 px-3">SOURCE</th>
                <th className="py-2 px-3">JURISDICTION</th>
                <th className="py-2 px-3">SOURCE STATUS</th>
                <th className="py-2 px-3">PROFESSIONAL REVIEW</th>
                <th className="py-2 px-3 text-right">READINESS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {expansionRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    row.isHighlighted ? "bg-[#FEF9EE]" : "hover:bg-slate-50/80"
                  }`}
                >
                  <td className="py-2.5 px-3 font-semibold text-slate-900">
                    {row.pathway}
                  </td>
                  <td className="py-2.5 px-3 font-mono text-[10.5px] text-slate-600">
                    {row.source}
                  </td>
                  <td className="py-2.5 px-3 text-slate-700 font-medium">
                    {row.jurisdiction}
                  </td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border ${row.statusStyle}`}
                    >
                      {row.statusText}
                    </span>
                  </td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border ${row.reviewStyle}`}
                    >
                      {row.reviewText}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border ${row.readinessStyle}`}
                    >
                      {row.readinessText}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote under table */}
        <div className="p-3 bg-[#FAF8F5] border-t border-slate-200 text-[10px] font-mono text-slate-500 leading-relaxed">
          All six pathway activations require explicit gate qualification before any operational cutover. Activation is a human decision with immutable audit log capture.
        </div>
      </div>
    </div>
  );
}
