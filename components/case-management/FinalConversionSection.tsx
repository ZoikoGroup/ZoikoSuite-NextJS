import React from "react";

export default function FinalConversionSection() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden">
      {/* Background Server Room Image with Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1440&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2029]/95 via-[#0A2029]/80 via-[55%] to-[#0A2029]/60 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 self-stretch h-96 px-28 py-24 inline-flex justify-between items-center overflow-hidden">
        {/* Left Text Block */}
        <div className="w-[680px] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
          <span className="justify-start text-[#5FE3C5] text-xs font-normal font-['JetBrains_Mono']">
            CONDITIONAL CASE MANAGEMENT
          </span>
          <h2 className="self-stretch justify-start text-white text-4xl font-extrabold font-['Hanken_Grotesk'] leading-10">
            Bring reviewable context together—without blurring authority.
          </h2>
          <span className="self-stretch justify-start text-white/70 text-sm font-normal font-['Manrope']">
            Evidence · Trust · Docs · System Status
          </span>
        </div>

        {/* Right CTA Block */}
        <div className="inline-flex flex-col justify-start items-center gap-3">
          <button className="px-7 py-4 bg-[#C44242] hover:bg-[#b03a3a] transition-colors rounded-[10px] shadow-[0px_6px_20px_0px_rgba(196,66,66,0.28)] outline outline-1 outline-offset-[-1px] outline-[#C44242] inline-flex justify-start items-start overflow-hidden cursor-pointer">
            <span className="justify-start text-white text-base font-bold font-['Manrope']">
              Book a Demo
            </span>
          </button>
          <span className="justify-start text-white/30 text-xs font-normal font-['Manrope']">
            Availability conditional on readiness
          </span>
        </div>
      </div>
    </div>
  );
}
