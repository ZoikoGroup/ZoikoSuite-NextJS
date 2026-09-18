import React from "react";

export default function RequestIntegrationSection() {
  return (
    <div className="self-stretch px-20 py-16 bg-[#F7F5F0]/90 inline-flex flex-col justify-start items-start gap-8 w-full max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="self-stretch flex flex-col justify-start items-center gap-3">
        <h2 className="text-center text-[#1F2937] text-4xl font-extrabold font-['Hanken_Grotesk']">
          Need a custom integration?
        </h2>
        <p className="w-[720px] text-center text-[#475569] text-base font-normal font-['Manrope']">
          Submit your telemetry or evidence collection requirements. Our
          engineering team reviews connector pipelines weekly to prioritize
          framework compatibility.
        </p>
      </div>

      {/* Two-Column Form & Confirmation Mock Layout */}
      <div className="self-stretch inline-flex justify-start items-start gap-10">
        {/* Left Form Card */}
        <div className="w-[620px] self-stretch p-8 bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#0A2029]/10 inline-flex flex-col justify-start items-start gap-5 shadow-[0px_4px_16px_0px_rgba(11,37,48,0.03)]">
          {/* Row 1: Integration Name & Vendor */}
          <div className="self-stretch inline-flex justify-start items-start gap-4">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <label className="text-[#0A2029] text-sm font-bold font-['Manrope']">
                Integration Name *
              </label>
              <div className="self-stretch h-11 px-4 bg-[#F7F5F0] rounded-lg outline outline-1 outline-offset-[-1px] outline-[#0A2029]/10 inline-flex justify-start items-center">
                <input
                  type="text"
                  placeholder="e.g. Splunk Enterprise"
                  className="w-full bg-transparent border-none outline-none text-[#5B6670] text-sm font-normal font-['Manrope'] placeholder:text-[#5B6670]"
                />
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
              <label className="text-[#0A2029] text-sm font-bold font-['Manrope']">
                Vendor / Publisher *
              </label>
              <div className="self-stretch h-11 px-4 bg-[#F7F5F0] rounded-lg outline outline-1 outline-offset-[-1px] outline-[#0A2029]/10 inline-flex justify-start items-center">
                <input
                  type="text"
                  placeholder="e.g. Splunk"
                  className="w-full bg-transparent border-none outline-none text-[#5B6670] text-sm font-normal font-['Manrope'] placeholder:text-[#5B6670]"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Business Email */}
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-2">
            <label className="text-[#0A2029] text-sm font-bold font-['Manrope']">
              Business Email *
            </label>
            <div className="self-stretch h-11 px-4 bg-[#F7F5F0] rounded-lg outline outline-1 outline-offset-[-1px] outline-[#0A2029]/10 inline-flex justify-start items-center">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-transparent border-none outline-none text-[#5B6670] text-sm font-normal font-['Manrope'] placeholder:text-[#5B6670]"
              />
            </div>
          </div>

          {/* Row 3: Data Scope & Target Controls */}
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-2">
            <label className="text-[#0A2029] text-sm font-bold font-['Manrope']">
              Data Scope &amp; Target Controls
            </label>
            <div className="self-stretch px-4 py-3 bg-[#F7F5F0] rounded-lg outline outline-1 outline-offset-[-1px] outline-[#0A2029]/10 inline-flex justify-start items-start">
              <textarea
                placeholder="Describe the security logs, API queries, or compliance controls this integration must map..."
                rows={3}
                className="w-full bg-transparent border-none outline-none text-[#5B6670] text-sm font-normal font-['Manrope'] placeholder:text-[#5B6670] resize-none"
              />
            </div>
          </div>

          {/* Row 4: Checkbox / Terms Agreement */}
          <div className="self-stretch inline-flex justify-start items-center gap-2 cursor-pointer">
            <div className="w-3.5 h-3.5 bg-[#C44242] rounded-[3px] flex-shrink-0" />
            <span className="text-[#5B6670] text-xs font-normal font-['Manrope']">
              I agree to the Zoiko Shield privacy policy.
            </span>
          </div>

          {/* Submit Button */}
          <button className="self-stretch py-3 bg-[#C44242] hover:bg-[#b03a3a] transition-colors rounded-lg inline-flex justify-center items-center cursor-pointer">
            <span className="text-white text-sm font-bold font-['Manrope']">
              Submit Connector Request
            </span>
          </button>
        </div>

        {/* Right Confirmation Mock Card */}
        <div className="w-[620px] self-stretch p-8 bg-[#0A2029] rounded-[20px] inline-flex flex-col justify-start items-start gap-5 shadow-[0px_4px_16px_0px_rgba(11,37,48,0.03)]">
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-1">
            <span className="text-[#8FD9C8] text-xs font-bold font-['JetBrains_Mono'] uppercase">
              REQUEST CONFIRMATION MOCK
            </span>
            <h3 className="text-white text-2xl font-extrabold font-['Hanken_Grotesk']">
              Weekly Pipeline Backlog
            </h3>
          </div>
          <p className="self-stretch text-white/70 text-sm font-normal font-['Manrope'] leading-5">
            Your request automatically initiates a tracking hash inside our
            verification matrix. Status changes are communicated transparently
            in real time.
          </p>
          <div className="self-stretch p-4 bg-white/5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-2">
            <div className="self-stretch inline-flex justify-between items-start">
              <span className="text-white/40 text-xs font-normal font-['JetBrains_Mono']">
                PIPELINE-REF-ID
              </span>
              <span className="text-[#8FD9C8] text-xs font-normal font-['JetBrains_Mono']">
                0x9F4B-ACTIVE
              </span>
            </div>
            <div className="self-stretch inline-flex justify-between items-start">
              <span className="text-white/40 text-xs font-normal font-['JetBrains_Mono']">
                PRIORITY STATUS
              </span>
              <span className="text-white text-xs font-normal font-['JetBrains_Mono']">
                Review queue (estimated 3 days)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
