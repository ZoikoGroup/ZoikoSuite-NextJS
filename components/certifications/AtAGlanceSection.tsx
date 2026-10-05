"use client"
import React from "react";

interface AtAGlanceSectionProps {
  onSelectFilter?: (filter: string) => void;
  selectedFilter?: string;
}

export default function AtAGlanceSection({
  onSelectFilter,
  selectedFilter,
}: AtAGlanceSectionProps) {
  const metrics = [
    {
      value: "0",
      label: "Independent\ncertifications",
      filterKey: "certifications",
    },
    {
      value: "0",
      label: "Attestations / audit\nreports",
      filterKey: "attestations",
    },
    {
      value: "0",
      label: "Independent\nassessments",
      filterKey: "assessments",
    },
    {
      value: "4",
      label: "Readiness / in progress",
      filterKey: "readiness",
    },
    {
      value: "2",
      label: "Evidence types\navailable",
      filterKey: "evidence",
    },
    {
      value: "—",
      label: "Upcoming lifecycle\nevents",
      filterKey: "lifecycle",
    },
  ];

  return (
    <section className="w-full bg-color-white-solid py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-6 sm:px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
              <div className="w-5 h-px bg-color-orange-48" />
              <span className="text-color-orange-48 text-xs font-semibold font-['Inter'] tracking-wider uppercase">
                AT A GLANCE
              </span>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <h2 className="text-color-azure-12-4 text-2xl sm:text-3xl font-bold font-['Inter'] leading-tight">
                Current proof vs. readiness, in one scan.
              </h2>
            </div>
          </div>
          <div className="max-w-md pt-2">
            <p className="text-color-grey-44 text-sm sm:text-base font-normal font-['Inter'] leading-6">
              Each card filters the registry below — no hidden mismatch between
              the summary and the detail.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {metrics.map((metric, idx) => {
            const isSelected = selectedFilter === metric.filterKey;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectFilter?.(metric.filterKey)}
                className={`p-5 bg-color-white-solid rounded-xl border transition-all text-left flex flex-col justify-center items-center text-center cursor-pointer ${
                  isSelected
                    ? "border-color-orange-48 ring-2 ring-color-orange-48/20 bg-amber-50/20"
                    : "border-color-orange-87 hover:border-color-orange-48 hover:shadow-xs"
                }`}
              >
                <div className="text-color-azure-11 text-3xl font-extrabold font-['Inter'] mb-1">
                  {metric.value}
                </div>
                <div className="text-color-grey-44 text-xs font-normal font-['Inter'] leading-4 whitespace-pre-line">
                  {metric.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
