"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormulaPart {
  id: string;
  part: string;
  title: string;
  description: string;
  detailTitle: string;
  detailText: string;
}

const formulaParts: FormulaPart[] = [
  {
    id: "part-01",
    part: "PART 01",
    title: "Business context",
    description:
      "Objects, events, entities, jurisdictions, contracts, obligations, people, and systems in one operating context.",
    detailTitle: "Business context",
    detailText:
      "Without shared context, a policy cannot be resolved correctly. The operations graph relates the object being changed to its entity, jurisdiction, contract, obligations, owners, source systems, and prior exceptions before any rule is evaluated.",
  },
  {
    id: "part-02",
    part: "PART 02",
    title: "Governance",
    description:
      "Policies, authority, approvals, segregation, limits, and exceptions evaluated at the point of action.",
    detailTitle: "Governance",
    detailText:
      "Governance rules evaluate authority levels, role segregation, and control exceptions dynamically at the point of action to determine valid routing and prevent policy breaches.",
  },
  {
    id: "part-03",
    part: "PART 03",
    title: "Authorized action",
    description:
      "A qualified human decision, then execution through permitted users or bounded service identities.",
    detailTitle: "Authorized action",
    detailText:
      "Execution requires explicit authorization from a qualified human decision-maker or a tightly scoped, bounded service identity, ensuring zero unauthorized writes or transactions.",
  },
  {
    id: "part-04",
    part: "PART 04",
    title: "Evidence",
    description:
      "Sources, reasons, approvals, before and after values, timestamps, and outcomes preserved with the action.",
    detailTitle: "Evidence",
    detailText:
      "Every execution captures full provenance, including data sources, decision reasoning, approval metadata, cryptographic timestamps, and before/after states for complete audit readiness.",
  },
  {
    id: "part-05",
    part: "PART 05",
    title: "Continuous intelligence",
    description:
      "Understanding that informs the next action — before, during, and after execution.",
    detailTitle: "Continuous intelligence",
    detailText:
      "Continuous feedback loops analyze operational outcomes and exceptions in real-time, refining future policy evaluations and organizational visibility continuously.",
  },
];

export default function CategoryFormulaSection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activePart = formulaParts[selectedIndex];

  return (
    <section className="w-full bg-[#F7F5F0] text-[#0f172a] py-20 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center">
        {/* Outer Container Box with Gold/Brown Border */}
        <div className="w-full bg-white border border-[#D0AA55] border-t-4 border-t-[#D0AA55] rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
            What is Governed Business Operations Intelligence?
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#16262F] text-[21px] leading-relaxed mb-10 max-w-5xl">
            Governed Business Operations Intelligence is a software category
            that connects operational data and organizational context with
            policies, authority, human review, controlled execution, evidence,
            exceptions, analytics, and governed AI. It helps complex
            organizations understand what is happening, determine what is
            permitted, authorize the right action, preserve the evidence, and
            improve controls over time.
          </p>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#5A6D79]">
              The Category Formula
            </span>
          </div>

          {/* Formula Parts Grid with Integrated Plus and Equals Signs */}
          <div className="flex flex-col lg:flex-row items-stretch mb-8 w-full">
            {formulaParts.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <React.Fragment key={item.id}>
                  <motion.div
                    onClick={() => setSelectedIndex(idx)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 border flex-1 ${
                      isSelected
                        ? "border-[#D0AA55] bg-[#FEFCF7] shadow-md ring-1 ring-[#c5a059]"
                        : "border-[#CFDEE7] bg-white hover:shadow-sm"
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c5a059] block mb-2">
                        {item.part}
                      </span>
                      <h3 className="font-semibold text-sm sm:text-base text-[#0f172a] mb-2 sm:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#64748b] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Plus sign between parts 1-4, Equals sign before part 5 */}
                  {idx < 4 && (
                    <div className="hidden lg:flex items-center justify-center text-[#D0AA55] font-semibold text-lg px-0.5 select-none shrink-0">
                      +
                    </div>
                  )}
                  {idx === 4 && (
                    <div className="hidden lg:flex items-center justify-center text-[#D0AA55] font-semibold text-lg px-0.5 select-none shrink-0">
                      =
                    </div>
                  )}
                </React.Fragment>
              );
            })}

            {/* Equals Result Card with exact 320px width on desktop */}
            <div className="rounded-2xl p-6 bg-[#0F476A] text-white flex flex-col items-center justify-center text-center shadow-md w-full lg:w-[320px] shrink-0">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#c5a059] mb-2 block">
                Equals
              </span>
              <h3 className="font-medium text-sm text-white leading-snug">
                Governed Business Operations Intelligence
              </h3>
            </div>
          </div>

          {/* Dynamic Interactive Detail Box */}
          <motion.div
            key={activePart.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-5 rounded-2xl bg-[#F7F5F0] border border-[#DBE3E8] border-l-4 border-l-[#D0AA55]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[15px] text-[#5A6D79]">
                <span className="font-bold uppercase tracking-wider text-[#0f172a]">
                  {activePart.detailTitle}.{" "}
                </span>
                {activePart.detailText}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
