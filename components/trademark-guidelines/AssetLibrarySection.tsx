import React from "react";

const ASSET_ITEMS = [
  {
    title: "Primary logo",
    version: "Version [ ID ] · [ date ]",
    pill: "Public",
    pillType: "public",
    fileFormat: "SVG / PNG",
  },
  {
    title: "Monochrome variant",
    version: "Version [ ID ] · [ date ]",
    pill: "Public",
    pillType: "public",
    fileFormat: "SVG / PNG",
  },
  {
    title: "Partner badge",
    version: "Version [ ID ] · [ date ]",
    pill: "Partner-only",
    pillType: "restricted",
    fileFormat: "SVG / Lockup",
  },
  {
    title: "Media kit",
    version: "Version [ ID ] · [ date ]",
    pill: "Media-only",
    pillType: "restricted",
    fileFormat: "ZIP Bundle",
  },
];

export default function AssetLibrarySection() {
  return (
    <section className="w-full bg-[#F6F1E6] py-8 sm:py-[49px]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        {/* Eyebrow */}
        <p className="text-[#A8843A] text-[11px] leading-[17.6px] font-bold tracking-[0.14em] uppercase font-sans mb-2">
          APPROVED BRAND ASSET LIBRARY
        </p>

        {/* Section Heading */}
        <h2 className="font-serif font-bold text-[#16223A] text-[20px] sm:text-[24px] md:text-[26px] leading-[30px] sm:leading-[38.4px] tracking-[-0.01em] mb-5 sm:mb-6">
          Current, versioned, eligibility-gated
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
          {ASSET_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#DCD6C8] rounded-[8px] p-3.5 sm:p-4 flex flex-col justify-between shadow-xs hover:border-[#16223A]/30 transition-colors"
            >
              <div>
                <h6 className="font-sans font-bold text-[12.5px] leading-[20px] text-[#16223A] mb-1">
                  {item.title}
                </h6>
                <p className="font-sans text-[10.5px] leading-[16.8px] text-[#4B5872] mb-3">
                  {item.version}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#DCD6C8]/40">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#F6F1E6] border border-[#DCD6C8] text-[#4B5872]">
                  {item.pill}
                </span>

                <span className="text-[10px] font-medium text-[#4B5872]">
                  {item.fileFormat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
