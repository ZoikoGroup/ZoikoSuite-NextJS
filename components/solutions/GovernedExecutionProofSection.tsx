"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Stage {
  number: string;
  title: string;
  userSees: string;
  platformDoes: string;
}

const stages: Stage[] = [
  {
    number: "STAGE 1",
    title: "Context",
    userSees: "Entity, jurisdiction, object, effective date, initiating actor",
    platformDoes: "Resolves governing context and source-of-truth ownership",
  },
  {
    number: "STAGE 2",
    title: "Policy / rule",
    userSees: "Applicable rule source, version, status",
    platformDoes: "Evaluates current effective rule and provenance",
  },
  {
    number: "STAGE 3",
    title: "Authority",
    userSees: "Required role, delegation, approval chain",
    platformDoes: "Resolves authorization and conflicts before execution",
  },
  {
    number: "STAGE 4",
    title: "Decision",
    userSees: "Approved / rejected / exception with rationale",
    platformDoes: "Records decision basis and actor/system principal",
  },
  {
    number: "STAGE 5",
    title: "Execution",
    userSees: "Workflow transition and downstream governed event",
    platformDoes: "Executes only the permitted action; emits typed event",
  },
  {
    number: "STAGE 6",
    title: "Evidence",
    userSees: "Decision, workflow, document, and event links",
    platformDoes: "Builds retrievable evidence lineage",
  },
];

export default function GovernedExecutionProofSection() {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section className="w-full bg-[#08222F] text-white py-20 px-6 lg:px-12 font-sans flex justify-center">
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
              GOVERNED EXECUTION PROOF
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-6">
            One cross-domain decision, followed end to end.
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed font-mono">
            Every stage below is keyboard selectable and uses one consistent
            example object so cause and effect stay understandable. Specimen
            data — not live customer information.
          </p>
        </div>

        {/* Stages Cards Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {stages.map((stage, index) => {
            const isActive = activeStage === index;
            return (
              <div
                key={index}
                onClick={() => setActiveStage(index)}
                tabIndex={0}
                className={`cursor-pointer rounded-2xl p-6 flex flex-col justify-between transition-all bg-[#0C2C3D] border border-[#1C3B4E]`}
              >
                <div>
                  {/* Stage Header */}
                  <div className="text-[10px] font-mono font-bold tracking-widest uppercase mb-3 text-[#C59B3F]">
                    {stage.number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-6">
                    {stage.title}
                  </h3>

                  {/* User Sees */}
                  <div className="mb-6">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-gray-400 block mb-1">
                      USER SEES
                    </span>
                    <p className="text-xs text-gray-200 font-mono leading-relaxed">
                      {stage.userSees}
                    </p>
                  </div>

                  {/* Platform Does */}
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-gray-400 block mb-1">
                      PLATFORM DOES
                    </span>
                    <p className="text-xs text-gray-200 font-mono leading-relaxed">
                      {stage.platformDoes}
                    </p>
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
