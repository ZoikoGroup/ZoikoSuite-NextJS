"use client";

import React from "react";

interface CapitalProgrammeItem {
  id: string;
  programmeAndStage: {
    title: string;
    code: string;
    stageDescription: string;
    location: string;
  };
  authorityAndBasis: {
    requestedAuthority: string;
    policyBasis: string;
    segregationLabel: string;
    segregationValue: string;
    segregationVariant: "red" | "green";
  };
  statusAndEvidence: {
    statusBadge: string;
    badgeVariant: "yellow" | "green";
    statusSub?: string;
    evidenceText: string;
    subText: string;
  };
  borderColor?: string;
}

const CAPITAL_PROGRAMMES: CapitalProgrammeItem[] = [
  {
    id: "01",
    programmeAndStage: {
      title: "Network reinforcement",
      code: "CAP-2026-018",
      stageDescription: "Stage gate 3 of 5 · multi-year programme",
      location: "Network region North · United Kingdom",
    },
    authorityAndBasis: {
      requestedAuthority:
        "Requested authority: exceeds regional delegation limit",
      policyBasis:
        "Policy basis: capital authority policy v4 · effective Apr 2026",
      segregationLabel: "Segregation:",
      segregationValue: "SPONSOR EXCLUDED FROM APPROVING",
      segregationVariant: "red",
    },
    statusAndEvidence: {
      statusBadge: "ESCALATION REQUIRED",
      badgeVariant: "yellow",
      evidenceText:
        "Evidence: business case, prior gate decisions, variation history — complete",
      subText: "Execution and cost posting remain in the finance system",
    },
    borderColor: "#8A3B3B",
  },
  {
    id: "02",
    programmeAndStage: {
      title: "Treatment upgrade",
      code: "CAP-2026-024",
      stageDescription: "Stage gate 2 of 5 · variation requested",
      location: "Treatment works 03 · Germany",
    },
    authorityAndBasis: {
      requestedAuthority: "Requested authority: within local mandate",
      policyBasis: "Policy basis: capital authority policy v4",
      segregationLabel: "Segregation:",
      segregationValue: "SATISFIED",
      segregationVariant: "green",
    },
    statusAndEvidence: {
      statusBadge: "APPROVED",
      badgeVariant: "green",
      statusSub: "variation recorded",
      evidenceText: "Evidence: decision, rationale, prior baseline retained",
      subText: "Original baseline preserved alongside the variation",
    },
    borderColor: "#2A6386",
  },
];

export default function CapitalProjectAndSpendGovernanceSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
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
                CAPITAL, PROJECT AND SPEND GOVERNANCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Stage gates that can be justified years later
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-6 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Utility capital programmes run over regulatory periods. The
              approval basis must survive the programme.
            </p>
          </div>
        </div>

        {/* Capital Programme Cards */}
        <div className="flex flex-col gap-4">
          {CAPITAL_PROGRAMMES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 lg:p-6 shadow-sm border border-[#DBE3E8] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              style={{
                borderLeft: `4px solid ${item.borderColor}`,
              }}
            >
              {/* Col 1: Programme and Stage */}
              <div className="flex flex-col lg:w-1/3">
                <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                  PROGRAMME AND STAGE
                </span>
                <h3 className="text-sm lg:text-base font-bold text-[#0F172A] mb-1">
                  {item.programmeAndStage.title} ·{" "}
                  <span className="font-mono font-normal text-xs text-gray-500">
                    {item.programmeAndStage.code}
                  </span>
                </h3>
                <p className="text-xs text-gray-600 mb-0.5">
                  {item.programmeAndStage.stageDescription}
                </p>
                <p className="text-xs text-gray-600">
                  {item.programmeAndStage.location}
                </p>
              </div>

              {/* Col 2: Authority and Basis */}
              <div className="flex flex-col lg:w-1/3">
                <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                  AUTHORITY AND BASIS
                </span>
                <p className="text-xs text-gray-800 font-medium mb-0.5">
                  {item.authorityAndBasis.requestedAuthority}
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  {item.authorityAndBasis.policyBasis}
                </p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs text-gray-600">
                    {item.authorityAndBasis.segregationLabel}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                      item.authorityAndBasis.segregationVariant === "red"
                        ? "bg-[#FBF2DF] text-[#5A6D79] border-[#5A6D79]"
                        : "bg-[#EAF5F0] text-[#5A6D79] border-[#5A6D79]"
                    }`}
                  >
                    ● {item.authorityAndBasis.segregationValue}
                  </span>
                </div>
              </div>

              {/* Col 3: Status and Evidence */}
              <div className="flex flex-col lg:w-1/3">
                <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase mb-1">
                  STATUS AND EVIDENCE
                </span>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-1 rounded border ${
                      item.statusAndEvidence.badgeVariant === "yellow"
                        ? "bg-[#FBF2DF] text-[#5A6D79] border-[#5A6D79]"
                        : "bg-[#EAF5F0] text-[#5A6D79] border-[#5A6D79]"
                    }`}
                  >
                    ● {item.statusAndEvidence.statusBadge}
                  </span>
                  {item.statusAndEvidence.statusSub && (
                    <span className="text-xs text-gray-600 font-medium">
                      · {item.statusAndEvidence.statusSub}
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold text-[#0F172A] mb-0.5">
                  {item.statusAndEvidence.evidenceText}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.statusAndEvidence.subText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
