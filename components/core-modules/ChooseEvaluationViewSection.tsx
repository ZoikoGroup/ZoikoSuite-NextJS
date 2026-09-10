"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

interface CanonicalModuleRow {
  canonicalModule: string;
  domain: "Finance" | "Workforce" | "Tax, Legal & Compliance" | "Commercial";
  primarySource: string;
  sourceRole: string;
  typicalScopeBoundary: string;
  primaryObject: string;
}

const allModules: CanonicalModuleRow[] = [
  {
    canonicalModule: "Accounting & General Ledger",
    domain: "Finance",
    primarySource: "Period close, journals, exceptions, allocations",
    sourceRole: "Authority / evidence / review",
    typicalScopeBoundary: "Mostly external",
    primaryObject: "AP, AR, Treasury, Tax",
  },
  {
    canonicalModule: "Accounts Payable",
    domain: "Finance",
    primarySource: "Invoices, payables, metadata, payment scheduling",
    sourceRole: "Authority / exception / queue",
    typicalScopeBoundary: "Implementation-defined",
    primaryObject: "Procurement, Treasury, GL",
  },
  {
    canonicalModule: "Accounts Receivable",
    domain: "Finance",
    primarySource: "Customer invoices, collections, disputes, credit notes",
    sourceRole: "Authority / evidence",
    typicalScopeBoundary: "Implementation-defined",
    primaryObject: "AR, Legal & Contracts",
  },
  {
    canonicalModule: "Treasury & Cash Position",
    domain: "Finance",
    primarySource: "Bank positions, cash movement, payment rules",
    sourceRole: "Authority / review / evidence",
    typicalScopeBoundary: "Mostly external",
    primaryObject: "AP, GL",
  },
  {
    canonicalModule: "Payroll",
    domain: "Workforce",
    primarySource: "Pay runs, obligations, adjustments, filings",
    sourceRole: "Primary jurisdiction / authority pathway",
    typicalScopeBoundary: "Mostly external",
    primaryObject: "HR, Tax, GL",
  },
  {
    canonicalModule: "Human Resources",
    domain: "Workforce",
    primarySource: "Employee context, lifecycle, roles, leave, documents",
    sourceRole: "Primary / jurisdiction context",
    typicalScopeBoundary: "Mostly external",
    primaryObject: "Payroll, Legal & Contracts",
  },
  {
    canonicalModule: "Tax Management",
    domain: "Tax, Legal & Compliance",
    primarySource: "Determinations, filings, obligations, cross-border rules",
    sourceRole: "Jurisdiction context / professional review routing",
    typicalScopeBoundary: "Implementation-defined",
    primaryObject: "AP, AR, GL, Compliance",
  },
  {
    canonicalModule: "Legal & Contracts",
    domain: "Tax, Legal & Compliance",
    primarySource: "Contracts, clauses, obligations, approval",
    sourceRole: "Authority / evidence / professional review routing",
    typicalScopeBoundary: "Mostly external",
    primaryObject: "Procurement, Tax, HR",
  },
  {
    canonicalModule: "Compliance & Obligations",
    domain: "Tax, Legal & Compliance",
    primarySource: "Obligation calendar, registers, evidence, exemptions",
    sourceRole: "Jurisdiction / evidence / review authority",
    typicalScopeBoundary: "Often spreadsheet",
    primaryObject: "All canonical modules",
  },
  {
    canonicalModule: "Procurement & Commercial Operations",
    domain: "Commercial",
    primarySource: "Requests, suppliers, approvals, commitments",
    sourceRole: "Authority / exception / queue",
    typicalScopeBoundary: "Shared",
    primaryObject: "AP, Legal, Compliance",
  },
];

const categoryTabs = [
  "All (10)",
  "Finance",
  "Workforce",
  "Tax, Legal & Compliance",
  "Commercial",
] as const;

const lensPills = [
  "All 10 canonical modules",
  "Primary workflow",
  "Accountability & policy",
  "Coexistence & boundaries",
  "Direct report",
] as const;

