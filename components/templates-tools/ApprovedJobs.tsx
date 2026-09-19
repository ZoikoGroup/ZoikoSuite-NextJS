"use client";

import React from "react";

const jobs = [
  {
    title: "Plan an implementation",
    description:
      "Structure scope, sequencing, dependencies and owners before committing to a delivery approach.",
  },
  {
    title: "Assess readiness",
    description:
      "Evaluate whether the prerequisites for a governed change are actually in place.",
  },
  {
    title: "Build a business case",
    description:
      "Assemble the qualitative and structural basis for an investment decision.",
  },
  {
    title: "Design governance",
    description:
      "Work through authority, segregation, obligations and evidence for a specific workflow.",
  },
  {
    title: "Prepare for diligence",
    description:
      "Organise the security, privacy and compliance questions a review will raise.",
  },
  {
    title: "Drive adoption",
    description:
      "Plan enablement, role readiness and change communication across affected teams.",
  },
];

export default function ApprovedJobs() {
  return (
    <section className="w-full bg-[#F7F5F0] py-28 px-6 md:px-12 lg:px-20 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full mb-12">
          {/* Text Content */}
          <div className="flex flex-col flex-1">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[1.5px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-xs font-medium font-['JetBrains_Mono'] uppercase leading-5 tracking-widest">
                Start with the task
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-5xl font-semibold font-['Archivo'] leading-[49.28px]">
              Six approved jobs
            </h2>
          </div>
          
          <div className="flex-1">
            <p className="text-[#4B5563] text-xl font-normal font-['Archivo'] leading-8 max-w-xl">
              Task taxonomy is approved and published. Utility counts are<br/>drawn from the registry, so each currently reads zero rather than a<br/>placeholder number.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-tr-xl rounded-br-xl border-l-4 border-l-[#D4AF37] border border-[#E5E7EB] p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <h3 className="text-xs font-bold font-['Archivo'] leading-5 text-[#111827] mb-2">
                  {job.title}
                </h3>
                <p className="text-xs font-normal font-['Archivo'] leading-4 text-[#4B5563]">
                  {job.description}
                </p>
              </div>
              <div>
                <span className="text-[8.50px] font-normal font-['JetBrains_Mono'] uppercase leading-3 tracking-wide text-[#6B7280]">
                  0 utilities available
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
