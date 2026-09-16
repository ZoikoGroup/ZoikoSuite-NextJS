"use client";

import React from "react";

interface OutcomeItem {
  title: string;
  description: string;
  requiredProof: string;
  borderLeftColor: string;
}

const OUTCOMES: OutcomeItem[] = [
  {
    title: "Retain",
    description: "The current system or process stays in place unchanged.",
    requiredProof:
      "Reason for retaining, named owner, and what integration or context is still needed.",
    borderLeftColor: "#5A6D79",
  },
  {
    title: "Coexist",
    description:
      "ZoikoSuite and the current system share a governed operating process without changing authoritative ownership.",
    requiredProof:
      "Ownership matrix plus the synchronization and reconciliation approach.",
    borderLeftColor: "#5A6D79",
  },
  {
    title: "Coordinate",
    description:
      "ZoikoSuite coordinates the decision and workflow while another system remains authoritative and executing.",
    requiredProof: "An explicit decision-versus-execution split.",
    borderLeftColor: "#5A6D79",
  },
  {
    title: "Consolidate",
    description:
      "Selected process, interface or data responsibility is simplified into fewer governed components.",
    requiredProof: "Exactly what consolidates, and exactly what remains.",
    borderLeftColor: "#5A6D79",
  },
  {
    title: "Replace selected scope",
    description:
      "Approved object, process or system responsibility moves to the target scope. Selected — never universal.",
    requiredProof:
      "Before and after ownership, migration, Shadow comparison, activation and rollback.",
    borderLeftColor: "#A07A2E",
  },
  {
    title: "Decommission",
    description:
      "Legacy scope is retired, but only after exit criteria are satisfied.",
    requiredProof:
      "Retention and archive position, unresolved items, dependency removal, and owner approval.",
    borderLeftColor: "#6B2626", // matches the red style shown for the final card border-left in image
  },
];

export default function TargetOutcomeVocabularySection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                TARGET OUTCOME VOCABULARY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl max-w-xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Six outcomes, chosen per scope
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic">
              &quot;Modernization&quot; is not one decision. The same
              organization can retain one system, coexist with another and
              consolidate a third &mdash; and each choice carries its own
              required proof.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid (2 rows x 3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUTCOMES.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden"
                style={{
                  border: "1px solid #DBE3E8",
                  borderLeft: `4px solid ${item.borderLeftColor}`,
                }}
              >
                <div className="flex flex-col gap-3">
                  <h3
                    className="font-bold text-[#0F172A]"
                    style={{ fontSize: "15px" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#475569] leading-relaxed"
                    style={{ fontSize: "14px" }}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-dashed border-[#DBE3E8] flex flex-col gap-1">
                  <span
                    className="font-mono font-bold tracking-wider text-[#9C6B12] uppercase"
                    style={{ fontSize: "10px" }}
                  >
                    Required proof
                  </span>
                  <p
                    className="text-[#475569] leading-relaxed"
                    style={{ fontSize: "13px" }}
                  >
                    {item.requiredProof}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
