import React from "react";

export default function SignalsAreInputsToTheSameResolverSection() {
  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            RECOGNIZED PRIVACY SIGNALS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Signals are inputs to the same resolver — not a hidden system
          </h1>
        </div>

        {/* Card Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-white border border-[#DCD6C8] p-8 md:p-10 shadow-sm flex flex-col gap-4"
        >
          <h3 className="text-[#0b1329] text-base font-semibold tracking-tight">
            Global Privacy Control
          </h3>

          <div className="flex items-center gap-3">
            <span className="text-gray-600 text-[15.5px]">Status:</span>
            <span className="inline-block bg-[#F6F1E6] border border-[#DCD6C8] text-[#0b1329] px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider">
              [ DETECTED / NOT DETECTED / UNSUPPORTED / ERROR ]
            </span>
          </div>

          <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
            Effect: [ plain-language explanation of what the signal changes for
            this visitor. ] Where a stored choice conflicts with a stronger
            applicable signal, the interface shows which state wins and why.
          </p>
        </div>
      </div>
    </section>
  );
}
