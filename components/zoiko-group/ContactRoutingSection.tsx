import React from "react";

export default function ContactRoutingSection() {
  const cards = [
    {
      title: "ZoikoSuite enterprise evaluation",
      description:
        "Product, architecture, deployment, and procurement discussion.",
    },
    {
      title: "ZoikoSuite support",
      description: "Existing customers and technical support.",
    },
    {
      title: "Corporate enquiry",
      description:
        "Questions about Group structure or public corporate information.",
    },
    {
      title: "Investor Relations",
      description: "Institutional investors and long-term capital partners.",
    },
    {
      title: "Press & media",
      description: "Media enquiries, interviews, press assets.",
    },
    {
      title: "Careers",
      description:
        "Candidates and recruiting questions; employer identified per role.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#EFE8D8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            CONTACT ROUTING
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Find the right Zoiko team.
          </h1>
        </div>

        {/* 3x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start justify-center relative"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-3">
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
