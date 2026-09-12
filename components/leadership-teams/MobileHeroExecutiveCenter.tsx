"use client";

import React from "react";
import { MoreHorizontal, Globe, ChevronDown } from "lucide-react";

interface PendingItem {
  status: string;
  statusColor: string;
  object: string;
  functionName: string;
  entity: string;
  owner: string;
  due: string;
  actionText: string;
  actionStyle: string;
}

const pendingItems: PendingItem[] = [
  {
    status: "Authority required — within playbook",
    statusColor: "text-emerald-700",
    object: "Capital asset deployment",
    functionName: "Procurement",
    entity: "Vertix Global UK",
    owner: "CFO",
    due: "1st Aug",
    actionText: "IN REVIEW",
    actionStyle: "bg-emerald-50 text-emerald-700 border-emerald-300",
  },
  {
    status: "Evidence missing — further review",
    statusColor: "text-emerald-700",
    object: "Executive appointment",
    functionName: "Executive",
    entity: "Vertix Global UK",
    owner: "Legal Head",
    due: "1st Aug",
    actionText: "IN REVIEW",
    actionStyle: "bg-emerald-50 text-emerald-700 border-emerald-300",
  },
  {
    status: "13 exceptions require sign-off",
    statusColor: "text-amber-700",
    object: "Product license agreement",
    functionName: "Legal",
    entity: "Vertix Global UK",
    owner: "Chief Risk Officer",
    due: "28 Jul",
    actionText: "OPEN (13)",
    actionStyle: "bg-amber-50 text-amber-800 border-amber-300",
  },
  {
    status: "Non-standard — owner unknown",
    statusColor: "text-rose-700",
    object: "Tax obligation inquiry",
    functionName: "Tax",
    entity: "Northstar Singapore",
    owner: "Unassigned",
    due: "25 Jul",
    actionText: "BLOCK",
    actionStyle: "bg-rose-50 text-rose-700 border-rose-300",
  },
  {
    status: "Readiness — preliminary only",
    statusColor: "text-slate-500",
    object: "International M&A",
    functionName: "—",
    entity: "—",
    owner: "—",
    due: "—",
    actionText: "RESTRICTED",
    actionStyle: "bg-slate-100 text-slate-600 border-slate-300",
  },
];

const contextTags = [
  "Decisions made",
  "Entities / Jurisdictions",
  "Policies / Frameworks",
  "Authorities",
  "Evidence",
  "Owners",
  "Venues",
  "Next permitted step",
];

const roleBadges = [
  "BOARD MEMBERS",
  "GENERAL COUNSEL / CCO",
  "CHIEF RISK OFFICER",
  "CHIEF OPERATING OFFICER",
  "HEAD OF AUDIT",
  "PRIVACY LEAD",
];

const metrics = [
  { label: "OUTCOMES REQUIRING SIGNATURE", value: "6", status: "Action Due", statusColor: "text-amber-600" },
  { label: "JURISDICTIONS ACTIVE", value: "14", status: "1 Flag Review", statusColor: "text-amber-600" },
  { label: "INTERNAL ESCALATIONS", value: "3", status: "Investigating", statusColor: "text-blue-600" },
  { label: "COVERAGE RATE", value: "4", status: "Unaddressed", statusColor: "text-amber-600" },
  { label: "SEVERITY SCORE", value: "(60%)", status: "Moderate", statusColor: "text-amber-700" },
  { label: "UNRESOLVED EXCEPTIONS", value: "2", status: "Direct Intervention", statusColor: "text-rose-600" },
];

