"use client";

import React from "react";

const maintenanceItems = [
  {
    statusLabel: "In progress",
    statusColor: "#3E7A9B",
    statusBg: "#EDF3F7",
    statusBorder: "#3E7A9B",
    dotColor: "#3E7A9B",
    title: "Document services storage migration",
    details:
      "Window: 15 Sep 2026, 07:00–09:00 UTC · Affected: Document / File Services · Expected impact: intermittent read-only mode",
  },
  {
    statusLabel: "Scheduled",
    statusColor: "#5A6D79",
    statusBg: "#F0EEEA",
    statusBorder: "#5A6D79",
    dotColor: "#5A6D79",
    title: "Governance & Policy service upgrade",
    details:
      "Window: 21 Sep 2026, 02:00–03:30 UTC · Affected: Governance & Policy · Expected impact: none expected",
  },
];

export default function ScheduledMaintenanceSection() {
  return (
    <section className="w-full bg-[#F2F0EB] font-sans py-20 md:py-24 px-6 md:px-14">
      <div className="max-w-[1320px] mx-auto px-0 md:px-12">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <span
              className="text-xs font-normal tracking-wider"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#D4943A",
              }}
            >
              06 / MAINTENANCE
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold leading-10"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#0D2636",
              }}
            >
              Scheduled maintenance
            </h2>
            <p
              className="text-base md:text-lg font-normal leading-7 max-w-[633px]"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#3E5A6B",
              }}
            >
              Distinct from incidents — visible before the window and retained
              historically after completion.
            </p>
          </div>

          {/* Maintenance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {maintenanceItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl h-44 relative overflow-hidden"
                style={{
                  borderLeft: `4px solid ${item.statusColor}`,
                  borderTop: `1px solid ${item.statusColor}`,
                  borderRight: `1px solid ${item.statusColor}`,
                  borderBottom: `1px solid ${item.statusColor}`,
                }}
              >
                {/* Status Badge */}
                <div className="absolute left-8 top-7">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-[5px] rounded-[5px] text-xs font-medium uppercase tracking-wide"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: item.statusColor,
                      backgroundColor: item.statusBg,
                      border: `1px solid ${item.statusBorder}`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: item.dotColor }}
                    />
                    {item.statusLabel}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute left-8 top-[69px]">
                  <h3
                    className="text-lg font-semibold leading-5"
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      color: "#0D2636",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Details */}
                <div className="absolute left-8 top-[101px] right-8">
                  <p
                    className="text-sm font-normal leading-6"
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      color: "#3E5A6B",
                    }}
                  >
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