export default function ChooseEvaluationViewSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All (10)");
  const [activeLens, setActiveLens] = useState<string>("All 10 canonical modules");

  const filteredModules = useMemo(() => {
    return allModules.filter((mod) => {
      // Category Tab Filter
      if (activeCategory !== "All (10)" && mod.domain !== activeCategory) {
        return false;
      }
      // Search Query Filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchName = mod.canonicalModule.toLowerCase().includes(q);
        const matchSource = mod.primarySource.toLowerCase().includes(q);
        const matchRole = mod.sourceRole.toLowerCase().includes(q);
        const matchObject = mod.primaryObject.toLowerCase().includes(q);
        if (!matchName && !matchSource && !matchRole && !matchObject) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="w-full bg-[#FAF8F5] text-[#0f172a] py-20 px-4 sm:px-6 lg:px-20 flex justify-center border-t border-[#ede9df]">
      <div className="max-w-[1240px] w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#c5a059]" />
              <span className="text-[10.5px] font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
                FIVE VIEWS, SAME 10
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#08222F] tracking-tight leading-[1.14]">
              Choose a view that matches
              <br />
              your evaluation
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex items-center lg:pt-4">
            <p className="text-[#566573] text-[13.5px] sm:text-sm leading-relaxed max-w-[480px]">
              ZoikoSuite does not infer your role, employer or intention on this page. Every filter below is one you select yourself, and results always display the canonical module name.
            </p>
          </div>
        </div>

        {/* Filter Card Container */}
        <div className="w-full rounded-2xl border border-[#e2ddd3] bg-white p-5 sm:p-7 shadow-xs mb-8">
          {/* Search Box */}
          <div className="relative w-full mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by module name — e.g. GL, AP, HCM, CLM or Compliance"
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-xs sm:text-[13px] text-[#08222F] placeholder-[#94a3b8] focus:outline-none focus:border-[#c5a059] focus:bg-white transition-all"
            />
          </div>

          {/* Row 1: Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 mb-4 pb-4 border-b border-[#f1f5f9]">
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#94a3b8] uppercase mr-2">
              DOMAIN:
            </span>
            {categoryTabs.map((tab) => {
              const isSelected = activeCategory === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-[#08222F] text-white shadow-xs"
                      : "bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Row 2: Lens / Mode Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#94a3b8] uppercase mr-2">
              LENS:
            </span>
            {lensPills.map((lens) => {
              const isSelected = activeLens === lens;
              return (
                <button
                  key={lens}
                  onClick={() => setActiveLens(lens)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-[#D0AA55] text-[#08222F] font-semibold shadow-xs"
                      : "bg-[#f8fafc] border border-[#e2e8f0] text-[#64748b] hover:bg-[#f1f5f9]"
                  }`}
                >
                  {lens}
                </button>
              );
            })}
          </div>
        </div>

        {/* Showing Count Status */}
        <div className="flex items-center justify-between mb-4 px-1">
          <span className="text-xs font-mono text-[#64748b]">
            Showing <strong className="text-[#08222F]">{filteredModules.length}</strong> of 10 canonical modules
          </span>
        </div>

        {/* Modules Table */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full overflow-x-auto rounded-xl border border-[#e2ddd3] shadow-xs bg-white"
        >
          <table className="w-full text-left border-collapse min-w-[860px]">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[10.5px] font-mono tracking-wider text-[#64748b] uppercase">
                <th className="py-3.5 px-5 font-semibold">CANONICAL MODULE</th>
                <th className="py-3.5 px-5 font-semibold">DOMAIN</th>
                <th className="py-3.5 px-5 font-semibold">PRIMARY CONTEXT</th>
                <th className="py-3.5 px-5 font-semibold">SOURCE ROLE</th>
                <th className="py-3.5 px-5 font-semibold">TYPICAL SCOPE BOUNDARY</th>
                <th className="py-3.5 px-5 font-semibold">ADJACENT MODULES</th>
                <th className="py-3.5 px-5 font-semibold text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#edf2f7] text-[12.5px] text-[#334155]">
              {filteredModules.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#f8fafc]/80 transition-colors group"
                >
                  {/* CANONICAL MODULE */}
                  <td className="py-4 px-5 font-semibold text-[#08222F]">
                    {row.canonicalModule}
                  </td>

                  {/* DOMAIN */}
                  <td className="py-4 px-5 text-[#475569]">
                    <span className="inline-block px-2 py-0.5 rounded bg-[#f1f5f9] text-[11px] font-medium text-[#475569]">
                      {row.domain}
                    </span>
                  </td>

                  {/* PRIMARY CONTEXT */}
                  <td className="py-4 px-5 text-[#475569] leading-relaxed max-w-[220px]">
                    {row.primarySource}
                  </td>

                  {/* SOURCE ROLE */}
                  <td className="py-4 px-5 text-[#64748b] max-w-[180px]">
                    {row.sourceRole}
                  </td>

                  {/* TYPICAL SCOPE BOUNDARY */}
                  <td className="py-4 px-5 whitespace-nowrap text-[#475569]">
                    {row.typicalScopeBoundary}
                  </td>

                  {/* ADJACENT MODULES */}
                  <td className="py-4 px-5 text-[#64748b] text-xs">
                    {row.primaryObject}
                  </td>

                  {/* ACTION */}
                  <td className="py-4 px-5 text-right whitespace-nowrap">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#d6e2e9] bg-white text-[11px] font-semibold text-[#08222F] hover:bg-[#08222F] hover:text-white hover:border-[#08222F] transition-all">
                      <span>Explore domain</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
