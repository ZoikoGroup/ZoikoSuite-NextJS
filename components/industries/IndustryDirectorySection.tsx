"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IndustryCard {
  title: string;
  description: string;
  category: string;
  linkText: string;
  linkHref: string;
}

const filterTabs = [
  "All",
  "Regulated operations",
  "Multi-entity / cross-border",
  "High-workforce complexity",
  "Asset / field operations",
  "Public accountability",
];

const industryCards: IndustryCard[] = [
  {
    title: "Financial Service",
    description:
      "Govern finance, tax, workforce, legal, compliance, and evidence across complex financial-service operating models.",
    category: "Regulated operations",
    linkText: "Explore Financial Service",
    linkHref: "/financial-service",
  },
  {
    title: "Banking",
    description:
      "Coordinate governed business operations around banking cores, entity structures, controls, approvals, and evidence.",
    category: "Regulated operations",
    linkText: "Explore Banking",
    linkHref: "/banking",
  },
  {
    title: "Insurance",
    description:
      "Govern finance, workforce, legal, vendor, compliance, and evidence operations around insurance core systems.",
    category: "Regulated operations",
    linkText: "Explore Insurance",
    linkHref: "/insurance",
  },
  {
    title: "Healthcare",
    description:
      "Coordinate governed business operations around healthcare delivery systems with privacy, workforce, vendor, finance, and evidence context.",
    category: "Regulated operations",
    linkText: "Explore Healthcare",
    linkHref: "/healthcare",
  },
  {
    title: "Telecommunication & MVNOs",
    description:
      "Govern finance, workforce, contracts, tax, partner, compliance, and evidence operations around telecom/BSS/OSS ecosystems.",
    category: "High-workforce complexity",
    linkText: "Explore Telecommunication & MVNOs",
    linkHref: "/telecom-mvnos",
  },
  {
    title: "Manufacturing",
    description:
      "Connect governed corporate operations across finance, workforce, procurement, contracts, obligations, and evidence around ERP/MES/SCM estates.",
    category: "Asset / field operations",
    linkText: "Explore Manufacturing",
    linkHref: "/manufacturing",
  },
  {
    title: "Energy & Utilities",
    description:
      "Govern business operations, workforce, procurement, finance, obligations, and evidence around asset and utility operating systems.",
    category: "Asset / field operations",
    linkText: "Explore Energy & Utilities",
    linkHref: "/energy-utilities",
  },
  {
    title: "Retail & Commerce",
    description:
      "Coordinate multi-entity finance, workforce, tax, contracts, compliance, and evidence around commerce/POS platforms.",
    category: "Multi-entity / cross-border",
    linkText: "Explore Retail & Commerce",
    linkHref: "/retail-commerce",
  },
  {
    title: "Government & Public Sector",
    description:
      "Support governed finance, workforce, procurement, authority, obligations, and evidence with public-accountability and residency context.",
    category: "Public accountability",
    linkText: "Explore Government & Public Sector",
    linkHref: "/government-public-sector",
  },
];

export default function IndustryDirectorySection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCards =
    activeTab === "All"
      ? industryCards
      : industryCards.filter(
          (card) =>
            card.category === activeTab ||
            (activeTab === "Multi-entity / cross-border" &&
              card.title === "Retail & Commerce"),
        );

  return (
    <section
      id="explore"
      className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-12">
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
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-4">
            Find the operating context closest to yours.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-mono">
            Approved public labels and navigation order — this is a routing
            surface, not a feature catalogue.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-12 w-full">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium transition-all border ${
                  isActive
                    ? "bg-[#08222F] text-white border-[#08222F]"
                    : "bg-white text-gray-700 border-[#D9D3C7]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* 3-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#C59B3F]"
            >
              <div>
                {/* Title */}
                <h3 className="text-base font-bold text-[#08222F] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed font-mono mb-6">
                  {item.description}
                </p>
              </div>

              {/* Link Action */}
              <div>
                <Link
                  href={item.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#08222F] hover:text-[#C59B3F] transition-colors group"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59B3F] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
