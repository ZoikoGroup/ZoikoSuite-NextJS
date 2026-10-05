import React from "react";

export default function ReadinessRoadmapSection() {
  const cards = [
    {
      title: "ISO/IEC 27001 — Information Security Management",
      category: "Information security · Readiness",
      status: "Readiness / control implementation",
      scope: "ZoikoSuite platform, production environment",
      evidence: "Internal control mapping and architecture proof (labeled internal)",
      targetTiming: "Timing not publicly committed",
      nextMilestone: "Engagement of an accredited certification body",
    },
    {
      title: "SOC 2 Type II — Trust Services Criteria",
      category: "Security · Readiness",
      status: "Gap assessment",
      scope: "ZoikoSuite platform and supporting systems",
      evidence: "Internal policy and control documentation",
      targetTiming: "Timing not publicly committed",
      nextMilestone: "Independent practitioner examination period",
    },
    {
      title: "WCAG 2.2 AA — Accessibility",
      category: "Accessibility · In progress",
      status: "Internal testing",
      scope: "ZoikoSuite web application",
      evidence: "Internal accessibility testing notes",
      targetTiming: "Timing not publicly committed",
      nextMilestone: "Independent accessibility evaluation",
    },
    {
      title: "ISO/IEC 42001 — AI Management System",
      category: "AI governance · Planned",
      status: "Planned",
      scope: "Not yet approved",
      evidence: "Responsible AI governance policy",
      targetTiming: "Timing not publicly committed",
      nextMilestone: "Scope approval and readiness assessment",
    },
  ];

  return (
    <section className="w-full bg-color-grey-95-12 py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-6 sm:px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-color-orange-48" />
              <span className="text-color-orange-48 text-xs font-semibold font-['Inter'] tracking-wider uppercase">
                READINESS &amp; ROADMAP
              </span>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="text-color-azure-12-4 text-2xl sm:text-3xl font-bold font-['Inter'] leading-tight">
                Honest progress, not a disguised certification badge.
              </h2>
            </div>
            <div className="max-w-md pt-2">
            <p className="text-color-grey-44 text-sm sm:text-base font-normal font-['Inter'] leading-6">
              External assurance outcomes are not controlled by marketing or product
              schedules — no future badge is shown as if issuance is guaranteed.
            </p>
          </div>
          </div>
          
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-color-white-solid rounded-xl border border-color-orange-87 flex flex-col justify-between shadow-xs hover:border-color-orange-48 transition-colors"
            >
              <div>
                <h3 className="text-color-azure-12-4 text-base font-bold font-['Inter'] leading-snug">
                  {card.title}
                </h3>
                <div className="pt-1 pb-3 text-color-grey-58 text-xs font-normal font-['Inter']">
                  {card.category}
                </div>

                <div className="divide-y divide-color-orange-87 text-xs font-['Inter']">
                  {/* Status */}
                  <div className="py-2 flex flex-col gap-0.5">
                    <span className="text-color-grey-44 text-[11px] font-semibold uppercase tracking-wider">
                      Status
                    </span>
                    <span className="text-color-azure-25-3 font-normal">
                      {card.status}
                    </span>
                  </div>

                  {/* Scope target */}
                  <div className="py-2 flex flex-col gap-0.5">
                    <span className="text-color-grey-44 text-[11px] font-semibold uppercase tracking-wider">
                      Scope target
                    </span>
                    <span className="text-color-azure-25-3 font-normal">
                      {card.scope}
                    </span>
                  </div>

                  {/* Evidence available */}
                  <div className="py-2 flex flex-col gap-0.5">
                    <span className="text-color-grey-44 text-[11px] font-semibold uppercase tracking-wider">
                      Evidence available
                    </span>
                    <span className="text-color-azure-25-3 font-normal">
                      {card.evidence}
                    </span>
                  </div>

                  {/* Target timing */}
                  <div className="py-2 flex flex-col gap-0.5">
                    <span className="text-color-grey-44 text-[11px] font-semibold uppercase tracking-wider">
                      Target timing
                    </span>
                    <span className="text-color-azure-25-3 font-normal">
                      {card.targetTiming}
                    </span>
                  </div>

                  {/* Next milestone */}
                  <div className="pt-2 flex flex-col gap-0.5">
                    <span className="text-color-grey-44 text-[11px] font-semibold uppercase tracking-wider">
                      Next proof milestone
                    </span>
                    <span className="text-color-azure-25-3 font-normal">
                      {card.nextMilestone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
