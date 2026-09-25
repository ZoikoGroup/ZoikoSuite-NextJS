import React from "react";

export default function DeveloperAndIntegrationLayerSection() {
  const cards = [
    {
      title: "Build",
      description:
        "APIs, webhooks, and SDK patterns connect approved Zoiko technology capabilities to enterprise systems. Only currently documented interfaces are shown.",
    },
    {
      title: "Test",
      description:
        "Sandbox and test environments may be available by platform: Available, Preview, Coming soon, or Contact us.",
    },
    {
      title: "Operate",
      description:
        "Identity, access controls, usage controls, observability, and lifecycle management belong to the operating model.",
    },
    {
      title: "Integrate",
      description:
        "ZoikoSuite-specific integration work routes to ZoikoSuite integrations; broader technology intent routes to official Zoiko Tech developer resources.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            DEVELOPER & INTEGRATION LAYER
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Build, test, operate, integrate
          </h1>
        </div>

        {/* 2x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-center min-h-[160px] relative"
            >
              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#0b1329] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-[16.5px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
