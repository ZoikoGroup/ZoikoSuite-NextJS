import React from "react";
import Image from "next/image";

export default function ContextChangesSection() {
  return (
    <section className="w-full bg-white text-[#0F172A] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#A07A2E]"></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#A07A2E" }}
              >
                ENTITY, JURISDICTION, EFFECTIVE DATE AND RESIDENCY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight leading-[1.15]">
              Context changes the rules, the data treatment and the availability
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-end lg:justify-end">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
              Coverage carries its source and effective date. Where a source is
              stale or absent, the register says so rather than resolving to a
              default.
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative w-full">
          <Image
            src="/financial/3.png"
            alt="Context changes the rules illustration"
            width={1200}
            height={700}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
