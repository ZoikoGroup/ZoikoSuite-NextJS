import React from "react";

export default function SpecificPurposesNotBusinessPurposesSection() {
  const cards = [
    {
      title: "Provide and secure your account",
      linkedCategories:
        "Linked categories: account & identity, usage & service data.",
      legalBasis: "Legal basis: [ counsel-approved ]",
      automatedProcessing: "Automated processing: No",
    },
    {
      title: "Deliver customer support",
      linkedCategories: "Linked categories: support & communications.",
      legalBasis: "Legal basis: [ counsel-approved ]",
      automatedProcessing: "Automated processing: No",
    },
    {
      title: "Improve and secure the platform",
      linkedCategories: "Linked categories: usage & service data.",
      legalBasis: "Legal basis: [ counsel-approved ]",
      automatedProcessing: "Automated processing: Flagged if applicable",
    },
    {
      title: "Communicate about your account",
      linkedCategories:
        "Linked categories: account & identity, communications preferences.",
      legalBasis: "Legal basis: [ counsel-approved ]",
      automatedProcessing: "Automated processing: No",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            HOW AND WHY WE USE PERSONAL DATA
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Specific purposes, not &quot;business purposes&quot;
          </h1>
        </div>

        {/* 2x2 Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="w-full p-8 border border-[#DCD6C8] bg-white shadow-sm flex flex-col items-start relative"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#0b1329] mb-3">
                {card.title}
              </h3>

              <p className="text-gray-600 font-light leading-relaxed text-[15px] mb-6">
                {card.linkedCategories}
              </p>

              <div className="w-full pt-4 border-t border-[#DCD6C8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-500 font-light">
                <span>{card.legalBasis}</span>
                <span>{card.automatedProcessing}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
