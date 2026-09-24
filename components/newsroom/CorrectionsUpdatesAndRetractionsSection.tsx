import React from "react";

export default function CorrectionsUpdatesAndRetractionsSection() {
  const rows = [
    {
      state: "Minor edit",
      publicTreatment:
        "Typo/format fix; no public note required unless meaning changed.",
      internalRequirement: "Audit event with editor and timestamp.",
    },
    {
      state: "Update",
      publicTreatment: "New facts or materially changed context.",
      internalRequirement:
        "Visible Updated timestamp + update note + approver.",
    },
    {
      state: "Correction",
      publicTreatment: "Previously published fact was materially wrong.",
      internalRequirement:
        "Visible Correction label, corrected fact, original date, correction timestamp.",
    },
    {
      state: "Retraction",
      publicTreatment: "Content cannot remain as originally asserted.",
      internalRequirement: "Retraction notice at same URL where legally safe.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#0A1D34] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            CORRECTIONS, UPDATES & RETRACTIONS
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-white leading-tight tracking-tight">
            Published facts that materially change are never silently
            overwritten
          </h1>
        </div>

        {/* Table Container with rounded wrapper matching the dark blue theme */}
        <div
          style={{ borderRadius: "16px" }}
          className="w-full overflow-hidden bg-[#0A1D34] border border-[#DCD6C8] shadow-2xl"
        >
          {/* Table Header */}
          <div className="w-full px-6 py-4 bg-[#F6F1E6] border-b border-[#1B3452] hidden md:grid md:grid-cols-12 text-xs font-semibold tracking-wider text-[#4B5872] uppercase">
            <div className="col-span-3">STATE</div>
            <div className="col-span-4">PUBLIC TREATMENT</div>
            <div className="col-span-5">INTERNAL REQUIREMENT</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full px-6 py-6 border-b border-[#DCD6C8] last:border-b-0 flex flex-col md:grid md:grid-cols-12 items-start md:items-center gap-4 md:gap-0 bg-[#0A1D34] hover:bg-[#0E2843]/40 transition-colors"
            >
              {/* State */}
              <div className="col-span-3 text-white text-base font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  State
                </span>
                {row.state}
              </div>

              {/* Public Treatment */}
              <div className="col-span-4 text-gray-300 font-light leading-relaxed text-[15px] pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Public Treatment
                </span>
                {row.publicTreatment}
              </div>

              {/* Internal Requirement */}
              <div className="col-span-5 text-gray-300 font-light leading-relaxed text-[16.5px]">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Internal Requirement
                </span>
                {row.internalRequirement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
