import React from "react";

export default function PlatformOperationsSection() {
  const roles = [
    {
      title: "Auditor",
      description: "Read-only access to SHA-256 evidence logs.",
    },
    {
      title: "Organization Admin",
      description: "Full write capability and secret escrows.",
    },
    {
      title: "Compliance Manager",
      description: "Control mapping validation and framework rules.",
    },
  ];

  return (
    <div className="self-stretch px-20 py-12 bg-[#F0EDE6] inline-flex flex-col justify-start items-start gap-8 w-full max-w-[1440px] mx-auto">
      {/* Section Title */}
      <h2 className="text-[#0A2029] text-2xl font-extrabold font-['Hanken_Grotesk']">
        Platform Operations &amp; Access Controls
      </h2>

      {/* Main Container for Cards */}
      <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Card: Simulated Platform States */}
        <div className="w-full max-w-[624px] p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#123B4C]/10 inline-flex flex-col justify-start items-start gap-4 shadow-[0px_4px_16px_0px_rgba(11,37,48,0.03)]">
          <h3 className="text-[#0A2029] text-lg font-extrabold font-['Hanken_Grotesk']">
            Simulated Platform States
          </h3>

          {/* Loading State Row */}
          <div className="self-stretch p-3 bg-[#F7F5F0] rounded-lg inline-flex justify-between items-center">
            <span className="text-[#0A2029] text-sm font-bold font-['Manrope']">
              Loading State (Mock Skeleton)
            </span>
            <div className="inline-flex justify-start items-start gap-1.5 animate-pulse">
              <div className="w-8 h-3 bg-[#123B4C]/10 rounded-sm" />
              <div className="w-16 h-3 bg-[#123B4C]/10 rounded-sm" />
            </div>
          </div>

          {/* No Results Found State Row */}
          <div className="self-stretch p-3 bg-[#F7F5F0] rounded-lg inline-flex justify-between items-center">
            <span className="text-[#0A2029] text-sm font-bold font-['Manrope']">
              No Results Found State
            </span>
            <span className="text-[#C44242] text-xs font-normal font-['JetBrains_Mono']">
              Try broad keywords
            </span>
          </div>

          {/* Rate Limited / Expired Connection Row */}
          <div className="self-stretch p-3 bg-[#FBEFEF] rounded-lg outline outline-1 outline-offset-[-1px] outline-[#EFCFCF] inline-flex justify-between items-center">
            <span className="text-[#9E2A2B] text-sm font-bold font-['Manrope']">
              Rate Limited / Expired Connection
            </span>
            <span className="text-[#9E2A2B] text-xs font-bold font-['JetBrains_Mono'] tracking-wide">
              RE-AUTH REQUIRED
            </span>
          </div>
        </div>

        {/* Right Card: Role Authorization Directory */}
        <div className="w-full max-w-[624px] p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#123B4C]/10 inline-flex flex-col justify-start items-start gap-5 shadow-[0px_4px_16px_0px_rgba(11,37,48,0.03)]">
          <h3 className="text-[#0A2029] text-lg font-extrabold font-['Hanken_Grotesk']">
            Role Authorization Directory
          </h3>

          {roles.map((role, index) => (
            <div
              key={index}
              className="self-stretch flex flex-col justify-start items-start gap-1"
            >
              <span className="text-[#0A2029] text-sm font-bold font-['Manrope']">
                {role.title}
              </span>
              <span className="text-[#5B6670] text-xs font-normal font-['Manrope']">
                {role.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
