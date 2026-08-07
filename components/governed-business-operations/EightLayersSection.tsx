"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface LayerItem {
  id: string;
  number: string;
  title: string;
  description: string;
  isDark: boolean;
}

const layersData: LayerItem[] = [
  {
    id: "01",
    number: "01",
    title: "EXPERIENCE",
    description:
      "Role-aware workspaces, queues, review surfaces, and analytics.",
    isDark: false,
  },
  {
    id: "02",
    number: "02",
    title: "BUSINESS MODULES",
    description:
      "Finance, workforce, legal, tax, compliance, and procurement execution.",
    isDark: false,
  },
  {
    id: "03",
    number: "03",
    title: "OPERATIONS GRAPH",
    description:
      "Shared objects, events, entities, jurisdictions, people, systems, and relationships.",
    isDark: true,
  },
  {
    id: "04",
    number: "04",
    title: "GOVERNANCE CONTROL PLANE",
    description:
      "Policy, authority, segregation, approvals, obligations, and exceptions.",
    isDark: true,
  },
  {
    id: "05",
    number: "05",
    title: "EVIDENCE",
    description:
      "Manifests, integrity, retention, legal hold, and controlled export.",
    isDark: true,
  },
  {
    id: "06",
    number: "06",
    title: "INTELLIGENCE AND AI",
    description:
      "Metrics, horizons, governed AI with authorized sources and human review.",
    isDark: false,
  },
  {
    id: "07",
    number: "07",
    title: "APIS AND EVENTS",
    description:
      "Typed events, scopes, service identities, idempotency, replay, and reconciliation.",
    isDark: false,
  },
  {
    id: "08",
    number: "08",
    title: "DATA AND DEPLOYMENT",
    description:
      "Residency, tenancy, encryption, keys, lineage, observability, and recovery.",
    isDark: false,
  },
];

const identityActors = [
  "Human users",
  "Groups",
  "Delegated roles",
  "Service identities",
  "Integration identities",
  "System administrators",
  "Auditors (read-only)",
];

export default function EightLayersSection() {
  return (
    <section className="w-full bg-[#08222F] text-[#F7F5F0] py-20 px-6 lg:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#c5a059]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a059]">
                ARCHITECTURE, DATA, APIS, AND EVENTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-white max-w-xl">
              Eight layers, one attributable context
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9ba4b5] max-w-sm leading-relaxed">
            The category depends on context surviving every system boundary.
            These layers exist to make that true.
          </p>
        </div>

        {/* Main Grid: Left Layers Stack & Right Architecture Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mb-12">
          {/* Left Side: Layers Stack */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {layersData.map((layer) => {
              const bgClass = layer.isDark
                ? "bg-[#0F476A] text-white border-[#1a3848]"
                : "bg-white text-[#0f172a] border-[#DBE3E8]";

              return (
                <div
                  key={layer.id}
                  className={`rounded-xl p-4 border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs ${bgClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider ${
                        layer.isDark ? "text-[#D0AA55]" : "text-[#c5a059]"
                      }`}
                    >
                      {layer.number} -
                    </span>
                    <h3 className="text-xs font-mono font-bold tracking-wider">
                      {layer.title}
                    </h3>
                  </div>
                  <p
                    className={`text-xs leading-relaxed sm:max-w-[260px] ${
                      layer.isDark ? "text-[#CFDEE7]" : "text-[#64748b]"
                    }`}
                  >
                    {layer.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Side: Architecture Graphic Display */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a3848] bg-[#0c2735] h-full flex items-center justify-center">
              <img
                src="/governed-business-operations/11.png"
                alt="Eight layers architecture representation"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>

        {/* Identity Actors Section */}
        <div className="max-w-105 mb-12">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9ba4b5] block mb-3">
            IDENTITY ACTORS
          </span>
          <div className="flex flex-wrap gap-2">
            {identityActors.map((actor, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white text-[#0f172a] border border-[#DBE3E8] shadow-xs"
              >
                {actor}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Buttons Container */}
        <div className="flex flex-wrap items-center justify-start gap-4 w-full">
          {/* First Button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#D0AA55] text-[#08222F] hover:bg-[#c29c4d] transition-colors shadow-sm"
          >
            Talk to a solutions architect
            <ArrowRight className="w-4 h-4 text-[#08222F]" />
          </a>

          {/* Second Button: Transparent / No bg */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-transparent text-white hover:bg-white/5 transition-colors border border-[#1a3848]"
          >
            API and developer documentation
          </a>
        </div>
      </div>
    </section>
  );
}
