"use client";

import React, { useState } from "react";

interface PathCard {
  tag: string;
  title: string;
  description: string;
}

const challengeCards: PathCard[] = [
  {
    tag: "MODERNIZE OPERATIONS",
    title: "Modernize operations",
    description:
      "Move cross-functional work from disconnected tools and after-the-fact controls into governed workflows.",
  },
  {
    tag: "MULTI-ENTITY OPERATIONS",
    title: "Govern multi-entity operations",
    description:
      "Preserve entity-aware authority, financial/workforce context, policy, and reporting across organizational structures.",
  },
  {
    tag: "CROSS-BORDER OPERATIONS",
    title: "Expand across jurisdictions",
    description:
      "Keep jurisdiction, effective date, residency, and rule provenance attached to the action.",
  },
  {
    tag: "AUDIT & EVIDENCE",
    title: "Strengthen audit & evidence readiness",
    description:
      "Capture decision, workflow, document, event, and control evidence as work happens.",
  },
  {
    tag: "INTEGRATION & COEXISTENCE",
    title: "Reduce integration fragmentation",
    description:
      "Connect existing finance, payroll, HR, legal, and compliance systems without an ungoverned web of point-to-point logic.",
  },
  {
    tag: "GOVERNED INTELLIGENCE",
    title: "Govern AI-assisted operations",
    description:
      "Use intelligence for detection, forecasting, extraction, reconciliation, and decision support without bypassing policy or human authority.",
  },
];

const roleCards: PathCard[] = [
  {
    tag: "OPERATIONS",
    title: "Coordinate work without losing evidence",
    description:
      "See how controls, exceptions, and operating signals come together.",
  },
  {
    tag: "LEGAL / COMPLIANCE",
    title: "Keep policy and evidence visible",
    description:
      "Scope, review, exceptions, and evidence stay visible around governed work.",
  },
  {
    tag: "FINANCE / CFO",
    title: "Evaluate control and implementation risk",
    description:
      "Operating control, evidence, and modular scope, evaluated on your terms.",
  },
];

const orgTypeCards: PathCard[] = [
  {
    tag: "ENTERPRISE",
    title: "Cross-domain enterprise scale",
    description:
      "Manage complex multi-departmental alignment and unified reporting.",
  },
  {
    tag: "GROWTH",
    title: "Rapidly expanding multi-entity",
    description:
      "Scale your governance layer alongside new business units and regions.",
  },
];

export default function FindYourPathSection() {
  const [activeTab, setActiveTab] = useState<"challenge" | "role" | "org">(
    "challenge",
  );

  const getCards = () => {
    switch (activeTab) {
      case "role":
        return roleCards;
      case "org":
        return orgTypeCards;
      default:
        return challengeCards;
    }
  };

  const cards = getCards();

  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-10">
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
              FIND YOUR PATH
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-4">
            Start from the challenge, role, or operating model that matches you.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed">
            Selecting a lens updates the paths below — it does not change what
            the platform is or claim a product entitlement.
          </p>
        </div>

        {/* Pill Tabs Selector */}
        <div className="bg-white p-1.5 rounded-full flex items-center gap-1 mb-12 border border-[#D9D3C7]">
          <button
            onClick={() => setActiveTab("challenge")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === "challenge"
                ? "bg-[#08222F] text-white shadow-sm"
                : "text-[#08222F] hover:bg-white/50"
            }`}
          >
            By challenge
          </button>
          <button
            onClick={() => setActiveTab("role")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === "role"
                ? "bg-[#08222F] text-white shadow-sm"
                : "text-[#08222F] hover:bg-white/50"
            }`}
          >
            By role
          </button>
          <button
            onClick={() => setActiveTab("org")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === "org"
                ? "bg-[#08222F] text-white shadow-sm"
                : "text-[#08222F] hover:bg-white/50"
            }`}
          >
            By organization type
          </button>
        </div>

        {/* 3x2 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#D9D3C7] rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#C59B3F]"
            >
              <div>
                {/* Tag */}
                <div className="inline-block px-2.5 py-1 rounded bg-[#FAF9F5] border border-[#EBE5DA] text-[10px] font-mono font-bold tracking-wider mb-4 text-[#C59B3F]">
                  {item.tag}
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-[#08222F] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-gray-600 leading-relaxed font-mono">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