export default function MobileHeroExecutiveCenter() {
  return (
    <div className="w-full flex flex-col pt-6 pb-2 text-white">
      {/* Label: THE 10 CRITICAL CONTEXTS */}
      <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-300 uppercase mb-3">
        THE 10 CRITICAL CONTEXTS
      </span>

      {/* Context Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {contextTags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-md text-[11px] bg-[#0c3854] border border-[#1E5B80] text-slate-200 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Role Badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        {roleBadges.map((role, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#0c3854] border border-[#1E5B80] text-[#7ec7ee] uppercase tracking-wider"
          >
            {role}
          </span>
        ))}
      </div>

      {/* Callout Quote */}
      <div className="border-l-2 border-[#d4a853] pl-3.5 py-1.5 mb-6">
        <p className="text-xs sm:text-[13px] text-[#D4E4ED] leading-relaxed">
          A realistic coverage snapshot and multi-jurisdiction triage across policy, context and contiguous deployment.
        </p>
      </div>

      {/* Executive Command Center UI Card */}
      <div className="w-full rounded-xl border border-[#1E5B80] bg-white text-slate-900 shadow-2xl overflow-hidden">
        {/* Card Header Bar */}
        <div className="bg-[#072437] px-3.5 py-2.5 flex items-center justify-between border-b border-[#1c5577]">
          <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
            EXECUTIVE COMMAND CENTER
          </span>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-semibold text-[#d4a853] border border-[#d4a853]/40 bg-[#d4a853]/10">
              ORGANIZATION · LIVE ACTIVE REGIME
            </span>
            <MoreHorizontal className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-50 px-3 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-700">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 font-medium">
              <span className="text-slate-500 font-mono text-[10px]">ORGANIZATION:</span>
              <span className="font-semibold text-slate-800">Apex Capital Holdings</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>
            <div className="flex items-center gap-1 font-medium">
              <span className="text-slate-500 font-mono text-[10px]">ENTITY:</span>
              <span className="font-semibold text-slate-800">All</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>
            <div className="flex items-center gap-1 font-medium">
              <span className="text-slate-500 font-mono text-[10px]">JURISDICTION:</span>
              <span className="font-semibold text-slate-800">14 Active</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>
          </div>
          <button className="px-2.5 py-1 rounded-full bg-[#185d85] hover:bg-[#124d70] text-white font-medium text-[10px] flex items-center gap-1 shadow-xs">
            <Globe className="w-3 h-3" />
            <span>Map View: ON</span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-slate-200 border-b border-slate-200 bg-white">
          {metrics.map((m, idx) => (
            <div key={idx} className="p-3 flex flex-col justify-between">
              <span className="text-[9px] font-mono font-semibold text-slate-500 leading-tight mb-1.5 uppercase">
                {m.label}
              </span>
              <div className="flex items-baseline justify-between mt-auto">
                <span className="text-lg font-bold text-slate-900">{m.value}</span>
                <span className={`text-[10px] font-semibold ${m.statusColor}`}>
                  {m.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pending Items Table */}
        <div className="w-full">
          <div className="bg-slate-50 px-3 py-2 border-b border-slate-200">
            <span className="text-[10px] font-mono font-bold text-slate-600 tracking-wider uppercase">
              PENDING ITEMS — SORTED BY REGULATORY DEADLINE / BOARD ACTION
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px] border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 text-[9.5px] font-mono font-bold text-slate-500 uppercase bg-slate-50/50">
                  <th className="py-2 px-3">STATUS</th>
                  <th className="py-2 px-3">OBJECT</th>
                  <th className="py-2 px-3">FUNCTION</th>
                  <th className="py-2 px-3">ENTITY</th>
                  <th className="py-2 px-3">OWNER</th>
                  <th className="py-2 px-3">DUE</th>
                  <th className="py-2 px-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {pendingItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-3">
                      <span className={`font-semibold ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-800 font-medium">
                      {item.object}
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">{item.functionName}</td>
                    <td className="py-2.5 px-3 text-slate-600">{item.entity}</td>
                    <td className="py-2.5 px-3 text-slate-700 font-medium">{item.owner}</td>
                    <td className="py-2.5 px-3 text-slate-500 font-mono text-[10px]">
                      {item.due}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-bold border ${item.actionStyle}`}
                      >
                        {item.actionText}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-[11px] text-slate-300/80 leading-relaxed mt-3">
        Decisions, obligations and restrictions appear before any board meeting, no opaque global roll-up or summary replaces a single underlying journal record.
      </p>
    </div>
  );
}
