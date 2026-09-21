import React from "react";

const policyChips = [
  "Information Security Policy",
  "Privacy & Data Governance Policy",
  "Responsible AI Policy",
  "Third-Party Risk Standard",
];

const legalChips = [
  "Terms of Service",
  "Privacy Policy",
  "Data Processing Agreement",
  "Acceptable Use Policy",
  "Subprocessor List",
  "Modern Slavery Statement",
];

function Chip({ label }: { label: string }) {
  return (
    <span
      className="inline-flex h-7 items-center px-2 bg-[#E8EFF4] rounded-[5px] border border-[#CFDEE7]"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <span className="text-[#0F476A] text-xs font-normal leading-4 tracking-tight whitespace-nowrap">
        {label}
      </span>
    </span>
  );
}

export default function LegalBoundarySection() {
  return (
    <section className="w-full bg-white font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] md:px-12 flex flex-col gap-12">
        {/* Header — left eyebrow/title, right-aligned description */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
          <div className="flex flex-col gap-3.5 pt-1.5">
            <span
              className="text-[#A7852B] text-xs font-normal leading-4 tracking-wider"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              10 / LEGAL BOUNDARY
            </span>
            <h2
              className="text-[#0D2636] text-3xl md:text-4xl font-semibold leading-10"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Policies vs. Legal documents
            </h2>
          </div>
          <div className="max-w-[633px]">
            <p
              className="text-[#3E5A6B] text-base md:text-lg font-normal leading-7 lg:text-right"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Trust policy summaries never replace or duplicate Legal. One
              canonical document owns each piece of content.
            </p>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Governed by Policies */}
          <div className="px-7 pt-7 pb-20 bg-white rounded-2xl border border-[#D6DEE3] flex flex-col gap-2.5">
            <h3
              className="text-[#0D2636] text-lg font-semibold leading-5"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Governed by Policies (this page)
            </h3>
            <div className="pt-0.5 flex flex-wrap gap-x-2.5 gap-y-[7px]">
              {policyChips.map((chip) => (
                <Chip key={chip} label={chip} />
              ))}
            </div>
          </div>

          {/* Governed by Legal */}
          <div className="p-7 bg-white rounded-2xl border border-[#D6DEE3] flex flex-col gap-2.5">
            <h3
              className="text-[#0D2636] text-lg font-semibold leading-5"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Governed by Legal (cross-linked, not duplicated)
            </h3>
            <div className="pt-0.5 flex flex-wrap gap-x-2.5 gap-y-[7px]">
              {legalChips.map((chip) => (
                <Chip key={chip} label={chip} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
