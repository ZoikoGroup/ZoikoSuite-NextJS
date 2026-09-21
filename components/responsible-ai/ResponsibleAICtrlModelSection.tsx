import React from "react";

export default function ResponsibleAICtrlModelSection() {
  const layers = [
    {
      question: "Why is AI being used here?",
      title: "Purpose & use case",
      description:
        "Use-case owner, purpose, affected workflow, materiality and allowed actions.",
    },
    {
      question: "What information can it use?",
      title: "Data & provenance",
      description:
        "Data classes, source systems, residency, retention, input provenance and exclusions.",
    },
    {
      question: "What is doing the inference?",
      title: "Model / provider",
      description:
        "Provider, model version, hosting mode, change status and data-use posture.",
    },
    {
      question: "What is it permitted to do?",
      title: "Policy & authority",
      description:
        "Capability boundary, policy, approval threshold, prohibited actions and escalation.",
    },
    {
      question: "Who decides when it matters?",
      title: "Human oversight",
      description:
        "Reviewer, review status, override, rationale, timeout and escalation path.",
    },
    {
      question: "How was it tested for this use?",
      title: "Evaluation",
      description:
        "Evaluation set, metrics, thresholds, limitations, last review and release decision.",
    },
    {
      question: "How do we know it stays in bounds?",
      title: "Runtime monitoring",
      description:
        "Drift, errors, confidence, policy exceptions, misuse signals and availability.",
    },
    {
      question: "What can be proven later?",
      title: "Evidence & audit",
      description:
        "Input and output references, model version, decision, reviewer, policy basis, timestamps.",
    },
    {
      question: "What happens when it fails?",
      title: "Incident & change",
      description:
        "Quarantine, disable, rollback, provider change review and incident timeline.",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] py-16 px-6 md:px-12 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col items-start">
        {/* Top Header Row with Title and Subtitle Description */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full mb-12 gap-6">
          <div className="flex flex-col items-start">
            {/* Subtitle / Breadcrumb */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C29B38]" />
              <span className="text-[#C29B38] text-xs font-bold tracking-[0.2em] uppercase">
                RESPONSIBLE AI CONTROL MODEL
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] leading-[1.2] tracking-tight">
              Nine layers, nine questions
            </h2>
          </div>

          {/* Right Description Text */}
          <div className="max-w-md">
            <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
              Each layer answers a question a diligence team will ask, and each
              has a corresponding product surface.
            </p>
          </div>
        </div>

        {/* Cards Grid (3 columns x 3 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
          {layers.map((layer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#0F476A] border-t-3 border-t-[#0F476A] flex flex-col justify-between"
            >
              <div>
                {/* Question */}
                <h3 className="text-[#0F476A] font-semibold text-[12.5px] leading-snug tracking-tight mb-3">
                  {layer.question}
                </h3>

                {/* Layer Title */}
                <span className="text-[#16262F] text-[13px] font-bold block mb-2">
                  {layer.title}
                </span>

                {/* Description */}
                <p className="text-[#5A6D79] text-xs sm:text-[11.5px] leading-relaxed">
                  {layer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
