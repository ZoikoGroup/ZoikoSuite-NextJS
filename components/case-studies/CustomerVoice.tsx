import React from "react";
import Image from "next/image";

export default function CustomerVoice() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A07A2E]">
            07 / CUSTOMER VOICE
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-10 text-center">
          Customer voice
        </h2>

        {/* Quote Card */}
        <div className="w-full bg-[#F6EDD9] border border-[#EAD9AE] rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <p className="text-[#111827] italic text-lg md:text-xl font-normal leading-relaxed mb-8">
            &quot;For the first time, our auditors could self-serve evidence
            instead of waiting on us to compile it every quarter.&quot;
          </p>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative rounded-full overflow-hidden shrink-0 bg-[#E5E7EB]">
              <Image
                src="/case/pfp.png"
                alt="Director of Compliance Avatar"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-[#111827] font-semibold text-sm">
                Director of Compliance
              </h4>
              <p className="text-[#6B7280] text-xs">
                Approved title only, per customer permission scope
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
