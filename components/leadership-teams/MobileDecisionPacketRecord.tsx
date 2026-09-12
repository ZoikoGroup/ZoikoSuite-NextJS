"use client";

import React from "react";

export default function MobileDecisionPacketRecord() {
  return (
    <div className="w-full flex flex-col pt-2 text-white">
      {/* Decision Packet UI Card */}
      <div className="w-full rounded-2xl border border-[#1E5B80] bg-white text-slate-900 shadow-2xl overflow-hidden">
        {/* Top Dark Header */}
        <div className="bg-[#072437] px-4 py-3 flex items-center justify-between border-b border-[#1c5577]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs sm:text-[13px] font-bold text-white">
              Supplier bank detail change
            </span>
            <span className="text-[10.5px] font-mono text-slate-400">
              ACT-081 · EVT-1081
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[9.5px] font-bold border border-rose-300 bg-rose-50 text-rose-700">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
            PENDING SIGN-OFF
          </span>
        </div>

        {/* Inner Content Sections */}
        <div className="p-4 sm:p-5 flex flex-col space-y-5 text-xs text-slate-700 font-sans divide-y divide-slate-100">
          {/* 1. Policy In Play */}
          <div className="flex flex-col space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              POLICY IN PLAY
            </span>
            <p className="text-xs text-slate-800 leading-relaxed font-medium">
              All supplier bank changes above £50k require 2-factor verified sign-off prior to transmission. 73-point checklist reference: PLY-BNK-MOD-01. Applicable version active from 12-Apr-2026.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10.5px]">
              <span className="text-slate-500">STATUS: <strong className="text-slate-800">In force (v4.2)</strong></span>
              <span>·</span>
              <span className="text-slate-500">VERIFICATION: <strong className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">VERIFIED</strong></span>
              <span>·</span>
              <span className="text-slate-500">APPLIES TO: <strong className="text-slate-800">Every company entity across every jurisdiction</strong></span>
            </div>
          </div>

          {/* 2. Policy Violation */}
          <div className="flex flex-col space-y-2 pt-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600">
              POLICY VIOLATION
            </span>
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="text-slate-600 font-medium">VIOLATION:</span>
              <span className="px-2 py-0.5 rounded bg-rose-50 border border-rose-200 text-rose-700 font-bold text-[10px]">
                Supplier master domain mismatch ALERT 04
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="text-slate-600 font-medium">VALIDATION:</span>
              <span className="px-2 py-0.5 rounded bg-rose-50 border border-rose-200 text-rose-700 font-bold text-[10px]">
                Automated scan flag FAILED 4/7
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="text-slate-600 font-medium">DETAILS:</span>
              <span className="px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-800 font-medium text-[10px]">
                Registered domain does not match banking BIC [DOMAIN: ACME-CORP.CO.UK]
              </span>
            </div>
            <p className="text-[11px] text-slate-500 italic pt-1">
              Two independent verification calls required, currently zero recorded (dual-sign-off requirement unsatisfied).
            </p>
          </div>

          {/* 3. Delegated Authority */}
          <div className="flex flex-col space-y-2 pt-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              DELEGATED AUTHORITY
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
              <div><span className="text-slate-500 font-medium">REGIME:</span> <span className="text-slate-800 font-semibold">Treasury and Payments Policy</span></div>
              <div><span className="text-slate-500 font-medium">ROLE REQUIRED:</span> <span className="text-slate-800 font-semibold">Senior Treasury Manager or higher</span></div>
              <div><span className="text-slate-500 font-medium">FINANCIAL LIMIT:</span> <span className="text-slate-800 font-semibold">Up to £250,000 within threshold</span></div>
              <div><span className="text-rose-700 font-bold bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200 text-[10px]">[CANNOT SELF-APPROVE OWN SUBMISSION]</span></div>
            </div>
          </div>

          {/* 4. Supporting Evidence */}
          <div className="flex flex-col space-y-2 pt-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              SUPPORTING EVIDENCE
            </span>
            <ul className="space-y-1.5 text-[11px] text-slate-700">
              <li className="flex items-start gap-1.5">
                <span className="font-semibold text-slate-900 w-18 shrink-0">INVOICE:</span>
                <span>Verified PDF attached · 480KB · metadata matched · original invoice #88412</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-semibold text-slate-900 w-18 shrink-0">REQUEST:</span>
                <span className="text-rose-700 font-medium">Bank confirmed notification — received via Zendesk #91142</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-semibold text-slate-900 w-18 shrink-0">RESEARCH:</span>
                <span>Supplier Intelligence Score — 91/100, no historic disputes</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-semibold text-rose-700 w-18 shrink-0">WARNING:</span>
                <span className="text-rose-600 font-medium">Recent SIM swap flag reported on account for finance director</span>
              </li>
            </ul>
          </div>

          {/* 5. Source of Record */}
          <div className="flex flex-col space-y-2 pt-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              SOURCE OF RECORD
            </span>
            <div className="flex flex-wrap items-center gap-3 text-[11px]">
              <div><span className="text-slate-500 font-medium">ERP RECORD:</span> <span className="font-mono font-bold text-slate-800">SAP S/4HANA · DOC-09881</span></div>
              <div><span className="text-slate-500 font-medium">STATUS:</span> <span className="font-semibold text-amber-700">Queued</span></div>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-800 font-mono text-[10px] font-semibold">
                LOCKOUT APPLIED: PREVENT-EXPORT: Manual sign-off required before push
              </span>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              ZoikoSuite has locked this record in SAP so it cannot be released automatically until this decision record is resolved.
            </p>
          </div>

          {/* 6. Accountable Owner */}
          <div className="flex flex-col space-y-2 pt-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              ACCOUNTABLE OWNER
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
              <div><span className="text-slate-500 font-medium">ASSIGNED ACTOR:</span> <span className="text-slate-900 font-bold">David Miller (CFO)</span></div>
              <div><span className="text-slate-500 font-medium">DESIGNATION:</span> <span className="text-slate-800">Group Director - Group Treasury</span></div>
              <div><span className="text-slate-500 font-medium">ROLE:</span> <span className="text-slate-800 font-medium">Approver (Dual-Signee required)</span></div>
              <div><span className="text-slate-500 font-medium">DUE:</span> <span className="text-rose-600 font-bold font-mono">24 hours from issue (18 hrs left)</span></div>
            </div>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="bg-slate-50 px-4 py-3.5 border-t border-slate-200 flex flex-col space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase mr-1">
              NEXT PERMITTED STEP:
            </span>
            <button className="px-3 py-1.5 rounded-md bg-[#185d85] hover:bg-[#124d70] text-white font-semibold text-[11px] shadow-xs">
              Approve with note
            </button>
            <button className="px-2.5 py-1.5 rounded-md bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium text-[11px]">
              Reject and flag for audit
            </button>
            <button className="px-2.5 py-1.5 rounded-md bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium text-[11px]">
              Reassign
            </button>
            <button className="px-2.5 py-1.5 rounded-md bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium text-[11px]">
              Request clarification
            </button>
          </div>
          <p className="text-[10px] text-slate-500 leading-tight">
            All actions are recorded into the ZoikoSuite Immutable Journal. Timestamps are cryptographically sealed and cannot be altered.
          </p>
        </div>
      </div>

      {/* Callout Quote below Card */}
      <div className="border-l-2 border-[#d4a853] pl-3.5 py-2 mt-5">
        <p className="text-xs sm:text-[13px] text-[#D4E4ED] leading-relaxed">
          What the board receives isn&apos;t a summary of someone&apos;s opinion on whether a supplier was paid. It is the real journal entry showing who approved it and under what authority, and how that decision was validated.
        </p>
      </div>
    </div>
  );
}
