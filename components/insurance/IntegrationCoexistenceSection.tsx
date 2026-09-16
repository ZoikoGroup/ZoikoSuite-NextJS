"use client";

import React from "react";

interface ObjectCard {
  title: string;
  status: string;
  statusVariant: "green" | "yellow" | "gray" | "red";
  sourceOwner: string;
  observation: string;
  accessType: "REFERENCE ONLY" | "DERIVED";
}

const OBJECTS: ObjectCard[] = [
  {
    title: "Policy system",
    status: "CONNECTED",
    statusVariant: "green",
    sourceOwner: "Source owner: policy ops",
    observation: "observed 14:02",
    accessType: "REFERENCE ONLY",
  },
  {
    title: "Claims system",
    status: "CONNECTED",
    statusVariant: "green",
    sourceOwner: "Source owner: claims ops",
    observation: "observed 13:58",
    accessType: "REFERENCE ONLY",
  },
  {
    title: "Billing",
    status: "LIMITED",
    statusVariant: "yellow",
    sourceOwner: "Source owner: finance ops",
    observation: "observed 09:40",
    accessType: "REFERENCE ONLY",
  },
  {
    title: "CRM",
    status: "REQUIRES SETUP",
    statusVariant: "yellow",
    sourceOwner: "Source owner: distribution",
    observation: "not yet observed",
    accessType: "REFERENCE ONLY",
  },
  {
    title: "Data / BI",
    status: "NOT CONFIGURED",
    statusVariant: "gray",
    sourceOwner: "Source owner: data platform",
    observation: "",
    accessType: "REFERENCE ONLY",
  },
  {
    title: "Finance system",
    status: "CONNECTED",
    statusVariant: "green",
    sourceOwner: "Source owner: controller",
    observation: "observed 14:05",
    accessType: "DERIVED",
  },
  {
    title: "HCM / payroll",
    status: "CONNECTED",
    statusVariant: "green",
    sourceOwner: "Source owner: people ops",
    observation: "observed 12:18",
    accessType: "DERIVED",
  },
  {
    title: "Identity",
    status: "CONNECTED",
    statusVariant: "green",
    sourceOwner: "Source owner: IT",
    observation: "observed 14:06",
    accessType: "DERIVED",
  },
  {
    title: "Document store",
    status: "SOURCE UNAVAILABLE",
    statusVariant: "red",
    sourceOwner: "Source owner: legal ops",
    observation: "last valid 13:48 previous day",
    accessType: "DERIVED",
  },
];

export default function IntegrationCoexistenceSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0F172A] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left Title Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-xs font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                INTEGRATION AND COEXISTENCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Source ownership, stated per object
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 lg:pt-6 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Every connected object declares whether ZoikoSuite is
              authoritative, derived or reference-only for it — with source
              owner, last observation and integration health.
            </p>
          </div>
        </div>

        {/* Cards Grid (3 columns x 3 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OBJECTS.map((item, index) => {
            let badgeStyle = "bg-green-50 text-green-700 border-green-200";
            if (item.statusVariant === "yellow") {
              badgeStyle = "bg-amber-50 text-amber-800 border-amber-200";
            } else if (item.statusVariant === "gray") {
              badgeStyle = "bg-gray-100 text-gray-600 border-gray-200";
            } else if (item.statusVariant === "red") {
              badgeStyle = "bg-red-50 text-red-700 border-red-200";
            }

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 flex flex-col justify-between shadow-sm border border-[#DBE3E8] hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Top row: Title + Status badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-sm lg:text-base font-bold text-[#0F172A]">
                      {item.title}
                    </h3>
                    <span
                      className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded border ${badgeStyle} shrink-0`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Owner & observation */}
                  <p className="text-xs font-mono text-gray-500 mb-4">
                    {item.sourceOwner}
                    {item.observation && ` · ${item.observation}`}
                  </p>
                </div>

                {/* Bottom Pill/Box showing Reference Only or Derived */}
                <div className="bg-[#EEF2F5] border border-[#DBE3E8] rounded-md px-2 pb-1">
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-[#5A6D79]">
                    {item.accessType}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
