"use client"
import React, { useState } from "react";
import { AlertTriangle, Circle } from "lucide-react";

interface PerspectiveData {
  keyQuestion: string;
  badge: string;
  status: string;
  controls: string[];
}

export default function SelectPerspectiveSection() {
  const [activePerspective, setActivePerspective] = useState<string>("CIO");

  const perspectives: Record<string, PerspectiveData> = {
    CIO: {
      keyQuestion: "What technical and operational boundaries are governed?",
      badge: "INQUIRY, NOT VALIDATED PROOF",
      status: "Proof not yet published",
      controls: [
        "Systems of record and the interfaces between them",
        "Who owns each policy",
        "The verification questions to put to the vendor",
      ],
    },
    CHRO: {
      keyQuestion:
        "How are workforce transitions and role accountabilities managed?",
      badge: "INQUIRY, NOT VALIDATED PROOF",
      status: "Proof not yet published",
      controls: [
        "Organizational structure and role-based permissions",
        "Escalation pathways for workforce exceptions",
        "Verification cadence for personnel records",
      ],
    },
    COO: {
      keyQuestion: "What are the handoff boundaries between operational teams?",
      badge: "INQUIRY, NOT VALIDATED PROOF",
      status: "Proof not yet published",
      controls: [
        "Cross-departmental service level agreements",
        "Operational tracking and exception logs",
        "Accountability for blocked or delayed workflows",
      ],
    },
    Controller: {
      keyQuestion:
        "How are financial controls and evidence stewardship enforced?",
      badge: "INQUIRY, NOT VALIDATED PROOF",
      status: "Proof not yet published",
      controls: [
        "Audit readiness and retention schedules",
        "Authorization limits for financial adjustments",
        "Evidence immutability checks",
      ],
    },
    Tax: {
      keyQuestion:
        "What tax-specific obligations and accountabilities remain distinct?",
      badge: "LABEL PENDING",
      status: "Proof not yet published",
      controls: [
        "Jurisdiction-specific compliance requirements",
        "Tax record separation and accessibility",
        "Regulatory reporting timelines",
      ],
    },
    Compliance: {
      keyQuestion:
        "How is continuous standing verified versus point-in-time review?",
      badge: "LABEL PENDING",
      status: "Proof not yet published",
      controls: [
        "Policy adherence and violation tracking",
        "Automated versus manual assurance boundaries",
        "Audit trail completeness and integrity",
      ],
    },
    "Audit Committee": {
      keyQuestion: "What independent oversight and challenge mechanisms exist?",
      badge: "INQUIRY, NOT VALIDATED PROOF",
      status: "Proof not yet published",
      controls: [
        "Independent review cadence and executive reporting",
        "Access to underlying audit logs and exceptions",
        "Separation of oversight from administrative editing",
      ],
    },
    Board: {
      keyQuestion:
        "What enterprise risk and governance visibility does leadership maintain?",
      badge: "INQUIRY, NOT VALIDATED PROOF",
      status: "Proof not yet published",
      controls: [
        "High-level exposure and risk indicators",
        "Strategic governance milestone tracking",
        "Material operational change oversight",
      ],
    },
  } as const;

  const currentData = perspectives[activePerspective];

  const perspectiveList = [
    { name: "CIO", labelPending: false },
    { name: "CHRO", labelPending: false },
    { name: "COO", labelPending: false },
    { name: "Controller", labelPending: false },
    { name: "Tax", labelPending: true },
    { name: "Compliance", labelPending: true },
    { name: "Audit Committee", labelPending: false },
    { name: "Board", labelPending: false },
  ];

  return (
    <section className="w-full bg-[#F6F5F1] py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Section Heading & Subtitle */}
        <div className="mb-10 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight leading-[1.2] mb-3">
            Select a perspective.
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg max-w-2xl leading-relaxed">
            The same properties raise different questions for different roles.
            Each view is an inquiry to put to your team, not validated proof.
          </p>
        </div>

        {/* Perspective Buttons Row */}
        <div className="flex flex-wrap items-center gap-3 mb-10 w-full">
          {perspectiveList.map((item) => {
            const isActive = activePerspective === item.name;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActivePerspective(item.name)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer shadow-sm ${
                  isActive
                    ? "bg-[#09232F] text-white"
                    : "bg-white text-[#1F2421] border border-black/10 hover:border-black/30"
                }`}
              >
                <span>{item.name}</span>
                {item.labelPending && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#F3EFE6] text-[#8C6D24]"
                    }`}
                  >
                    label pending
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <div className="w-full bg-white rounded-2xl border border-black/5 p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Key Question & Status */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-bold text-[#B49347] tracking-wider uppercase mb-3">
              KEY QUESTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2421] tracking-tight leading-snug mb-6">
              {currentData.keyQuestion}
            </h3>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#E8EEF2] text-[#1E3A4C] text-xs font-semibold tracking-wide">
                <AlertTriangle className="w-3.5 h-3.5 text-[#1E3A4C]" />
                <span>{currentData.badge}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#4B5563] font-medium">
                <Circle className="w-2.5 h-2.5 text-[#4B5563] fill-current" />
                <span>{currentData.status}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Controls to Evaluate */}
          <div className="lg:col-span-5 flex flex-col items-start border-t lg:border-t-0 lg:border-l border-black/10 pt-6 lg:pt-0 lg:pl-8">
            <span className="text-xs font-bold text-[#4B5563] tracking-wider uppercase mb-4">
              CONTROLS TO EVALUATE
            </span>
            <ul className="flex flex-col gap-3">
              {currentData.controls.map((control, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#1F2421] leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2421] mt-2 flex-shrink-0" />
                  <span>{control}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
