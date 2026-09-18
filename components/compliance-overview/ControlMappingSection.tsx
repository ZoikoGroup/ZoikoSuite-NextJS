import React from "react";

interface MappingCategory {
  title: string;
  description: string;
  badge: string;
  badgeType?: "alignment" | "phased";
}

const categories: MappingCategory[] = [
  {
    title: "Access control",
    description:
      "Identity, role, attribute, entity scope, delegation and segregation of duties mapped to access-control objectives.",
    badge: "MAPPING · ALIGNMENT",
    badgeType: "alignment",
  },
  {
    title: "Change management",
    description:
      "Authority evaluation, approval path, exception handling and expiry mapped to change-control objectives.",
    badge: "MAPPING · ALIGNMENT",
    badgeType: "alignment",
  },
  {
    title: "Audit logging & monitoring",
    description:
      "Decision records, workflow history and access events mapped to logging and monitoring objectives.",
    badge: "MAPPING · ALIGNMENT",
    badgeType: "alignment",
  },
  {
    title: "Risk & obligation management",
    description:
      "Obligation registry, ownership, escalation and review cadence mapped to risk-management objectives.",
    badge: "MAPPING · ALIGNMENT",
    badgeType: "alignment",
  },
  {
    title: "Evidence & records",
    description:
      "Six-layer evidence model and manifest export mapped to records and evidence objectives.",
    badge: "MAPPING · PHASED DELIVERY",
    badgeType: "phased",
  },
  {
    title: "Third-party management",
    description:
      "Vendor register, diligence tracking and dependency exposure mapped to third-party objectives.",
    badge: "MAPPING · ALIGNMENT",
    badgeType: "alignment",
  },
];

export default function ControlMappingSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                CONTROL MAPPING AND FRAMEWORK RELATIONSHIPS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Mapping is a relationship.
              <br /> Assurance is a verdict.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              These are different things, and conflating them is the most common
              way a compliance page misleads. They are kept visually and
              structurally separate here.
            </p>
          </div>
        </div>

        {/* Top Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-16">
          {/* Left Box: Control Mapping */}
          <div className="bg-white border-l-4 border-[#0F476A] rounded-l-xl p-6 lg:p-8 shadow-sm space-y-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0F476A] block">
              CONTROL MAPPING — WHAT THIS IS
            </span>
            <p className="text-[14px] text-[#374151] leading-relaxed">
              A stated relationship between ZoikoSuite&apos;s control model and
              a framework&apos;s control objectives. It describes design intent
              and alignment.
            </p>
            <ul className="space-y-2 text-[13px] text-[#4B5563]">
              <li className="flex items-start gap-2">
                <span className="text-[#0F476A] font-bold">•</span>
                <span>Produced internally by ZoikoSuite</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0F476A] font-bold">•</span>
                <span>Describes how a control addresses an objective</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0F476A] font-bold">•</span>
                <span>Useful input to your own assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0F476A] font-bold">•</span>
                <span>Can be shared and discussed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0F476A] font-bold">•</span>
                <span>Updated as the product changes</span>
              </li>
            </ul>
          </div>

          {/* Right Box: Independent Assurance */}
          <div className="bg-[#FCF6F6] border-l-4 border-[#8A3B3B] rounded-r-2xl p-6 lg:p-8 shadow-sm space-y-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#8A3B3B] block">
              INDEPENDENT ASSURANCE — WHAT THIS IS NOT
            </span>
            <p className="text-[14px] text-[#374151] leading-relaxed">
              A verdict from a qualified third party that controls operated
              effectively over a defined period, for a defined scope.
            </p>
            <ul className="space-y-2 text-[13px] text-[#4B5563]">
              <li className="flex items-start gap-2">
                <span className="text-[#8A3B3B] font-bold">•</span>
                <span>Requires an external verifier</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A3B3B] font-bold">•</span>
                <span>Requires a stated scope and period</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A3B3B] font-bold">•</span>
                <span>Requires a current status and date</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A3B3B] font-bold">•</span>
                <span>None currently exists for ZoikoSuite</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8A3B3B] font-bold">•</span>
                <span>No badge or logo appears until it does</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Public Mapping Categories Header */}
        <div className="mb-6">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#6B7280] uppercase">
            PUBLIC MAPPING CATEGORIES
          </span>
        </div>

        {/* Categories List */}
        <div className="space-y-3">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:border-[#C9B07A] transition-colors"
            >
              <div className="max-w-xl">
                <h3 className="text-sm font-bold text-[#111827] mb-1">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="shrink-0">
                <span
                  className={`inline-block px-3 py-1 rounded-md text-[10px] font-mono font-semibold tracking-wider ${
                    item.badgeType === "phased"
                      ? "bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]/60"
                      : "bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB]"
                  }`}
                >
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
