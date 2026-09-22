import React from "react";
import Image from "next/image";

interface CaseStudy {
  iconSrc: string;
  category: string;
  title: string;
  tags: string[];
  reviewedDate: string;
  borderColor: string;
  tagBgColor: string;
  tagTextColor: string;
  color: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    iconSrc: "/case/icon4.png",
    category: "FINANCIAL SERVICES",
    title: "Reducing audit prep time with evidence-linked workflows",
    tags: ["Evidence & Audit", "Governance"],
    reviewedDate: "REVIEWED AUG 2026",
    borderColor: "border-t-[#0F476A]",
    tagBgColor: "bg-[#EBF3F9]",
    tagTextColor: "text-[#0F476A]",
    color: "border-[#0F476A]",
  },
  {
    iconSrc: "/case/icon5.png",
    category: "INSURANCE",
    title: "Cutting policy exception cycle time in half",
    tags: ["Policy Governance"],
    reviewedDate: "REVIEWED JUL 2026",
    borderColor: "border-t-[#A07A2E]",
    tagBgColor: "bg-[#FAF6ED]",
    tagTextColor: "text-[#A07A2E]",
    color: "border-[#A07A2E]",
  },
  {
    iconSrc: "/case/icon6.png",
    category: "MANUFACTURING",
    title: "Operating across five entities under one governance layer",
    tags: ["Multi-entity Scope"],
    reviewedDate: "REVIEWED JUN 2026",
    borderColor: "border-t-[#0F476A]",
    tagBgColor: "bg-[#EBF3F9]",
    tagTextColor: "text-[#0F476A]",
    color: "border-[#0F476A]",
  },
];

export default function AllCaseStudies() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A07A2E]">
            04 / CATALOG
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-2">
          All case studies
        </h2>

        {/* Subtext info */}
        <p className="text-xs font-mono text-[#6B7280] tracking-wider mb-8">
          11 current case studies
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {caseStudiesData.map((study, index) => (
            <div
              key={index}
              className={`bg-white border ${study.color} border-t-[4px] ${study.borderColor} rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all`}
            >
              <div>
                {/* Image and Category in one line parallelly */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 relative rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={study.iconSrc}
                      alt={`${study.category} Icon`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6B7280]">
                    {study.category}
                  </span>
                </div>

                <h3 className="text-[#111827] font-semibold text-lg leading-snug mb-4">
                  {study.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`bg-[#E8EFF4] border border-[#CFDEE7] text-[#0F476A] text-xs font-medium px-3 py-1 rounded-md`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-[11px] tracking-[0.66px] text-[#5A6D79] uppercase pt-2">
                {study.reviewedDate}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
