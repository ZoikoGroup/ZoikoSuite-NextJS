"use client";

import React from "react";
import Link from "next/link";

interface SectorCard {
  title: string;
  description: string;
  tags: string[];
  linkText: string;
  linkHref: string;
}

const SECTORS: SectorCard[] = [
  {
    title: "Financial Service",
    description:
      "Regulated financial operations across entities, jurisdictions, obligations and evidence.",
    tags: ["ENTITIES", "AUTHORITY", "EVIDENCE"],
    linkText: "Explore Financial Service",
    linkHref: "/financial-service",
  },
  {
    title: "Banking",
    description:
      "Govern approvals, obligations, vendors, evidence and enterprise operations around banking environments.",
    tags: ["SOD", "OBLIGATIONS", "AUDIT"],
    linkText: "Explore Banking",
    linkHref: "/banking",
  },
  {
    title: "Insurance",
    description:
      "Govern carrier operations, delegated authority, obligations, vendors and evidence around specialist insurance systems.",
    tags: ["AUTHORITY", "OBLIGATIONS", "EVIDENCE"],
    linkText: "Explore Insurance",
    linkHref: "/insurance",
  },
  {
    title: "Healthcare",
    description:
      "Govern administrative, workforce, vendor, financial, contractual and compliance operations in healthcare organizations.",
    tags: ["PRIVACY", "WORKFORCE", "VENDORS"],
    linkText: "Explore Healthcare",
    linkHref: "/healthcare",
  },
  {
    title: "Telecommunication & MVNOs",
    description:
      "Govern multi-market operator business operations, partner obligations, evidence and authority.",
    tags: ["MARKETS", "PARTNERS", "OBLIGATIONS"],
    linkText: "Explore Telecommunication & MVNOs",
    linkHref: "/telecom-mvnos",
  },
  {
    title: "Manufacturing",
    description:
      "Govern enterprise operations across plants, suppliers, contracts, workforce, obligations and evidence.",
    tags: ["PLANTS", "SUPPLIERS", "EVIDENCE"],
    linkText: "Explore Manufacturing",
    linkHref: "/manufacturing",
  },
  {
    title: "Energy & Utilities",
    description:
      "Govern business operations around critical energy and utility environments with clear OT/IT boundaries.",
    tags: ["SITES", "CONTRACTORS", "OBLIGATIONS"],
    linkText: "Explore Energy & Utilities",
    linkHref: "/energy-utilities",
  },
  {
    title: "Retail & Commerce",
    description:
      "Govern entities, stores, channels, suppliers, workforce, approvals, evidence and commercial obligations.",
    tags: ["CHANNELS", "SUPPLIERS", "APPROVALS"],
    linkText: "Explore Retail & Commerce",
    linkHref: "/retail-commerce",
  },
  {
    title: "Government & Public Sector",
    description:
      "Govern administrative operations across agencies, entities, programs, funds, procurement, workforce and records.",
    tags: ["AGENCIES", "FUNDS", "RECORDS"],
    linkText: "Explore Government & Public Sector",
    linkHref: "/government-public-sector",
  },
];

export default function IndustryDirectorySection() {
  return (
    <section
      id="industries"
      className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans"
    >
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                INDUSTRY DIRECTORY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Nine sectors, each with its category boundary
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Every card states what ZoikoSuite is not in that sector. All nine
              sector destinations are now production-ready and fully linked.
            </p>
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector, index) => {
            return (
              <div
                key={index}
                className="rounded-xl p-6 shadow-sm border border-[#0F476A] bg-white flex flex-col justify-between"
                style={{
                  borderTop: "3px solid #0F476A",
                }}
              >
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-[#08222F] mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {sector.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-bold tracking-wider px-2 py-1 rounded bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href={sector.linkHref}
                    className="inline-block bg-[#0F476A] hover:bg-[#0a324b] text-white text-xs font-bold px-4 py-2 rounded transition-colors"
                  >
                    {sector.linkText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
