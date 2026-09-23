import React from "react";

const commitments = [
  {
    title: "One accountable route",
    lines: [
      "Customers have a clear route for support even",
      "when partner delivery is involved.",
    ],
  },
  {
    title: "No responsibility ping-pong",
    lines: [
      "Support identifies ownership internally before",
      "sending the customer elsewhere.",
    ],
  },
  {
    title: "Contract clarity",
    lines: [
      "ZoikoSuite subscription/support terms stay",
      "separate from partner service agreements.",
    ],
  },
  {
    title: "Change transparency",
    lines: [
      "Affected customer teams are notified when a",
      "partner relationship or supported region changes.",
    ],
  },
  {
    title: "Exit continuity",
    lines: [
      "Partner suspension or termination triggers",
      "replacement/transition planning for affected",
      "customers.",
    ],
  },
  {
    title: "Expansion, evidence-led",
    lines: [
      "Partner discovery supports new regions and",
      "workflows, but status stays scope-specific.",
    ],
  },
];

export default function CustomerProtectionSection() {
  return (
    <section className="w-full bg-[#EFE8D8] py-16 lg:py-20 px-6 md:px-12 lg:px-20 font-sans border-b border-[#DCD6C8]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <span className="text-[#A8843A] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
          CUSTOMER PROTECTION &amp; ACCOUNTABILITY
        </span>

        <h2 className="text-3xl md:text-[32px] font-serif font-bold text-[#16223A] leading-tight tracking-tight max-w-3xl">
          <span className="block whitespace-normal lg:whitespace-nowrap">
            One accountable route, even when partners are
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            involved
          </span>
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {commitments.map((commitment) => (
            <div
              key={commitment.title}
              className="bg-white rounded-lg border border-[#DCD6C8] p-5 flex flex-col gap-2 transition-shadow hover:shadow-xs"
            >
              <h3 className="text-[#16223A] text-sm font-bold leading-6">
                {commitment.title}
              </h3>
              <p className="text-[#4B5872] text-xs font-normal leading-5">
                {commitment.lines.map((line, idx) => (
                  <span key={idx} className="block whitespace-normal lg:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
