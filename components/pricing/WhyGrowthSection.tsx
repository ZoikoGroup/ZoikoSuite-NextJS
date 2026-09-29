import React from "react";

export default function WhyGrowthSection() {
  return (
    <section className="relative w-full bg-[#F6F5F0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Tag / Subheading */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="h-[1px] w-6 bg-[#dfb36a]" />
          <span className="text-xs font-bold tracking-widest text-[#dfb36a] uppercase">
            WHY GROWTH
          </span>
          <span className="h-[1px] w-6 bg-[#dfb36a]" />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-16 max-w-3xl mx-auto leading-tight">
          Why Growth is the plan most growing teams choose.
        </h2>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Column 1: Control */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#E8F0F5] flex items-center justify-center text-[#0f172a] font-bold text-base mb-6">
              C
            </div>
            <h3 className="text-lg font-bold text-[#0f172a] mb-2">Control</h3>
            <p className="text-sm text-[#64748b] leading-relaxed max-w-xs">
              Standardize approvals and governance across every entity and
              workflow.
            </p>
          </div>

          {/* Column 2: Visibility */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#E8F0F5] flex items-center justify-center text-[#0f172a] font-bold text-base mb-6">
              V
            </div>
            <h3 className="text-lg font-bold text-[#0f172a] mb-2">
              Visibility
            </h3>
            <p className="text-sm text-[#64748b] leading-relaxed max-w-xs">
              Multi-entity reporting and forecasting give you one consolidated
              view.
            </p>
          </div>

          {/* Column 3: Automation */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#E8F0F5] flex items-center justify-center text-[#0f172a] font-bold text-base mb-6">
              A
            </div>
            <h3 className="text-lg font-bold text-[#0f172a] mb-2">
              Automation
            </h3>
            <p className="text-sm text-[#64748b] leading-relaxed max-w-xs">
              Workflows, integrations and AI allowances remove manual
              reconciliation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
