"use client";

import React from "react";

interface LayerItem {
  layer: string;
  title: string;
  description: string;
  answers: string;
  status: string;
  statusType?: "default" | "purple" | "yellow" | "amber";
}

const layersData: LayerItem[] = [
  {
    layer: "LAYER 01",
    title: "Governance decision",
    description:
      "Actor, entity, jurisdiction, policy or rule basis, authority evaluated, outcome and rationale — captured at the moment of decision, not reconstructed.",
    answers: "Answers: who decided, under what authority, on what basis",
    status: "CURRENT ARCHITECTURE",
    statusType: "default",
  },
  {
    layer: "LAYER 02",
    title: "Workflow history",
    description:
      "Every state transition with its approver, delegation, rejection, escalation and recorded rationale, in sequence.",
    answers: "Answers: how it moved, who touched it, what was refused",
    status: "CURRENT ARCHITECTURE",
    statusType: "default",
  },
  {
    layer: "LAYER 03",
    title: "Document lineage",
    description:
      "Version chain, source, integrity hash, signature state, access history, retention reference and residency position.",
    answers: "Answers: which version, signed by whom, seen by whom",
    status: "BY DOCUMENT TYPE",
    statusType: "purple",
  },
  {
    layer: "LAYER 04",
    title: "Operational event",
    description:
      "Typed events with source service, actor or system principal, object reference, correlation ID and causation link.",
    answers: "Answers: what else happened, in what order, caused by what",
    status: "CURRENT ARCHITECTURE",
    statusType: "default",
  },
  {
    layer: "LAYER 05",
    title: "Evidence manifest",
    description:
      "A scenario-specific package assembling the required evidence across layers — and stating what is missing.",
    answers: "Answers: is the proof complete for this question",
    status: "PHASED DELIVERY",
    statusType: "yellow",
  },
  {
    layer: "LAYER 06",
    title: "Integrity controls",
    description:
      "Append-only storage, hash verification, tamper-evident chaining and cryptographic validation where implemented.",
    answers: "Answers: has this record changed since it was written",
    status: "IMPLEMENTATION STATUS REQUIRED",
    statusType: "amber",
  },
];

export default function SixLayerEvidenceModel() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C9B07A" }}
              ></span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C9B07A" }}
              >
                SIX-LAYER EVIDENCE MODEL
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Each layer answers a different question
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              An auditor asking &quot;did the control operate&quot; needs a
              different layer from a lawyer asking &quot;who signed this
              version&quot; or a security reviewer asking &quot;what else
              happened in that session&quot;.
            </p>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {layersData.map((item, index) => {
            let badgeBg = "bg-[#EEF2F5] text-[#3E5A6B] border-[#C3D0D8]";
            if (item.statusType === "purple") {
              badgeBg = "bg-[#F4EFF7] text-[#5B3B7A] border-[#C9B0DC]";
            } else if (
              item.statusType === "yellow" ||
              item.statusType === "amber"
            ) {
              badgeBg = "bg-[#FBF2DF] text-[#6B4E0F] border-[#E2C67F]";
            }

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#0F476A] border-t-3 border-t-[#0F476A] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#9CA3AF] uppercase block mb-2">
                    {item.layer}
                  </span>
                  <h3 className="text-lg font-bold text-[#111827] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#4B5563] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-[#E5E7EB] pt-4 mb-4">
                    <p className="text-[12px] text-[#6B7280] font-medium">
                      {item.answers}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`inline-block px-2.5 py-1 w-full rounded text-[10px] font-mono font-bold tracking-wider border ${badgeBg}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
