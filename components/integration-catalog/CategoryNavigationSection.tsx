import React from "react";

export default function CategoryNavigationSection() {
  const categories = [
    {
      title: "Microsoft Ecosystem",
      count: "12",
      description:
        "Sentinel, Defender, Azure AD & Active Directory integration",
      active: true,
      // Icon: Shield / Check Circle
      icon: (
        <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
      ),
    },
    {
      title: "Cloud Platforms",
      count: "8",
      description: "Native cloud telemetry, IAM & configuration logs",
      active: false,
      // Icon: Cloud
      icon: (
        <div className="w-5 h-3.5 left-[2px] top-[5px] absolute outline outline-2 outline-offset-[-1px] outline-[#C44242]" />
      ),
    },
    {
      title: "Endpoint & Identity",
      count: "9",
      description: "User lifecycle context & device threat vectors",
      active: false,
      // Icon: User / Profile
      icon: (
        <div className="w-5 h-4 left-[2px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-[#C44242]" />
      ),
    },
    {
      title: "SIEM & Observability",
      count: "6",
      description: "Live event correlation & unified operations data",
      active: false,
      // Icon: Activity / Pulse
      icon: (
        <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-[#C44242]" />
      ),
    },
    {
      title: "Collaboration & Tickets",
      count: "4",
      description: "Slack notifications, Jira boards & incident escalations",
      active: false,
      // Icon: Message / Chat
      icon: (
        <div className="w-5 h-4 left-[2px] top-[3px] absolute outline outline-2 outline-offset-[-1px] outline-[#C44242]" />
      ),
    },
    {
      title: "Data & Evidence",
      count: "3",
      description: "Immutable storage platforms & database audits",
      active: false,
      // Icon: Database / Storage
      icon: (
        <div className="w-4 h-5 left-[3px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-[#C44242]" />
      ),
    },
    {
      title: "Developer & API",
      count: "4",
      description: "GitHub actions, pipeline integrity & SDK webhooks",
      active: false,
      // Icon: Code / Brackets
      icon: (
        <div className="w-5 h-3 left-[2px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-[#C44242]" />
      ),
    },
  ];

  return (
    <div className="self-stretch px-20 py-12 inline-flex flex-col justify-start items-start gap-5 w-full max-w-[1440px] mx-auto">
      {/* Section Title */}
      <div className="justify-start text-slate-900 text-2xl font-extrabold font-['Hanken_Grotesk']">
        Browse by System Tier
      </div>

      {/* Cards Grid Container */}
      <div className="self-stretch inline-flex justify-start items-start gap-4 flex-wrap content-start">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`w-40 h-44 p-4 rounded-xl shadow-[0px_4px_12px_0px_rgba(11,37,48,0.04)] outline outline-1 outline-offset-[-1px] inline-flex flex-col justify-start items-start gap-3 cursor-pointer transition-all ${
              cat.active
                ? "bg-[#0A2029] outline-[#0A2029]"
                : "bg-white outline-[#123B4C]/10 hover:outline-[#123B4C]/30"
            }`}
          >
            {/* Top Row: Exact Icon & Counter Badge Match */}
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="size-6 inline-flex flex-col justify-center items-center overflow-hidden">
                <div className="size-6 relative overflow-hidden">
                  {cat.icon}
                </div>
              </div>
              <div
                className={`px-1.5 py-0.5 rounded-md flex justify-start items-start ${
                  cat.active ? "bg-white/10" : "bg-[#F7F5F0]"
                }`}
              >
                <div
                  className={`justify-start text-xs font-bold font-['JetBrains_Mono'] ${
                    cat.active ? "text-white" : "text-[#0A2029]"
                  }`}
                >
                  {cat.count}
                </div>
              </div>
            </div>

            {/* Bottom Content: Title & Description */}
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div
                className={`justify-start text-sm font-extrabold font-['Hanken_Grotesk'] ${
                  cat.active ? "text-white" : "text-slate-900"
                }`}
              >
                {cat.title}
              </div>
              <div
                className={`self-stretch justify-start text-xs font-normal font-['Manrope'] leading-4 line-clamp-1 ${
                  cat.active ? "text-white/70" : "text-gray-500"
                }`}
              >
                {cat.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
