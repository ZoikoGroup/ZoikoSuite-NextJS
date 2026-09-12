"use client";

import React from "react";
import { MoreHorizontal, Info, ArrowRight } from "lucide-react";

interface PolicyItem {
  policy: string;
  version: string;
  productionDate: string;
  controlText: string;
  controlStyle: string;
}

const policies: PolicyItem[] = [
  {
    policy: "Payment vendor change control",
    version: "v2",
    productionDate: "01 Apr 2026",
    controlText: "● LOCKED",
    controlStyle: "border-rose-300 bg-rose-50 text-rose-700",
  },
  {
    policy: "Rate tolerance",
    version: "v3",
    productionDate: "01 Dec 2024",
    controlText: "● LOCKED",
    controlStyle: "border-rose-300 bg-rose-50 text-rose-700",
  },
  {
    policy: "Payment amount threshold",
    version: "v4",
    productionDate: "01 Jan 2026",
    controlText: "● DUAL SIGN-OFF > GBP 250K REQUIRED",
    controlStyle: "border-blue-300 bg-blue-50 text-blue-700",
  },
  {
    policy: "Intercompany threshold — group",
    version: "v4",
    productionDate: "01 Jan 2026",
    controlText: "● BOARD SIGN-OFF > EUR 1M TO PAY",
    controlStyle: "border-rose-300 bg-rose-50 text-rose-700",
  },
];

const exceptionFlowSteps = [
  "Request",
  "Compensating control",
  "Independent review",
  "Approval context with reason",
  "Effective and expiry dates",
  "Reassessment evidence",
];

export default function MobilePolicyVersionAuthorityView() {
  return (
    <div className="w-full flex flex-col space-y-4 text-slate-800">
      {/* Card 1: POLICY CONTROLS · v7.02 */}
      <div className="w-full rounded-2xl border border-[#14425a] bg-white shadow-xl overflow-hidden">
        {/* Header Bar */}
        <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
          <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
            POLICY CONTROLS · v7.02
          </span>
          <MoreHorizontal className="w-4 h-4 text-slate-400" />
        </div>

        {/* Subheader */}
        <div className="bg-[#F8FAFC] px-4 py-2.5 border-b border-slate-200">
          <span className="text-[10px] font-mono font-bold text-slate-600 tracking-wider uppercase">
            VERSION HISTORY &amp; SYSTEM CONFIGURATION DATA · ACTIVE IN PRODUCTION: MAY 2026 UTC
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-slate-200 text-[9.5px] font-mono font-bold text-slate-400 uppercase bg-white">
                <th className="py-2.5 px-3">POLICY</th>
                <th className="py-2.5 px-3">VERSION</th>
                <th className="py-2.5 px-3">PRODUCTION DATE</th>
                <th className="py-2.5 px-3">CONTROL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {policies.map((p, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-slate-900">
                    {p.policy}
                  </td>
                  <td className="py-2.5 px-3 font-mono text-slate-600">
                    {p.version}
                  </td>
                  <td className="py-2.5 px-3 font-mono text-slate-600">
                    {p.productionDate}
                  </td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border ${p.controlStyle}`}
                    >
                      {p.controlText}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note under table */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[10.5px] text-slate-600 leading-relaxed">
          Two workflows preventing change/edit require an explicit exemption route. The platform does not natively apply the exception to these policies, because a new policy would serve unrecorded finance decision.
        </div>
      </div>

      {/* Authority Record Section */}
      <div>
        <span className="text-[10.5px] font-mono font-bold tracking-wider text-slate-500 uppercase block mb-2">
          AUTHORITY RECORD
        </span>

        {/* Card 2: DELEGATED AUTHORITY · AUTH-074 */}
        <div className="w-full rounded-2xl border border-[#14425a] bg-white shadow-xl overflow-hidden">
          {/* Header Bar */}
          <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              DELEGATED AUTHORITY · AUTH-074
            </span>
            <MoreHorizontal className="w-4 h-4 text-slate-400" />
          </div>

          <div className="p-4 sm:p-5 space-y-2.5 text-xs">
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-mono text-[10.5px]">Role:</span>
              <span className="font-semibold text-slate-900">Treasury Director</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-mono text-[10.5px]">Scope:</span>
              <span className="font-semibold text-slate-900">Disbursement, payment administration, balance holding</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-mono text-[10.5px]">Limit:</span>
              <span className="font-bold font-mono text-slate-900">GBP 250,000 per transaction</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-mono text-[10.5px]">Policy Ref:</span>
              <span className="font-mono text-slate-700">TC-02 v4 (01 Jan 2026 UTC)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-mono text-[10.5px]">Delegated by / Source:</span>
              <span className="font-semibold text-slate-800">Board resolution 2026/04/12</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-100">
              <span className="text-slate-400 font-mono text-[10.5px]">Dual Sign-off:</span>
              <span className="text-slate-700">Required above this limit (with CFO or Group Controller)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center py-1">
              <span className="text-slate-400 font-mono text-[10.5px]">Exemption status:</span>
              <span className="inline-block px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border border-rose-300 bg-rose-50 text-rose-700 mt-1 sm:mt-0">
                ● EXCEPTION DELEGATION 092 APPROVED
              </span>
            </div>

            {/* Info Callout */}
            <div className="mt-3 p-3 rounded-xl border border-blue-200/80 bg-blue-50/60 flex items-start gap-2 text-[11px] text-slate-700 leading-relaxed">
              <Info className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
              <p>
                Facility cannot match or exceed reference authority increment without active dual-authorization, and it cannot exceed statutory entity boundaries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exception Flow Section */}
      <div>
        <span className="text-[10.5px] font-mono font-bold tracking-wider text-slate-500 uppercase block mb-2">
          EXCEPTION FLOW
        </span>

        {/* Card 3: Exception Flow */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm space-y-3">
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-800">
            {exceptionFlowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-[10.5px]">
                  {step}
                </span>
                {idx < exceptionFlowSteps.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
            Every exception is time-bound. There is no generic admin bypass.
          </p>
        </div>
      </div>
    </div>
  );
}
