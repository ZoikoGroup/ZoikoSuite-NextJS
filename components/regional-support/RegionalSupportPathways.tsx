import React from "react";

interface PathwayCard {
  tag: string;
  title: string;
  description: string;
}

const regionalPathwaysData: PathwayCard[] = [
  {
    tag: "Access",
    title: "Account Access & Sign-In +",
    description:
      "Explain sign-in, role access, recovery, or administrator lockout problems.",
  },
  {
    tag: "Product guidance",
    title: "Platform Usage & Configuration +",
    description:
      "Describe how a page, setting, or operation differs from expectations.",
  },
  {
    tag: "Technical issue",
    title: "Integrations & Technical Issues +",
    description:
      "Describe connection errors or coordination issues with an external system.",
  },
  {
    tag: "Availability",
    title: "Service Availability & Disruptions +",
    description: "Report an observation without assuming a confirmed outage.",
  },
  {
    tag: "Account servicing",
    title: "Billing, Account & Commercial Support +",
    description:
      "Distinguish current-account questions from new purchasing discussions.",
  },
  {
    tag: "General help",
    title: "Regional Routing & General Assistance +",
    description:
      "Find a starting point when you are unsure who owns your request.",
  },
];

export default function RegionalSupportPathways() {
  return (
    <section id="contact" className="bg-[#F6F5EF] py-20 px-6 md:px-12 font-sans">
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
            What do you need help with?
          </h2>

          <p className="text-[#64748B] text-base md:text-lg max-w-2xl leading-relaxed">
            Choose the topic closest to your issue. Support eligibility,
            assignment, and response time require confirmation.
          </p>
        </div>

        {/* 6 Pathways Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionalPathwaysData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Soft Green/Teal Highlight Badge */}
                <div className="inline-block bg-[#E6F4F1] text-[#2C6E67] text-[10px] font-bold px-2.5 py-1 rounded mb-4">
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
