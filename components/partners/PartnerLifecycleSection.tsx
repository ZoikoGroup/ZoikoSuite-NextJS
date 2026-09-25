import React from "react";

const stages = [
  { number: "1", title: "Inquiry", status: "Never public" },
  { number: "2", title: "Qualification", status: "Never public" },
  { number: "3", title: "Diligence", status: "Never public" },
  { number: "4", title: "Contracting", status: "Never public" },
  { number: "5", title: "Enablement", status: "Public only if approved" },
  { number: "6", title: "Active", status: "Eligible for directory" },
  { number: "7", title: "Limited", status: "Clear limitation shown" },
  { number: "8", title: "Suspended", status: "Unpublished immediately" },
];

export default function PartnerLifecycleSection() {
  return (
    <section className="w-full bg-[#081829] py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <span className="text-[#C8A24A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
          PARTNER LIFECYCLE
        </span>

        <h2 className="text-3xl md:text-[32px] font-serif font-bold text-white leading-tight tracking-tight max-w-3xl">
          <span className="block whitespace-normal lg:whitespace-nowrap">
            From inquiry to active relationship &mdash; governed at
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            every stage
          </span>
        </h2>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-10">
          {stages.map((stage, index) => (
            <div
              key={stage.number}
              className={`flex flex-col items-center text-center gap-1.5 px-1 pt-3.5 pb-4 ${
                index < stages.length - 1
                  ? "lg:border-r lg:border-white/15"
                  : ""
              }`}
            >
              <span className="text-[#C8A24A] text-lg font-serif font-bold leading-7">
                {stage.number}
              </span>
              <span className="text-white text-xs font-bold leading-5 whitespace-nowrap">
                {stage.title}
              </span>
              <span className="text-[#AEBBD4] text-[11px] lg:text-xs font-normal leading-4 whitespace-nowrap">
                {stage.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
