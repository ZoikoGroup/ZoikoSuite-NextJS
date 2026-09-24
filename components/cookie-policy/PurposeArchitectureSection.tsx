import React from "react";

export default function PurposeArchitectureSection() {
  const rows = [
    {
      approvedPurposeFamily: "Service delivery",
      allowedWording:
        "Maintain session, route requests, remember consent, provide requested feature.",
      prohibitedVagueWording:
        '"Improve your experience" without a specific function.',
    },
    {
      approvedPurposeFamily: "Security / integrity",
      allowedWording:
        "Authenticate, prevent abuse, protect forms, detect malicious traffic.",
      prohibitedVagueWording: '"Security" used to justify marketing analytics.',
    },
    {
      approvedPurposeFamily: "Preferences / personalization",
      allowedWording: "Remember language, display, or user-selected settings.",
      prohibitedVagueWording:
        '"Personalization" that includes behavioral advertising without disclosure.',
    },
    {
      approvedPurposeFamily: "Analytics / measurement",
      allowedWording:
        "Measure interactions per the approved measurement model.",
      prohibitedVagueWording:
        '"Insights" without data fields, retention, or vendor detail.',
    },
    {
      approvedPurposeFamily: "Advertising / audience",
      allowedWording:
        "Create or use audiences for targeted advertising, if actually deployed and legally permitted.",
      prohibitedVagueWording:
        'Silent cross-site profiling or "partners may use data" catch-all.',
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PURPOSE ARCHITECTURE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Purpose controls the design — not the vendor or technology
          </h1>
        </div>

        {/* Semantic HTML Table with Card Borders & Inner Dividers */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full overflow-x-auto bg-[#F6F1E6] border border-[#DCD6C8] shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 px-4 font-semibold border-r border-[#DCD6C8] last:border-r-0">
                  Approved Purpose Family
                </th>
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] last:border-r-0">
                  Allowed Wording
                </th>
                <th className="py-4 px-6 font-semibold">
                  Prohibited Vague Wording
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 border-[#DCD6C8] bg-[#F6F1E6] hover:bg-[#efe8d8] transition-colors"
                >
                  <td className="p-4 text-[#0b1329] text-[13px] font-semibold tracking-tight align-middle border-r border-[#DCD6C8]">
                    {row.approvedPurposeFamily}
                  </td>
                  <td className="p-4 text-gray-600 font-light leading-relaxed text-[13px] align-middle border-r border-[#DCD6C8]">
                    {row.allowedWording}
                  </td>
                  <td className="p-4 text-[#A8433A] font-light italic leading-relaxed text-[13px] align-middle">
                    {row.prohibitedVagueWording}
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
