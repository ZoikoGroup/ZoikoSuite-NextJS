"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface RelationshipRow {
  node: string;
  type: string;
  relationship: string;
  state: string;
  badgeClass: string;
}

const tableRows: RelationshipRow[] = [
  {
    node: "Zoiko Inc",
    type: "Entity",
    relationship: "Scoped to",
    state: "• ACTIVE",
    badgeClass: "border-emerald-500 text-emerald-700 bg-emerald-50",
  },
  {
    node: "United States",
    type: "Jurisdiction",
    relationship: "Applies rules",
    state: "• VERIFIED",
    badgeClass: "border-emerald-500 text-emerald-700 bg-emerald-50",
  },
  {
    node: "CTR-0918 notice period",
    type: "Obligation",
    relationship: "Constrains",
    state: "• REVIEW REQUIRED",
    badgeClass: "border-amber-500 text-amber-800 bg-amber-50",
  },
  {
    node: "EVD-AP-003 v2",
    type: "Policy",
    relationship: "Governs",
    state: "• BLOCKING",
    badgeClass: "border-rose-400 text-rose-700 bg-rose-50",
  },
  {
    node: "H. Vance · Treasury",
    type: "Responsible role",
    relationship: "Owns review",
    state: "• ASSIGNED",
    badgeClass: "border-emerald-500 text-emerald-700 bg-emerald-50",
  },
  {
    node: "Bank call-back record",
    type: "Evidence",
    relationship: "Required by",
    state: "• MISSING",
    badgeClass: "border-rose-400 text-rose-700 bg-rose-50",
  },
  {
    node: "Due-diligence file",
    type: "Evidence",
    relationship: "Related",
    state: "• RESTRICTED",
    badgeClass: "border-slate-400 text-slate-600 bg-slate-100",
  },
  {
    node: "Ledger event 14:02",
    type: "Event",
    relationship: "Created",
    state: "• RECORDED",
    badgeClass: "border-emerald-500 text-emerald-700 bg-emerald-50",
  },
];

