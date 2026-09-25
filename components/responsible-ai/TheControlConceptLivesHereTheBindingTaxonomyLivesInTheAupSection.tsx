import React from "react";

export default function TheControlConceptLivesHereTheBindingTaxonomyLivesInTheAupSection() {
  const rows = [
    {
      category: "Prohibited by law / policy",
      legalPageTreatment:
        "ZoikoSuite AI may not be used for uses prohibited by applicable law or the AUP.",
      authoritativeDestination: "Acceptable Use Policy",
    },
    {
      category: "High-impact / regulated use",
      legalPageTreatment:
        "Requires explicit eligibility/review/configuration state before use.",
      authoritativeDestination:
        "Trust Responsible AI + product policy + contract",
    },
    {
      category: "Autonomous material action",
      legalPageTreatment:
        "Reiterates the prohibited-autonomy boundary unless a specifically approved workflow says otherwise.",
      authoritativeDestination: "Product authority policy",
    },
    {
      category: "Security abuse / model exploitation",
      legalPageTreatment:
        "Cross-links Security Disclosure and AUP, preserving the good-faith research route.",
      authoritativeDestination: "Security Disclosure + AUP",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            HIGH-IMPACT, RESTRICTED & PROHIBITED AI USES
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            The control concept lives here — the binding taxonomy lives in the
            AUP
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/4">Category</th>
                <th className="py-4 px-6 font-semibold w-5/12">
                  Legal-Page Treatment
                </th>
                <th className="py-4 pl-6 font-semibold w-1/3">
                  Authoritative Destination
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DCD6C8] bg-white"
                >
                  <td className="py-6 pr-6 text-[#0b1329] text-base font-semibold tracking-tight align-top">
                    {row.category}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.legalPageTreatment}
                  </td>
                  <td className="py-6 pl-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.authoritativeDestination}
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
