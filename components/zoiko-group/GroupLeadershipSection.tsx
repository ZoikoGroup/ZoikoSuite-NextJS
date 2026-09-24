import React from "react";
import Image from "next/image";

export default function GroupLeadershipSection() {
  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            LEADERSHIP CONTEXT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Group leadership, clearly scoped.
          </h1>
        </div>

        {/* Leadership Card */}
        <div
          style={{ borderRadius: "16px" }}
          className="w-full p-8 border border-[#E5E0D5] bg-white shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6 relative"
        >
          {/* Image */}
          <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
            <Image
              src="/zoiko/3.png"
              alt="Lennox McLeod"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-[#0b1329] tracking-tight">
                  Lennox McLeod
                </h3>
                <span className="text-[#A8843A] text-[10px] font-semibold tracking-[0.15em] uppercase bg-[#FBF8F2] px-3 py-1 rounded-full border border-[#E5E0D5]">
                  ZOIKO GROUP
                </span>
              </div>
              <p className="text-gray-600 font-light text-[15px]">
                Founder & Executive Chairman, Zoiko Group
              </p>
            </div>

            {/* Long Description (Font weight: light, Text color: gray-500) */}
            <p className="text-gray-500 font-light leading-relaxed text-[15.5px] max-w-3xl">
              Referenced here only with explicit Group-level scope — never
              silently converted into a ZoikoSuite operating title.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
