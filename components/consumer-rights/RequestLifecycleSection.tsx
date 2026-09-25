import React from "react";

export default function RequestLifecycleSection() {
  const steps = [
    {
      title: "Intake",
      description: "Normalized, dedup checked, routed",
    },
    {
      title: "Verification",
      description: "Identity/authority confidence reached",
    },
    {
      title: "Applicability review",
      description: "Right, scope, exemptions resolved",
    },
    {
      title: "Discovery",
      description: "Relevant systems identified",
    },
    {
      title: "Fulfillment",
      description: "Action executed or exception documented",
    },
    {
      title: "QA",
      description: "Completeness & disclosure safety",
    },
    {
      title: "Delivery",
      description: "Secure response delivered",
    },
    {
      title: "Closure",
      description: "Audit retained; temp evidence deleted",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            REQUEST LIFECYCLE & TIMING LOGIC
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Operational state machine, from intake to closure
          </h1>
        </div>

        {/* State Machine Container */}
        <div
          style={{ borderRadius: "14px" }}
          className="w-full border border-[#DCD6C8] p-6 md:p-8 shadow-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 divide-y sm:divide-y-0"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 pr-2 pt-2 border-r border-[#DCD6C8]`}
            >
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-xs font-bold text-center text-[#0b1329] tracking-tight uppercase">
                  {step.title}
                </h2>
              </div>
              <p className="text-gray-600 text-center font-light leading-relaxed text-[13px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
