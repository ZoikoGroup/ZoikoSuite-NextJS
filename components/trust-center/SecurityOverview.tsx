import React from "react";
import {
  ExternalLink,
  CheckCircle2,
  Clock,
  FileText,
  AlertCircle,
  Shield,
  Layers,
  Database,
  Lock,
  Eye,
  Activity,
} from "lucide-react";

export default function SecurityOverview() {
  const cards = [
    {
      title: "Identity & access",
      description:
        "SSO, MFA, workload identity, role and attribute authorization.",
      badge: { text: "CURRENT ARCHITECTURE", variant: "blue" },
    },
    {
      title: "Segregation of duties",
      description:
        "Preparer, reviewer, approver and executor independently permissioned.",
      badge: { text: "CURRENT ARCHITECTURE", variant: "blue" },
    },
    {
      title: "Encryption",
      description:
        "At rest and in transit, stated per deployment rather than universally.",
      badge: { text: "IMPLEMENTED", variant: "blue" },
    },
    {
      title: "Logging & audit telemetry",
      description:
        "Governance and access events linked to actor, source, object and decision.",
      badge: { text: "IMPLEMENTED", variant: "blue" },
    },
    {
      title: "Data classification",
      description:
        "Public, internal, confidential and restricted classes with policy-aware access.",
      badge: { text: "IMPLEMENTED", variant: "blue" },
    },
    {
      title: "Key management",
      description:
        "Customer-managed key availability varies by deployment option and region.",
      badge: { text: "BY DEPLOYMENT", variant: "purple" },
    },
    {
      title: "Vulnerability management",
      description:
        "Scanning and remediation process; next evidence gate under review.",
      badge: { text: "IN VALIDATION", variant: "amber" },
    },
    {
      title: "Supply chain security",
      description:
        "Signed artifacts, provenance and SBOM as roadmap items. No badge displayed.",
      badge: { text: "PLANNED", variant: "amber" },
    },
    {
      title: "Penetration test report",
      description:
        "Released under NDA through security review, subject to scope and date.",
      badge: { text: "CONTROLLED ACCESS", variant: "red" },
    },
  ] as const;

  const getBadgeStyles = (variant: string) => {
    switch (variant) {
      case "amber":
        return "bg-[#F6EDD9] text-[#6A5620] border-[#C9B07A]";
      case "blue":
        return "bg-[#F1F3F4] text-[#5A6D79] border-[#DBE3E8]";
      case "purple":
        return "bg-[#F4EFF7] text-[#5B3B7A] border-[#C9B0DC]";
      case "red":
        return "bg-[#F9EDED] text-[#8A3B3B] border-[#DFA9A9]";
      case "gray":
      default:
        return "bg-[#EEF2F5] text-[#3E5A6B] border-[#C3D0D8]";
    }
  };

  return (
    <div className="bg-[#F7F5F0] text-[#111827] font-sans antialiased px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-[#C29B38]"></span>
              <span className="text-xs font-bold tracking-[0.15em] text-[#C29B38] uppercase">
                Security Overview Preview
              </span>
            </div>
            <h1 className="text-4xl md:text-[44px] font-bold tracking-tight text-[#111827] leading-tight">
              Control categories, each with its status
            </h1>
          </div>

          <div className="max-w-md lg:pt-8">
            <p className="text-[15px] leading-relaxed text-[#4B5563]">
              Categories and posture without sensitive architectural detail.
              Nothing here reveals configuration that would assist an attacker.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col justify-between shadow-sm relative"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-3">
                  {card.title}
                </h3>

                {/* Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block text-[10px] w-full font-bold tracking-wider px-2.5 py-1 rounded border ${getBadgeStyles(card.badge.variant)}`}
                  >
                    {card.badge.text}
                  </span>
                </div>

                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
