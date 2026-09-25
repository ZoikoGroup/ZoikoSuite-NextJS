import React from "react";

export default function LeadershipOperatingModelSection() {
  const steps = [
    { number: "1", title: "Set direction" },
    { number: "2", title: "Govern decisions" },
    { number: "3", title: "Execute" },
    { number: "4", title: "Review evidence & outcomes" },
    { number: "5", title: "Adjust direction" },
  ] as const;

  const rows = [
    {
      principle: "Accountability is explicit",
      meaning:
        "Material domains have a named accountable function and documented decision owner.",
      proof: "Responsibility map",
    },
    {
      principle: "Governance precedes irreversible action",
      meaning:
        "High-impact changes require the right authority, evidence, and review.",
      proof: "Trust / Governance links",
    },
    {
      principle: "Source truth is protected",
      meaning:
        "Leadership decisions cannot silently rewrite operational truth.",
      proof: "Evidence Architecture",
    },
    {
      principle: "Customer outcomes are measured",
      meaning:
        "Enterprise value, implementation health, and service outcomes have accountable owners.",
      proof: "Customer success model",
    },
    {
      principle: "Risk is surfaced, not hidden",
      meaning:
        "Security, privacy, legal, operational, and availability risks use explicit status.",
      proof: "Trust Center / System Status",
    },
    {
      principle: "Continuity is institutional",
      meaning:
        "Roles, escalation paths, and decision records survive leadership change.",
      proof: "Succession & continuity",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-4xl mb-12">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            LEADERSHIP OPERATING MODEL
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-[32px] lg:text-[42px] font-bold text-[#0b1329] leading-tight tracking-tight mb-4">
            Leadership is a system of decision rights, not a list of names.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Each node names the accountable function, not a person, so the
            operating model remains stable when individuals change.
          </p>
        </div>

        {/* Flowchart / Process Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#DCD6C8] flex flex-col items-center text-center justify-center min-h-[140px] relative"
            >
              {/* Number Badge */}
              <div className="w-8 h-8 rounded-full bg-[#C8A24A] text-black flex items-center justify-center text-xs font-bold font-mono mb-3">
                {step.number}
              </div>

              {/* Title */}
              <span className="text-[#0b1329] text-sm md:text-base font-semibold tracking-tight">
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col">
          {/* Table Header */}
          <div className="w-full pb-4 border-b border-gray-300 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-3/12">OPERATING PRINCIPLE</div>
            <div className="w-6/12">WHAT IT MEANS ON THE PAGE</div>
            <div className="w-3/12">PROOF SURFACE</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Operating Principle */}
              <div className="w-full md:w-3/12 text-[#0b1329] text-base font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Operating Principle
                </span>
                {row.principle}
              </div>

              {/* What It Means */}
              <div className="w-full md:w-6/12 text-gray-600 text-sm md:text-base font-light leading-relaxed pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  What It Means On The Page
                </span>
                {row.meaning}
              </div>

              {/* Proof Surface */}
              <div className="w-full md:w-3/12 text-gray-600 text-sm md:text-base font-light leading-relaxed">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Proof Surface
                </span>
                {row.proof}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
