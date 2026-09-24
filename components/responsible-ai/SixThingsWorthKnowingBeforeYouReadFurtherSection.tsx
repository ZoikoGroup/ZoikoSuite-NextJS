import React from "react";

export default function SixThingsWorthKnowingBeforeYouReadFurtherSection() {
  const cards = [
    {
      title: "Assistive role",
      description:
        "AI supports governed work; it does not silently become the source of truth.",
      tag: "CURRENT / SCOPED",
    },
    {
      title: "Human authority",
      description:
        "Where material review or approval is required, the authorized human/workflow remains responsible for the decision.",
      tag: "CONFIGURATION DEPENDENT",
    },
    {
      title: "Data use",
      description:
        "How prompts, records, and outputs are processed is disclosed through approved privacy/contract/provider sources.",
      tag: "REGISTRY-DRIVEN",
    },
    {
      title: "Transparency",
      description:
        "AI interaction and generated-content disclosures apply where required by feature, role, and jurisdiction.",
      tag: "JURISDICTION DEPENDENT",
    },
    {
      title: "Evidence",
      description:
        "Material AI use should preserve provenance, model/provider context, policy basis, and review outcome as designed.",
      tag: "IMPLEMENTATION-STATUS QUALIFIED",
    },
    {
      title: "Challenge / concern",
      description:
        "Users can report an AI concern; eligible material workflows may expose human review or correction paths.",
      tag: "AVAILABILITY QUALIFIED",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            AI AT A GLANCE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Six things worth knowing before you read further
          </h1>
        </div>

        {/* Grid of Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ borderRadius: "14px" }}
              className="bg-white border border-[#DCD6C8] p-6 shadow-sm flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0b1329] text-base font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-[15.5px]">
                  {card.description}
                </p>
              </div>

              <div>
                <span className="text-[#A8843A] text-[10px] font-semibold tracking-[0.15em] uppercase block">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
