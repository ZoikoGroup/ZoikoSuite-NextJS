import React from "react";
import Image from "next/image";

export default function OpenRolesFinderSection() {
  return (
    <section
      id="open-roles"
      className="relative w-full bg-white py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans border-b border-[#DCD6C8]/40"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-8 md:mb-10">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-bold font-['Inter'] leading-4 tracking-widest uppercase mb-3 block">
            OPEN ROLES FINDER
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-[36px] font-serif font-bold text-[#16223A] leading-tight tracking-tight">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              Search current roles &mdash; treated with the rigor of an
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              enterprise product table
            </span>
          </h2>
        </div>

        {/* Roles Finder Image */}
        <div className="relative w-full aspect-[1116/558] rounded-2xl overflow-hidden border border-[#DCD6C8]/60 shadow-xs bg-white">
          <Image
            src="/careers/div.finder-box (2).png"
            alt="Open roles finder table with search filters and role listings"
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
