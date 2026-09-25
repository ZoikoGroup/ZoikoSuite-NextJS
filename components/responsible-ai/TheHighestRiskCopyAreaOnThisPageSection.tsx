import React from "react";

export default function TheHighestRiskCopyAreaOnThisPageSection() {
  const rows = [
    {
      field: "Data types used",
      requiredBehavior:
        "Prompts/instructions, governed source records, retrieved context, output, feedback, or telemetry — described at a useful, approved level.",
    },
    {
      field: "Provider role",
      requiredBehavior:
        "First-party model, third-party model/API, customer-selected provider, local/customer-controlled deployment, or not publicly named.",
    },
    {
      field: "Training / model improvement",
      requiredBehavior:
        "Exact state: not used; may be used under stated conditions; customer-configurable; provider-specific; unknown/blocked from publication.",
    },
    {
      field: "Retention",
      requiredBehavior:
        "Linked to the approved retention statement, or explained as varying by feature/provider/configuration — never invented.",
    },
    {
      field: "Transfers / location",
      requiredBehavior:
        "Cross-linked to Privacy Policy, DPA, Subprocessor List, and Data Residency — residency and transfer are never treated as the same concept.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="w-full flex flex-col items-start mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            DATA, PRIVACY, TRAINING & IMPROVEMENT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            The highest-risk copy area on this page
          </h1>

          {/* Descriptive Text */}
          <p className="text-gray-600 font-light leading-relaxed text-[15.5px] max-w-4xl">
            No blanket &quot;we never train on your data&quot; or &quot;we use
            your data to improve AI&quot; statement is made unless it is true
            for every scoped feature, provider, deployment, and approved
            contract.
          </p>
        </div>

        {/* Semantic HTML Table inside a rounded card */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full overflow-x-auto bg-white border border-[#DCD6C8] shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase bg-[#F6F1E6]">
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] w-1/4">
                  Field
                </th>
                <th className="py-4 px-6 font-semibold w-3/4">
                  Required Behavior
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 border-[#DCD6C8] bg-white"
                >
                  <td className="p-4 text-[#0b1329] text-base font-semibold tracking-tight align-top border-r border-[#DCD6C8]">
                    {row.field}
                  </td>
                  <td className="p-4 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.requiredBehavior}
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
