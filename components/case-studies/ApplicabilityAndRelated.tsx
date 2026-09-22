import React from "react";

interface ResourceCard {
  category: string;
  title: string;
}

const resourcesData: ResourceCard[] = [
  {
    category: "DOCUMENTATION",
    title: "Configuring approval matrices by policy class",
  },
  {
    category: "EXECUTIVE BRIEFS",
    title: 'What "policy-to-evidence" governance requires',
  },
  {
    category: "TRAINING ACADEMY",
    title: "Evidence & audit practitioner learning path",
  },
  {
    category: "RELATED STORY",
    title: "Cutting policy exception cycle time in half",
  },
] as const;

export default function ApplicabilityAndRelated() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A07A2E]">
            08 / APPLICABILITY & RELATED
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-2">
          Applicability & related resources
        </h2>

        {/* Subtext info */}
        <p className="text-[#4B5563] text-sm md:text-base mb-4">
          A careful takeaway, not a guarantee — &quot;may help&quot; and
          &quot;explore,&quot; never &quot;get the same result.&quot;
        </p>

        {/* Description paragraph */}
        <p className="text-[#4B5563] text-sm md:text-base mb-10 max-w-3xl">
          Organizations managing audit evidence across multiple functions or
          entities may find a similar evidence-linked approach relevant to
          explore for their own operating context.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {resourcesData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#0F476A] border-t-[4px] rounded-2xl p-6 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all"
            >
              <div>
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#5A6D79] block mb-3">
                  {item.category}
                </span>
                <h3 className="text-[#111827] font-semibold text-base leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
