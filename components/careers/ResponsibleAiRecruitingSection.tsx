import React from "react";
import Image from "next/image";

export default function ResponsibleAiRecruitingSection() {
  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#C8A24A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            RESPONSIBLE AI IN RECRUITING
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-[38px] lg:text-[46px] font-bold font-serif text-white leading-tight tracking-tight">
            AI assists. It does not decide.
          </h2>
        </div>

        {/* Responsible AI Image */}
        <div className="relative w-full aspect-[1116/558] rounded-lg overflow-hidden border border-[#DCD6C8]/30 shadow-sm">
          <Image
            src="/careers/div.ai-table (1).png"
            alt="Responsible AI table showing assisted uses, disclosures and human accountability"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
