import React from "react";

interface DisclosureItem {
  code: string;
  title: string;
}

export default function CapabilityDisclosuresSection() {
  const disclosures: DisclosureItem[] = [
    {
      code: "CL-01",
      title: "Define Scope & Applicability",
    },
    {
      code: "CL-02",
      title: "Assign Owners & Accountability",
    },
    {
      code: "CL-03",
      title: "Review Controls & Policies",
    },
    {
      code: "CL-04",
      title: "Manage Exceptions & Remediation",
    },
    {
      code: "CL-05",
      title: "Preserve Evidence & Review History",
    },
    {
      code: "CL-06",
      title: "Report Oversight & Escalation",
    },
  ];

  return (
    <section className="w-full bg-[#F6F5F1] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#B49347] uppercase mb-3">
            SIX CAPABILITY DISCLOSURES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.15] mb-6">
            Keep the source <br />
            beside the step.
          </h2>

          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed max-w-md">
            Public examples are read-only concepts. Real administrative actions
            require verified product support and named authority.
          </p>
        </div>

        {/* Right Column: Disclosure Cards Stack */}
        <div className="lg:col-span-7 flex flex-col gap-4 w-full">
          {disclosures.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-black/5 px-6 py-5 shadow-sm flex items-center gap-6 transition-all hover:shadow-md"
            >
              {/* Bullet / Dot Indicator */}
              <div className="w-2 h-2 rounded-full bg-[#1F2421] flex-shrink-0" />

              {/* Code */}
              <span className="text-xs sm:text-sm font-bold text-[#B49347] tracking-wider w-14 flex-shrink-0">
                {item.code}
              </span>

              {/* Title */}
              <span className="text-base sm:text-lg font-bold text-[#1F2421] tracking-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
