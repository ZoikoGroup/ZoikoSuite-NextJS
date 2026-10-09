import React from "react";

export default function SourcesStatusAndLimitsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-12 flex flex-col items-start max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            Sources, status and limits.
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
            What this page can and cannot tell you. No self-certified badges are
            shown.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Sources and Status */}
          <div className="bg-[#FFFFFF] rounded-2xl border border-[dashed] border-[#CFCABB] p-8 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col items-start w-full">
              <h3 className="text-xl font-bold text-[#1F2421] tracking-tight mb-3">
                Sources and status
              </h3>
              <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-6">
                Product capability status is controlled by a product registry.
                Today the Tax Ladder is shown as{" "}
                <strong className="font-semibold text-[#1F2421]">
                  Concept only
                </strong>
                .
              </p>

              {/* Status List */}
              <div className="w-full flex flex-col divide-y divide-[#CFCABB]/50 mb-8 text-sm">
                <div className="py-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#F4F3EE] border border-[#E2E0D6] text-xs font-bold text-[#5D6A74]">
                      Concept only
                    </span>
                    <span className="text-[#4B5563]">
                      Current status of the Tax Ladder on this page.
                    </span>
                  </div>
                </div>
                <div className="py-3 text-[#4B5563]">
                  <strong className="text-[#1F2421]">Planned</strong> &mdash;
                  Not shown: needs a product registry entry.
                </div>
                <div className="py-3 text-[#4B5563]">
                  <strong className="text-[#1F2421]">Available</strong> &mdash;
                  Not shown: needs a product registry entry.
                </div>
                <div className="py-3 text-[#4B5563]">
                  <strong className="text-[#1F2421]">Restricted</strong> &mdash;
                  Not shown: needs a product registry entry.
                </div>
                <div className="py-3 text-[#4B5563]">
                  <strong className="text-[#1F2421]">Contact sales</strong>{" "}
                  &mdash; Used only where the product registry says so.
                </div>
              </div>

              {/* Integration Pattern Box */}
              <div className="w-full bg-[#FFFFFF] rounded-xl border border-[#CFCABB] p-6 mb-6">
                <span className="text-[10px] font-bold tracking-wider text-[#4B5563] uppercase block mb-4">
                  INTEGRATION PATTERN (FOR CIO / IT REVIEW)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                  <div className="bg-[#FFFFFF] rounded-lg border border-[dashed] border-[#CFCABB] p-3 text-center">
                    <span className="text-xs font-bold text-[#1F2421] block mb-1">
                      Source systems
                    </span>
                    <span className="text-[10px] text-[#4B5563]">
                      category, to confirm
                    </span>
                  </div>
                  <div className="text-center text-xs text-[#4B5563] hidden sm:block">
                    &rarr;
                  </div>
                  <div className="bg-[#FFFFFF] rounded-lg border border-[dashed] border-[#CFCABB] p-3 text-center">
                    <span className="text-xs font-bold text-[#1F2421] block mb-1">
                      Governance layer
                    </span>
                    <span className="text-[10px] text-[#4B5563]">
                      proposed role
                    </span>
                  </div>
                  <div className="text-center text-xs text-[#4B5563] hidden sm:block">
                    &rarr;
                  </div>
                  <div className="bg-[#FFFFFF] rounded-lg border border-[dashed] border-[#CFCABB] p-3 text-center sm:col-span-3">
                    <span className="text-xs font-bold text-[#1F2421] block mb-1">
                      Authorized evidence links
                    </span>
                    <span className="text-[10px] text-[#4B5563]">
                      no public downloads
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#4B5563] leading-relaxed">
                Connector names, data lineage, security and residency are
                validated with IT and Integration before any claim. IT /
                Integration Admin sees connector health only, with no tax
                sign-off and no tax evidence export by default.
              </p>
            </div>
          </div>

          {/* Right Card: Limitations */}
          <div className="bg-[#FFFFFF] rounded-2xl border border-[dashed] border-[#CFCABB] p-8 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col items-start w-full">
              <h3 className="text-xl font-bold text-[#1F2421] tracking-tight mb-6">
                Limitations
              </h3>
              <ul className="flex flex-col gap-4 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>
                    No automated tax determination, calculation, filing or
                    payment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>
                    No live regulatory or tax-rule update feed
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>
                    No tax advice, legal opinion or professional guidance[cite:
                    9]
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>
                    No jurisdiction coverage, supported-country list or
                    regulatory-compliance claim
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>
                    No compliance certification, audit approval or readiness
                    score
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>
                    No product screenshot, SLA, integration, metric or customer
                    outcome
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2.5 flex-shrink-0" />
                  <span>Evidence presence is not certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