export default function SummaryFirstGraphSection() {
  const renderTableCard = () => (
    <div className="w-full rounded-2xl border border-[#d6e0e7] bg-white shadow-md overflow-hidden flex flex-col">
      {/* Dark Top Terminal Bar */}
      <div className="bg-[#0B1E2B] px-4 sm:px-5 py-3 flex items-center justify-between">
        <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase">
          RELATIONSHIP TABLE · DEPTH 1
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1e3c50]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#1e3c50]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#1e3c50]" />
        </div>
      </div>

      {/* Breadcrumb Hierarchy Strip */}
      <div className="bg-[#f8fafc] px-4 sm:px-5 py-2.5 border-b border-[#edf2f6] overflow-x-auto text-[9px] sm:text-[10px] font-mono text-[#6b8293] whitespace-nowrap">
        OBJECT ↔ ENTITY ↔ JURISDICTION ↔ OBLIGATION ↔ POLICY ↔ ROLE ↔ EVIDENCE ↔ EVENT
      </div>

      {/* Relationship Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-[#edf2f6] text-[9.5px] sm:text-[10px] font-mono text-[#8fa4b2] uppercase tracking-wider bg-white">
              <th className="py-2.5 px-3 sm:px-4 font-semibold">RELATED NODE</th>
              <th className="py-2.5 px-3 sm:px-4 font-semibold">TYPE</th>
              <th className="py-2.5 px-3 sm:px-4 font-semibold">RELATIONSHIP</th>
              <th className="py-2.5 px-3 sm:px-4 font-semibold text-right">STATE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#edf2f6] text-[11.5px] sm:text-[12px]">
            {tableRows.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-[#f8fafc] transition-colors font-sans"
              >
                <td className="py-2.5 px-3 sm:px-4 font-semibold text-[#08222F]">
                  {row.node}
                </td>
                <td className="py-2.5 px-3 sm:px-4 text-[#475569]">{row.type}</td>
                <td className="py-2.5 px-3 sm:px-4 text-[#475569]">{row.relationship}</td>
                <td className="py-2.5 px-3 sm:px-4 text-right">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[9px] sm:text-[9.5px] font-mono font-bold tracking-wider uppercase border ${row.badgeClass}`}
                  >
                    {row.state}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnote Bar */}
      <div className="p-3.5 sm:p-4 border-t border-[#edf2f6] bg-white text-[9.5px] sm:text-[10px] font-mono text-[#8fa4b2] leading-relaxed">
        Initial depth is bounded to one hop. Restricted nodes appear with their access
        path rather than being silently removed. No decorative network animation is used.
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-16 lg:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#e6e2d8]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 lg:mb-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                BUSINESS CONTEXT AND LINEAGE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Summary first. The graph is
              <br />
              secondary.
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-3">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              A scan-friendly relationship summary is the default view. Where a
              graph appears it carries a bounded depth, keyboard navigation, a
              text summary and an equivalent table.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP LAYOUT (>= lg): Image (pi10.png) Left + Table Right    */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full rounded-2xl overflow-hidden border border-[#d6e0e7] bg-white shadow-md">
              <Image
                src="/operating-intelligence/pi10.png"
                alt="Business context, nodes and lineage topology view"
                width={800}
                height={600}
                priority
                className="w-full h-auto object-contain block"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex"
          >
            {renderTableCard()}
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE LAYOUT (< lg): Context Summary Card + Table Stacked     */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Card 1: Context Summary Default View */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full rounded-2xl border border-[#d6e0e7] bg-white shadow-md overflow-hidden flex flex-col"
          >
            {/* Dark Header */}
            <div className="bg-[#0B1E2B] px-4 py-3 flex items-center justify-between text-white">
              <span className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#D0AA55] uppercase">
                CONTEXT SUMMARY · DEFAULT VIEW
              </span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
                <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
                <span className="w-2 h-2 rounded-full bg-[#1c4055]" />
              </div>
            </div>

            {/* Inner Content Area */}
            <div className="p-4 sm:p-5 flex flex-col space-y-3 text-xs">
              <div className="font-mono text-xs font-bold text-[#08222F] pb-2 border-b border-[#edf2f6]">
                VEN-4471 · VENDOR BANK DETAIL CHANGE
              </div>

              <div className="space-y-2 text-[11.5px]">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="w-36 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Business object</span>
                  <span className="text-[#334155]">Vendor-master change request · originating system: AP/procurement</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="w-36 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Organization</span>
                  <span className="text-[#334155] font-semibold">Zoiko Group Holdings</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="w-36 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Entity</span>
                  <span className="text-[#334155]">Zoiko Inc · Z-US-04</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5">
                  <span className="w-36 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Jurisdiction</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#08222F] font-semibold">United States</span>
                    <span className="px-1.5 py-0.5 rounded border border-emerald-300 text-emerald-700 bg-emerald-50 text-[9px] font-mono font-bold">
                      • VERIFIED ACTIVE
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="w-36 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Function</span>
                  <span className="text-[#334155]">Procurement · vendor-master maintenance</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="w-36 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Owner</span>
                  <span className="text-[#334155]">H. Vance · Treasury Director</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="w-36 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Related obligations</span>
                  <span className="text-[#334155]">1 · supplier notice-period under CTR-0918</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="w-36 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Policies / controls</span>
                  <span className="text-[#334155] font-mono text-[11px]">POL-SPD-011 v4 · EVD-AP-003 v2 · POL-GOV-002 v1</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="w-36 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Evidence</span>
                  <span className="text-[#334155]">3 required · 1 missing · 1 restricted</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5">
                  <span className="w-36 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Source</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#334155]">AP-ledger · inv-led-04 · last successful update 14:02 today</span>
                    <span className="px-1.5 py-0.5 rounded border border-emerald-300 text-emerald-700 bg-emerald-50 text-[9px] font-mono font-bold">
                      • CURRENT
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="w-36 font-mono text-[10px] text-[#8fa4b2] uppercase shrink-0">Related events</span>
                  <span className="text-[#334155]">3 in last 24 hours · most recent 14:02</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subheader Label */}
          <div className="text-[10px] font-mono font-bold tracking-[0.14em] text-[#8fa4b2] uppercase">
            SECONDARY RELATIONSHIP VIEW — TABLE EQUIVALENT ALWAYS PRESENT
          </div>

          {/* Card 2: Relationship Table */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {renderTableCard()}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
