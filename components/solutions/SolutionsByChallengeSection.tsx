"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface SolutionItem {
  title: string;
  summary: string;
  whatChanges: string;
  whoIsInvolved: string;
  howZoikoSuiteAddressesIt: string[];
  whatToVerify: string;
  adoptionPath: string;
}

const solutionsData: SolutionItem[] = [
  {
    title: "Modernize operations",
    summary:
      "Move cross-functional work from disconnected tools and after-the-fact controls into governed workflows.",
    whatChanges:
      "Work that currently moves through disconnected tools and after-the-fact review instead runs through governed workflows, with policy and evidence attached as the action happens.",
    whoIsInvolved:
      "Operations, finance, IT, and the functional teams whose workflows are governed — not a single owning department.",
    howZoikoSuiteAddressesIt: [
      "Governed execution flow",
      "Integration & coexistence with existing systems",
      "Operational status and evidence visibility",
    ],
    whatToVerify:
      "Architecture, integration registry, and operating-intelligence proof before assuming scope.",
    adoptionPath:
      "Coexist with incumbent systems, govern around them, shadow/validate where applicable, then consolidate or replace only where justified.",
  },
  {
    title: "Govern multi-entity operations",
    summary:
      "Preserve entity-aware authority, financial/workforce context, policy, and reporting across organizational structures.",
    whatChanges:
      "Multi-entity coordination and hierarchy permissions are maintained natively at runtime.",
    whoIsInvolved: "Finance, legal, compliance, and corporate leadership.",
    howZoikoSuiteAddressesIt: [
      "Multi-entity authority context",
      "Unified policy boundaries",
      "Cross-entity operational visibility",
    ],
    whatToVerify:
      "Entity separation, data residency, and cross-entity access controls.",
    adoptionPath:
      "Map existing corporate structures into the platform layer progressively.",
  },
  {
    title: "Expand across jurisdictions",
    summary:
      "Keep jurisdiction, effective date, residency, and rule provenance attached to the action.",
    whatChanges:
      "Jurisdictional requirements are dynamically enforced as transactions or workflows occur.",
    whoIsInvolved: "Legal, compliance, and regional operational managers.",
    howZoikoSuiteAddressesIt: [
      "Jurisdiction-aware runtime rules",
      "Effective-date tracking",
      "Residency and provenance auditing",
    ],
    whatToVerify:
      "Regional rule repositories and residency compliance documentation.",
    adoptionPath: "Deploy region by region with localized rule attachments.",
  },
  {
    title: "Strengthen audit & evidence readiness",
    summary:
      "Capture decision, workflow, document, event, and control evidence as work happens.",
    whatChanges:
      "Audit preparation shifts from manual post-facto assembly to continuous evidence streaming.",
    whoIsInvolved: "Internal audit, compliance, and risk teams.",
    howZoikoSuiteAddressesIt: [
      "Automated evidence capture by default",
      "Decision and workflow lineage tracking",
      "Immutable audit trails",
    ],
    whatToVerify:
      "Lineage maps, access logging, and evidence integrity proofs.",
    adoptionPath:
      "Enable parallel audit shadowing alongside existing control frameworks.",
  },
  {
    title: "Reduce integration fragmentation",
    summary:
      "Connect existing finance, payroll, HR, legal, and compliance systems without an ungoverned web of point-to-point logic.",
    whatChanges:
      "Integrations are unified through a governed event and contract layer rather than messy point-to-point scripts.",
    whoIsInvolved: "IT, enterprise architects, and system administrators.",
    howZoikoSuiteAddressesIt: [
      "Versioned APIs and events",
      "Governed integration contracts",
      "Centralized integration registry",
    ],
    whatToVerify:
      "API gateway security, error handling, and synchronization latency.",
    adoptionPath:
      "Catalog current integrations, wrap critical paths, and phase out brittle point-to-point connections.",
  },
  {
    title: "Govern AI-assisted operations",
    summary:
      "Use intelligence for detection, forecasting, extraction, reconciliation, and decision support without bypassing policy or human authority.",
    whatChanges:
      "AI tools operate strictly within defined authorization boundaries with mandatory human validation checkpoints.",
    whoIsInvolved:
      "AI governance leads, operations managers, and risk officers.",
    howZoikoSuiteAddressesIt: [
      "Governed intelligence within policy bounds",
      "Source truth provenance tracking",
      "Enforced human review workflows",
    ],
    whatToVerify:
      "AI model permissions, constraint enforcement, and audit logs for automated suggestions.",
    adoptionPath:
      "Introduce advisory AI features first, followed by restricted automated execution under strict supervision.",
  },
];

export default function SolutionsByChallengeSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col items-start mb-16">
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
              SOLUTIONS BY CHALLENGE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-4">
            From operating problem to a path you can evaluate.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base max-w-xl leading-relaxed">
            Each path shows the problem, the operating model, the proof, the
            constraints, and the adoption path before any sales ask.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="w-full flex flex-col gap-4">
          {solutionsData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#D9D3C7] rounded-2xl overflow-hidden transition-all bg-[#FAF9F5]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 flex items-center justify-between text-left focus:outline-none bg-white hover:bg-[#FAF9F5] transition-colors"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#08222F] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-mono">
                      {item.summary}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white border border-[#D9D3C7] flex items-center justify-center text-[#08222F] shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-6 border-t border-[#D9D3C7] bg-[#FAF9F5] flex flex-col gap-6 text-xs sm:text-sm font-mono">
                    {/* What Changes */}
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#C59B3F] mb-1">
                        What Changes
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.whatChanges}
                      </p>
                    </div>

                    {/* Who Is Involved */}
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#C59B3F] mb-1">
                        Who Is Involved
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.whoIsInvolved}
                      </p>
                    </div>

                    {/* How ZoikoSuite Addresses It */}
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#C59B3F] mb-1">
                        How ZoikoSuite Addresses It
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {item.howZoikoSuiteAddressesIt.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    {/* What To Verify */}
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#C59B3F] mb-1">
                        What To Verify
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.whatToVerify}
                      </p>
                    </div>

                    {/* Adoption Path */}
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#C59B3F] mb-1">
                        Adoption Path
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.adoptionPath}
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
