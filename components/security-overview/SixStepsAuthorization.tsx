import React from "react";
import { ArrowRight } from "lucide-react";

const stepsData = [
  {
    step: "STEP 01",
    title: "Request received",
    description:
      "No implicit trust from network location, VPN or prior session.",
    isDeny: false,
  },
  {
    step: "STEP 02",
    title: "Principal authenticated",
    description: "Human or workload identity established for this request.",
    isDeny: false,
  },
  {
    step: "STEP 03",
    title: "Context resolved",
    description:
      "Entity, jurisdiction, data classification and effective policy version.",
    isDeny: false,
  },
  {
    step: "STEP 04",
    title: "Policy decision",
    description:
      "Role, attribute, delegation, limit and segregation evaluated together.",
    isDeny: false,
  },
  {
    step: "STEP 05",
    title: "Deny or step up",
    description:
      "A denial is a governed outcome with a reason — not a system error.",
    isDeny: true,
  },
  {
    step: "STEP 06",
    title: "Decision recorded",
    description:
      "Allow and deny both produce an evidence record with actor and basis.",
    isDeny: false,
  },
];

export default function SixStepsAuthorization() {
  return (
    <section className="w-full bg-[#08222F] py-20 px-6 font-sans text-white">
      {/* Container with max-w-6xl constraint */}
      <div className="max-w-6xl mx-auto">
        {/* Top Header Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Column: Eyebrow and Main Heading */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                ZERO TRUST AND REQUEST-TIME AUTHORIZATION
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.1]">
              Six steps, and a deny path that is not an error
            </h2>
          </div>

          {/* Right Column: Description Text */}
          <div className="lg:col-span-5">
            <p className="text-[#93A2B8] text-[15px] leading-relaxed">
              Authorization happens per request. Network position grants
              nothing, and a prior successful request authorizes nothing later.
            </p>
          </div>
        </div>

        {/* Steps Sequence Grid with Connecting Arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
          {stepsData.map((item, index) => {
            const isDenyCard = item.isDeny;
            return (
              <div key={index} className="relative flex flex-col">
                {/* White Card */}
                <div
                  className={`bg-white rounded-2xl p-5 flex flex-col justify-between h-full shadow-lg transition-transform duration-200 hover:-translate-y-1 relative z-10 ${
                    isDenyCard
                      ? "border-2 border-[#993333]"
                      : "border border-[#E5E7EB]"
                  }`}
                >
                  <div>
                    {/* Step tag */}
                    <div className="text-[10px] border border-[#DBE3E8] bg-white rounded-[5px] p-2 font-mono font-bold tracking-wider text-[#6A5620] mb-3">
                      {item.step}
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`text-[15px] font-bold mb-2 leading-snug ${
                        isDenyCard ? "text-[#993333]" : "text-[#111827]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p className="text-[12px] text-[#4B5563] leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>

                {/* Connecting Arrow between cards */}
                {index < stepsData.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center absolute -right-3 top-1/4 -translate-y-1/2 z-20 text-[#C9B07A] opacity-75">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
