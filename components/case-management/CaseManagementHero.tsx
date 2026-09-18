import React from "react";
import Image from "next/image";

export default function CaseManagementHero() {
  return (
    <div className="w-[1440px] h-[680px] px-28 py-20 bg-[#F7F5F0] inline-flex justify-start items-center gap-16 overflow-hidden mx-auto">
      {/* Left Content Column */}
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-7 overflow-hidden">
        {/* Eyebrow Tag */}
        <div className="inline-flex justify-start items-center gap-2.5">
          <div className="w-5 h-0.5 bg-[#C44242]" />
          <span className="text-[#C44242] text-xs font-medium font-['JetBrains_Mono'] uppercase">
            CASE MANAGEMENT
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="self-stretch text-slate-900 text-4xl font-extrabold font-['Hanken_Grotesk'] leading-10">
          Keep investigation, evidence, communications and decisions in one
          reviewable case.
        </h2>

        {/* Description */}
        <p className="self-stretch text-gray-500 text-base font-normal font-['Manrope'] leading-6">
          A governed case-management destination grounded in the controlled
          source. Investigation context, evidence references, decision history
          and attributable communications - one reviewable record, with separate
          authorities kept distinct.
        </p>

        {/* Action Buttons */}
        <div className="inline-flex justify-start items-start gap-3.5 overflow-hidden">
          <button className="px-6 py-4 bg-[#C44242] hover:bg-[#b03a3a] transition-colors rounded-lg outline outline-1 outline-offset-[-1px] outline-[#C44242] inline-flex justify-start items-start overflow-hidden cursor-pointer shadow-[0px_4px_15px_0px_rgba(196,66,66,0.20)]">
            <span className="text-white text-sm font-bold font-['Manrope']">
              Book a Demo
            </span>
          </button>
          <button className="px-6 py-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-[#0A2029] hover:bg-[#0A2029]/5 transition-colors inline-flex justify-start items-start overflow-hidden cursor-pointer">
            <span className="text-[#0A2029] text-sm font-bold font-['Manrope']">
              Detection &amp; Response
            </span>
          </button>
        </div>

        {/* Conditional Publication State Notice Card */}
        <div className="self-stretch p-5 bg-[#FFF5D8] rounded-2xl shadow-[0px_8px_20px_0px_rgba(11,37,48,0.10)] outline outline-1 outline-offset-[-1px] outline-[#F3C86A] flex flex-col justify-start items-start gap-3 overflow-hidden">
          <div className="inline-flex justify-start items-center gap-2.5">
            <div className="px-3 py-1.5 bg-[#F3C86A] rounded-[999px] inline-flex justify-start items-start overflow-hidden">
              <span className="text-slate-900 text-[10px] font-extrabold font-['JetBrains_Mono']">
                CONDITIONAL
              </span>
            </div>
            <span className="text-[#725510] text-[10px] font-normal font-['JetBrains_Mono'] uppercase tracking-wide">
              PUBLICATION STATE
            </span>
          </div>
          <h3 className="self-stretch text-slate-900 text-base font-extrabold font-['Hanken_Grotesk'] leading-5">
            Render only when the case substance gate passes.
          </h3>
          <p className="self-stretch text-gray-500 text-xs font-normal font-['Manrope'] leading-4">
            If the source is unavailable, capability becomes less permissive and
            uncertainty remains explicit.
          </p>
        </div>
      </div>

      {/* Right Image Display Column */}
      <div className="w-[500px] rounded-[20px] inline-flex flex-col justify-start items-start overflow-hidden shadow-2xl">
        <div className="w-[500px] h-96 relative rounded-[20px] flex flex-col justify-start items-start overflow-hidden">
          {/* Operations Center Team Meeting Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop')`,
            }}
          />
          {/* Gradient Overlay matching the Figma card */}
          <div className="w-[500px] h-96 left-0 top-0 absolute bg-gradient-to-b from-slate-900/0 via-slate-900/40 to-slate-900/80 pointer-events-none" />

          {/* Live Status Badge */}
          <div className="px-3.5 py-2.5 left-[16px] top-[325px] absolute bg-slate-900/75 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[3px] inline-flex justify-start items-center gap-2 z-10">
            <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
            <span className="text-[#8FD9C8] text-xs font-normal font-['JetBrains_Mono'] leading-4">
              CASE REVIEW · Evidence &amp; Decision Record
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
