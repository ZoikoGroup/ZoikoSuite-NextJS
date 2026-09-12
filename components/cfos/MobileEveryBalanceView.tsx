"use client";

import React from "react";

export default function MobileEveryBalanceView() {
  return (
    <div className="w-full flex flex-col space-y-4">
      {/* 3 Mobile Balance Cards */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 overflow-hidden divide-y divide-slate-100">
        {/* Card 1: Bank Balance */}
        <div className="p-4 sm:p-6 bg-white">
          <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#08222F]">
                Bank balance
              </h3>
              <span className="text-[11px] font-mono text-slate-500">
                Authoritative · camt.053 direct
              </span>
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-[#08222F]">
              GBP 4,164,215
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs">
            <div className="space-y-1.5">
              <div>
                <span className="text-slate-400 font-mono text-[10.5px] block">SOURCE/TYPE:</span>
                <span className="font-semibold text-slate-800">Bank balance — as reported by Barclays Bank</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono text-[10.5px] block">CURRENCY:</span>
                <span className="font-semibold text-slate-800">GBP — native currency</span>
              </div>
              <div className="pt-1">
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border border-emerald-300 bg-emerald-50 text-emerald-700">
                  ✓ RECONCILED TO LEDGER
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div>
                <span className="text-slate-400 font-mono text-[10.5px] block">FEED:</span>
                <span className="font-semibold text-slate-800">Barclays Direct Link · camt.053 (direct)</span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <span className="text-slate-400 font-mono text-[10.5px] block">AS OF:</span>
                  <span className="font-semibold text-slate-800">01 Aug 2026 10:14 BST</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border border-emerald-300 bg-emerald-50 text-emerald-700">
                  ✓ CURRENT
                </span>
              </div>
              <div>
                <span className="text-slate-400 font-mono text-[10.5px] block">RECONCILED VIA:</span>
                <span className="font-semibold text-slate-800">Automated rule 14.2/ERP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Book Balance */}
        <div className="p-4 sm:p-6 bg-white">
          <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#08222F]">
                Book balance
              </h3>
              <span className="text-[11px] font-mono text-slate-500">
                Authoritative · general ledger
              </span>
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-[#08222F]">
              GBP 4,180,554
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs">
            <div className="space-y-1.5">
              <div>
                <span className="text-slate-400 font-mono text-[10.5px] block">SOURCE/TYPE:</span>
                <span className="font-semibold text-slate-800">Book balance — NetSuite GL balance Account 1010</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono text-[10.5px] block">CURRENCY:</span>
                <span className="font-semibold text-slate-800">GBP — functional currency</span>
              </div>
              <div className="pt-1">
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border border-amber-300 bg-amber-50 text-amber-800">
                  ● DISCREPANCY: -GBP 16,339 (3 PENDING TXNS)
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div>
                <span className="text-slate-400 font-mono text-[10.5px] block">FEED:</span>
                <span className="font-semibold text-slate-800">NetSuite Core API · real-time</span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <span className="text-slate-400 font-mono text-[10.5px] block">AS OF:</span>
                  <span className="font-semibold text-slate-800">01 Aug 2026 10:20 BST</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border border-emerald-300 bg-emerald-50 text-emerald-700">
                  ✓ CURRENT
                </span>
              </div>
              <div>
                <span className="text-slate-400 font-mono text-[10.5px] block">RECONCILED VIA:</span>
                <span className="font-semibold text-slate-800">Not applicable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Cash Balance (Highlighted) */}
        <div className="p-4 sm:p-6 bg-[#FEF9EE]">
          <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-amber-200/60">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#08222F]">
                Cash balance
              </h3>
              <span className="text-[11px] font-mono text-slate-500">
                Authoritative general ledger
              </span>
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-[#08222F]">
              USD 1,304,660
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs">
            <div className="space-y-1.5">
              <div>
                <span className="text-slate-400 font-mono text-[10.5px] block">SOURCE/TYPE:</span>
                <span className="font-semibold text-slate-800">Cash balance — as reported by Silicon Valley Bank</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono text-[10.5px] block">CURRENCY:</span>
                <span className="font-semibold text-slate-800">USD — functional currency</span>
              </div>
              <div className="pt-1">
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border border-rose-300 bg-rose-50 text-rose-700">
                  ■ UNRESOLVED DISCREPANCY: -USD 485,320
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div>
                <span className="text-slate-400 font-mono text-[10.5px] block">FEED:</span>
                <span className="font-semibold text-slate-800">Banking platform · direct statement CSV</span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <span className="text-slate-400 font-mono text-[10.5px] block">AS OF:</span>
                  <span className="font-semibold text-slate-800">31 Jul 2026 17:00 EDT</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9.5px] font-mono font-bold border border-rose-300 bg-rose-50 text-rose-700">
                  ▲ STALE (&gt;12H)
                </span>
              </div>
              <div>
                <span className="text-slate-400 font-mono text-[10.5px] block">RECONCILED VIA:</span>
                <span className="font-semibold text-slate-800">Manual entry, not checked by automated sync rule</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Callout Card 1: PP & Treasury Summary */}
      <div className="rounded-2xl border border-amber-200/80 bg-[#FEF9EE] p-4 sm:p-5 text-xs text-slate-800 shadow-sm space-y-2 font-mono">
        <div className="text-[10.5px] font-bold text-amber-900 tracking-wider uppercase pb-1 border-b border-amber-200/60">
          PP &amp; TREASURY SUMMARY (12 AUG)
        </div>
        <div className="space-y-1 text-[11px] leading-relaxed">
          <p><strong className="text-slate-900">LIQUID ASSETS:</strong> GBP 4,164,215 + USD 1,304,660 — always shown source primary</p>
          <p><strong className="text-slate-900">FX RATE:</strong> Source-as-of rate applied · 1.2820 GBP</p>
          <p><strong className="text-slate-900">NEXT OUT:</strong> 12 Aug (GBP 400,200)</p>
          <p><strong className="text-slate-900">RULE TYPE:</strong> Threshold — dual-signoff to be approved (framework)</p>
          <p><strong className="text-slate-900">STATUS:</strong> Waiting for evidence (intercompany reconciliation pending)</p>
          <p><strong className="text-slate-900">AUDIT TRAIL:</strong> Not submitable — this delegation remains open as a multi-jurisdiction exception until proof linked in folder</p>
        </div>
      </div>

      {/* Callout Card 2: No Composite Numbers */}
      <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-4 sm:p-5 text-xs text-slate-700 shadow-sm">
        <div className="text-[10.5px] font-mono font-bold text-rose-900 tracking-wider uppercase mb-1.5">
          NO COMPOSITE NUMBERS EXPLAINED
        </div>
        <p className="text-[11.5px] leading-relaxed">
          No synthetic cash headroom, runway forecast or liquidity figure is derived from these balances. A cash balance is not an available liquidity, and any such calculation requires human judgements on risk tolerance, reserves and revenue coverage before it can be displayed.
        </p>
      </div>

      {/* Callout Card 3: Separate Treasury Controls */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 text-xs text-slate-700 shadow-sm">
        <div className="text-[10.5px] font-mono font-bold text-slate-800 tracking-wider uppercase mb-1.5">
          SEPARATE TREASURY CONTROLS
        </div>
        <p className="text-[11.5px] leading-relaxed">
          Payment preparation, account changes, and release/authorization run through the systems shown above. ZoikoSuite evaluates and authorizes; the banking platform executes. The two are separate permissions and separate systems.
        </p>
      </div>
    </div>
  );
}
