import React from "react";

const rows = [
  {
    num: "01",
    title: "Policy",
    desc: "Required intent, responsibility, boundary.",
    link: "Policies",
    highlight: false,
  },
  {
    num: "02",
    title: "Standard",
    desc: "Mandatory implementation requirement.",
    link: "Policies / Security",
    highlight: false,
  },
  {
    num: "03",
    title: "Control",
    desc: "Technical/administrative mechanism implementing the requirement.",
    link: "Security Overview",
    highlight: false,
  },
  {
    num: "04",
    title: "Operational event",
    desc: "What actually happened when the control executed.",
    link: "Evidence Architecture",
    highlight: false,
  },
  {
    num: "05",
    title: "Test / validation",
    desc: "Control test, assessment, or shadow-mode validation.",
    link: "Evidence Architecture",
    highlight: false,
  },
  {
    num: "06",
    title: "Independent proof",
    desc: "Certification, attestation, or audit summary where verified.",
    link: "Certifications",
    highlight: true,
  },
];

export default function EvidenceModelSection() {
  return (
    <section className="w-full bg-[#F7F5F0] font-sans py-20 md:py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span
            className="self-stretch text-[#A7852B] text-xs font-normal leading-4 tracking-wider"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            07 / EVIDENCE MODEL
          </span>
          <h2
            className="self-stretch text-[#0D2636] text-3xl md:text-4xl font-semibold leading-10"
            style={{ fontFamily: "'Archivo', sans-serif" }}
          >
            Policy → control → evidence
          </h2>
          <div className="w-full max-w-[720px]">
            <p
              className="text-[#3E5A6B] text-base md:text-lg font-normal leading-7"
              style={{ fontFamily: "'Archivo', sans-serif" }}
            >
              Essential to avoid &quot;we have a policy, therefore the control works.&quot; A published policy
              <br />
              proves an approved rule exists. The evidence trail shows whether the related
              <br />
              process operated. Independent assurance is shown separately.
            </p>
          </div>
        </div>

        {/* Ladder rows */}
        <div className="flex flex-col gap-2.5">
          {rows.map((row) => (
            <div
              key={row.num}
              className={`self-stretch px-4 py-4 rounded-[10px] border-l-4 border-r border-t border-b flex items-center gap-4 ${
                row.highlight
                  ? "bg-[#F6EDD9] border-l-[#D4943A] border-[#D4943A]"
                  : "bg-white border-l-[#0F476A] border-[#D6DEE3]"
              }`}
            >
              <div className="w-3.5 pb-[0.59px] inline-flex flex-col justify-start items-start">
                <span
                  className="text-[#A7852B] text-xs font-normal leading-4 tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {row.num}
                </span>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-[3px]">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <span
                    className="self-stretch text-[#0D2636] text-base font-semibold leading-4"
                    style={{ fontFamily: "'Archivo', sans-serif" }}
                  >
                    {row.title}
                  </span>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <span
                    className="self-stretch text-[#3E5A6B] text-xs font-normal leading-5"
                    style={{ fontFamily: "'Archivo', sans-serif" }}
                  >
                    {row.desc}
                  </span>
                </div>
              </div>
              <div className="w-14 pb-[0.59px] inline-flex flex-col justify-end items-end">
                <span
                  className="text-right text-[#4E6E7E] text-xs font-normal leading-4"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {row.link}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}