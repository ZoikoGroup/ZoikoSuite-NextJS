"use client";

import React, { useState } from "react";

interface TopicItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  details: string;
}

const topicsData: TopicItem[] = [
  {
    id: "01",
    number: "01",
    title: "Business & operating priorities",
    subtitle:
      "Clarify your operating challenges, business objectives, and priorities across teams.",
    details:
      "Align business unit leaders around core strategic outcomes, cross-department handoffs, organizational accountability frameworks, and operational benchmark targets.",
  },
  {
    id: "02",
    number: "02",
    title: "Workforce & payroll evaluation",
    subtitle:
      "Discuss workforce processes, organizational needs, and the scope of your evaluation.",
    details:
      "Review workforce data structures, complex multi-entity payroll scheduling, shift management, jurisdictional labor compliance, and HR service delivery workflows.",
  },
  {
    id: "03",
    number: "03",
    title: "Technology & integrations",
    subtitle:
      "Outline your current systems, integration requirements, and technical review questions.",
    details:
      "Assess integration topologies, RESTful APIs and real-time webhook endpoints, legacy ERP coexistence, identity governance (SSO/SAML/SCIM), and technical migration paths.",
  },
  {
    id: "04",
    number: "04",
    title: "Governance, security & compliance",
    subtitle:
      "Share your governance priorities and the evidence your review process requires.",
    details:
      "Evaluate audit logs, granular role-based permissions, regional data sovereignty, cryptographic controls, SOC 2 Type II compliance reports, and GDPR/CCPA alignment.",
  },
  {
    id: "05",
    number: "05",
    title: "Enterprise deployment & procurement",
    subtitle:
      "Explore evaluation scope, procurement requirements, and deployment considerations.",
    details:
      "Structure multi-phase rollout plans, proof-of-concept criteria, SLA tier requirements, enterprise commercial agreements, and procurement approval milestones.",
  },
  {
    id: "06",
    number: "06",
    title: "Executive & cross-functional alignment",
    subtitle:
      "Bring stakeholders together around goals, decision criteria, and next steps.",
    details:
      "Coordinate steering committee requirements, executive stakeholder briefings, change enablement plans, and shared organizational success criteria.",
  },
];

export default function EnterpriseTopics() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleTopic = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="topics" className="bg-[#F6F5EF] py-[82px] px-6 sm:px-12 lg:px-[120px] font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-0 md:px-[36px]">
        {/* Section Head */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-[34px]">
          <div className="flex flex-col gap-[18.79px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[23px] h-[2px] bg-[#D9B364] flex-shrink-0" />
              <span className="font-bold text-[11px] leading-[18.15px] tracking-[0.17em] uppercase text-[#13303B]">
                Enterprise evaluation
              </span>
            </div>

            {/* H2 */}
            <h2 className="font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.15] lg:leading-[48.3px] tracking-[-0.035em] text-[#13303B]">
              Start with what matters
              <br />
              to your organization.
            </h2>
          </div>

          {/* Lead */}
          <p className="max-w-[336px] font-normal text-[14px] leading-[23.1px] text-[#64757C]">
            Six conversation pathways to help you frame your
            <br className="hidden sm:inline" />
            requirements. These are evaluation topics; specific
            <br className="hidden sm:inline" />
            capabilities are confirmed during your review.
          </p>
        </div>

        {/* Topics Accordion List */}
        <div className="border-t border-[#DCE4E4]">
          {topicsData.map((topic) => {
            const isOpen = openIds.includes(topic.id);
            return (
              <div
                key={topic.id}
                className="border-b border-[#DCE4E4] transition-colors"
              >
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => toggleTopic(topic.id)}
                  className="w-full py-[25px] px-[8px] flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                >
                  <div className="flex items-start gap-[26px] flex-1 pr-4">
                    {/* Number */}
                    <span className="font-normal text-[12px] leading-[19.8px] text-[#1C7A78] pt-1 select-none">
                      {topic.number}
                    </span>

                    {/* Content */}
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-[18px] leading-[29.7px] text-[#13303B] group-hover:text-[#1C7A78] transition-colors">
                        {topic.title}
                      </h3>
                      <p className="font-normal text-[13px] leading-[21.45px] text-[#64757C] mt-1">
                        {topic.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Plus / Minus Icon */}
                  <span className="font-light text-[24px] leading-[39.6px] text-[#1C7A78] flex-shrink-0 select-none w-6 text-right">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pl-[52px] pr-[32px] pb-[25px] text-[13px] leading-[21.45px] text-[#64757C]">
                    <div className="p-4 bg-white/70 rounded-[6px] border border-[#DCE4E4]">
                      {topic.details}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
