"use client";

import React from "react";

export default function MobilePayablesDecisionPacketView() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-xl overflow-hidden">
        {/* Top Dark Bar */}
        <div className="bg-[#08222F] px-4 py-3 flex items-center justify-between border-b border-[#14425a]">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              PAYABLES DECISION PACKET
            </span>
            <span className="text-[10px] font-mono text-slate-400">·</span>
            <span className="text-[10px] font-mono tracking-wider text-slate-300 uppercase">
              ILLUSTRATIVE DATA
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-500/80" />
            <span className="w-2 h-2 rounded-full bg-slate-500/80" />
            <span className="w-2 h-2 rounded-full bg-slate-500/80" />
          </div>
        </div>

        <div className="p-4 sm:p-5 space-y-4">
          {/* Header Row: Title & Evidence Required Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-100">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                Supplier creditor-account change
              </h4>
              <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                ACT-001 · Northstar UK Ltd. · GBP 468,200 exposure
              </p>
            </div>
            <div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-rose-300 bg-rose-50 text-rose-700 text-[10px] font-mono font-bold tracking-wider">
                <span className="text-rose-600">■</span> EVIDENCE REQUIRED
              </span>
            </div>
          </div>

          {/* 4 Inner Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Box 1: REQUEST AND SOURCE */}
            <div className="rounded-xl border border-slate-200/90 bg-[#FBFBFA] p-3.5 flex flex-col justify-between">
              <div className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-2.5">
                REQUEST AND SOURCE
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">Supplier</span>
                  <span className="font-mono font-semibold text-slate-800 text-right text-[11px]">
                    Supplierreference/SUP-4421
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">Entity</span>
                  <span className="font-semibold text-slate-800 text-right text-[11px]">
                    Northstar UK Ltd.
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">Amount</span>
                  <span className="font-mono font-semibold text-slate-800 text-right text-[11px]">
                    GBP 468,200 open payables · source-currency
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">Source</span>
                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    <span className="font-medium text-slate-800 text-[11px]">
                      Procurement platform v4 ·
                    </span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-emerald-300 bg-emerald-50 text-emerald-700 font-mono text-[9px] font-bold">
                      ▲ CURRENT 14:02
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">Due</span>
                  <span className="font-medium text-slate-800 text-right text-[11px]">
                    12 Aug 2026 · payment run
                  </span>
                </div>
              </div>
            </div>

            {/* Box 2: POLICY AND AUTHORITY */}
            <div className="rounded-xl border border-slate-200/90 bg-[#FBFBFA] p-3.5 flex flex-col justify-between">
              <div className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-2.5">
                POLICY AND AUTHORITY
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-slate-500">POL-083 v5</span>
                    <span className="font-medium text-slate-800 text-right">
                      Supplier master change-control —
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-rose-300 bg-rose-50 text-rose-700 font-mono text-[9px] font-bold">
                      ▶ BLOCKING
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="font-mono text-slate-500 text-[11px]">POL-SOX-002 v2</span>
                  <div className="flex items-center gap-1.5 justify-end">
                    <span className="text-[11px] font-medium text-slate-800">Duty separation —</span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-rose-300 bg-rose-50 text-rose-700 font-mono text-[9px] font-bold">
                      ■ CONFLICT
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">Authority required</span>
                  <span className="font-medium text-slate-800 text-right text-[11px]">
                    Treasury authorization
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">Authority source</span>
                  <span className="font-medium text-slate-800 text-right text-[11px]">
                    Board delegation schedule §4
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">Segregation</span>
                  <span className="font-medium text-slate-800 text-right text-[11px]">
                    Requestor excluded from approving
                  </span>
                </div>
              </div>
            </div>

            {/* Box 3: EVIDENCE — 4 OF 6 */}
            <div className="rounded-xl border border-slate-200/90 bg-[#FBFBFA] p-3.5 flex flex-col justify-between">
              <div className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-2.5">
                EVIDENCE — 4 OF 6
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2">
                  <span className="shrink-0 px-1.5 py-0.5 rounded border border-amber-300 bg-amber-50 text-amber-800 font-mono text-[9px] font-semibold">
                    Received
                  </span>
                  <span className="text-[11px] text-slate-700 leading-tight">
                    Purchase order · invoice · supplier snapshot · notification
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="shrink-0 px-1.5 py-0.5 rounded border border-amber-300 bg-amber-50 text-amber-800 font-mono text-[9px] font-semibold">
                    Missing
                  </span>
                  <span className="text-[11px] text-slate-700 leading-tight">
                    Bank call-back verification — required by POL-004
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="shrink-0 px-1.5 py-0.5 rounded border border-amber-300 bg-amber-50 text-amber-800 font-mono text-[9px] font-semibold">
                    Restricted
                  </span>
                  <span className="text-[11px] text-slate-700 leading-tight">
                    Due-diligence file — exists, not visible to you
                  </span>
                </div>
              </div>
            </div>

            {/* Box 4: DECISION AND EXECUTION — SEPARATED */}
            <div className="rounded-xl border border-slate-200/90 bg-[#FBFBFA] p-3.5 flex flex-col justify-between">
              <div className="text-[9.5px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-2.5">
                DECISION AND EXECUTION — SEPARATED
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">Approve</span>
                  <span className="font-semibold text-slate-900 text-right text-[11px]">
                    Unavailable — two blocking policy outcomes
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">Permitted now</span>
                  <span className="font-medium text-slate-800 text-right text-[11px]">
                    Request evidence · escalate · reject with reason
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">IF approved</span>
                  <span className="font-medium text-slate-800 text-right text-[11px]">
                    Execution would pass to the banking platform
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">Execution permission</span>
                  <span className="font-medium text-slate-800 text-right text-[11px]">
                    Held separately · sec-pay-02 · no approval rights
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 text-[11px]">Handoff record</span>
                  <span className="font-medium text-slate-800 text-right text-[11px]">
                    Reference, timestamp and root-hash retained
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-2">
            <p className="text-[10.5px] sm:text-[11px] font-mono text-slate-500 leading-relaxed">
              The packet never offers a combined &quot;approve and pay&quot; control. Approval and execution are distinct action classes with distinct permissions and, in this architecture, distinct systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
