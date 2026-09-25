import React from "react";

export default function NineStagesNoInventedResponseTimePromisesSection() {
  const stages = [
    {
      title: "Received",
      description: "Entered the security queue",
    },
    {
      title: "Triage",
      description: "Scope, reproducibility, risk check",
    },
    {
      title: "Needs info",
      description: "Reporter input required",
    },
    {
      title: "Validated",
      description: "Issue reproduced/confirmed",
    },
    {
      title: "Remediating",
      description: "Owner assigned, fix underway",
    },
    {
      title: "Release coordination",
      description: "Fix staged/monitored",
    },
    {
      title: "Resolved",
      description: "Considered remediated",
    },
    {
      title: "Disclosure pending",
      description: "Advisory being coordinated",
    },
    {
      title: "Close",
      description: "With stated",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            WHAT HAPPENS NEXT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Nine stages — no invented response-time promises
          </h1>
        </div>

        {/* Stages Container (Horizontal Scroll on Mobile / Flex Grid on Desktop) */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full bg-[#F6F1E6] border border-[#DCD6C8] p-6 md:p-8 shadow-sm overflow-x-auto"
        >
          <div className="grid grid-cols-3 lg:grid-cols-9 gap-4 min-w-[900px] lg:min-w-0">
            {stages.map((stage, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-2 relative ${
                  index !== stages.length - 1
                    ? "lg:border-r lg:border-[#EAE4D7]"
                    : ""
                }`}
              >
                <h3 className="text-xs font-bold text-[#0b1329] uppercase tracking-wider mb-2">
                  {stage.title}
                </h3>
                <p className="text-[12px] mr-4 text-gray-600 font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
