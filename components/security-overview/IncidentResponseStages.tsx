import React from "react";

interface StageItem {
  step: string;
  title: string;
  description: string;
}

const stages: StageItem[] = [
  {
    step: "01",
    title: "Detect",
    description:
      "Event identified through telemetry, report or disclosure route.",
  },
  {
    step: "02",
    title: "Triage",
    description: "Severity assessed against defined criteria, owner assigned.",
  },
  {
    step: "03",
    title: "Contain",
    description: "Containment actions taken and recorded as evidence.",
  },
  {
    step: "04",
    title: "Communicate",
    description:
      "Affected customers notified per contractual and regulatory obligations.",
  },
  {
    step: "05",
    title: "Review",
    description:
      "Post-incident review with findings and remediation tracked to closure.",
  },
];

const customerExpectations = [
  "Notification consistent with contractual and regulatory obligations",
  "A named point of contact for the duration",
  'Factual updates as assessment progresses, including "still assessing"',
  "Post-incident review findings where the customer is affected",
];

const notCommitted = [
  "A specific notification window — that belongs in a contract",
  "A guaranteed containment or resolution time",
  "Public disclosure of incidents not affecting the customer",
  "Any assertion about incident history",
];

export default function IncidentResponseStages() {
  return (
    <section className="w-full bg-[#08222F] py-20 px-6 lg:px-12 font-sans text-white">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                INCIDENT RESPONSE AND CUSTOMER COMMUNICATION
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Five stages, with communication defined in advance
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#93A2B8] text-[15px] leading-relaxed">
              What counts as a security event, how it moves, and what a customer
              should expect to hear — decided before an incident rather than
              during one.
            </p>
          </div>
        </div>

        {/* Stages Grid (5 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-white text-[#111827] rounded-2xl p-5 flex flex-col justify-between shadow-sm border border-white/10"
            >
              <div>
                <div className="text-[11px] font-mono font-bold text-[#C9B07A] mb-2">
                  {stage.step} · {stage.title}
                </div>
                <p className="text-[13px] text-[#4B5563] leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Two Large Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Panel 1: What a customer can expect */}
          <div className="bg-[#0F2D3D] border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#C9B07A] mb-6">
                WHAT A CUSTOMER CAN EXPECT
              </h3>
              <ul className="space-y-3.5">
                {customerExpectations.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[13px] text-[#C5D1DE] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9B07A] shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Panel 2: What is not committed here */}
          <div className="bg-[#0F2D3D] border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#C9B07A] mb-6">
                WHAT IS NOT COMMITTED HERE
              </h3>
              <ul className="space-y-3.5">
                {notCommitted.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[13px] text-[#C5D1DE] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9B07A] shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
