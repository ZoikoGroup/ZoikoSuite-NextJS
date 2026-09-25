import React from "react";

export default function MinimizeEncryptAndNeverOverPromiseConfidentialitySection() {
  const rows = [
    {
      topic: "Researcher data",
      requirement:
        "Collect only what is needed for case handling, contact, recognition/payment, and legal/security obligations.",
    },
    {
      topic: "Sensitive evidence",
      requirement:
        "Encrypted in transit and at rest, with restricted access and separate malware quarantine where needed.",
    },
    {
      topic: "Researcher confidentiality",
      requirement:
        "Absolute confidentiality is never promised — approved sharing/escalation boundaries are explained instead.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            PRIVACY, CONFIDENTIALITY & REPORT DATA
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Minimize, encrypt, and never over-promise confidentiality
          </h1>
        </div>

        {/* Table Container */}
        <div className="w-full border-t border-b border-[#DCD6C8]">
          <div className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
            <div className="md:col-span-4">Topic</div>
            <div className="md:col-span-8">Requirement</div>
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-start ${
                index !== rows.length - 1 ? "border-b border-[#DCD6C8]" : ""
              }`}
            >
              <div className="md:col-span-4 text-sm font-semibold text-[#0b1329] tracking-tight mb-2 md:mb-0">
                {row.topic}
              </div>
              <div className="md:col-span-8 text-sm text-gray-600 font-light leading-relaxed">
                {row.requirement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
