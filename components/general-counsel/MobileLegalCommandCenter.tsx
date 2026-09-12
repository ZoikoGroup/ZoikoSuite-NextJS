"use client";

import React from "react";
import { AlertCircle, AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface EvaluationRow {
  item: string;
  refDoc: string;
  entity: string;
  required: string;
  due: string;
  statusText: string;
  statusBadgeColor: string;
}

const tableRows: EvaluationRow[] = [
  {
    item: "Notice obligation may be triggered",
    refDoc: "24-q4-us-eu-amend-0715-q04",
    entity: "North America",
    required: "Yes",
    due: "2d 11m",
    statusText: "▲ REVIEW",
    statusBadgeColor: "border-amber-400 bg-amber-50 text-amber-800 font-semibold",
  },
  {
    item: "Jurisdiction mismatch flagged in review queue",
    refDoc: "784-finra-align-release",
    entity: "Northern Europe",
    required: "Not advice",
    due: "1d 24m",
    statusText: "✔ VALID",
    statusBadgeColor: "border-emerald-400 bg-emerald-50 text-emerald-800 font-semibold",
  },
  {
    item: "Authority limitation breached on proposal",
    refDoc: "Master-service-0715-b204",
    entity: "North America",
    required: "Yes",
    due: "3d 11m",
    statusText: "✔ VALID",
    statusBadgeColor: "border-emerald-400 bg-emerald-50 text-emerald-800 font-semibold",
  },
  {
    item: "Delegation review overdue/due",
    refDoc: "APAC-marketing-0715-b101",
    entity: "Australia / Singapore",
    required: "Overdue",
    due: "7d overdue",
    statusText: "● HOLD",
    statusBadgeColor: "border-rose-400 bg-rose-50 text-rose-800 font-semibold",
  },
  {
    item: "Restricted — compliance only",
    refDoc: "No subject rule",
    entity: "—",
    required: "—",
    due: "—",
    statusText: "RESTRICTED",
    statusBadgeColor: "border-slate-300 bg-slate-100 text-slate-700 font-semibold",
  },
];

const capabilityPills = [
  "SOURCE-AWARE",
  "INTERPRETATION-SEPARATED",
  "EVIDENCE-BACKED",
  "MULTI-ENTITY",
  "JURISDICTION-QUALIFIED",
  "MUTUAL-DELEGATION",
];

export default function MobileLegalCommandCenter() {
  return (
    <div className="w-full flex flex-col gap-4 mt-6">
      {/* 1. Professional Boundary Callout Box */}
      <div className="rounded-xl bg-[#072130] border border-[#1b435d] p-3.5 flex items-start gap-2.5 text-left">
        <div className="w-4 h-4 rounded-full border border-[#c5a059] flex items-center justify-center shrink-0 text-[#c5a059] text-[10px] font-bold mt-0.5">
          !
        </div>
        <p className="text-[11.5px] text-slate-300 leading-relaxed font-normal">
          <strong className="font-semibold text-white">Professional boundary:</strong> Support governed evaluation and decision context. ZoikoSuite does not provide legal advice or exercise legal authority.
        </p>
      </div>

      {/* 2. Capability Badge Pills */}
      <div className="flex flex-wrap gap-2">
        {capabilityPills.map((pill, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded text-[9.5px] font-mono font-bold tracking-wider text-[#A0D4EE] bg-[#072437] border border-[#1E5B80]"
          >
            {pill}
          </span>
        ))}
      </div>

      {/* 3. Legal Governance Command Center Terminal Card */}
      <div className="w-full rounded-2xl border border-slate-700/80 bg-white text-slate-900 shadow-2xl overflow-hidden mt-1">
        {/* Dark Terminal Top Bar */}
        <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-[#c5a059] tracking-wider uppercase">
              LEGAL GOVERNANCE COMMAND CENTER
            </span>
            <span className="px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider bg-rose-950 text-rose-300 border border-rose-800/80">
              ALL EVIDENCE SHOWN — NOT LIVE ACTION
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-50 px-3.5 py-2 flex items-center justify-between border-b border-slate-200 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 rounded border border-slate-200 bg-white text-[10px] font-mono text-slate-700">
              STATE: ACTIVE (5) &#9662;
            </span>
            <span className="px-2 py-1 rounded border border-slate-200 bg-white text-[10px] font-mono text-slate-700">
              JURISDICTION: ALL (3) &#9662;
            </span>
          </div>
          <span className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold text-slate-600 bg-slate-200/80">
            5 OF 5 LIVE EVALUATED
          </span>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[540px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/70">
                <th className="py-2 px-3 text-[9px] font-mono font-semibold text-slate-500 uppercase">
                  ITEM / STATUS / SCOPE
                </th>
                <th className="py-2 px-3 text-[9px] font-mono font-semibold text-slate-500 uppercase">
                  REF DOC
                </th>
                <th className="py-2 px-3 text-[9px] font-mono font-semibold text-slate-500 uppercase">
                  ENTITY
                </th>
                <th className="py-2 px-3 text-[9px] font-mono font-semibold text-slate-500 uppercase">
                  REQUIRED
                </th>
                <th className="py-2 px-3 text-[9px] font-mono font-semibold text-slate-500 uppercase">
                  DUE
                </th>
                <th className="py-2 px-3 text-[9px] font-mono font-semibold text-slate-500 uppercase">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {tableRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-slate-900 text-[11px] whitespace-nowrap">
                    {row.item}
                  </td>
                  <td className="py-2.5 px-3 text-[10.5px] font-mono text-slate-600 whitespace-nowrap">
                    {row.refDoc}
                  </td>
                  <td className="py-2.5 px-3 text-[11px] text-slate-700 whitespace-nowrap">
                    {row.entity}
                  </td>
                  <td className="py-2.5 px-3 text-[11px] text-slate-600 whitespace-nowrap">
                    {row.required}
                  </td>
                  <td className="py-2.5 px-3 text-[10.5px] font-mono text-slate-600 whitespace-nowrap">
                    {row.due}
                  </td>
                  <td className="py-2.5 px-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded text-[8.5px] font-mono font-bold uppercase tracking-wider border inline-block ${row.statusBadgeColor}`}
                    >
                      {row.statusText}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Terminal Footer Caption */}
        <div className="px-3.5 py-2.5 bg-slate-50 border-t border-slate-200 text-left">
          <p className="text-[10px] font-mono text-slate-500 leading-relaxed">
            Evaluated continuous context: real-time &middot; no manual sync required &middot; all live states anchored to authoritative doc ref.
          </p>
        </div>
      </div>
    </div>
  );
}
