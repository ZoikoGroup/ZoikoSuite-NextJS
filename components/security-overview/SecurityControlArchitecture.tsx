import React from "react";

type BadgeColor = "blue" | "purple" | "amber" | "gray";

interface ControlArea {
  title: string;
  description: string;
  badgeText: string;
  badgeColor: BadgeColor;
}

const controlAreas: ControlArea[] = [
  {
    title: "Zero trust & authorization",
    description:
      "No implicit network trust. Every request carries identity context and is authorized at request time.",
    badgeText: "ARCHITECTURE REQUIREMENT",
    badgeColor: "blue",
  },
  {
    title: "Identity & SoD",
    description:
      "Human identity, role, attribute, entity scope, delegation and segregation of duties.",
    badgeText: "ARCHITECTURE REQUIREMENT",
    badgeColor: "blue",
  },
  {
    title: "Data protection",
    description:
      "Encryption in transit and at rest, with protection scope stated per deployment.",
    badgeText: "IMPLEMENTATION STATUS",
    badgeColor: "blue",
  },
  {
    title: "Machine identity",
    description:
      "Service-to-service trust with workload identity. Current and target state both published.",
    badgeText: "ROADMAP • STATUS STATED",
    badgeColor: "amber",
  },
  {
    title: "Isolation & deployment",
    description:
      "Tenant and environment boundaries, with deployment choice affecting the boundary model.",
    badgeText: "BY DEPLOYMENT",
    badgeColor: "purple",
  },
  {
    title: "Key custody & secrets",
    description:
      "Key ownership models and secret handling, with eligibility by deployment.",
    badgeText: "AVAILABILITY STATUS REQUIRED",
    badgeColor: "purple",
  },
  {
    title: "Telemetry & response",
    description:
      "Security events linked to audit and evidence systems, with defined response principles.",
    badgeText: "ARCHITECTURE REQUIREMENT",
    badgeColor: "blue",
  },
  {
    title: "Secure SDLC & supply chain",
    description:
      "Engineering requirements for signing, scanning, provenance and SBOM.",
    badgeText: "ENGINEERING REQUIREMENT",
    badgeColor: "amber",
  },
];

const getBadgeStyles = (color: BadgeColor): string => {
  switch (color) {
    case "blue":
      return "bg-[#F1F3F4] text-[#5A6D79] border-[#DBE3E8]";
    case "purple":
      return "bg-[#F4EFF7] text-[#5B3B7A] border-[#C9B0DC]";
    case "amber":
      return "bg-[#F6EDD9] text-[#6A5620] border-[#C9B07A]";
    case "gray":
    default:
      return "bg-[#EEF2F5] text-[#3E5A6B] border-[#C3D0D8]";
  }
};

export default function SecurityControlArchitecture() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                SECURITY CONTROL ARCHITECTURE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.1]">
              Eight public control areas
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[14px] lg:text-[15px] text-[#4B5563] leading-relaxed">
              Enough for a security reviewer to assess approach and posture,
              without revealing configuration that would assist an attacker.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {controlAreas.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#0F476A] border-t-[3px] rounded-[14px] p-4 flex flex-col justify-between shadow-sm gap-2"
            >
              <div>
                <h3 className="text-[13px] font-bold text-[#111827] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 mt-auto">
                <span
                  className={`inline-block px-2 py-1 w-full text-[9px] font-mono font-bold tracking-wider rounded border ${getBadgeStyles(
                    item.badgeColor,
                  )}`}
                >
                  {item.badgeText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
