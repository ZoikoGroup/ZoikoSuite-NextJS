"use client";

import React from "react";

export default function ControlProblemSection() {
  return (
    <section className="w-full bg-white text-[#0F172A] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid / Flex */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#C59B3F]"></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                THE CONTROL PROBLEM
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              The banking core may be controlled. The operations around it are
              often fragmented.
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-10 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Five operating conditions, each paired with the executive exposure
              it creates. No percentages, regulatory claims or savings figures.
            </p>
          </div>
        </div>

        {/* Bottom Cards Grid (5 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Card 1 */}
          <div
            className="bg-white rounded-xl p-5 flex flex-col justify-between shadow-sm"
            style={{
              border: "1px solid #C4A482",
              borderTop: "3px solid #8A3B3B",
            }}
          >
            <div>
              <span className="text-xs font-semibold text-[#8A3B3B] block mb-3 font-mono">
                01
              </span>
              <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                Multi-entity fragmentation
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Finance, workforce, contracts, obligations, evidence and
                approvals sit in separate systems across legal entities and
                business units.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
              <p className="text-xs font-medium text-[#16262F] leading-relaxed">
                Reconciliation overhead, weak ownership, inconsistent control,
                delayed executive visibility.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white rounded-xl p-5 flex flex-col justify-between shadow-sm"
            style={{
              border: "1px solid #C4A482",
              borderTop: "3px solid #8A3B3B",
            }}
          >
            <div>
              <span className="text-xs font-semibold text-[#8A3B3B] block mb-3 font-mono">
                02
              </span>
              <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                Policy outside the action
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Authority, policy, legal review and compliance checks may occur
                in email, spreadsheets, tickets &mdash; or after execution.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
              <p className="text-xs font-medium text-[#16262F] leading-relaxed">
                Control failures discovered too late and difficult decision
                reconstruction.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white rounded-xl p-5 flex flex-col justify-between shadow-sm"
            style={{
              border: "1px solid #C4A482",
              borderTop: "3px solid #8A3B3B",
            }}
          >
            <div>
              <span className="text-xs font-semibold text-[#8A3B3B] block mb-3 font-mono">
                03
              </span>
              <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                Obligation ownership gaps
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Regulatory, contractual, tax, workforce, vendor and corporate
                obligations can be tracked separately.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
              <p className="text-xs font-medium text-[#16262F] leading-relaxed">
                Missed ownership, duplicate work, late escalation, weak
                evidence.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="bg-white rounded-xl p-5 flex flex-col justify-between shadow-sm"
            style={{
              border: "1px solid #C4A482",
              borderTop: "3px solid #8A3B3B",
            }}
          >
            <div>
              <span className="text-xs font-semibold text-[#8A3B3B] block mb-3 font-mono">
                04
              </span>
              <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                Evidence reconstruction
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Approvals, rule basis, source records, documents and system
                events must be assembled during audit or investigation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
              <p className="text-xs font-medium text-[#16262F] leading-relaxed">
                Slow assurance, fragile audit narratives, costly evidence
                retrieval.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="bg-white rounded-xl p-5 flex flex-col justify-between shadow-sm sm:col-span-2 lg:col-span-1"
            style={{
              border: "1px solid #C4A482",
              borderTop: "3px solid #8A3B3B",
            }}
          >
            <div>
              <span className="text-xs font-semibold text-[#8A3B3B] block mb-3 font-mono">
                05
              </span>
              <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                Integration sprawl
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Core banking, finance, HR, legal, procurement, identity and
                specialist risk tools exchange data through fragmented
                integrations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
              <p className="text-xs font-medium text-[#16262F] leading-relaxed">
                Unclear data ownership, vendor risk, lineage gaps, technical
                debt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
