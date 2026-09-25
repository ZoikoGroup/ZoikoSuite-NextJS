import React from "react";

export default function GovernedIntelligenceSection() {
  const rows = [
    {
      capabilityClass: "Classify / extract",
      aiMay:
        "Propose labels, clauses, obligations, or metadata with provenance/confidence.",
      aiMayNot:
        "Silently overwrite source records or finalize material classifications when review is required.",
      authority: "Authoritative record owner",
    },
    {
      capabilityClass: "Summarize",
      aiMay:
        "Condense governed source material, citing source context where supported.",
      aiMayNot: "Create a new source of truth merely because a summary exists.",
      authority: "Underlying source record",
    },
    {
      capabilityClass: "Forecast / score",
      aiMay:
        "Estimate exposure, probability, severity, priority, or scenarios.",
      aiMayNot:
        "Present a prediction as certainty or automatically trigger prohibited material action.",
      authority: "Policy thresholds + reviewer",
    },
    {
      capabilityClass: "Recommend",
      aiMay: "Surface options, rules, evidence, and suggested next steps.",
      aiMayNot:
        "Bypass required approval, delegation, segregation of duties, or jurisdiction checks.",
      authority: "Named approver / policy engine",
    },
    {
      capabilityClass: "Reconcile / match",
      aiMay: "Suggest matches and exception-resolution paths.",
      aiMayNot:
        "Finalize material reconciliation when policy requires governed review/evidence.",
      authority: "Configured workflow",
    },
    {
      capabilityClass: "Flag / detect",
      aiMay: "Identify anomalies, exceptions, or patterns.",
      aiMayNot:
        "Modify immutable truth or silently deny a person solely from an unreviewed signal.",
      authority: "Authorized review process",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            AI CAPABILITY & AUTHORITY MODEL
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Governed intelligence: AI assists after control boundaries are
            defined
          </h1>
        </div>

        {/* Semantic HTML Table inside a rounded card */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full overflow-x-auto bg-white border border-[#DCD6C8] shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase bg-[#F6F1E6]">
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] w-1/5">
                  Capability Class
                </th>
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] w-1/4">
                  AI May
                </th>
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] w-1/3">
                  AI May Not
                </th>
                <th className="py-4 px-6 font-semibold w-1/4">Authority</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 border-[#DCD6C8] bg-white"
                >
                  <td className="p-6 text-[#0b1329] text-base font-semibold tracking-tight align-top border-r border-[#DCD6C8]">
                    {row.capabilityClass}
                  </td>
                  <td className="p-4 text-[#3D7A52] font-light leading-relaxed text-[13.5px] align-top border-r border-[#DCD6C8]">
                    {row.aiMay}
                  </td>
                  <td className="p-4 text-[#A8433A] font-light leading-relaxed text-[13.5px] align-top border-r border-[#DCD6C8]">
                    {row.aiMayNot}
                  </td>
                  <td className="p-4 text-gray-600 font-light leading-relaxed text-[14px] align-top">
                    {row.authority}
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
