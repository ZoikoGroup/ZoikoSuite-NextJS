"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface OptionCard {
  option: string;
  title: string;
  description: string;
  statusText: string;
  statusType: "available" | "config" | "market" | "security";
}

const optionCardsData: OptionCard[] = [
  {
    option: "Option 01",
    title: "Regional hosting",
    description: "Processing and storage in a selected region.",
    statusText: "AVAILABLE",
    statusType: "available",
  },
  {
    option: "Option 02",
    title: "Dedicated private cloud",
    description: "Isolated tenancy with enhanced operational controls.",
    statusText: "AVAILABLE",
    statusType: "available",
  },
  {
    option: "Option 03",
    title: "Enterprise single-tenant",
    description: "Dedicated workload and data infrastructure.",
    statusText: "CONFIGURATION REQUIRED",
    statusType: "config",
  },
  {
    option: "Option 04",
    title: "Sovereign deployment",
    description: "Region-restricted operations, administration, and support.",
    statusText: "MARKET DEPENDENT",
    statusType: "market",
  },
  {
    option: "Option 05",
    title: "On-premise deployment",
    description: "Customer-operated infrastructure within their own boundary.",
    statusText: "SECURITY REVIEW REQUIRED",
    statusType: "security",
  },
  {
    option: "Option 06",
    title: "Customer-controlled keys",
    description: "Platform-managed, BYOK, HYOK, or customer-controlled keys.",
    statusText: "VERIFIED PER DEPLOYMENT",
    statusType: "config",
  },
];

interface TableRow {
  control: string;
  regionalHosting: string;
  dedicatedCloud: string;
  singleTenant: string;
  sovereignOnPrem: string;
  singleTenantSub?: string;
  sovereignSub?: string;
}

const tableRowsData: TableRow[] = [
  {
    control: "Tenancy",
    regionalHosting: "Multi-tenant, logical isolation",
    dedicatedCloud: "Dedicated tenancy",
    singleTenant: "Dedicated workload and data",
    sovereignOnPrem: "Fully isolated",
  },
  {
    control: "Data residency",
    regionalHosting: "Selected region",
    dedicatedCloud: "Selected region",
    singleTenant: "Selected region or restricted set",
    sovereignOnPrem: "Customer-defined boundary",
  },
  {
    control: "Key management",
    regionalHosting: "Platform-managed",
    dedicatedCloud: "Platform-managed or BYOK",
    singleTenant: "BYOK or HYOK",
    sovereignOnPrem: "Customer-controlled",
    sovereignSub: "Verified per deployment",
  },
  {
    control: "Network boundary",
    regionalHosting: "Standard controls",
    dedicatedCloud: "Private connectivity options",
    singleTenant: "Private connectivity",
    sovereignOnPrem: "Customer network",
  },
  {
    control: "Identity",
    regionalHosting: "Federated SSO · SCIM",
    dedicatedCloud: "Federated SSO · SCIM",
    singleTenant: "Federated + dedicated directory",
    sovereignOnPrem: "Customer directory",
  },
  {
    control: "Administrative access",
    regionalHosting: "Platform operations",
    dedicatedCloud: "Platform operations, scoped",
    singleTenant: "Scoped with customer approval",
    sovereignOnPrem: "Customer-administered",
  },
  {
    control: "Backup & recovery",
    regionalHosting: "In-region",
    dedicatedCloud: "In-region",
    singleTenant: "In-region or cross-region",
    singleTenantSub: "Where approved",
    sovereignOnPrem: "Customer-operated",
  },
  {
    control: "Support model",
    regionalHosting: "Standard",
    dedicatedCloud: "Enhanced",
    singleTenant: "Enhanced, named contacts",
    sovereignOnPrem: "Defined per agreement",
  },
  {
    control: "Update model",
    regionalHosting: "Continuous",
    dedicatedCloud: "Continuous, scheduled windows",
    singleTenant: "Scheduled",
    sovereignOnPrem: "Customer-scheduled",
  },
  {
    control: "Integration model",
    regionalHosting: "Full catalogue",
    dedicatedCloud: "Full catalogue",
    singleTenant: "Subject to network design",
    sovereignOnPrem: "Requires architecture review",
  },
];

const bottomPills = [
  "Zero-Trust Architecture",
  "Identity and Access",
  "Encryption and Key Management",
  "Application / API Security",
  "Incident Response",
  "Business Continuity",
];

