import React from "react";
import Image from "next/image";

interface ProfileDetail {
  label: string;
  value?: string;
  isLinks?: boolean;
}

export default function FounderProfileSection() {
  const profileDetails: ProfileDetail[] = [
    {
      label: "NAME",
      value: "Lennox McLeod",
    },
    {
      label: "VERIFIED TITLE",
      value: "Founder & Executive Chairman, Zoiko Group.",
    },
    {
      label: "RELEVANT BACKGROUND",
      value:
        "Multidisciplinary background spanning accounting, law, corporate strategy, and cross-border enterprise building. Verify exact wording before publication.",
    },
    {
      label: "RELATIONSHIP TO ZOIKOSUITE",
      value:
        "ZoikoSuite is publicly described as a Zoiko Tech platform and a Zoiko Group company. No personal ZoikoSuite title is inferred beyond approved records.",
    },
    {
      label: "LINKS",
      isLinks: true,
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            FOUNDER PROFILE
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Supporting context, not the main story
          </h1>
        </div>

        {/* Content Section (Image + Details Table) */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-12">
          {/* Founder Image */}
          <div className="w-full lg:w-4/12 flex justify-center lg:justify-start">
            <div className="relative w-72 h-80 rounded-2xl overflow-hidden">
              <Image
                src="/founders/4.png"
                alt="Lennox McLeod Founder Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Details Table */}
          <div className="w-full lg:w-8/12 flex flex-col">
            {profileDetails.map((item, index) => (
              <div
                key={index}
                className="w-full py-5 border-b border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-8"
              >
                {/* Label */}
                <div className="w-full md:w-4/12 text-[#A8843A] text-xs font-semibold tracking-wider uppercase">
                  {item.label}
                </div>

                {/* Value */}
                <div className="w-full md:w-8/12 text-gray-700 text-sm md:text-base font-light leading-relaxed">
                  {item.isLinks ? (
                    <div className="flex items-center gap-6">
                      <a
                        href="#leadership"
                        className="text-[#0b1329] font-medium hover:underline"
                      >
                        Meet our leadership
                      </a>
                      <a
                        href="#zoikosuite"
                        className="text-[#0b1329] font-medium hover:underline"
                      >
                        About ZoikoSuite
                      </a>
                    </div>
                  ) : (
                    item.value
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
