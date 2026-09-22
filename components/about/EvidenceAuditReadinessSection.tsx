import React from "react";
import Image from "next/image";

export default function EvidenceAuditReadinessSection() {
  const items = [
    {
      title: "Governance decision",
      description:
        "Actor, entity, jurisdiction, rule basis, authorization outcome, timestamp.",
    },
    {
      title: "Workflow history",
      description:
        "State transitions, approvers, delegation, rejection, escalation, rationale.",
    },
    {
      title: "Document lineage",
      description:
        "Version, integrity hash, access history, signature status, retention, residency policy.",
    },
    {
      title: "Operational event",
      description:
        "Typed event, source service, object, actor, correlation, causation.",
    },
    {
      title: "Evidence manifest",
      description:
        "Scenario-specific package linking decisions, documents, workflows, source records.",
    },
    {
      title: "Integrity controls",
      description:
        "Append-only records, tamper-evident chains, cryptographic validation where implemented.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-gradient-to-r from-[#0A1D34] to-[#0E2843] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            EVIDENCE & AUDIT READINESS
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-[52px] font-serif font-normal text-white leading-[1.15] tracking-tight mb-4">
            Prove the control operated.
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
            Evidence is a primary product capability, not a footer-level
            compliance claim — captured as six layers as work happens.
          </p>
        </div>

        {/* Content Layout: Graphic + Table List */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left Column: Image Graphic */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full aspect-square max-w-[520px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#101b3b]">
              <Image
                src="/about/4.png"
                alt="Evidence and Audit Readiness Architecture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: List */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full py-5 border-t border-white/10 flex flex-col md:flex-row items-start justify-between gap-2 md:gap-8"
              >
                {/* Title */}
                <div className="w-full md:w-5/12 text-white text-base md:text-lg font-medium tracking-tight">
                  {item.title}
                </div>

                {/* Description */}
                <div className="w-full md:w-7/12 text-gray-300 text-sm md:text-base font-light leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
            {/* Bottom border to close the list */}
            <div className="w-full border-t border-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
