"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface NodeItem {
  id: string;
  title: string;
  subtitle: string;
  type: "selected" | "context" | "governance" | "evidence";
  position: { top: string; left: string };
  connections: string[];
}

const nodes: NodeItem[] = [
  {
    id: "vendor-bank",
    title: "Vendor bank-detail change",
    subtitle: "VEN-4471 • selected object",
    type: "selected",
    position: { top: "58%", left: "50%" },
    connections: [
      "vendor-master",
      "supplier-contract",
      "payment-policy",
      "jurisdiction",
      "legal-entity",
      "obligation",
      "integration-event",
      "approver",
      "requester",
      "delegated-authority",
      "prior-exceptions",
      "verification-evidence",
    ],
  },
  {
    id: "vendor-master",
    title: "Vendor master",
    subtitle: "Marlow Industrial Ltd",
    type: "context",
    position: { top: "35%", left: "28%" },
    connections: ["vendor-bank"],
  },
  {
    id: "supplier-contract",
    title: "Supplier contract",
    subtitle: "CTR-0059 • clause 6.2",
    type: "context",
    position: { top: "48%", left: "15%" },
    connections: ["vendor-bank"],
  },
  {
    id: "payment-policy",
    title: "Payment policy",
    subtitle: "POL/SPD-011 v4",
    type: "governance",
    position: { top: "62%", left: "28%" },
    connections: ["vendor-bank"],
  },
  {
    id: "jurisdiction",
    title: "Jurisdiction",
    subtitle: "United States • verified",
    type: "context",
    position: { top: "75%", left: "15%" },
    connections: ["vendor-bank"],
  },
  {
    id: "legal-entity",
    title: "Legal entity",
    subtitle: "Z-US-04 • Zoiko Inc",
    type: "context",
    position: { top: "82%", left: "28%" },
    connections: ["vendor-bank"],
  },
  {
    id: "obligation",
    title: "Obligation",
    subtitle: "Due 06 Aug 17:00",
    type: "context",
    position: { top: "85%", left: "50%" },
    connections: ["vendor-bank"],
  },
  {
    id: "integration-event",
    title: "Integration event",
    subtitle: "svc-led-01 • 14:52",
    type: "context",
    position: { top: "78%", left: "72%" },
    connections: ["vendor-bank"],
  },
  {
    id: "approver",
    title: "Approver",
    subtitle: "H. Vance • Treasury",
    type: "context",
    position: { top: "67%", left: "72%" },
    connections: ["vendor-bank"],
  },
  {
    id: "requester",
    title: "Requester",
    subtitle: "T. Cross • AP Preparer",
    type: "context",
    position: { top: "54%", left: "72%" },
    connections: ["vendor-bank"],
  },
  {
    id: "delegated-authority",
    title: "Delegated authority",
    subtitle: "Treasury • $750k limit",
    type: "governance",
    position: { top: "35%", left: "72%" },
    connections: ["vendor-bank"],
  },
  {
    id: "prior-exceptions",
    title: "Prior exceptions",
    subtitle: "2 this quarter",
    type: "governance",
    position: { top: "35%", left: "50%" },
    connections: ["vendor-bank"],
  },
  {
    id: "verification-evidence",
    title: "Verification evidence",
    subtitle: "Callback • missing",
    type: "evidence",
    position: { top: "52%", left: "85%" },
    connections: ["vendor-bank"],
  },
];

