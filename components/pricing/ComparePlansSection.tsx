import React from "react";
import { Check } from "lucide-react";

interface CapabilityRow {
  category: string;
  name: string;
  starter: string | boolean;
  growth: string | boolean;
  enterprise: string | boolean;
}

const capabilities: CapabilityRow[] = [
  {
    category: "Business structure",
    name: "Legal entities",
    starter: "1",
    growth: "Up to 5",
    enterprise: "Contracted",
  },
  {
    category: "Business structure",
    name: "Full platform users",
    starter: "Up to 5",
    growth: "Up to 25",
    enterprise: "Contracted",
  },
  {
    category: "Accounting",
    name: "Customizations / cost centers",
    starter: "Limited",
    growth: true,
    enterprise: true,
  },
  {
    category: "Accounting",
    name: "Advanced close & approval workflow",
    starter: "—",
    growth: true,
    enterprise: true,
  },
  {
    category: "Accounting",
    name: "Intercompany accounting",
    starter: "—",
    growth: "Limited",
    enterprise: true,
  },
  {
    category: "Accounting",
    name: "Group consolidation",
    starter: "—",
    growth: "—",
    enterprise: true,
  },
  {
    category: "Finance",
    name: "Budgets",
    starter: "Limited",
    growth: true,
    enterprise: true,
  },
  {
    category: "Finance",
    name: "Forecasts & scenarios",
    starter: "—",
    growth: true,
    enterprise: true,
  },
  {
    category: "Finance",
    name: "Management reporting",
    starter: "—",
    growth: true,
    enterprise: true,
  },
  {
    category: "Tax",
    name: "Multi-jurisdiction workspaces",
    starter: "—",
    growth: true,
    enterprise: true,
  },
  {
    category: "Audit",
    name: "Control testing & workspaces",
    starter: "—",
    growth: true,
    enterprise: true,
  },
  {
    category: "Legal",
    name: "Contract approvals & obligations",
    starter: "Limited",
    growth: true,
    enterprise: true,
  },
  {
    category: "Compliance",
    name: "Control mapping / attestations",
    starter: "—",
    growth: true,
    enterprise: true,
  },
  {
    category: "Workflow",
    name: "Tasks & approval workflows",
    starter: "Standard",
    growth: true,
    enterprise: true,
  },
  {
    category: "Workflow",
    name: "Advanced workflow builder",
    starter: "—",
    growth: true,
    enterprise: true,
  },
  {
    category: "AI",
    name: "AI assistance",
    starter: "Standard allowance",
    growth: "Expanded allowance",
    enterprise: "Contracted / expanded",
  },
  {
    category: "Integrations",
    name: "Standard connectors",
    starter: "—",
    growth: true,
    enterprise: true,
  },
  {
    category: "Integrations",
    name: "API / webhooks",
    starter: "—",
    growth: "Standard allowance",
    enterprise: "Contracted high-volume",
  },
  {
    category: "Security",
    name: "Custom roles",
    starter: "—",
    growth: true,
    enterprise: true,
  },
  {
    category: "Security",
    name: "SSO / SCIM",
    starter: "—",
    growth: "Optional / limited",
    enterprise: true,
  },
  {
    category: "Analytics",
    name: "Custom dashboards / scheduled reports",
    starter: "—",
    growth: true,
    enterprise: true,
  },
  {
    category: "Support",
    name: "Priority support",
    starter: "—",
    growth: true,
    enterprise: true,
  },
];

const categories = [
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
  return (
    <section className="relative w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-[1px] w-6 bg-[#dfb36a]" />
            <span className="text-xs font-bold tracking-widest text-[#dfb36a] uppercase">
              COMPARE PLANS
            </span>
            <span className="h-[1px] w-6 bg-[#dfb36a]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-8">
            What actually changes between plans.
          </h2>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 max-w-6xl mx-auto">
            {categories.map((cat, index) => (
              <button
                key={index}
                type="button"
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                  index === 0
                    ? "bg-[#08222F] border-[#08222F] text-white"
                    : "bg-[#FFFFFF] border-[#E4E1D8] text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#0f172a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table Container */}
        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[768px] w-full border-t border-b border-[#e2e8f0]">
            {/* Table Header */}
            <div className="grid grid-cols-12 py-4 px-4 bg-white border-b border-[#e2e8f0] font-bold text-xs uppercase tracking-wider text-[#0f172a]">
              <div className="col-span-5">Capability</div>
              <div className="col-span-2 text-center">Starter</div>
              <div className="col-span-2 text-center">Growth</div>
              <div className="col-span-3 text-right pr-4">Enterprise</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#f1f5f9]">
              {capabilities.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 py-4 px-4 items-center text-sm transition-colors"
                >
                  {/* Capability Label & Name */}
                  <div className="col-span-5 pr-4">
                    <div className="text-[10px] uppercase font-semibold text-[#94a3b8] tracking-wider mb-0.5">
                      {row.category}
                    </div>
                    <div className="text-[#0f172a] font-medium">{row.name}</div>
                  </div>

                  {/* Starter Column */}
                  <div className="col-span-2 text-center text-[#334155] font-normal">
                    {row.starter === true ? (
                      <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                    ) : (
                      row.starter
                    )}
                  </div>

                  {/* Growth Column */}
                  <div className="col-span-2 text-center text-[#334155] font-normal">
                    {row.growth === true ? (
                      <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                    ) : (
                      row.growth
                    )}
                  </div>

                  {/* Enterprise Column */}
                  <div className="col-span-3 text-right pr-4 text-[#334155] font-normal">
                    {row.enterprise === true ? (
                      <Check className="w-4 h-4 text-emerald-600 ml-auto" />
                    ) : (
                      row.enterprise
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
