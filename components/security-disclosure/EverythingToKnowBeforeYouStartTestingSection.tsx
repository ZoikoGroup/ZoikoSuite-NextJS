import React from "react";

export default function EverythingToKnowBeforeYouStartTestingSection() {
  const cards = [
    {
      title: "What we want",
      description:
        "Reproducible security weaknesses affecting listed ZoikoSuite assets or supported integrations.",
    },
    {
      title: "Check scope first",
      description:
        "Search assets and scope status before testing. If uncertain, ask before high-risk testing.",
    },
    {
      title: "Protect people and data",
      description:
        "Use the minimum access needed to demonstrate impact; stop if unexpected sensitive data appears.",
    },
    {
      title: "Keep services available",
      description:
        "No destructive testing, denial of service, unsafe automation, persistence, or disruptive load unless explicitly authorized.",
    },
    {
      title: "Report securely",
      description:
        "Use the approved form/channel and encrypted attachment path for sensitive artifacts.",
    },
    {
      title: "Coordinate disclosure",
      description:
        "Give Product Security a reasonable opportunity to validate and remediate before public technical disclosure.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            RESEARCHER AT-A-GLANCE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Everything to know before you start testing
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "12px" }}
              className="bg-white border border-[#DCD6C8] p-8 flex flex-col justify-start shadow-sm"
            >
              <h2 className="text-base font-semibold text-[#0b1329] tracking-tight mb-3">
                {card.title}
              </h2>
              <p className="text-gray-600 font-light leading-relaxed text-[15px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
