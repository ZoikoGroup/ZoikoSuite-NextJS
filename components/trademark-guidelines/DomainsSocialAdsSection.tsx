import React from "react";

const DOMAIN_TREATMENTS = [
  {
    use: "Domains / subdomains",
    treatment:
      "Must not create false source, ownership, support, login, payment, or official-site confusion.",
  },
  {
    use: "Social handles",
    treatment: 'Avoid "official" or brand-only handles unless assigned/approved.',
  },
  {
    use: "Support / login naming",
    treatment:
      "High-risk category — prioritizes anti-phishing and impersonation prevention.",
  },
];

export default function DomainsSocialAdsSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          DOMAINS, SOCIAL HANDLES, PAID ADVERTISING & SEARCH
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] md:text-[26px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-7">
          Prevent source confusion — high-risk category for impersonation
        </h2>

        {/* Clean Rowtable (EL-ac896b69) */}
        <div className="w-full border-t border-[#DCD6C8]">
          {/* Table Header (Hidden on small mobile) */}
          <div className="hidden sm:flex items-center gap-5 py-3.5 border-b border-[#DCD6C8]">
            <div className="w-[210px] shrink-0 font-sans font-bold text-[12.5px] leading-[20px] text-[#4B5872] uppercase tracking-[0.0528em]">
              USE
            </div>
            <div className="flex-1 font-sans font-bold text-[12.5px] leading-[20px] text-[#4B5872] uppercase tracking-[0.0528em]">
              TREATMENT
            </div>
          </div>

          {/* Table Rows */}
          {DOMAIN_TREATMENTS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-5 py-3 sm:py-4 border-b border-[#DCD6C8]"
            >
              <div className="w-full sm:w-[210px] shrink-0 font-sans font-bold text-[12.5px] leading-[20px] text-[#16223A]">
                {item.use}
              </div>
              <div className="flex-1 font-sans font-normal text-[12px] sm:text-[12.5px] leading-[19px] sm:leading-[20px] text-[#16223A] max-w-[740px]">
                {item.treatment}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
