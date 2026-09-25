import React from "react";

export default function SummaryNeverReplacesTheOperativeTextSection() {
  const rows = [
    {
      label: "COMPONENT IDENTITY",
      value:
        "[ Public component name, version, supplier/publisher, package ecosystem ]",
    },
    {
      label: "LICENSE IDENTITY",
      value:
        "[ Full license name; SPDX identifier/expression where applicable; OSI status only when verified ]",
    },
    {
      label: "OPERATIVE TEXT",
      value:
        "[ Link or embedded verified license text; text hash/version where maintained ]",
    },
    {
      label: "COPYRIGHT / ATTRIBUTION",
      value: "[ Required copyright notices and attribution wording ]",
    },
    {
      label: "NOTICE REQUIREMENTS",
      value:
        "[ Whether NOTICE/attribution file content must accompany distribution ]",
    },
    {
      label: "SOURCE / COPYLEFT",
      value:
        "[ Whether a source offer or reciprocal obligation is triggered for this distribution ]",
    },
    {
      label: "APPLICABILITY",
      value:
        "[ Product; release; module; platform; distribution form; deployment mode ]",
    },
    {
      label: "EVIDENCE & REVIEW",
      value:
        "[ Last reviewed date; evidence source class; Legal approval state; public record version ]",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            LICENSE DETAIL VIEW — STRUCTURAL EXAMPLE
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Summary never replaces the operative text
          </h1>
        </div>

        {/* Card Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-white border border-[#DCD6C8] p-6 md:p-10 shadow-sm"
        >
          <div className="flex flex-col w-full">
            {rows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-12 py-5 items-center ${
                  index !== rows.length - 1 ? "border-b border-[#EAE4D7]" : ""
                }`}
              >
                <div className="md:col-span-4 text-xs font-bold text-[#0b1329] uppercase tracking-wider mb-1 md:mb-0">
                  {row.label}
                </div>
                <div className="md:col-span-8 text-sm text-gray-600 font-mono">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
