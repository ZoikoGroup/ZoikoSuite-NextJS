import React from "react";
import Image from "next/image";

export default function JobDetailStructuralExampleSection() {
  return (
    <section className="relative w-full bg-[#EFE8D8] py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-8 md:mb-10">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-bold font-['Inter'] leading-4 tracking-widest uppercase mb-3 block">
            JOB DETAIL &mdash; STRUCTURAL EXAMPLE
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-[36px] font-serif font-bold text-[#16223A] leading-tight tracking-tight whitespace-nowrap">
            What every role page must show before Apply
          </h2>
        </div>

        {/* Job Detail Image */}
        <div className="relative w-full aspect-[1116/617] rounded-2xl overflow-hidden border border-[#DCD6C8]/60 shadow-xs bg-white">
          <Image
            src="/careers/div.jobdetail (1).png"
            alt="Job detail page example showing entity, location, eligibility and apply panel"
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
