"use client";

import React from "react";

interface ProofLevel {
  level: string;
  title: string;
  description: string;
}

const proofLevels: ProofLevel[] = [
  {
    level: "LEVEL 01",
    title: "Architecture proof",
    description:
      "Diagrams, control flows, source ownership, governance model, security/evidence briefs.",
  },
  {
    level: "LEVEL 02",
    title: "Product proof",
    description:
      "Working demos, screenshots, workflow recordings, release/status documentation.",
  },
  {
    level: "LEVEL 03",
    title: "Validation proof",
    description:
      "Shadow-mode comparison, migration integrity, control tests, test coverage, implementation evidence.",
  },
  {
    level: "LEVEL 04",
    title: "Customer proof",
    description:
      "Named case studies, verified measures, references, approved testimonials — requires authorization.",
  },
  {
    level: "LEVEL 05",
    title: "Independent proof",
    description:
      "Certifications, attestations, penetration-test summaries, audit/partner validations, only when current and in scope.",
  },
];

export default function ProofLadderSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Header / Intro text container */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full mb-16 gap-6">
          <div className="flex flex-col items-start">
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
                PROOF LADDER
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight leading-[1.15]">
              Publish the strongest proof that actually exists.
            </h2>
          </div>

          {/* Top Right Note */}
          <div className="max-w-xs lg:text-right">
            <p className="text-xs font-mono text-gray-500 leading-relaxed">
              Not the strongest proof marketing wishes existed.
            </p>
          </div>
        </div>

        {/* Timeline / Ladder Container */}
        <div className="w-full relative  ml-3 sm:ml-4 pl-6 sm:pl-8 flex flex-col gap-12">
          {proofLevels.map((item, index) => (
            <div key={index} className="relative flex flex-col items-start">
              {/* Circle Marker */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2"
                style={{ borderColor: "#C59B3F" }}
              ></div>

              {/* Level Tag */}
              <div className="text-[10px] font-mono font-bold tracking-widest uppercase mb-1 text-[#C59B3F]">
                {item.level}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#08222F] mb-1">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 font-mono leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
