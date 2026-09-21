import React from "react";

export default function EvaluationGatesSection() {
  const gates = [
    {
      num: "01",
      title: "Use case registered",
      desc: "Purpose, owner, materiality and intended boundary recorded before any testing.",
      isAlert: false,
    },
    {
      num: "02",
      title: "Data scope approved",
      desc: "Permitted data classes confirmed, with restricted-class exclusions applied.",
      isAlert: false,
    },
    {
      num: "03",
      title: "Evaluation executed",
      desc: "Evaluation set, metrics, thresholds and known limitations recorded.",
      isAlert: false,
    },
    {
      num: "04",
      title: "Threshold check",
      desc: "Below threshold, the release is refused. A previously released system is disabled.",
      isAlert: true,
    },
    {
      num: "05",
      title: "Release decision",
      desc: "Named approver, boundary confirmed, monitoring configured, rollback defined.",
      isAlert: false,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      {/* Top Header Row with Title and Description */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col items-start">
          {/* Subtitle / Breadcrumb */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C29B38]" />
            <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
              EVALUATION, VALIDATION AND RELEASE GATES
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight max-w-xl">
            Five gates, and a failure path that disables
          </h2>
        </div>

        {/* Right Description Text */}
        <div className="max-w-md">
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Evaluation is per use case, not per model. The same model approved
            for one workflow is not thereby approved for another.
          </p>
        </div>
      </div>

      {/* 5 Gates Horizontal / Grid Row */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {gates.map((gate, index) => (
          <div
            key={index}
            className={`p-4 shadow-sm border flex flex-col ${
              gate.isAlert
                ? "border-[#DBE3E8] border-l-[4px] border-l-[#8A3B3B] bg-[#FCF6F6]"
                : "border-[#DBE3E8] border-l-[4px] border-l-[#2A6386] bg-white"
            }`}
          >
            <div>
              <span className="text-[#C29B38] text-xs font-bold tracking-widest block mb-2">
                {gate.num} · {gate.title}
              </span>
              <p className="text-[#4B5563] text-xs leading-relaxed">
                {gate.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Two Cards Row */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: What an Evaluation Record Includes */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div>
            <span className="text-[#6B7280] text-[11px] font-bold tracking-widest uppercase block mb-4">
              WHAT AN EVALUATION RECORD
            </span>
            <ul className="space-y-3">
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Evaluation set description and date</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Metrics used and thresholds applied</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Known limitations — stated, not omitted</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Reviewer and release decision</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Re-evaluation cadence and next due date</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Not Claimed */}
        <div className="bg-[#F6EDD9] rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E8D6AC] flex flex-col justify-between">
          <div>
            <span className="text-[#6A5620] text-[11px] font-bold tracking-widest uppercase block mb-4">
              NOT CLAIMED
            </span>
            <ul className="space-y-3">
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Accuracy percentages or benchmark scores</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>Bias-free, fair or unbiased outputs</span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  Hallucination-free or fully reliable generation
                </span>
              </li>
              <li className="text-[#4B5563] text-sm flex items-start gap-2">
                <span className="text-[#C29B38] font-bold">•</span>
                <span>
                  Certification of any AI system against any standard
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
