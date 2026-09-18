import React from "react";

export default function ResultsGridSection() {
  const integrations = [
    {
      name: "Microsoft Sentinel",
      category: "SIEM & Observability",
      description:
        "Sync high-fidelity security alerts and mapped control evidence directly.",
      auth: "OAUTH_2",
      badge: "Available",
      badgeBg: "bg-[#E2EDF8]",
      badgeText: "text-[#1F7A6C]",
    },
    {
      name: "Amazon Web Services",
      category: "Cloud Platforms",
      description:
        "Ingest CloudTrail API audit trails, configuration compliance, and S3 evidence.",
      auth: "ROLE_ARN",
      badge: "Available",
      badgeBg: "bg-[#E2EDF8]",
      badgeText: "text-[#1F7A6C]",
    },
    {
      name: "CrowdStrike Falcon",
      category: "Endpoint & Identity",
      description:
        "Acquire telemetry from active endpoint sensors for real-time trace response.",
      auth: "API_KEY",
      badge: "Available",
      badgeBg: "bg-[#E2EDF8]",
      badgeText: "text-[#1F7A6C]",
    },
    {
      name: "Okta Directory",
      category: "Endpoint & Identity",
      description:
        "Map identity events, auth trails, and MFA enrollment state to compliance criteria.",
      auth: "OAUTH_2",
      badge: "Available",
      badgeBg: "bg-[#E2EDF8]",
      badgeText: "text-[#1F7A6C]",
    },
    {
      name: "Jira Software Cloud",
      category: "Collaboration & Tickets",
      description:
        "Automate incident ticket creation, analyst assignments, and evidence capture.",
      auth: "WEBHOOK",
      badge: "Beta",
      badgeBg: "bg-[#E2EDF8]",
      badgeText: "text-[#1E5A8A]",
    },
    {
      name: "GitHub Enterprise",
      category: "Developer & API",
      description:
        "Continuous mapping of pull requests, security alerts, and pipeline sign-offs.",
      auth: "APP",
      badge: "Planned",
      badgeBg: "bg-[#F6F1E5]",
      badgeText: "text-[#94761E]",
    },
    {
      name: "Google Cloud Platform",
      category: "Cloud Platforms",
      description:
        "Audit trail mapping and configuration drift detection for GKE and IAM.",
      auth: "OAUTH_2",
      badge: "Partner-assisted",
      badgeBg: "bg-[#FAF3FF]",
      badgeText: "text-[#7A42C4]",
    },
    {
      name: "Slack Enterprise",
      category: "Collaboration & Tickets",
      description:
        "Deliver notification trails and automated interactive approvals to analysts.",
      auth: "OAUTH_2",
      badge: "Available",
      badgeBg: "bg-[#E2EDF8]",
      badgeText: "text-[#1F7A6C]",
    },
    {
      name: "HashiCorp Vault",
      category: "Data & Evidence",
      description:
        "Hashed log verification of secrets access, rotation state, and key lifecycle.",
      auth: "API_KEY",
      badge: "Requestable",
      badgeBg: "bg-[#F0EDE6]",
      badgeText: "text-[#5B6670]",
    },
  ];

  return (
    <div className="self-stretch px-20 pb-12 inline-flex flex-col justify-start items-start gap-6 w-full max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="self-stretch inline-flex justify-between items-center">
        <div className="text-[#0A2029] text-2xl font-extrabold font-['Hanken_Grotesk']">
          All Integrations
        </div>
        <div className="inline-flex justify-start items-center gap-3">
          <div className="text-[#5B6670] text-sm font-normal font-['Manrope']">
            Showing 1-9 of 42
          </div>
        </div>
      </div>

      {/* Grid Layout Container */}
      <div className="self-stretch grid grid-cols-3 gap-6">
        {integrations.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-[0px_4px_16px_0px_rgba(11,37,48,0.03)] outline outline-1 outline-offset-[-1px] outline-[#123B4C]/10 inline-flex flex-col justify-start items-start gap-4 hover:outline-[#123B4C]/30 transition-all"
          >
            {/* Card Header */}
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="inline-flex justify-start items-center gap-3">
                <div className="w-7 h-7 inline-flex flex-col justify-center items-center overflow-hidden">
                  <div className="w-7 h-7 relative overflow-hidden">
                    <div className="w-5 h-6 left-[4.66px] top-[2.33px] absolute outline outline-2 outline-offset-[-1px] outline-[#C44242]" />
                  </div>
                </div>
                <div className="inline-flex flex-col justify-start items-start gap-0.5">
                  <div className="text-[#0A2029] text-base font-extrabold font-['Hanken_Grotesk']">
                    {item.name}
                  </div>
                  <div className="text-[#5B6670] text-xs font-normal font-['Manrope']">
                    {item.category}
                  </div>
                </div>
              </div>
              <div
                className={`px-2.5 py-1 ${item.badgeBg} rounded-xl inline-flex justify-start items-center`}
              >
                <span
                  className={`${item.badgeText} text-xs font-bold font-['JetBrains_Mono']`}
                >
                  {item.badge}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="self-stretch text-[#5B6670] text-sm font-normal font-['Manrope'] leading-5">
              {item.description}
            </div>

            {/* Auth & Evidence Metadata Footer */}
            <div className="self-stretch h-10 pt-2 outline outline-1 outline-offset-[-1px] outline-[#123B4C]/10 inline-flex justify-between items-center border-t border-[#123B4C]/10">
              <div className="inline-flex justify-start items-center gap-1">
                <span className="text-[#5B6670] text-xs font-normal font-['JetBrains_Mono']">
                  Auth:
                </span>
                <span className="text-[#0A2029] text-xs font-bold font-['JetBrains_Mono']">
                  {item.auth}
                </span>
              </div>
              {item.badge !== "Planned" &&
                item.badge !== "Requestable" &&
                item.auth !== "WEBHOOK" && (
                  <div className="px-2 py-[3px] bg-[#E2EDF8] rounded-md inline-flex justify-start items-start">
                    <span className="text-[#1F7A6C] text-[10px] font-bold font-['JetBrains_Mono']">
                      EVIDENCE-READY
                    </span>
                  </div>
                )}
            </div>

            {/* Card Actions */}
            <div className="self-stretch inline-flex justify-start items-center gap-3 pt-1">
              <div className="flex-1 flex justify-start items-center gap-2 cursor-pointer select-none">
                <div className="w-3.5 h-3.5 bg-white rounded-[3px] border-[1.50px] border-[#123B4C]/20" />
                <span className="text-[#5B6670] text-xs font-semibold font-['Manrope']">
                  Compare
                </span>
              </div>
              <div className="inline-flex justify-start items-center gap-1 cursor-pointer group">
                <span className="text-[#C44242] text-xs font-bold font-['Manrope'] group-hover:underline">
                  View integration
                </span>
                <div className="w-3 h-3 inline-flex flex-col justify-center items-center overflow-hidden">
                  <div className="w-3 h-3 relative overflow-hidden">
                    <div className="w-1.5 h-1.5 left-[2.50px] top-[2.50px] absolute outline outline-2 outline-offset-[-1px] outline-[#C44242]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="self-stretch pt-6 inline-flex justify-center items-center">
        <button className="px-6 py-3 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-[#0A2029] hover:bg-[#0A2029]/5 transition-colors inline-flex justify-start items-start cursor-pointer">
          <span className="text-[#0A2029] text-sm font-bold font-['Manrope']">
            Load More Connectors
          </span>
        </button>
      </div>
    </div>
  );
}
