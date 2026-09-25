import React from "react";

const PARTNER_SCENARIOS = [
  {
    scenario: 'Customer "customer of" reference',
    requiredState: "Program / contract dependent",
    control:
      "Contractual publicity permission verified separately from trademark permission.",
  },
  {
    scenario: "Technology integration partner",
    requiredState: "Approved partner state",
    control:
      "Approved integration naming and badge only for active/verified integrations.",
  },
  {
    scenario: "Joint event / campaign",
    requiredState: "Campaign-specific approval",
    control:
      "Lockup, ordering, prominence, dates, and channels approved in one permission record.",
  },
  {
    scenario: "Expired / suspended relationship",
    requiredState: "Permission withdrawn/expired",
    control:
      "Public assets and badges disabled; partner must remove or update within the\ncontractual timeline.",
  },
];

export default function PartnersCoBrandingSection() {
  return (
    <section className="w-full bg-[#F6F1E6] py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          PARTNERS, CUSTOMERS, RESELLERS & CO-BRANDING
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-7">
          Relationship-dependent use, contract-bounded
        </h2>

        {/* Clean Rowtable (Responsive on mobile) */}
        <div className="w-full border-t border-[#DCD6C8]">
          {/* Header Row (Desktop/Tablet) */}
          <div className="hidden md:flex items-center gap-5 py-3.5 border-b border-[#DCD6C8]">
            <div className="w-[240px] sm:w-[270px] shrink-0 font-sans font-bold text-[12.5px] leading-[20px] text-[#4B5872] uppercase tracking-[0.0528em]">
              SCENARIO
            </div>
            <div className="w-[240px] sm:w-[290px] shrink-0 font-sans font-bold text-[12.5px] leading-[20px] text-[#4B5872] uppercase tracking-[0.0528em]">
              REQUIRED STATE
            </div>
            <div className="flex-1 font-sans font-bold text-[12.5px] leading-[20px] text-[#4B5872] uppercase tracking-[0.0528em]">
              CONTROL
            </div>
          </div>

          {/* Data Rows */}
          {PARTNER_SCENARIOS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start gap-1 md:gap-5 py-3 sm:py-4 border-b border-[#DCD6C8]"
            >
              <div className="w-full md:w-[240px] sm:md:w-[270px] shrink-0 font-sans font-bold text-[12.5px] leading-[20px] text-[#16223A]">
                {item.scenario}
              </div>
              <div className="w-full md:w-[240px] sm:md:w-[290px] shrink-0 font-sans font-normal text-[12px] sm:text-[12.5px] leading-[19px] sm:leading-[20px] text-[#4B5872] md:text-[#16223A]">
                <span className="md:hidden font-medium text-[#4B5872] mr-1.5">State:</span>
                {item.requiredState}
              </div>
              <div className="flex-1 font-sans font-normal text-[12px] sm:text-[12.5px] leading-[19px] sm:leading-[20px] text-[#16223A] whitespace-pre-line max-w-[620px]">
                {item.control}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
