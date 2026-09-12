"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";

interface AudienceItem {
  audience: string;
  access: string;
  boundary: string;
}

const audiences: AudienceItem[] = [
  {
    audience: "Audit Committee",
    access: "Read-only; access to execution progress, material disputes and audit trail status, unresolved issues, minutes review, and export only if specifically permitted.",
    boundary: "No operational access to initiate or approve.",
  },
  {
    audience: "Board of Directors",
    access: "High-level, cross-company aggregated reporting and governance summaries; accountable staff status when authorized.",
    boundary: "No granular ledger level access without escalation.",
  },
  {
    audience: "Internal / external audit",
    access: "Read-only access to individual records, continuous control evidence, cryptographically signed proofs.",
    boundary: "No access to live configuration or operational workflows.",
  },
  {
    audience: "CFO / Controller",
    access: "Operational and executive decision access according to authority and permissions.",
    boundary: "Restricted by dual-authorization rules and statutory limits.",
  },
];

export default function MobileFourAudiencesView() {
  return (
    <div className="w-full flex flex-col space-y-4">
      {/* Mobile Audience Table */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/40 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-slate-200 text-[9.5px] font-mono font-bold text-slate-400 uppercase bg-[#F8FAFC]">
                <th className="py-2.5 px-3">AUDIENCE</th>
                <th className="py-2.5 px-3">DEFAULT / PRIVILEGE AND ACCESS</th>
                <th className="py-2.5 px-3">BOUNDARY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {audiences.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-3 font-bold text-[#08222F] whitespace-nowrap">
                    {row.audience}
                  </td>
                  <td className="py-3 px-3 text-slate-600 leading-relaxed">
                    {row.access}
                  </td>
                  <td className="py-3 px-3 text-slate-500 font-mono text-[10.5px] leading-relaxed">
                    {row.boundary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Handling Pack Card */}
      <div className="w-full rounded-2xl border border-[#14425a] bg-white text-slate-900 shadow-xl overflow-hidden">
        {/* Header Bar */}
        <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              HANDLING PACK
            </span>
            <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-semibold text-[#b3821a] bg-[#fdf6e7] border border-[#f0d38d]">
              PACK 002: TAX AUDIT DISCLOSURE / READINESS DOCUMENT
            </span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-slate-400" />
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 p-4 gap-4 text-xs font-mono">
          {/* Left Column */}
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-100">
              OFFICIAL DISCLOSURE PACK REPORT
            </div>
            <div className="flex items-start gap-2.5">
              <span className="px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-slate-100 text-slate-700 shrink-0">
                01.07.26
              </span>
              <p className="text-[11px] text-slate-800 leading-snug">
                Tax pack compiled for external audit · Northstar UK Ltd (VAT return filed and verified)
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                PDF
              </span>
              <p className="text-[11px] text-slate-800 leading-snug">
                Evidence pack · 22 files (all hashes matched to live ERP GL)
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                HASH
              </span>
              <p className="text-[11px] text-slate-800 leading-snug">
                Key cryptographically signed by system · tamper evident verification
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-2 pt-3 md:pt-0">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-100">
              APPROVAL LOG · EXCLUSION DETAIL
            </div>
            <div className="space-y-1 text-[11px]">
              <p><strong className="text-slate-500">Prepared by:</strong> Helen Lewis (Senior Financial Accountant)</p>
              <p><strong className="text-slate-500">Approved by:</strong> —</p>
              <p><strong className="text-slate-500">Authorized on:</strong> 01.07.2026 18:20 UTC (due: 02.07.2026)</p>
              <p><strong className="text-slate-500">Exception:</strong> Requires Controller / Group CFO dual sign-off</p>
              <p><strong className="text-slate-500">Exemption status:</strong> <span className="text-rose-700">Exemption under policy tax-gov-2024 applied</span></p>
              <div className="pt-2">
                <span className="text-[10px] text-slate-600 block mb-1 font-bold">History:</span>
                <span className="text-[10px] px-2 py-1 rounded bg-slate-100 text-slate-700 inline-block">
                  • Open • In review • Approved with exception • Signed • Final • Sent to audit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
