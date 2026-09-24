import React from "react";

export default function ATieredEvidenceHierarchySection() {
  const rows = [
    {
      tier: "Public",
      exampleMaterial:
        "Security Overview, Privacy Architecture, Data Residency, certification/readiness status.",
      accessModel: "No gate",
    },
    {
      tier: "Standard diligence",
      exampleMaterial:
        "Security/TOM schedule, subprocessor list, architecture brief, standard questionnaire.",
      accessModel: "Authenticated / lightweight request",
    },
    {
      tier: "Independent assurance",
      exampleMaterial:
        "Current audit/attestation/certification reports, if they exist and scope permits.",
      accessModel: "NDA / authorized access",
    },
    {
      tier: "Customer-specific evidence",
      exampleMaterial:
        "Executed DPA, processing schedule, configuration, incidents, transfer assessments.",
      accessModel: "Authenticated customer-only",
    },
    {
      tier: "On-site / deep audit",
      exampleMaterial:
        "Inspection or assessor access when contract conditions are met.",
      accessModel: "Legal/security approval",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            AUDIT, INFORMATION RIGHTS & EVIDENCE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            A tiered evidence hierarchy — not one static download
          </h1>
        </div>

        {/* Semantic HTML Table inside a rounded card */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full overflow-x-auto bg-[#F6F1E6] border border-[#DCD6C8] shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase bg-[#F6F1E6]">
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] last:border-r-0 w-1/4">
                  Tier
                </th>
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] last:border-r-0 w-5/12">
                  Example Material
                </th>
                <th className="py-4 px-6 font-semibold w-5/12">Access Model</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 border-[#DCD6C8] bg-[#F6F1E6]"
                >
                  <td className="py-6 px-6 text-[#0b1329] text-base font-semibold tracking-tight align-top border-r border-[#DCD6C8]">
                    {row.tier}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top border-r border-[#DCD6C8]">
                    {row.exampleMaterial}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.accessModel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
