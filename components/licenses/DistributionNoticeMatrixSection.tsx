import React from "react";

export default function DistributionNoticeMatrixSection() {
  const rows = [
    {
      distribution: "Hosted SaaS",
      expectation:
        "Public notices where attribution or network-use obligations apply; internal inventory remains complete.",
      note: "Not all internal server dependencies require public attribution.",
    },
    {
      distribution: "Web client",
      expectation:
        "Client-delivered JS/WASM/assets mapped to the web release notice.",
      note: "Avoid exposing source-map or internal path data.",
    },
    {
      distribution: "Desktop/mobile app",
      expectation:
        "Legal notices shipped in-app and/or with the package where required.",
      note: "Offline access expected.",
    },
    {
      distribution: "Agent / connector / CLI",
      expectation:
        "Notice file shipped with installer/binary/archive; linked to public registry by version.",
      note: "Exact artifact/version required.",
    },
    {
      distribution: "Single-tenant / on-prem",
      expectation:
        "Customer package includes applicable notice bundle and source-offer instructions.",
      note: "Customer-specific add-ons handled separately.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            DISTRIBUTION & DEPLOYMENT NOTICE MATRIX
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Notices mapped to how the software actually ships
          </h1>
        </div>

        {/* Table Container with Rounded Corners & Borders */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full border border-[#DCD6C8] overflow-hidden shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase border-b border-[#DCD6C8]">
                <th className="py-4 px-6 font-semibold w-1/3 border-r border-[#DCD6C8]">
                  Distribution
                </th>
                <th className="py-4 px-6 font-semibold w-1/3 border-r border-[#DCD6C8]">
                  License/Notice Expectation
                </th>
                <th className="py-4 px-6 font-semibold w-1/3">Design Note</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-[#DCD6C8] last:border-b-0 bg-transparent`}
                >
                  <td className="py-5 px-6 text-sm font-semibold text-[#0b1329] align-top border-r border-[#DCD6C8]">
                    {row.distribution}
                  </td>
                  <td className="py-5 px-6 text-sm text-gray-600 font-light leading-relaxed align-top border-r border-[#DCD6C8]">
                    {row.expectation}
                  </td>
                  <td className="py-5 px-6 text-sm text-gray-600 font-light leading-relaxed align-top">
                    {row.note}
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
