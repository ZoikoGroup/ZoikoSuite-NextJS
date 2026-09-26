import React from 'react';

export default function GpcSignalExperienceSection() {
  const steps = [
    { title: "1. Detect", desc: <>Find requested signal in request/client context</> },
    { title: "2. Resolve", desc: <>Determine applicable scope</> },
    { title: "3. Enforce", desc: <>Set first-party state; signal mapped vendors</> },
    { title: "4. Persist", desc: <>Only to lawful/technically appropriate scope</> },
    { title: "5. Confirm", desc: <>Show durable, accessible status</> },
    { title: "6. Audit", desc: <>Log privacy-minimized telemetry</> },
  ];

  return (
    <div className="relative w-full flex flex-col items-center bg-white pt-[47px] pb-[48px] px-4 md:px-[32px] lg:px-[130px]">
      <div className="w-full max-w-[1180px] flex flex-col items-start gap-[11px]">

        <div className="flex flex-col gap-[11px] w-full">
          {/* Header */}
          <div className="flex flex-col items-start gap-[2px] w-full">
            <p className="font-['Inter'] font-bold text-[11px] text-[#a8843a] tracking-[1.54px] uppercase leading-[17.6px]">
              GLOBAL PRIVACY CONTROL & PREFERENCE-SIGNAL EXPERIENCE
            </p>
            <h2 className="font-['Georgia'] font-bold text-[23px] text-[#16223a] tracking-[-0.23px] leading-[36.8px] max-w-[761px]">
              A technical input mapped to an auditable privacy decision — not a decorative badge
            </h2>
          </div>

          {/* GPC Status Card */}
          <div className="w-full bg-white border border-[#dcd6c8] rounded-[10px] p-6 lg:p-8 flex flex-col gap-2 mt-4">
            <h5 className="font-['Inter'] font-bold text-[15px] text-[#16223a] leading-[24px]">
              Recommended GPC status copy
            </h5>
            <p className="font-['Inter'] font-normal text-[13px] text-[#4b5872] leading-[20.8px]">
              &quot;We detected a browser privacy signal requesting that personal information not be sold or shared. We will treat qualifying signals as an opt-out request where required by applicable law.  
              Your signal may apply only to this browser or device unless we can lawfully associate it with a broader profile.&quot;
            </p>
          </div>
        </div>

        {/* Steps Flow */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-t lg:border-t-0 lg:border-b-0 border-[#dcd6c8] lg:border-transparent">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center gap-1 py-4 px-2 ${index !== steps.length - 1 ? "lg:border-r border-[#dcd6c8]" : ""
                }`}
            >
              <h6 className="font-['Inter'] font-bold text-[12px] text-[#16223a] leading-[19.2px]">
                {step.title}
              </h6>
              <p className="font-['Inter'] font-normal text-[10.5px] text-[#4b5872] leading-[16.8px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}