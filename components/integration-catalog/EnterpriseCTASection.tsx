import React from "react";

export default function EnterpriseCTASection() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden">
      {/* Background Server Room Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1440&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-[#031216]/85 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 self-stretch p-20 flex flex-col justify-start items-center gap-6">
        <h2 className="text-center text-white text-5xl font-extrabold font-['Hanken_Grotesk']">
          Your stack remains yours.
        </h2>
        <p className="w-[800px] text-center text-white/70 text-base font-normal font-['Manrope'] leading-6">
          Zoiko Shield connects the signals, preserves the evidence, and governs
          how security and compliance data moves through the enterprise. No
          rip-and-replace, just continuous mathematical proof.
        </p>
        <div className="pt-4 inline-flex justify-start items-start gap-4">
          <button className="px-7 py-3.5 bg-[#C44242] hover:bg-[#b03a3a] transition-colors rounded-[10px] shadow-[0px_6px_20px_0px_rgba(196,66,66,0.31)] inline-flex justify-start items-start cursor-pointer">
            <span className="text-white text-base font-bold font-['Manrope']">
              Book a Technical Demo
            </span>
          </button>
          <button className="px-6 py-3.5 rounded-[10px] outline outline-[1.50px] outline-offset-[-1.50px] outline-white/30 hover:bg-white/5 transition-colors inline-flex justify-start items-start cursor-pointer">
            <span className="text-white text-base font-bold font-['Manrope']">
              Talk to an Architect
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
