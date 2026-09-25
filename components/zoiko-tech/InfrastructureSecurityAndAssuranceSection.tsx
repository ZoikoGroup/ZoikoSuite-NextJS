import React from "react";

export default function InfrastructureSecurityAndAssuranceSection() {
  const rows = [
    {
      topic: "Cloud / digital infrastructure",
      pageMaySay:
        "Zoiko Tech builds infrastructure capabilities for Zoiko platforms and regulated workloads.",
      canonicalProof: "ZoikoSuite architecture + Data Residency",
    },
    {
      topic: "Security & identity",
      pageMaySay:
        "Security, identity, and assurance are explicit Zoiko Tech capability areas.",
      canonicalProof: "Security Overview",
    },
    {
      topic: "Compliance",
      pageMaySay:
        "ZoikoSuite uses status-qualified compliance and evidence language.",
      canonicalProof: "Compliance Overview",
    },
    {
      topic: "Certification / attestation",
      pageMaySay:
        "Only verified records with exact scope, issuer, and validity may render.",
      canonicalProof: "Certifications",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            INFRASTRUCTURE, SECURITY & ASSURANCE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            Technical breadth — without becoming a second Trust Center
          </h1>
        </div>

        {/* Table Section */}
        <div className="w-full flex flex-col border-t border-gray-300">
          {/* Table Header */}
          <div className="w-full pb-4 pt-4 border-b border-gray-300 hidden md:flex items-center text-xs font-semibold tracking-wider text-gray-500 uppercase">
            <div className="w-3/12">TOPIC</div>
            <div className="w-5/12">THIS PAGE MAY SAY</div>
            <div className="w-4/12">CANONICAL PROOF SURFACE</div>
          </div>

          {/* Table Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0"
            >
              {/* Topic */}
              <div className="w-full md:w-3/12 text-[#0b1329] text-base font-semibold tracking-tight pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Topic
                </span>
                {row.topic}
              </div>

              {/* This Page May Say */}
              <div className="w-full md:w-5/12 text-gray-600 font-light leading-relaxed text-[16.5px] pr-4">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  This Page May Say
                </span>
                {row.pageMaySay}
              </div>

              {/* Canonical Proof Surface */}
              <div className="w-full md:w-4/12 text-gray-600 font-light leading-relaxed text-[16.5px]">
                <span className="md:hidden text-xs font-semibold text-gray-400 uppercase block mb-1">
                  Canonical Proof Surface
                </span>
                {row.canonicalProof}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