export default function BusinessOperationsGraphSection() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("vendor-bank");

  const getNodeBg = (type: NodeItem["type"], isSelected: boolean) => {
    if (isSelected && type === "selected") return "bg-[#0F476A] text-[#DCE9F0]";
    switch (type) {
      case "governance":
        return "bg-[#2B2312] text-[#F7F5F0]";
      case "evidence":
        return "bg-[#12302B] text-[#F7F5F0]";
      case "selected":
      case "context":
      default:
        return "bg-[#123243] text-[#F7F5F0]";
    }
  };

  return (
    <section className="w-full bg-[#08222F] text-[#F7F5F0] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-[1400px] w-full flex flex-col items-center">
        {/* Header Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                BUSINESS OPERATIONS GRAPH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-white max-w-xl">
              See the business context around every material action
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9ba4b5] max-w-md leading-relaxed">
            Sixteen node types relate operational records, governance, people,
            systems, and evidence. The graph is a view — the relationship table
            below carries the same information.
          </p>
        </div>

        {/* Main Graph Container */}
        <div className="w-full bg-[#0A2331] rounded-2xl border border-[#1C4055] p-6 relative flex flex-col mb-12 overflow-hidden shadow-2xl">
          {/* Top Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-[#1a3848] mb-6 text-xs font-mono">
            <div className="bg-[#0c2735] px-3 py-1.5 rounded-lg border border-[#1a3848] flex items-center gap-2">
              <span className="text-[#9ba4b5]">SEARCH</span>
              <span className="text-white font-semibold">VEN-4471</span>
            </div>
            <div className="bg-[#0c2735] px-3 py-1.5 rounded-lg border border-[#1a3848] flex items-center gap-2">
              <span className="text-[#9ba4b5]">NODE TYPE</span>
              <span className="text-white font-semibold">All</span>
            </div>
            <div className="bg-[#0c2735] px-3 py-1.5 rounded-lg border border-[#1a3848] flex items-center gap-2">
              <span className="text-[#9ba4b5]">ENTITY</span>
              <span className="text-white font-semibold">Z-US-04</span>
            </div>
            <div className="bg-[#0c2735] px-3 py-1.5 rounded-lg border border-[#1a3848] flex items-center gap-2">
              <span className="text-[#9ba4b5]">FUNCTION</span>
              <span className="text-white font-semibold">Procurement</span>
            </div>
            <div className="bg-[#0c2735] px-3 py-1.5 rounded-lg border border-[#1a3848] flex items-center gap-2">
              <span className="text-[#9ba4b5]">DEPTH</span>
              <span className="text-white font-semibold">1 hop</span>
            </div>
            <div className="bg-[#0c2735] px-3 py-1.5 rounded-lg border border-[#1a3848] flex items-center gap-2">
              <span className="text-[#9ba4b5]">ATTENTION</span>
              <span className="text-[#D0AA55] font-semibold">Needs review</span>
            </div>
          </div>

          {/* Graph Visualization Area */}
          <div className="relative w-full h-[650px] flex items-center justify-center">
            {/* SVG Connecting Lines Simulation / Absolute Layout */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Central node is at approx center (50%, 58% relative to container). Let's draw direct lines using percentages or simulated coordinates */}
              <line
                x1="50%"
                y1="58%"
                x2="28%"
                y2="35%"
                stroke="#2A5470"
                strokeWidth="1.5"
              />
              <line
                x1="50%"
                y1="58%"
                x2="15%"
                y2="48%"
                stroke="#2A5470"
                strokeWidth="1.5"
              />
              <line
                x1="50%"
                y1="58%"
                x2="28%"
                y2="62%"
                stroke="#D0AA55"
                strokeWidth="2"
              />
              <line
                x1="50%"
                y1="58%"
                x2="15%"
                y2="75%"
                stroke="#2A5470"
                strokeWidth="1.5"
              />
              <line
                x1="50%"
                y1="58%"
                x2="28%"
                y2="82%"
                stroke="#2A5470"
                strokeWidth="1.5"
              />
              <line
                x1="50%"
                y1="58%"
                x2="50%"
                y2="85%"
                stroke="#2A5470"
                strokeWidth="1.5"
              />
              <line
                x1="50%"
                y1="58%"
                x2="72%"
                y2="78%"
                stroke="#2A5470"
                strokeWidth="1.5"
              />
              <line
                x1="50%"
                y1="58%"
                x2="72%"
                y2="67%"
                stroke="#2A5470"
                strokeWidth="1.5"
              />
              <line
                x1="50%"
                y1="58%"
                x2="72%"
                y2="54%"
                stroke="#2A5470"
                strokeWidth="1.5"
              />
              <line
                x1="50%"
                y1="58%"
                x2="72%"
                y2="35%"
                stroke="#2A5470"
                strokeWidth="1.5"
              />
              <line
                x1="50%"
                y1="58%"
                x2="50%"
                y2="35%"
                stroke="#2A5470"
                strokeWidth="1.5"
              />
              <line
                x1="50%"
                y1="58%"
                x2="85%"
                y2="52%"
                stroke="#D0AA55"
                strokeWidth="2"
              />
            </svg>

            {/* Nodes Render */}
            {nodes.map((node) => {
              const isSelected = selectedNodeId === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  style={{ top: node.position.top, left: node.position.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer px-4 py-3 rounded-xl border transition-all shadow-md z-10 ${getNodeBg(
                    node.type,
                    isSelected,
                  )} ${
                    isSelected
                      ? "border-[#D0AA55]"
                      : node.type === "governance"
                        ? "border-[#8c6d2e]"
                        : node.type === "evidence"
                          ? "border-[#3d8c72]"
                          : "border-[#3a6e91]"
                  }`}
                >
                  <div className="text-xs font-bold whitespace-nowrap">
                    {node.title}
                  </div>
                  <div
                    className={`text-[10px] font-mono mt-0.5 ${isSelected && node.type === "selected" ? "text-[#7FA0B4]" : "text-[#9ba4b5]"}`}
                  >
                    {node.subtitle}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Graph Legend Footer */}
          <div className="flex flex-wrap items-start justify-start gap-6 pt-6 border-t border-[#1a3848] text-xs text-[#9ba4b5]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#D0AA55]" />
              <span>Selected object</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2A5470]" />
              <span>Context node</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#6A5322]" />
              <span>Governance node</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2E6B57]" />
              <span>Evidence node</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-[2px] bg-[#D0AA55]" />
              <span>
                Gold edge = relationship affecting the current decision
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center w-full">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#D0AA55] text-[#08222F] hover:bg-[#b89547] transition-colors shadow-md"
          >
            View the platform tour
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
