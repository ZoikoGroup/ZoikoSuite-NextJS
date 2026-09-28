"use client";

import React, { useState } from "react";

interface MigrationPattern {
  tag: string;
  title: string;
  description: string;
}

const migrationPatterns: MigrationPattern[] = [
  {
    tag: "CANONICAL MAPPING",
    title: "ZoikoSchema",
    description:
      "Map external finance, payroll, HR, contract, and compliance data into a governed structure.",
  },
  {
    tag: "CONNECTIVITY",
    title: "API & event integration",
    description:
      "Versioned interfaces with provenance, idempotency, and governed external actions.",
  },
  {
    tag: "PARALLEL RUN",
    title: "Shadow / parallel validation",
    description:
      "Compare incumbent and ZoikoSuite outcomes before cutover where supported — no fake equivalence metrics.",
  },
  {
    tag: "ASSURANCE",
    title: "Migration integrity",
    description:
      "Validate completeness, referential integrity, balances, history, rejected records, and lineage.",
  },
  {
    tag: "SEQUENCE",
    title: "Progressive replacement",
    description:
      "Start as governance layer or selected modules, coexist, consolidate, replace only where justified.",
  },
  {
    tag: "SAFEGUARD",
    title: "Rollback / recovery",
    description:
      "Preserve a controlled return path for material migration changes.",
  },
];

export default function MigrationCoexistenceSection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(2); // Default highlight index 2 (Parallel Run)

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
              MIGRATION & COEXISTENCE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15] mb-4">
            How do we get value without a risky big-bang replacement?
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base max-w-xl leading-relaxed font-mono">
            Six patterns reduce adoption risk without promising zero-downtime or
            universal compatibility.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {migrationPatterns.map((item, index) => {
            const isHighlighted = selectedIndex === index;
            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`cursor-pointer rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all border ${
                  isHighlighted
                    ? "bg-[#C8A24A] text-white border-[#C8A24A]"
                    : "bg-white border-[#D9D3C7] text-[#08222F] hover:border-[#C59B3F]"
                }`}
              >
                <div>
                  {/* Tag */}
                  <div
                    className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-3 ${
                      isHighlighted ? "text-white/90" : "text-[#C59B3F]"
                    }`}
                  >
                    {item.tag}
                  </div>

                  {/* Card Title */}
                  <h3
                    className={`text-base font-bold mb-3 ${
                      isHighlighted ? "text-white" : "text-[#08222F]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className={`text-xs leading-relaxed font-mono ${
                      isHighlighted ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    {item.description}
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
