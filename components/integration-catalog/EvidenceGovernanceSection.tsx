import React from "react";

export default function EvidenceGovernanceSection() {
  const steps = [
    {
      number: "01",
      title: "Ingestion Event",
      description:
        "UTC timestamped, raw state archived with provider signature.",
    },
    {
      number: "02",
      title: "ASV Normalization",
      description: "Unifying telemetry into verifiable schemas for audits.",
    },
    {
      number: "03",
      title: "Evidence Mapping",
      description: "Mapped automatically to SOC 2, ISO, HIPAA & NIST policies.",
    },
    {
      number: "04",
      title: "Ledger Commitment",
      description:
        "Hashed and written to immutable cryptographic proof chains.",
    },
  ];

  return (
    <div className="self-stretch px-20 py-16 inline-flex flex-col justify-start items-start gap-8 w-full max-w-[1440px] mx-auto">
      {/* Header Info */}
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <div className="inline-flex justify-start items-center gap-2">
          <div className="w-6 h-[1.50px] bg-[#C44242]" />
          <span className="text-[#C44242] text-sm font-medium font-['JetBrains_Mono'] uppercase tracking-widest">
            Cryptographic Lineage
          </span>
        </div>
        <h2 className="text-[#0A2029] text-4xl font-extrabold font-['Hanken_Grotesk']">
          From raw event telemetry to boardroom-ready proof.
        </h2>
        <p className="self-stretch text-[#5B6670] text-base font-normal font-['Manrope'] leading-6">
          Unlike simple screenshots or logs, Zoiko Shield preserves immutable
          custody chains that prove compliance status mathematically at the
          exact millisecond of inquiry.
        </p>
      </div>

      {/* Steps Container */}
      <div className="self-stretch p-8 bg-[#0A2029] rounded-[20px] inline-flex justify-start items-start gap-4 overflow-hidden">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 p-5 bg-white/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-3"
          >
            <div className="self-stretch inline-flex justify-between items-start">
              <span className="text-[#8FD9C8] text-xs font-bold font-['JetBrains_Mono']">
                {step.number}
              </span>
              <div className="w-3.5 h-3.5 inline-flex flex-col justify-center items-center overflow-hidden">
                <div className="w-3.5 h-3.5 relative overflow-hidden">
                  <div className="w-2.5 h-1.5 left-[2.34px] top-[3.50px] absolute outline outline-2 outline-offset-[-1px] outline-[#8FD9C8]" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <h3 className="text-white text-base font-extrabold font-['Hanken_Grotesk']">
                {step.title}
              </h3>
              <p className="self-stretch text-white/70 text-xs font-normal font-['Manrope'] leading-4">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
