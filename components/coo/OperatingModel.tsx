"use client";

import React, { useState } from "react";

interface DisclosureItem {
  id: string;
  code: string;
  title: string;
  summary: string;
  exceptionTitle: string;
  exceptionDesc: string;
  authorityTitle: string;
  authorityDesc: string;
}

const disclosuresData: DisclosureItem[] = [
  {
    id: "d1",
    code: "D1",
    title: "Operational Visibility",
    summary:
      "Scope → signal → owner → status → source → review. No invented health percentages.",
    exceptionTitle: "Exceptions / recovery",
    exceptionDesc:
      "No signal, partial data, delayed/stale source, unsupported connector or permission constraint.",
    authorityTitle: "Authority",
    authorityDesc:
      "Functional process owners, IT/data, Security and applicable policy owners validate real capability and permissions.",
  },
  {
    id: "d2",
    code: "D2",
    title: "Workflow Ownership & Handoffs",
    summary:
      "Role clarity → task assignment → explicit handoffs → escalation triggers.",
    exceptionTitle: "Exceptions / recovery",
    exceptionDesc:
      "Unassigned workflow steps, unacknowledged transfers, or missing operational contact information.",
    authorityTitle: "Authority",
    authorityDesc:
      "Department leads and operations managers confirm ownership rules and cross-team protocols.",
  },
  {
    id: "d3",
    code: "D3",
    title: "Exception Resolution",
    summary: "Identification → triage → mitigation logging → sign-off closure.",
    exceptionTitle: "Exceptions / recovery",
    exceptionDesc:
      "Unresolved operational gaps, missing rationale documentation, or unverified mitigation actions.",
    authorityTitle: "Authority",
    authorityDesc:
      "Quality assurance, compliance teams, and domain leads approve resolution pathways.",
  },
  {
    id: "d4",
    code: "D4",
    title: "Approvals & Policy Controls",
    summary:
      "Policy mapping → authorization levels → mandatory sign-offs → policy audit trails.",
    exceptionTitle: "Exceptions / recovery",
    exceptionDesc:
      "Bypassed approval chains, missing delegation rights, or outdated policy references.",
    authorityTitle: "Authority",
    authorityDesc:
      "Risk officers and policy administrators establish governance and approval boundaries.",
  },
  {
    id: "d5",
    code: "D5",
    title: "Continuity & Service Resilience",
    summary:
      "Service dependency → redundancy tracking → failover readiness → incident response logging.",
    exceptionTitle: "Exceptions / recovery",
    exceptionDesc:
      "Unmapped system dependencies, stale backup records, or delayed incident escalations.",
    authorityTitle: "Authority",
    authorityDesc:
      "Infrastructure leads and site reliability engineers verify continuity frameworks.",
  },
  {
    id: "d6",
    code: "D6",
    title: "Leadership Evidence & Decision Reviews",
    summary:
      "Aggregate reporting → source freshness check → decision logs → executive review readiness.",
    exceptionTitle: "Exceptions / recovery",
    exceptionDesc:
      "Incomplete evidence packets, unverified executive metrics, or stale source data.",
    authorityTitle: "Authority",
    authorityDesc:
      "Executive leadership and governance boards review and confirm final disclosures.",
  },
];

export default function OperatingModel() {
  const [openId, setOpenId] = useState<string>("d1");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section className="bg-[#F6F5F1] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#A2783A] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            SIX QUESTION-LED DISCLOSURES
          </p>
          <h2 className="text-[#1E293B] text-3xl md:text-5xl font-bold tracking-tight">
            A clearer operating model.
          </h2>
        </div>

        {/* List / Accordion */}
        <div className="space-y-3">
          {disclosuresData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 flex items-center text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-2 h-2 rounded-full bg-[#1E293B] inline-block" />
                    <span className="text-[#A2783A] text-xs font-bold tracking-wider">
                      {item.code}
                    </span>
                    <span className="text-[#1E293B] text-base md:text-lg font-bold">
                      {item.title}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-8 pb-8 pt-2 space-y-6">
                    <p className="text-[#64748B] text-sm md:text-base leading-relaxed">
                      {item.summary}
                    </p>

                    <div>
                      <h4 className="text-[#386665] text-xs font-bold uppercase tracking-wider mb-2">
                        {item.exceptionTitle}
                      </h4>
                      <p className="text-[#64748B] text-sm leading-relaxed">
                        {item.exceptionDesc}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[#386665] text-xs font-bold uppercase tracking-wider mb-2">
                        {item.authorityTitle}
                      </h4>
                      <p className="text-[#64748B] text-sm leading-relaxed">
                        {item.authorityDesc}
                      </p>
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
