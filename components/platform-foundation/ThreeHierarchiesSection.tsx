"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HierarchyTreeItem {
  title: string;
  description: string;
  dotColor: string;
}

const hierarchyTrees: HierarchyTreeItem[] = [
  {
    title: "Legal hierarchy",
    description: "Corporate identity and parent",
    dotColor: "bg-blue-500",
  },
  {
    title: "Management hierarchy",
    description: "Reporting lines and authority",
    dotColor: "bg-purple-500",
  },
  {
    title: "Brand / product hierarchy",
    description: "Customer-facing presence",
    dotColor: "bg-cyan-500",
  },
  {
    title: "Tax consolidation",
    description: "Group status, jurisdiction and nexus, transfer pricing scope",
    dotColor: "bg-amber-500",
  },
];

interface MobileEntityRow {
  entity: string;
  type: string;
  parent: string;
  jurisdiction: string;
  status: string;
  taxNexus: string;
  bankAccount: string;
  ownership: string;
  isHighlighted?: boolean;
}

const mobileEntityRows: MobileEntityRow[] = [
  {
    entity: "Northstar Holdings",
    type: "Parent",
    parent: "—",
    jurisdiction: "United Kingdom",
    status: "ACTIVE",
    taxNexus: "United Kingdom",
    bankAccount: "Customer primary",
    ownership: "100% Parent",
  },
  {
    entity: "Northstar UK Ltd",
    type: "Operating",
    parent: "Northstar Holdings",
    jurisdiction: "United Kingdom",
    status: "ACTIVE",
    taxNexus: "United Kingdom",
    bankAccount: "Customer operating",
    ownership: "100% Direct",
  },
  {
    entity: "Northstar Europe",
    type: "Operating",
    parent: "Northstar Holdings",
    jurisdiction: "Germany",
    status: "ACTIVE",
    taxNexus: "Euro-tax pool",
    bankAccount: "Customer corporate",
    ownership: "100% Direct",
  },
  {
    entity: "Northstar Singapore Pte Ltd",
    type: "Operating",
    parent: "4 ENTITIES IN LINE",
    jurisdiction: "Singapore",
    status: "ACTIVE",
    taxNexus: "CROSS-BORDER NEXUS: 4",
    bankAccount: "Domestic shared",
    ownership: "100%",
    isHighlighted: true,
  },
  {
    entity: "Associated entity",
    type: "Associate",
    parent: "—",
    jurisdiction: "—",
    status: "NOT IN USE IN SCOPE",
    taxNexus: "—",
    bankAccount: "—",
    ownership: "—",
  },
];

