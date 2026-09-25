import React from "react";

export default function PreventingEnterpriseMisunderstandingSection() {
  const rows = [
    {
      surface: "Public marketing website",
      primaryGovernanceSource: "Cookie Policy + Privacy Policy + Preferences",
      designTreatment: "Full cookie/similar-technology disclosure and choice.",
    },
    {
      surface: "Sign-in / authentication",
      primaryGovernanceSource: "Cookie Policy + Security/Privacy controls",
      designTreatment:
        "Necessary authentication storage explained; optional tags remain separately gated.",
    },
    {
      surface: "Authenticated product UI",
      primaryGovernanceSource:
        "Product telemetry docs + Privacy Policy + Trust",
      designTreatment:
        'Core audit/security events are not classified as "cookies" merely because browser storage is involved.',
    },
    {
      surface: "Enterprise / sovereign deployment",
      primaryGovernanceSource: "Deployment docs + DPA / Privacy Architecture",
      designTreatment:
        "Public-site cookie settings never assumed to control customer-hosted telemetry.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-8 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#C8A24A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PUBLIC WEBSITE VS. AUTHENTICATED PRODUCT TELEMETRY
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-white leading-tight tracking-tight mb-4">
            Preventing a common enterprise misunderstanding
          </h1>

          {/* Description */}
          <p className="text-gray-300 font-light leading-relaxed text-[15.5px] max-w-3xl">
            This Cookie Policy governs public-web and browser/app storage/access
            technologies within its stated scope. It does not automatically
            describe every audit, security, operational, diagnostic, or product
            event generated inside ZoikoSuite.
          </p>
        </div>

        {/* Semantic HTML Table inside a rounded card with a subtle background */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full overflow-x-auto border border-[#DCD6C8] shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#DCD6C8] bg-[#F6F1E6] text-xs font-semibold tracking-[0.15em] text-[#4B5872] uppercase">
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] last:border-r-0 w-1/4">
                  Surface
                </th>
                <th className="py-4 px-6 font-semibold border-r border-[#DCD6C8] last:border-r-0 w-1/3">
                  Primary Governance Source
                </th>
                <th className="py-4 px-6 font-semibold w-5/12">
                  Design Treatment
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 border-[#DCD6C8]"
                >
                  <td className="py-6 px-6 text-white text-base font-semibold tracking-tight align-middle border-r border-[#DCD6C8]">
                    {row.surface}
                  </td>
                  <td className="py-6 px-6 text-gray-300 font-light leading-relaxed text-[15.5px] align-middle border-r border-[#DCD6C8]">
                    {row.primaryGovernanceSource}
                  </td>
                  <td className="py-6 px-6 text-gray-300 font-light leading-relaxed text-[15.5px] align-middle">
                    {row.designTreatment}
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
