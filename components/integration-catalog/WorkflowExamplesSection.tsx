import React from "react";

export default function WorkflowExamplesSection() {
  const workflows = [
    {
      title: "Identity risk signal to automated audit evidence",
      checkpoint: "HUMAN-IN-THE-LOOP CHECKPOINT",
      pipeline:
        "Identity Risk Signal Detected > AI Threat Correlation > Policy Validation > Analyst Authorization > Action log written to SHA-256 Ledger",
    },
    {
      title: "Cloud configuration drift remediation tracking",
      checkpoint: "HUMAN-IN-THE-LOOP CHECKPOINT",
      pipeline:
        "Drift Alert (AWS Config) > Resource Normalized > Framework mapping > Automated Policy Exception > Verifiable audit trail exported",
    },
    {
      title: "Endpoint threat alert to case triage context",
      checkpoint: "HUMAN-IN-THE-LOOP CHECKPOINT",
      pipeline:
        "Falcon alert received > Enriched with directory context > Governed AI auto-remediation > Verified state recorded",
    },
  ];

  return (
    <div className="self-stretch px-20 pb-16 inline-flex flex-col justify-start items-start gap-6 w-full max-w-[1440px] mx-auto">
      {/* Section Title */}
      <h2 className="text-[#0A2029] text-2xl font-extrabold font-['Hanken_Grotesk']">
        Continuous Assurance Flow Examples
      </h2>

      {/* Workflow Cards Container */}
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        {workflows.map((item, index) => (
          <div
            key={index}
            className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-[#123B4C]/10 inline-flex justify-start items-center gap-6 hover:outline-[#123B4C]/30 transition-all"
          >
            {/* Left Info: Title & Checkpoint Badge */}
            <div className="w-72 inline-flex flex-col justify-start items-start gap-1">
              <h3 className="self-stretch text-[#0A2029] text-base font-extrabold font-['Hanken_Grotesk']">
                {item.title}
              </h3>
              <span className="text-[#C44242] text-xs font-normal font-['JetBrains_Mono']">
                {item.checkpoint}
              </span>
            </div>

            {/* Right Flow Details / Pipeline Steps */}
            <div className="flex-1 flex justify-start items-center gap-2">
              <span className="flex-1 text-[#5B6670] text-xs font-normal font-['JetBrains_Mono'] leading-relaxed">
                {item.pipeline}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
