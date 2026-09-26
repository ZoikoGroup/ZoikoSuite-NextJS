import React from "react";

export default function CustomerRoutingSection() {
  const rows = [
    {
      scenario: "ZoikoSuite determines purpose/means",
      userExperience: "Continue through the ZoikoSuite rights workflow.",
    },
    {
      scenario: "Customer determines purpose/means",
      userExperience:
        "Explains that the organization using ZoikoSuite may need to handle the request; provides customer-contact guidance if known and permitted.",
    },
    {
      scenario: "Mixed data",
      userExperience:
        "Split internally or explain which portion ZoikoSuite can handle directly.",
    },
    {
      scenario: "Unknown",
      userExperience:
        "The request is accepted and routed internally — never bounced without investigation.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            CUSTOMER-MANAGED DATA & CONTROLLER/PROCESSOR ROUTING
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Preventing misdirected requests in enterprise SaaS
          </h1>
        </div>

        {/* Table Container with Rounded Corners & Borders */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-[#F6F1E6] border border-[#DCD6C8] overflow-hidden shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F6F1E6] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase border-b border-[#DCD6C8]">
                <th className="py-4 px-6 font-semibold w-5/12 border-r border-[#DCD6C8]">
                  Scenario
                </th>
                <th className="py-4 px-6 font-semibold w-7/12">
                  User Experience
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DCD6C8] last:border-b-0 bg-transparent"
                >
                  <td className="py-5 px-6 text-sm font-semibold text-[#0b1329] align-top border-r border-[#DCD6C8]">
                    {row.scenario}
                  </td>
                  <td className="py-5 px-6 text-sm text-gray-600 font-light leading-relaxed align-top">
                    {row.userExperience}
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
