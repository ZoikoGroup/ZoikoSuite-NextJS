import React from "react";

export default function BrowseByTopicSection() {
  const cards = [
    {
      title: "Product & Platform",
      description:
        "Material platform, module, integration, deployment, and availability announcements.",
    },
    {
      title: "Trust & Governance",
      description:
        "Security, privacy, Responsible AI, evidence, accessibility, certification/readiness, policy, residency.",
    },
    {
      title: "Company",
      description:
        "Institutional company, leadership, operating-model, location, and organizational announcements.",
    },
    {
      title: "Partners & Ecosystem",
      description:
        "Approved partner, integration, implementation, or alliance announcements.",
    },
    {
      title: "Research & Insights",
      description:
        "Approved research, benchmarks, technical papers, executive insights.",
    },
    {
      title: "Events & Speaking",
      description: "Approved conferences, webinars, keynotes, press briefings.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            BROWSE BY TOPIC
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Let different audiences self-route
          </h1>
        </div>

        {/* 3x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-center min-h-[180px] relative"
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
