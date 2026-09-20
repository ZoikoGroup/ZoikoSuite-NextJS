"use client";

import React from "react";

const maintenanceItems = [
  {
    statusLabel: "In progress",
    statusColor: "#3E7A9B",
    statusBg: "#EDF3F7",
    dotColor: "#3E7A9B",
    title: "Document services storage migration",
    lines: [
      "Window: 15 Sep 2026, 07:00–09:00 UTC · Affected: Document / File Services ·",
      "Expected impact: intermittent read-only mode",
    ],
  },
  {
    statusLabel: "Scheduled",
    statusColor: "#3E7A9B",
    statusBg: "#EDF3F7",
    dotColor: "#3E7A9B",
    title: "Governance & Policy service upgrade",
    lines: [
      "Window: 21 Sep 2026, 02:00–03:30 UTC · Affected: Governance & Policy · Expected",
      "impact: none expected",
    ],
  },
];

export default function ScheduledMaintenanceSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] px-0 md:px-12 flex flex-col justify-start items-start gap-12">
        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
            <span className="text-[#D4943A] text-xs font-normal font-['JetBrains_Mono'] leading-4 tracking-wider">
              06 / MAINTENANCE
            </span>
          </div>
          <div className="self-stretch pt-[0.70px] flex flex-col justify-start items-start">
            <h2 className="text-[#0D2636] text-3xl md:text-4xl font-semibold font-['Archivo'] leading-10">
              Scheduled maintenance
            </h2>
          </div>
          <div className="w-full max-w-[633.16px] flex flex-col justify-start items-start">
            <p className="text-[#3E5A6B] text-base md:text-lg font-normal font-['Archivo'] leading-7">
              Distinct from incidents — visible before the window and retained historically after
              <br />
              completion.
            </p>
          </div>
        </div>

        {/* Maintenance Cards Grid */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {maintenanceItems.map((item, idx) => (
            <div
              key={idx}
              className="w-full h-44 relative bg-white rounded-2xl overflow-hidden"
              style={{
                borderLeft: `4px solid ${item.statusColor}`,
                borderTop: "none",
                borderRight: "none",
                borderBottom: "none",
              }}
            >
              {/* Status Badge */}
              <div
                className="px-2.5 py-[5px] left-[32px] top-[29px] absolute rounded-[5px] inline-flex justify-start items-center gap-1.5"
                style={{
                  backgroundColor: item.statusBg,
                  border: `1px solid ${item.statusColor}`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-[3px]"
                  style={{ backgroundColor: item.dotColor }}
                />
                <span
                  className="justify-center text-xs font-medium font-['JetBrains_Mono'] uppercase leading-4 tracking-wide"
                  style={{ color: item.statusColor }}
                >
                  {item.statusLabel}
                </span>
              </div>

              {/* Title */}
              <div className="w-[543px] max-w-[calc(100%-64px)] left-[32px] top-[68.80px] absolute inline-flex flex-col justify-start items-start">
                <h3 className="justify-center text-[#0D2636] text-lg font-semibold font-['Archivo'] leading-5">
                  {item.title}
                </h3>
              </div>

              {/* Details */}
              <div className="w-[543px] max-w-[calc(100%-64px)] pb-[0.58px] left-[32px] top-[100.66px] absolute inline-flex flex-col justify-start items-start">
                <p className="justify-center text-[#3E5A6B] text-sm font-normal font-['Archivo'] leading-6">
                  {item.lines.map((line, lineIdx) => (
                    <React.Fragment key={lineIdx}>
                      {line}
                      {lineIdx < item.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}