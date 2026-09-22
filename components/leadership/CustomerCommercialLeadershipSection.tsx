import React from "react";

export default function CustomerCommercialLeadershipSection() {
  const cards = [
    {
      title: "Enterprise commercial integrity",
      description:
        "Commitments made during the buying process are aligned to actual availability, deployment, and implementation scope.",
    },
    {
      title: "Solution architecture",
      description:
        "Complex enterprise requirements are translated into a governed solution design before commitment.",
    },
    {
      title: "Implementation leadership",
      description:
        "Migration, configuration, validation, change management, and cutover have accountable delivery ownership.",
    },
    {
      title: "Customer outcomes",
      description:
        "A clear path for executive sponsorship, value review, and unresolved risk escalation.",
    },
    {
      title: "Support operations",
      description:
        "Support, incident communication, and service status follow defined operating ownership.",
    },
    {
      title: "Renewal & retention",
      description:
        "Renewal reflects demonstrated value, adoption, service quality, and roadmap fit — not lock-in tactics.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-4xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            CUSTOMER, COMMERCIAL & DELIVERY LEADERSHIP
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[41px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Accountability that continues after the contract is signed
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
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
