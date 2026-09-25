import React from "react";

export default function KnownLimitationsAndAlternativesSection() {
  const rows = [
    {
      label: "AFFECTED SCOPE",
      type: "text",
      value:
        "[ Page, workflow, component, document type, third-party service, locale, or browser/AT combination ]",
    },
    {
      label: "USER IMPACT",
      type: "text",
      value: "[ What task becomes difficult or unavailable ]",
    },
    {
      label: "ALTERNATIVE",
      type: "text",
      value:
        "[ Accessible alternative channel or equivalent output where available ]",
    },
    {
      label: "STATUS",
      type: "badge",
      value:
        "[ Investigating / Planned / In progress / Validating / Resolved / Third-party dependency ]",
    },
    {
      label: "SUPPORT ACTION",
      type: "action",
      value: (
        <>
          <a
            href="#report-issue"
            className="text-[#0b1329] font-medium underline hover:text-[#A8843A] transition-colors"
          >
            Report issue
          </a>
          {" – "}
          <a
            href="#request-alternative"
            className="text-[#0b1329] font-medium underline hover:text-[#A8843A] transition-colors"
          >
            Request accessible alternative
          </a>
        </>
      ),
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            KNOWN LIMITATIONS & ALTERNATIVES
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Disclosed honestly, in plain language — never omitted for optics
          </h1>
        </div>

        {/* Main Card Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-white border border-[#DCD6C8] p-6 md:p-8 shadow-sm flex flex-col gap-6"
        >
          {/* Barrier Headline Quote */}
          <h3 className="text-[#0b1329] text-base md:text-lg font-semibold tracking-tight">
            [ Plain-language barrier — e.g. &ldquo;Some exported PDF reports may
            have incomplete table tagging.&rdquo; ]
          </h3>

          {/* Details Table / Rows */}
          <div className="w-full flex flex-col divide-y divide-[#DCD6C8] border-t border-[#DCD6C8]">
            {rows.map((row, index) => (
              <div
                key={index}
                className="py-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-6"
              >
                {/* Row Label */}
                <span className="w-full md:w-48 text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase shrink-0">
                  {row.label}
                </span>

                {/* Row Value */}
                <div className="flex-1 text-gray-600 font-light leading-relaxed text-[15.5px]">
                  {row.type === "badge" ? (
                    <span
                      style={{ borderRadius: "6px" }}
                      className="inline-block bg-[#F6F1E6] border border-[#DCD6C8] px-3 py-1 text-xs md:text-sm font-medium text-[#0b1329]"
                    >
                      {row.value}
                    </span>
                  ) : (
                    row.value
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
