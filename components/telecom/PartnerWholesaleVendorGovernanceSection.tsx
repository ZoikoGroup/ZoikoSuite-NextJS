"use client";

import React from "react";

export default function PartnerWholesaleVendorGovernanceSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                PARTNER, WHOLESALE AND VENDOR GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Obligations that run in both directions
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start w-full">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed w-full">
              A host operator agreement imposes duties on you and entitlements
              you can claim. Both are tracked, with authority in the execution
              path.
            </p>
          </div>
        </div>

        {/* Cards Stack */}
        <div className="flex flex-col gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 border border-[#2A6386] border-l-[4px] border-l-[#8A3B3B] shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-6 items-start font-mono">
            {/* Col 1 */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                AGREEMENT AND COUNTERPARTY
              </span>
              <h3 className="text-sm font-bold text-[#08222F] font-sans">
                Host operator agreement · AGR-2026-0412
              </h3>
              <p className="text-xs text-gray-600">
                Counterparty: host MNO · MVNO US
              </p>
              <p className="text-xs text-gray-600">
                Type: wholesale access · 3-year term
              </p>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-1.5 text-xs text-gray-700">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-mono">
                OBLIGATIONS BOTH WAYS
              </span>
              <p>
                <span className="text-gray-400">We owe:</span> volume
                commitment, forecast accuracy, brand terms
              </p>
              <p>
                <span className="text-gray-400">They owe:</span> service levels,
                capacity, notice on tariff change
              </p>
              <p>
                <span className="text-gray-400">Notice window:</span> 90 days ·
                renewal in 42 days
              </p>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-2 text-xs text-gray-700">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-mono">
                AUTHORITY AND STATUS
              </span>
              <p>
                <span className="text-gray-400">Signatory:</span> two-signature
                rule · one obtained
              </p>
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#FBF2DF] text-[#9C6B12] border border-[#9C6B12]">
                  · BLOCKED - EXCEEDS DELEGATION
                </span>
              </div>
              <p className="text-gray-600">
                Evidence: 3 of 5 · commercial terms present
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 border border-[#2A6386] border-l-[4px] border-l-[#2A6386] shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-6 items-start font-mono">
            {/* Col 1 */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                AGREEMENT AND COUNTERPARTY
              </span>
              <h3 className="text-sm font-bold text-[#08222F] font-sans">
                Roaming agreement · AGR-2026-0455
              </h3>
              <p className="text-xs text-gray-600">
                Counterparty: partner operator · OpCo DE
              </p>
              <p className="text-xs text-gray-600">
                Type: bilateral roaming · evergreen
              </p>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-1.5 text-xs text-gray-700">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-mono">
                OBLIGATIONS BOTH WAYS
              </span>
              <p>
                <span className="text-gray-400">We owe:</span> settlement
                reporting, fraud notification
              </p>
              <p>
                <span className="text-gray-400">They owe:</span> reciprocal
                rates, dispute window
              </p>
              <p>
                <span className="text-gray-400">Notice window:</span> 180
                days
              </p>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-2 text-xs text-gray-700">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-mono">
                AUTHORITY AND STATUS
              </span>
              <p>
                <span className="text-gray-400">Signatory:</span> within
                wholesale delegation
              </p>
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#EAF5F0] text-[#1E7A5A] border border-[#1E7A5A]">
                  · CURRENT
                </span>
              </div>
              <p className="text-gray-600">Evidence: complete</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 border border-[#2A6386] border-l-[4px] border-l-[#2A6386] shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-6 items-start font-mono">
            {/* Col 1 */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                VENDOR AND DEPENDENCY
              </span>
              <h3 className="text-sm font-bold text-[#08222F] font-sans">
                Network vendor — managed service · VND-2026-018
              </h3>
              <p className="text-xs text-gray-600">
                Dependency: critical · OpCo UK, OpCo DE
              </p>
              <p className="text-xs text-gray-600">
                Type: managed operations · 5-year term
              </p>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-1.5 text-xs text-gray-700">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-mono">
                OBLIGATIONS AND ACCESS
              </span>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Diligence:</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FBF2DF] text-[#9C6B12] border border-[#9C6B12]">
                  · REVIEW DUE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Access review:</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FCE8E6] text-[#A83232] border border-[#A83232]">
                  · OVERDUE
                </span>
              </div>
              <p>
                <span className="text-gray-400">Sub-outsourcing notice:</span>{" "}
                required
              </p>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-2 text-xs text-gray-700">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-mono">
                AUTHORITY AND STATUS
              </span>
              <p>
                <span className="text-gray-400">Owner:</span> vendor
                management
              </p>
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#FBF2DF] text-[#9C6B12] border border-[#9C6B12]">
                  · ACTION REQUIRED
                </span>
              </div>
              <p className="text-gray-600">Evidence: 4 of 6</p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 border-l border-l-[#D0AA55] text-xs text-gray-500 leading-relaxed">
          <p>
            Settlement, rating, clearing and dispute calculation remain in the
            systems that perform them.
          </p>
          <p>
            ZoikoSuite governs the agreement, the obligation, the authority and
            the evidence around those processes.
          </p>
        </div>
      </div>
    </section>
  );
}
