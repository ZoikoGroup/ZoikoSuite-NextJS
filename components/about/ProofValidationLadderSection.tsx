import React from "react";

export default function ProofValidationLadderSection() {
  const ladderItems = [
    {
      number: "01",
      title: "Architecture proof",
      description:
        "Published diagrams, control flows, service/data ownership, security and evidence briefs.",
    },
    {
      number: "02",
      title: "Product proof",
      description:
        "Working demos, screenshots, workflow recordings, release-status documentation.",
    },
    {
      number: "03",
      title: "Validation proof",
      description:
        "Shadow-mode equivalence, migration integrity, test coverage, control test outcomes.",
    },
    {
      number: "04",
      title: "Customer proof",
      description:
        "Only named case studies, verified measures, references, and approved testimonials.",
    },
    {
      number: "05",
      title: "Independent proof",
      description:
        "Only verified certifications, attestations, penetration-test summaries, or audit reports.",
    },
  ] as const;

  const isList = [
    {
      isText: "Governed Business Operations Intelligence",
      isNotText: "A generic ERP rebrand",
    },
    {
      isText: "A governance-first operating layer across business domains",
      isNotText: "A dashboard-only analytics product",
    },
    {
      isText:
        "Built around policy, authority, entity, jurisdiction, evidence, and source truth",
      isNotText: "A collection of disconnected point features",
    },
    {
      isText: "Published with explicit proof and availability status",
      isNotText:
        "A marketing page that treats roadmap as current certification",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            PROOF & VALIDATION LADDER
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-[32px] font-serif font-bold text-[#0b1329] leading-[1.15] tracking-tight">
            Buyer-readable assurance, honestly labeled
          </h1>
        </div>

        {/* Ladder Cards List */}
        <div className="w-full flex flex-col gap-4 mb-20">
          {ladderItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:px-8 md:py-6 shadow-sm border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-6 md:w-4/12">
                <span className="text-[#A8843A] font-serif text-xl md:text-2xl font-medium">
                  {item.number}
                </span>
                <h3 className="text-[#0b1329] text-base md:text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>
              <div className="md:w-8/12">
                <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section (ZoikoSuite Is vs Is Not) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ZoikoSuite Is Column */}
          <div className="flex flex-col">
            <h3 className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-6 pb-3 border-b border-gray-300">
              ZOIKOSUITE IS
            </h3>
            <div className="flex flex-col">
              {isList.map((item, index) => (
                <div
                  key={index}
                  className="py-5 border-b border-gray-200 text-[#0b1329] text-base font-medium"
                >
                  {item.isText}
                </div>
              ))}
            </div>
          </div>

          {/* ZoikoSuite Is Not Column */}
          <div className="flex flex-col">
            <h3 className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-6 pb-3 border-b border-gray-300">
              ZOIKOSUITE IS NOT
            </h3>
            <div className="flex flex-col">
              {isList.map((item, index) => (
                <div
                  key={index}
                  className="py-5 border-b border-gray-200 text-gray-600 text-base font-light"
                >
                  {item.isNotText}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
