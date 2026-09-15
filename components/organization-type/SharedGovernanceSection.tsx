"use client";

import React from "react";
import Image from "next/image";
import { Circle } from "lucide-react";

const GOVERNANCE_ITEMS = [
  {
    title: "Context",
    description: "business object, entity, jurisdiction and process scope",
  },
  {
    title: "Policy and obligation",
    description: "applicable rules with source, version and effective date",
  },
  {
    title: "Delegated authority",
    description: "role, scope, limit, effective dates and delegation source",
  },
  {
    title: "Segregation",
    description: "incompatible duties evaluated before a decision is offered",
  },
  {
    title: "Human decision",
    description: "material authorization by a named accountable person",
  },
  {
    title: "Execution or handoff",
    description: "in the approved system, often not ZoikoSuite",
  },
  {
    title: "Evidence",
    description: "source, actor, time and version preserved",
  },
  {
    title: "Exception",
    description: "owner, compensating control and expiry",
  },
];

export default function SharedGovernanceSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#A07A2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#A07A2E] uppercase">
                SHARED GOVERNANCE FOUNDATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] max-w-xl font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              The same platform truth under every pattern
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-[18px] text-[#5A6D79] leading-relaxed">
              What changes between patterns is emphasis, scope and oversight —
              not the underlying governance model or who owns which record.
            </p>
          </div>
        </div>

        {/* Content Grid: Left List, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-[10px] font-mono font-bold tracking-widest text-[#94A3B8] uppercase mb-1">
              COMMON TO ALL NINE PATTERNS
            </div>
            {GOVERNANCE_ITEMS.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Circle
                  className="w-3 h-3 mt-1 shrink-0"
                  style={{ color: "#D0AA55", fill: "transparent" }}
                />
                <p className="text-[11px] text-[#475569] leading-relaxed">
                  <strong className="font-semibold text-[#0F172A]">
                    {item.title}
                  </strong>{" "}
                  — {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[16/10] rounded-2xl ">
              <Image
                src="/organization/3.png"
                alt="Shared governance foundation visual illustration"
                fill
                priority
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