export default function QualifiedOptionsSection() {
  return (
    <section className="w-full bg-white text-[#0f172a] py-20 px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                DEPLOYMENT, RESIDENCY, PRIVACY, AND SECURITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0f172a] max-w-xl">
              Qualified options, visible limits
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
            Unavailable options stay visible with a reason. No option is
            recommended without requirements you provide.
          </p>
        </div>

        {/* 6 Option Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          {optionCardsData.map((card, idx) => {
            let badgeBg = "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]";
            let dotBg = "bg-[#1E7A5A]";

            if (card.statusType === "config") {
              badgeBg = "bg-[#FBF2DF] text-[#9C6B12] border-[#9C6B12]";
              dotBg = "bg-[#9C6B12]";
            } else if (card.statusType === "market") {
              badgeBg = "bg-[#EAF1F9] text-[#2F6FB0] border-[#2F6FB0]";
              dotBg = "bg-[#2F6FB0]";
            } else if (card.statusType === "security") {
              badgeBg = "bg-[#EFF2F4] text-[#5D6B75] border-[#5D6B75]";
              dotBg = "bg-[#5D6B75]";
            }

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#DBE3E8] p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748b] block mb-2">
                    {card.option}
                  </span>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#64748b] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>
                <div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider border ${badgeBg}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${dotBg}`} />
                    {card.statusText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="w-full overflow-x-auto bg-white rounded-2xl border border-[#DBE3E8] shadow-xs mb-10">
          <table className="w-full text-left border-collapse min-w-[768px]">
            <thead>
              <tr className="border-b border-[#DBE3E8] bg-[#F4F7F9]">
                <th className="py-4 px-6 text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748b]">
                  CONTROL
                </th>
                <th className="py-4 px-6 text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748b]">
                  REGIONAL HOSTING
                </th>
                <th className="py-4 px-6 text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748b]">
                  DEDICATED PRIVATE CLOUD
                </th>
                <th className="py-4 px-6 text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748b]">
                  ENTERPRISE SINGLE-TENANT
                </th>
                <th className="py-4 px-6 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0F476A]">
                  SOVEREIGN / ON-PREMISE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DBE3E8]">
              {tableRowsData.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#F7F5F0]/30 transition-colors"
                >
                  <td className="py-3.5 px-6 text-xs font-bold text-[#0f172a]">
                    {row.control}
                  </td>
                  <td className="py-3.5 px-6 text-xs text-[#64748b]">
                    {row.regionalHosting}
                  </td>
                  <td className="py-3.5 px-6 text-xs text-[#64748b]">
                    {row.dedicatedCloud}
                  </td>
                  <td className="py-3.5 px-6 text-xs text-[#64748b]">
                    {row.singleTenant}
                    {row.singleTenantSub && (
                      <span className="block text-[10px] text-[#9ba4b5]">
                        {row.singleTenantSub}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-6 text-xs text-[#64748b]">
                    {row.sovereignOnPrem}
                    {row.sovereignSub && (
                      <span className="block text-[10px] text-[#9ba4b5]">
                        {row.sovereignSub}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
              {/* Market Availability Row */}
              <tr className="bg-[#F7F5F0]/30">
                <td className="py-4 px-6 text-xs font-bold text-[#0f172a]">
                  Market availability
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-white text-[#0F476A] border border-[#DBE3E8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F476A]" />
                    AVAILABLE
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-white text-[#0F476A] border border-[#DBE3E8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F476A]" />
                    AVAILABLE
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-white text-[#A07833] border border-[#c5a059]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                    CONFIGURATION REQUIRED
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-white text-[#64748b] border border-[#DBE3E8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#64748b]" />
                    MARKET DEPENDENT
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Two Bottom Boundary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
          <div className="bg-white rounded-2xl border border-[#DBE3E8] p-6 shadow-xs">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059] block mb-2">
              Privacy boundary
            </span>
            <h4 className="text-base font-bold text-[#0f172a] mb-2">
              Purpose limitation and least privilege
            </h4>
            <p className="text-xs text-[#64748b] leading-relaxed">
              Access follows purpose, not curiosity. Workforce data stays inside
              workforce purposes; commercial data stays inside commercial
              purposes; role-specific visibility is enforced rather than
              advised.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#DBE3E8] p-6 shadow-xs">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059] block mb-2">
              Privacy boundary
            </span>
            <h4 className="text-base font-bold text-[#0f172a] mb-2">
              Minimized analytics, authorized AI sources
            </h4>
            <p className="text-xs text-[#64748b] leading-relaxed">
              Analytics are aggregated and defined. AI reads only authorized
              sources within the requesting user&apos;s permission and
              data-classification scope. Retention is configurable per class.
            </p>
          </div>
        </div>

        {/* Bottom Pills */}
        <div className="w-full flex flex-wrap gap-2 mb-10">
          {bottomPills.map((pill, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#E8EFF4] text-[#0f172a] border border-[#DBE3E8] shadow-xs"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center w-full">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#0F476A] text-white hover:bg-[#0c3955] transition-colors shadow-sm"
          >
            View deployment options
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
