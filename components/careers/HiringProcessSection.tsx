import React from "react";

const steps = [
  {
    number: "1",
    title: "Application review",
    description: "Confirm baseline fit and eligibility, with human ownership.",
  },
  {
    number: "2",
    title: "Recruiter conversation",
    description: "Align on role scope, logistics, and candidate goals.",
  },
  {
    number: "3",
    title: "Hiring manager conversation",
    description: "Explore role ownership, experience, and decision context.",
  },
  {
    number: "4",
    title: "Practical / technical assessment",
    description: "Evaluate job-relevant skills \u2014 format and expected time disclosed upfront.",
  },
  {
    number: "5",
    title: "Panel interviews",
    description: "Assess collaboration, judgment, and domain depth. No hidden gotcha exercises.",
  },
  {
    number: "6",
    title: "Decision & offer",
    description: "Employing entity, compensation, benefits, work model, and start conditions confirmed.",
  },
] as const;

export default function HiringProcessSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="w-full mb-10">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-bold font-['Inter'] leading-4 tracking-widest uppercase mb-3 block">
            HIRING PROCESS
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-[36px] font-serif font-bold text-[#16223A] leading-tight tracking-tight whitespace-nowrap">
            What to expect &mdash; reliability over speed claims
          </h2>
        </div>

        {/* Process Steps */}
        <div className="w-full flex flex-col border-t border-[#DCD6C8]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="w-full border-b border-[#DCD6C8] py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-16"
            >
              {/* Step Number Badge */}
              <div className="shrink-0 w-7 h-7 rounded-full bg-[#16223A] flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {step.number}
                </span>
              </div>

              {/* Step Title */}
              <div className="md:w-[40%]">
                <h3 className="text-[#16223A] text-sm md:text-base font-bold leading-6">
                  {step.title}
                </h3>
              </div>

              {/* Step Description */}
              <div className="flex-1">
                <p className="text-[#4B5872] text-xs md:text-sm font-normal leading-5">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
