import React from "react";

interface PathwayCard {
  tag: string;
  title: string;
  description: string;
}

const pathwaysData: PathwayCard[] = [
  {
    tag: "Information",
    title: "Privacy Practices & Policy Questions +",
    description:
      "Understand applicable policy information and request clarification.",
  },
  {
    tag: "Secure request",
    title: "Personal Data Rights Requests +",
    description: "Find the approved privacy rights intake pathway.",
  },
  {
    tag: "Enterprise enquiry",
    title: "Enterprise Privacy & Data Processing +",
    description: "Support enterprise diligence with source-reviewed material.",
  },
  {
    tag: "Preferences",
    title: "Cookies, Preferences & Consent +",
    description: "Locate consent controls and related notices.",
  },
  {
    tag: "Specialist escalation",
    title: "Data Concern, Correction & Complaints +",
    description: "Find an approved escalation path for concerns or complaints.",
  },
  {
    tag: "Dedicated channel",
    title: "Security or Privacy Incident Reporting +",
    description:
      "Keep incident reports separate from ordinary contact enquiries.",
  },
];

export default function PrivacyPathways() {
  return (
    <section id="topic" className="bg-[#F6F5EF] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              START WITH YOUR PURPOSE
            </p>
          </div>

          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Choose the right privacy pathway.
          </h2>

          <p className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed">
            Different requests need different processes. General enquiries
            remain separate from rights requests, complaints, and incidents.
          </p>
        </div>

        {/* 6 Pathways Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathwaysData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              <div>
                {/* Yellow/Beige Highlight Badge */}
                <div className="inline-block bg-[#FDF8E1] text-[#9A7B31] text-[10px] font-bold px-2.5 py-1 rounded mb-4">
                  {card.tag}
                </div>

                {/* Card Title */}
                <h3 className="text-[#1E293B] text-lg font-bold leading-snug mb-3">
                  {card.title}
                </h3>
              </div>

              {/* Card Description */}
              <p className="text-[#64748B] text-xs md:text-sm leading-relaxed mt-2">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