export default function ThreeHierarchiesSection() {
  const [activeTab, setActiveTab] = useState("Legal hierarchy");
  const tabs = ["Legal hierarchy", "Management hierarchy", "Reporting hierarchy"];

  return (
    <section className="w-full bg-white text-[#0f172a] py-16 sm:py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#854d0e] uppercase">
                MULTI-ENTITY OPERATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-tight">
              Three hierarchies, held independently
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Legal, management and reporting hierarchies are separate
              selectable views. Collapsing them into one tree would misrepresent
              every organization that has more than one.
            </p>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP-ONLY 2-COLUMN VIEW (pf3.png) - PRESERVED 100% UNTOUCHED */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual (pf3.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-white p-3 sm:p-5 flex items-center justify-center"
          >
            <Image
              src="/platform-foundation/pf3.png"
              alt="Three hierarchies held independently illustration"
              width={600}
              height={600}
              priority
              className="w-full h-auto object-contain rounded-xl block"
            />
          </motion.div>

          {/* Right Column: Hierarchy Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col"
          >
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase mb-3">
              THREE TREES, ONE PARENT
            </span>

            {/* Tree Items List */}
            <div className="flex flex-col gap-2.5">
              {hierarchyTrees.map((tree, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700"
                >
                  <span className={`w-2 h-2 rounded-full ${tree.dotColor} shrink-0 mt-1.5`} />
                  <div>
                    <strong className="text-slate-900 font-semibold">{tree.title}:</strong>{" "}
                    <span className="text-slate-600">{tree.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Combination View Callout Box */}
            <div className="border border-slate-200 bg-white rounded-xl p-4 sm:p-5 shadow-xs mt-6">
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1.5">
                COMBINATION VIEW
              </span>
              <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed">
                Any action evaluated has to select which parent entity it reports
                to and where the transaction&apos;s exposure belongs: contributing
                entities, debtor entities and parent entities retain their own
                distinct policies, expiry and jurisdiction as a whole-chain
                record.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE-ONLY EXTENSIONS (STRICTLY HIDDEN ON DESKTOP VIA lg:hidden) */}
        {/* ------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Mobile Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full rounded-2xl border border-[#1a3f55] bg-[#071d29] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Terminal Top Bar */}
            <div className="bg-[#051620] px-3.5 py-2.5 flex items-center justify-between border-b border-[#12364c]">
              <span className="text-[9.5px] font-mono font-bold tracking-[0.12em] text-[#7ea0b5] uppercase">
                ENTITY REGISTER · MAP · SMT-744-003
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              </div>
            </div>

            {/* Sub-header Navigation Tabs */}
            <div className="bg-[#08222F] px-3 py-2 border-b border-[#12364c] overflow-x-auto flex items-center gap-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? "bg-[#0d3448] text-white font-semibold border border-sky-600/50"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Inner White Table Container */}
            <div className="bg-white text-slate-900 p-3.5 sm:p-4 flex flex-col">
              <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                ENTITY RECORDS FOR CURRENT HIERARCHY, ORDER, AND REPORTING ROLES
              </span>

              <div className="overflow-x-auto -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[620px] text-left border-collapse text-[10.5px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                      <th className="py-2 pr-2 font-semibold">NAME</th>
                      <th className="py-2 px-2 font-semibold">TYPE</th>
                      <th className="py-2 px-2 font-semibold">PARENT ENTITY</th>
                      <th className="py-2 px-2 font-semibold">JURISDICTION</th>
                      <th className="py-2 px-2 font-semibold">STATUS</th>
                      <th className="py-2 px-2 font-semibold">TAX NEXUS</th>
                      <th className="py-2 px-2 font-semibold">BANK ACCOUNT</th>
                      <th className="py-2 pl-2 font-semibold">OWNERSHIP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {mobileEntityRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className={row.isHighlighted ? "bg-[#FFF9EB]" : "hover:bg-slate-50"}
                      >
                        <td className="py-2 pr-2 font-semibold text-slate-900 whitespace-nowrap font-sans">
                          {row.entity}
                        </td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap">{row.type}</td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap">
                          {row.parent === "4 ENTITIES IN LINE" ? (
                            <span className="px-1.5 py-0.2 rounded text-[8.5px] bg-[#FDF2D6] text-amber-900 border border-[#E8C882]">
                              4 ENTITIES IN LINE
                            </span>
                          ) : (
                            row.parent
                          )}
                        </td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap">{row.jurisdiction}</td>
                        <td className="py-2 px-2 whitespace-nowrap">
                          {row.status === "ACTIVE" ? (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                              ● ACTIVE
                            </span>
                          ) : (
                            <span className="px-1.5 py-0.2 rounded text-[8px] bg-slate-100 text-slate-600 border border-slate-200">
                              NOT IN USE IN SCOPE
                            </span>
                          )}
                        </td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap">
                          {row.taxNexus === "CROSS-BORDER NEXUS: 4" ? (
                            <span className="px-1.5 py-0.2 rounded text-[8.5px] bg-rose-50 text-rose-800 border border-rose-200">
                              CROSS-BORDER NEXUS: 4
                            </span>
                          ) : (
                            row.taxNexus
                          )}
                        </td>
                        <td className="py-2 px-2 text-slate-600 whitespace-nowrap font-sans">{row.bankAccount}</td>
                        <td className="py-2 pl-2 text-slate-600 whitespace-nowrap">{row.ownership}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footnote */}
              <p className="text-[9.5px] font-mono text-slate-400 pt-3 border-t border-slate-100 mt-2 leading-snug">
                All entities require transparent registration, cross-border parent context, status tracking, multi-tier relationship tracing. The condition for entity inclusion in scope is clear: valid registration or system role must appear on the register.
              </p>
            </div>
          </motion.div>

          {/* Three Trees List */}
          <div className="flex flex-col space-y-2.5">
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
              THREE TREES, ONE PARENT
            </span>
            <div className="flex flex-col gap-2">
              {hierarchyTrees.map((tree, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-700"
                >
                  <span className={`w-2 h-2 rounded-full ${tree.dotColor} shrink-0 mt-1`} />
                  <div>
                    <strong className="text-slate-900 font-semibold">{tree.title}:</strong>{" "}
                    <span className="text-slate-600">{tree.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Red Bordered Alert Box */}
          <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-4 flex flex-col space-y-2.5">
            <span className="text-[10px] font-mono font-bold tracking-wider text-rose-800 uppercase">
              CRITICAL: MULTI-ENTITY DEBT/LIABILITY EXPOSURE
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Intercompany reconciliation",
                "Consolidation",
                "Cross-subsidiary event linkage",
                "True tax home",
                "Segregated duty delegations",
                "Multi-jurisdiction audit trail",
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[9.5px] font-mono font-medium bg-white text-rose-900 border border-rose-200 shadow-2xs"
                >
                  {pill}
                </span>
              ))}
            </div>
            <p className="text-xs text-rose-900/90 leading-relaxed pt-1">
              Multi-entity operations require exact, transparent and continuous reconciliations. Capital allocation and collateral segregation must be maintained without inter-entity commingling unless covered by full intra-group contractual guarantees.
            </p>
          </div>

          {/* Combination View Callout */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1.5">
              COMBINATION VIEW
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Any action evaluated has to select which parent entity it reports to and where the transaction&apos;s exposure belongs: contributing entities, debtor entities and parent entities retain their own distinct policies, expiry and jurisdiction as a whole-chain record.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
