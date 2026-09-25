import React from "react";

export default function CookiePolicySection() {
  const cards = [
    {
      title: "Strictly Necessary",
      status: "ALWAYS ACTIVE",
      badgeBg: "bg-emerald-100 text-emerald-800",
    },
    {
      title: "Functional / Preferences",
      status: "STATUS: [ ON / OFF ]",
      badgeBg: "bg-[#F6F1E6] text-[#0b1329] border border-[#DCD6C8]",
    },
    {
      title: "Analytics / Measurement",
      status: "STATUS: [ ON / OFF ]",
      badgeBg: "bg-[#F6F1E6] text-[#0b1329] border border-[#DCD6C8]",
    },
    {
      title: "Advertising / Marketing",
      status: "STATUS: [ ON / OFF / N/A ]",
      badgeBg: "bg-[#F6F1E6] text-[#0b1329] border border-[#DCD6C8]",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#FBFAF7] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-10">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            COOKIE POLICY
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Understand and control cookies and similar technologies.
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-3xl font-light leading-relaxed text-[16.5px]">
            ZoikoSuite uses verified storage and access technologies to operate,
            secure, remember preferences, measure, and — only where applicable
            and permitted — support marketing or advertising. Your available
            choices depend on the technology, purpose, and applicable privacy
            rules.
          </p>
        </div>

        {/* 4-Column Grid Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-6 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-center text-center"
            >
              <h3 className="text-base font-semibold tracking-tight text-[#0b1329] mb-4">
                {card.title}
              </h3>

              <div
                className={`px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wider ${card.badgeBg}`}
              >
                {card.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
