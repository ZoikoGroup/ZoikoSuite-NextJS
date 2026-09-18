import React from "react";

type BadgeType =
  | "implemented"
  | "engineering"
  | "planned"
  | "controlled"
  | "published";

interface SdlcRow {
  title: string;
  description: string;
  badgeText: string;
  badgeType: BadgeType;
}

const sdlcRows: SdlcRow[] = [
  {
    title: "Code review",
    description:
      "Peer review required before merge, with security review for designated sensitive areas.",
    badgeText: "IMPLEMENTED",
    badgeType: "implemented",
  },
  {
    title: "Dependency scanning",
    description:
      "Automated scanning of third-party dependencies with defined remediation handling.",
    badgeText: "IMPLEMENTED",
    badgeType: "implemented",
  },
  {
    title: "Static analysis",
    description: "Automated code analysis in the build pipeline.",
    badgeText: "IMPLEMENTED",
    badgeType: "implemented",
  },
  {
    title: "Signed artifacts",
    description:
      "Build artifacts cryptographically signed and verified before deployment.",
    badgeText: "ENGINEERING REQUIREMENT",
    badgeType: "engineering",
  },
  {
    title: "Provenance & SBOM",
    description:
      "Software bill of materials and build provenance published to customers on request.",
    badgeText: "PLANNED",
    badgeType: "planned",
  },
  {
    title: "Penetration testing",
    description:
      "Independent security testing. Report scope, date and findings summary under NDA.",
    badgeText: "CONTROLLED ACCESS",
    badgeType: "controlled",
  },
  {
    title: "Vulnerability disclosure",
    description:
      "Published route for reporting a suspected vulnerability, with acknowledgement commitment.",
    badgeText: "PUBLISHED ROUTE",
    badgeType: "published",
  },
  {
    title: "Remediation SLAs",
    description: "Internal severity-based remediation targets.",
    badgeText: "CONTROLLED ACCESS",
    badgeType: "controlled",
  },
];

const getBadgeStyles = (type: BadgeType): string => {
  switch (type) {
    case "implemented":
      return "bg-[#F1F3F4] text-[#5A6D79] border-[#DBE3E8]";
    case "engineering":
      return "bg-[#F6EDD9] text-[#6A5620] border-[#C9B07A]";
    case "planned":
      return "bg-[#F6EDD9] text-[#6A5620] border-[#C9B07A]";
    case "controlled":
      return "bg-[#FDF2F2] text-[#8C3A3A] border-[#E8C3C3]";
    case "published":
      return "bg-[#F1F3F4] text-[#5A6D79] border-[#DBE3E8]";
    default:
      return "bg-[#F1F3F4] text-[#5A6D79] border-[#DBE3E8]";
  }
};

export default function SecureSdlcRequirements() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                SECURE SDLC, SUPPLY CHAIN AND VULNERABILITY MANAGEMENT
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.15]">
              Engineering requirements and their evidence surfaces
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              What is required of engineering, what evidence each produces, and
              which of those can be shown publicly.
            </p>
          </div>
        </div>

        {/* Rows Container */}
        <div className="flex flex-col gap-3">
          {sdlcRows.map((row, index) => (
            <div
              key={index}
              className="bg-white border-l-3 border-l-[#2A6386] border border-[#DBE3E8] rounded-[14px] p-5 flex flex-col sm:flex-row sm:items-center justify-between shadow-sm gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 lg:gap-16 w-full">
                <h3 className="text-[14px] font-bold text-[#111827] min-w-[200px]">
                  {row.title}
                </h3>
                <p className="text-[13px] text-[#4B5563] leading-relaxed">
                  {row.description}
                </p>
              </div>

              <div className="shrink-0 flex sm:justify-end">
                <span
                  className={`inline-block px-2.5 py-1 text-[9px] font-mono font-bold tracking-wider rounded border ${getBadgeStyles(
                    row.badgeType,
                  )}`}
                >
                  {row.badgeText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
