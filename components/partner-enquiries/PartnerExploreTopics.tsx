"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

interface PartnershipTopic {
  number: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const partnershipTopicsData: PartnershipTopic[] = [
  {
    number: "01",
    title: "Technology & Integration Partnerships",
    description:
      "Proposed integration, platform interoperability and technical ecosystem discussion.",
    isHighlighted: true,
  },
  {
    number: "02",
    title: "Channel & Referral Relationships",
    description:
      "Commercial distribution, qualified introductions and jointly managed customer opportunities.",
  },
  {
    number: "03",
    title: "Services & Implementation Partners",
    description:
      "Implementation, onboarding, migration, enablement and services collaboration.",
  },
  {
    number: "04",
    title: "Strategic & Enterprise Alliances",
    description:
      "Broad ecosystem collaborations and aligned strategic initiatives.",
  },
  {
    number: "05",
    title: "Co-Marketing & Ecosystem Initiatives",
    description:
      "Joint thought leadership, events, content or ecosystem outreach.",
  },
  {
    number: "06",
    title: "Existing Partner Questions & Changes",
    description:
      "Questions about a current relationship, contact change, or general follow-up.",
  },
];

export default function PartnerExploreTopics() {
  const [activeNumber, setActiveNumber] = useState<string>("01");

  return (
    <section id="topics" className="bg-[#F6F5EF] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-4 h-[2px] bg-[#C9A34C]" />
            <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase">
              START WITH YOUR PURPOSE
            </p>
          </div>

          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight mb-4">
            What would you like <br className="hidden sm:inline" />
            to explore?
          </h2>

          <p className="text-[#64748B] text-sm md:text-base max-w-xl leading-relaxed">
            Choose the topic closest to your collaboration idea. These are
            enquiry types; submitting a proposal does not establish a
            partnership.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnershipTopicsData.map((topic) => {
            const isSelected = activeNumber === topic.number;

            return (
              <div
                key={topic.number}
                onClick={() => setActiveNumber(topic.number)}
                className={`group relative rounded-xl p-8 border cursor-pointer transition-all duration-200 shadow-sm flex flex-col justify-between min-h-[180px] ${
                  isSelected
                    ? "bg-[#4A7893] border-[#4A7893] text-white"
                    : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1] text-[#1E293B]"
                }`}
              >
                <div>
                  {/* Top Bar: Label & Plus Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[11px] font-bold tracking-wider uppercase ${
                        isSelected ? "text-[#C9A34C]" : "text-[#386665]"
                      }`}
                    >
                      {topic.number} / PARTNERSHIP ENQUIRY
                    </span>
                    <Plus
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected
                          ? "text-[#C9A34C] rotate-45"
                          : "text-[#386665] group-hover:scale-110"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg md:text-xl font-bold leading-snug mb-3 ${
                      isSelected ? "text-white" : "text-[#1E293B]"
                    }`}
                  >
                    {topic.title}
                  </h3>
                </div>

                {/* Subtitle / Description */}
                <p
                  className={`text-xs md:text-sm leading-relaxed ${
                    isSelected ? "text-white/80" : "text-[#64748B]"
                  }`}
                >
                  {topic.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
