"use client";

import React from "react";

interface GovernanceFailure {
  title: string;
  description: string;
}

const GOVERNANCE_FAILURES: GovernanceFailure[] = [
  {
    title: "Authority is assumed, not resolved",
    description:
      "Delegation limits and segregation rules live in documents rather than in the approval path.",
  },
  {
    title: "Obligations detach from the work",
    description:
      "Due dates and ownership sit in registers separate from the actions that satisfy them.",
  },
  {
    title: "Evidence is reconstructed",
    description:
      "Decision basis, approvals and source records are assembled retrospectively at audit.",
  },
  {
    title: "Entity and jurisdiction context is inferred",
    description:
      "Which entity owns an action, and which rules apply, resolve after the fact rather than at decision time.",
  },
  {
    title: "Exceptions become permanent",
    description:
      "An exception granted once carries no owner, compensating control or expiry, and quietly becomes practice.",
  },
  {
    title: "Source truth is contested",
    description:
      "Two systems both appear authoritative for the same object and no layer arbitrates.",
  },
  {
    title: "Change bypasses governance",
    description:
      "Material change is decided operationally, with business approval documented afterwards.",
  },
  {
    title: "Adoption carries replatform risk",
    description:
      "Governance improvement is deferred because it appears to require replacing a core system.",
  },
];

export default function OperatingProblemStripSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
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
                OPERATING PROBLEM STRIP
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Eight governance failures that recur in every sector
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              These are the failure modes the solution patterns address. They
              are not sector-specific — only their consequences are.
            </p>
          </div>
        </div>

        {/* 4x2 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {GOVERNANCE_FAILURES.map((failure, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-sm border border-[#DBE3E8] border-l-[3px] border-l-[#8A3B3B] flex flex-col"
            >
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-2 leading-snug">
                  {failure.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {failure.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
