"use client";

import React from "react";

interface RegistryItem {
  name: string;
  routeStatus: string;
  coverage: string;
  coverageColor: string;
  proofState: string;
}

const registryItems: RegistryItem[] = [
  {
    name: "Financial Governance",
    routeStatus: "AUTHENTIC: SPECIALTY DOMAIN",
    coverage: "DEVELOPMENT",
    coverageColor: "border-amber-300 bg-amber-50 text-amber-800",
    proofState: "Illustrative synthetic",
  },
  {
    name: "Global Payroll Governance",
    routeStatus: "REGISTERED: EXPANSION DOMAIN",
    coverage: "EVALUATION",
    coverageColor: "border-amber-300 bg-amber-50 text-amber-800",
    proofState: "Illustrative synthetic",
  },
  {
    name: "Cross-Border Compliance",
    routeStatus: "IN EVALUATION",
    coverage: "DEVELOPMENT",
    coverageColor: "border-amber-300 bg-amber-50 text-amber-800",
    proofState: "Illustrative synthetic",
  },
  {
    name: "Contract Governance",
    routeStatus: "AUTHENTIC: SPECIALTY DOMAIN",
    coverage: "DEVELOPMENT",
    coverageColor: "border-amber-300 bg-amber-50 text-amber-800",
    proofState: "Illustrative synthetic",
  },
  {
    name: "Audit Readiness",
    routeStatus: "REGISTERED: EXPANSION DOMAIN",
    coverage: "PLANNED",
    coverageColor: "border-sky-300 bg-sky-50 text-sky-800",
    proofState: "Illustrative synthetic",
  },
  {
    name: "Entity Management",
    routeStatus: "IN EVALUATION",
    coverage: "RESTRICTED",
    coverageColor: "border-rose-300 bg-rose-50 text-rose-800",
    proofState: "Illustrative synthetic",
  },
  {
    name: "Regulatory Reporting",
    routeStatus: "IN EVALUATION",
    coverage: "RESTRICTED",
    coverageColor: "border-rose-300 bg-rose-50 text-rose-800",
    proofState: "Illustrative synthetic",
  },
  {
    name: "Workforce Compliance",
    routeStatus: "REGISTERED: EXPANSION DOMAIN",
    coverage: "EVALUATION",
    coverageColor: "border-amber-300 bg-amber-50 text-amber-800",
    proofState: "Illustrative synthetic",
  },
  {
    name: "Revenue Integrity",
    routeStatus: "IN EVALUATION",
    coverage: "DEVELOPMENT",
    coverageColor: "border-amber-300 bg-amber-50 text-amber-800",
    proofState: "Illustrative synthetic",
  },
  {
    name: "Operational Risk Management",
    routeStatus: "IN EVALUATION",
    coverage: "DEVELOPMENT",
    coverageColor: "border-amber-300 bg-amber-50 text-amber-800",
    proofState: "Illustrative synthetic",
  },
];

export default function MobilePublicationRegistryTable() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Table Container */}
      <div className="w-full rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[560px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70">
                <th className="py-2.5 px-3 text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
                  CHALLENGE
                </th>
                <th className="py-2.5 px-3 text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
                  ROUTE STATUS
                </th>
                <th className="py-2.5 px-3 text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
                  COVERAGE
                </th>
                <th className="py-2.5 px-3 text-[9.5px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
                  UI PROOF STATE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {registryItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-3 font-semibold text-slate-900 text-[11.5px] whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold text-slate-600 border border-slate-200 bg-slate-50 inline-block">
                      {item.routeStatus}
                    </span>
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase border inline-block ${item.coverageColor}`}
                    >
                      {item.coverage}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-[11px] text-slate-500 whitespace-nowrap">
                    {item.proofState}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Advisory Callout Text below Table */}
      <div className="rounded-xl bg-[#FAF8F5] border border-slate-200 p-4 text-left">
        <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
          Two challenges carry a <strong className="font-semibold text-slate-900">Restricted</strong> route state: Entity Management, because statutory registration services remain separately authorized; and Regulatory Reporting, because final submission authorization handovers are unverified. Both are openly visible in the proof framework architecture; their restriction applies only to routing past the challenge.
        </p>
      </div>
    </div>
  );
}
