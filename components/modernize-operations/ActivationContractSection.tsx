"use client";

import React from "react";

interface GateItem {
  title: string;
  description: string;
  statusText: string;
  statusType: "complete" | "blocked" | "in-progress" | "cannot-proceed";
  isSpecialRow?: boolean; // For 4th, 7th, 10th rows where first column title and left border are red (#8A3B3B)
}

const GATES: GateItem[] = [
  {
    title: "Scope",
    description:
      "Modernization scope ID, wave, process and object, entity and jurisdiction, environment",
    statusText: "COMPLETE",
    statusType: "complete",
  },
  {
    title: "Business ownership",
    description:
      "Executive sponsor, process owner, decision authority, sign-off state",
    statusText: "COMPLETE",
    statusType: "complete",
  },
  {
    title: "Architecture",
    description:
      "Current and target sources, integrations, dependencies, identity, target execution owner",
    statusText: "COMPLETE",
    statusType: "complete",
  },
  {
    title: "Data & reconciliation",
    description:
      "Dataset class, mapping, reconciliation result, unresolved differences, data-quality exceptions",
    statusText: "BLOCKED — RECONCILIATION FAILED",
    statusType: "blocked",
    isSpecialRow: true, // 4th row
  },
  {
    title: "Governance",
    description:
      "Policy and control version, authority, segregation, exception approvals",
    statusText: "COMPLETE",
    statusType: "complete",
  },
  {
    title: "Security & privacy",
    description:
      "Review status, access, residency and retention where applicable",
    statusText: "IN PROGRESS",
    statusType: "in-progress",
  },
  {
    title: "Evidence",
    description:
      "Migration Evidence Manifest complete for all required artifact classes",
    statusText: "BLOCKED — 2 CLASSES INCOMPLETE",
    statusType: "blocked",
    isSpecialRow: true, // 7th row
  },
  {
    title: "Operational readiness",
    description:
      "Support and runbook, users and roles, monitoring, exception owner, communications",
    statusText: "IN PROGRESS",
    statusType: "in-progress",
  },
  {
    title: "Rollback",
    description:
      "Last-good state, trigger, authority, rollback steps, recovery verification",
    statusText: "COMPLETE",
    statusType: "complete",
  },
  {
    title: "Activation decision",
    description:
      "Named accountable human decision, timestamp, outcome, limitations, evidence reference",
    statusText: "CANNOT PROCEED — TWO GATES BLOCKED",
    statusType: "cannot-proceed",
    isSpecialRow: true, // 10th row
  },
];

export default function ActivationContractSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                ACTIVATION CONTRACT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Ten gates, and the last one is a person
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Each gate names the fields it requires. A single blocked gate
              prevents activation of the affected scope &mdash; there is no
              aggregate score.
            </p>
          </div>
        </div>

        {/* Gates List (Rows) */}
        <div className="flex flex-col gap-3">
          {GATES.map((gate, index) => {
            // Determine status badge styling
            let badgeBg = "#EAF5F0";
            let badgeBorder = "#1E7A5A";
            let badgeText = "#1E7A5A";
            let dotColor = "bg-[#1E7A5A]";

            if (
              gate.statusType === "blocked" ||
              gate.statusType === "cannot-proceed"
            ) {
              badgeBg = "#F9EDED";
              badgeBorder = "#8A3B3B";
              badgeText = "#8A3B3B";
              dotColor = "bg-[#8A3B3B]";
            } else if (gate.statusType === "in-progress") {
              badgeBg = "#EAF1F9";
              badgeBorder = "#2F6FB0";
              badgeText = "#2F6FB0";
              dotColor = "bg-[#2F6FB0]";
            }

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-4 md:px-6 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm transition-all"
                style={{
                  border: "1px solid #DBE3E8",
                  borderLeft: gate.isSpecialRow
                    ? "4px solid #8A3B3B"
                    : "1px solid #DBE3E8",
                }}
              >
                {/* Left Column: Title & Description */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center w-full md:w-3/4">
                  <div className="md:col-span-4">
                    <span
                      className="font-bold block"
                      style={{
                        fontSize: "15px",
                        color: gate.isSpecialRow ? "#8A3B3B" : "#0F172A",
                      }}
                    >
                      {gate.title}
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <p
                      className="text-[#475569] leading-relaxed"
                      style={{ fontSize: "14px" }}
                    >
                      {gate.description}
                    </p>
                  </div>
                </div>

                {/* Right Column: Status Badge */}
                <div className="w-full md:w-auto flex justify-end">
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono font-bold tracking-wider uppercase text-[10px]"
                    style={{
                      backgroundColor: badgeBg,
                      border: `1px solid ${badgeBorder}`,
                      color: badgeText,
                    }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                    {gate.statusText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
