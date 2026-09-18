import React from "react";

interface CapturedItem {
  text: string;
}

const capturedItems: CapturedItem[] = [
  { text: "Authentication and authorization outcomes, including denials" },
  { text: "Privileged and administrative actions" },
  { text: "Access to data classified as sensitive, with recorded purpose" },
  { text: "Configuration and policy changes with actor and version" },
  { text: "Export events with destination and basis" },
  { text: "Integration and service-principal activity" },
];

const detectionPrinciples: CapturedItem[] = [
  { text: "Alerting on anomalous privileged activity" },
  { text: "Segregation-conflict attempts surfaced, not silently denied" },
  { text: "Integration failure isolated rather than cascading" },
  { text: "Retention aligned to the evidence model" },
];

export default function SecurityTelemetry() {
  return (
    <section className="w-full bg-[#F7F5F0] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[1px] bg-[#C9B07A]"></span>
              <span className="text-[#C9B07A] text-[11px] font-semibold tracking-widest uppercase font-mono">
                SECURITY TELEMETRY, DETECTION AND RESPONSE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.15]">
              Security events are evidence, not just logs
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              Security decisions link to the same audit and evidence systems
              that carry governance decisions, so a security question and a
              governance question resolve against one record.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Card 1: What is Captured */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm flex flex-col h-full">
            <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#9CA3AF] mb-6">
              WHAT IS CAPTURED
            </h3>
            <ul className="space-y-3">
              {capturedItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-[13px] text-[#4B5563] leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9B07A] shrink-0 mt-1.5"></span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Detection Principles */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm flex flex-col h-full">
            <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#9CA3AF] mb-6">
              DETECTION PRINCIPLES
            </h3>
            <ul className="space-y-3">
              {detectionPrinciples.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-[13px] text-[#4B5563] leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9B07A] shrink-0 mt-1.5"></span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Not Claimed (Custom bg #F6EDD9) */}
          <div className="bg-[#F6EDD9] rounded-2xl p-8 border border-[#E5E7EB] shadow-sm flex flex-col h-full">
            <h3 className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#7A6635] mb-6">
              NOT CLAIMED
            </h3>
            <p className="text-[14px] text-[#4B5563] leading-relaxed">
              No claim of complete detection coverage, guaranteed detection
              time, or continuous 24/7 monitored SOC is made on this page.
              Operational detail is confirmed in security review for your
              deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
