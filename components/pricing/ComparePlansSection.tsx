"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

interface CapabilityRow {
  category: string;
  name: string;
  starter: string | boolean;
  growth: string | boolean;
  enterprise: string | boolean;
  isDifferent?: boolean;
}

const capabilities: CapabilityRow[] = [
  // BUSINESS STRUCTURE
  {
    category: "Business structure",
    name: "Legal entities",
    starter: "1",
    growth: "Up to 5",
    enterprise: "Contracted",
    isDifferent: true,
  },
  {
    category: "Business structure",
    name: "Full platform users",
    starter: "Up to 5",
    growth: "Up to 25",
    enterprise: "Contracted",
    isDifferent: true,
  },
  // ACCOUNTING
  {
    category: "Accounting",
    name: "Dimensions / cost centers",
    starter: "Limited",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  {
    category: "Accounting",
    name: "Advanced close & approval workflow",
    starter: "—",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  {
    category: "Accounting",
    name: "Intercompany accounting",
    starter: "—",
    growth: "Limited",
    enterprise: true,
    isDifferent: true,
  },
  {
    category: "Accounting",
    name: "Group consolidation",
    starter: "—",
    growth: "—",
    enterprise: true,
    isDifferent: true,
  },
  // FINANCE
  {
    category: "Finance",
    name: "Budgets",
    starter: "Limited",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  {
    category: "Finance",
    name: "Forecasts & scenarios",
    starter: "—",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  {
    category: "Finance",
    name: "Management reporting",
    starter: "—",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  // TAX
  {
    category: "Tax",
    name: "Multi-jurisdiction workspaces",
    starter: "—",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  // AUDIT
  {
    category: "Audit",
    name: "Control testing & workpapers",
    starter: "—",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  // LEGAL
  {
    category: "Legal",
    name: "Contract approvals & obligations",
    starter: "Limited",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  // COMPLIANCE
  {
    category: "Compliance",
    name: "Control mapping / attestations",
    starter: "—",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  // WORKFLOW
  {
    category: "Workflow",
    name: "Task & approval workflows",
    starter: "Standard",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  {
    category: "Workflow",
    name: "Advanced workflow builder",
    starter: "—",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  // AI
  {
    category: "AI",
    name: "AI assistance",
    starter: "Standard allowance",
    growth: "Expanded allowance",
    enterprise: "Contracted / expanded",
    isDifferent: true,
  },
  // INTEGRATIONS
  {
    category: "Integrations",
    name: "Standard connectors",
    starter: "—",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  {
    category: "Integrations",
    name: "API / webhooks",
    starter: "—",
    growth: "Standard allowance",
    enterprise: "Contracted high-volume",
    isDifferent: true,
  },
  // SECURITY
  {
    category: "Security",
    name: "Custom roles",
    starter: "—",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  {
    category: "Security",
    name: "SSO / SCIM",
    starter: "—",
    growth: "Optional / limited",
    enterprise: true,
    isDifferent: true,
  },
  // ANALYTICS
  {
    category: "Analytics",
    name: "Custom dashboards / scheduled reports",
    starter: "—",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  // SUPPORT
  {
    category: "Support",
    name: "Priority support",
    starter: "—",
    growth: true,
    enterprise: true,
    isDifferent: true,
  },
  {
    category: "Support",
    name: "Contracted SLA / named success coverage",
    starter: "—",
    growth: "—",
    enterprise: true,
    isDifferent: true,
  },
];

const categoryList = [
  "All categories",
  "Business structure",
  "Accounting",
  "Finance",
  "Tax",
  "Audit",
  "Legal",
  "Compliance",
  "Workflow",
  "AI",
  "Integrations",
  "Security",
  "Analytics",
  "Support",
];

export default function ComparePlansSection() {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [showDifferencesOnly, setShowDifferencesOnly] = useState(true);

  // Filter capabilities based on category and differences filter
  const filteredCapabilities = capabilities.filter((row) => {
    const matchesCategory =
      selectedCategory === "All categories" ||
      row.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesDifferences = !showDifferencesOnly || row.isDifferent;
    return matchesCategory && matchesDifferences;
  });

  // Group by category to render section bars
  const groupedCategories = Array.from(
    new Set(filteredCapabilities.map((row) => row.category))
  );

  return (
    <section id="compare-plans" className="relative w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto text-left">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-4 h-[2px] bg-[#CDA85B]" />
          <span className="text-[10.5px] font-mono font-semibold uppercase tracking-[0.2em] text-[#CDA85B]">
            COMPARE PLANS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#08222F] tracking-tight mb-2 leading-tight">
          What actually changes between plans.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-6">
          Materially different features first. Turn off &quot;Show differences only&quot; to see everything.
        </p>

        {/* Controls: Checkbox & Filter Pills */}
        <div className="space-y-4 mb-8">
          {/* Checkbox */}
          <label className="inline-flex items-center gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showDifferencesOnly}
              onChange={(e) => setShowDifferencesOnly(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-[#08222F] focus:ring-[#CDA85B] accent-[#08222F]"
            />
            <span className="text-xs sm:text-[13px] font-medium text-slate-700">
              Show differences only
            </span>
          </label>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 items-center">
            {categoryList.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#08222F] border-[#08222F] text-white shadow-xs"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:text-[#08222F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Expand/Reset features button */}
          <div>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All categories");
                setShowDifferencesOnly(false);
              }}
              className="px-4 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-medium text-slate-700 hover:border-slate-400 transition-colors shadow-2xs"
            >
              Expand all features
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs">
          <div className="overflow-x-auto">
            <div className="min-w-[640px] w-full">
              {/* Table Column Headers */}
              <div className="grid grid-cols-12 bg-white border-b border-slate-200 items-end">
                <div className="col-span-5 p-4 sm:p-5 text-left">
                  <span className="text-xs font-bold text-[#08222F]">Capability</span>
                </div>
                <div className="col-span-2 p-4 sm:p-5 text-center">
                  <p className="text-xs sm:text-sm font-bold text-[#08222F]">Starter</p>
                  <p className="text-[11px] text-slate-500 font-normal">$49/mo</p>
                </div>
                <div className="col-span-2 p-4 sm:p-5 text-center bg-[#FEFDF9] border-t-2 border-[#CDA85B]">
                  <p className="text-xs sm:text-sm font-bold text-[#08222F]">Growth</p>
                  <p className="text-[11px] text-slate-500 font-normal">$199/mo</p>
                </div>
                <div className="col-span-3 p-4 sm:p-5 text-center">
                  <p className="text-xs sm:text-sm font-bold text-[#08222F]">Enterprise</p>
                  <p className="text-[11px] text-slate-500 font-normal">From $999/mo</p>
                </div>
              </div>

              {/* Category Groups and Rows */}
              {groupedCategories.map((cat, catIdx) => {
                const rows = filteredCapabilities.filter((r) => r.category === cat);
                return (
                  <div key={catIdx}>
                    {/* Category Header Row */}
                    <div className="py-2 px-4 sm:px-5 bg-[#FBF9F4] border-b border-slate-200">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B88E3E]">
                        {cat}
                      </span>
                    </div>

                    {/* Capability Rows */}
                    <div className="divide-y divide-slate-100">
                      {rows.map((row, rowIdx) => (
                        <div
                          key={rowIdx}
                          className="grid grid-cols-12 items-center text-xs sm:text-[13px] hover:bg-slate-50/70 transition-colors"
                        >
                          {/* Capability Name */}
                          <div className="col-span-5 py-3.5 px-4 sm:px-5 text-[#08222F] font-medium leading-snug">
                            {row.name}
                          </div>

                          {/* Starter Value */}
                          <div className="col-span-2 py-3.5 px-2 text-center text-slate-600">
                            {row.starter === true ? (
                              <Check className="w-4 h-4 text-[#0284C7] mx-auto stroke-[2.5]" />
                            ) : row.starter === "—" ? (
                              <span className="text-slate-400 font-light">—</span>
                            ) : (
                              <span className="font-normal">{row.starter}</span>
                            )}
                          </div>

                          {/* Growth Value */}
                          <div className="col-span-2 py-3.5 px-2 text-center text-slate-700 bg-[#FEFDF9]">
                            {row.growth === true ? (
                              <Check className="w-4 h-4 text-[#0284C7] mx-auto stroke-[2.5]" />
                            ) : row.growth === "—" ? (
                              <span className="text-slate-400 font-light">—</span>
                            ) : (
                              <span className="font-normal">{row.growth}</span>
                            )}
                          </div>

                          {/* Enterprise Value */}
                          <div className="col-span-3 py-3.5 px-3 text-center text-slate-700">
                            {row.enterprise === true ? (
                              <Check className="w-4 h-4 text-[#0284C7] mx-auto stroke-[2.5]" />
                            ) : row.enterprise === "—" ? (
                              <span className="text-slate-400 font-light">—</span>
                            ) : (
                              <span className="font-normal">{row.enterprise}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Back to plans Link */}
        <div className="text-center mt-8">
          <Link
            href="#pricing"
            className="text-xs font-semibold text-[#08222F] hover:text-[#CDA85B] underline underline-offset-4 transition-colors"
          >
            Back to plans
          </Link>
        </div>
      </div>
    </section>
  );
}
