"use client";

import React from "react";

interface SystemCard {
  title: string;
  status: string;
  statusType:
    | "connected"
    | "limited"
    | "not-configured"
    | "source-unavailable"
    | "no-connection"
    | "authoritative";
  sourceOwner: string;
  subType: string;
  subTypeText: string;
}

const systems: SystemCard[] = [
  {
    title: "BSS / billing",
    status: "CONNECTED",
    statusType: "connected",
    sourceOwner: "Source owner: revenue ops · observed 14:02",
    subType: "REFERENCE ONLY",
    subTypeText: "",
  },
  {
    title: "OSS / service management",
    status: "LIMITED",
    statusType: "limited",
    sourceOwner: "Source owner: network ops · observed 13:40",
    subType: "REFERENCE ONLY",
    subTypeText: "",
  },
  {
    title: "Charging / mediation",
    status: "NOT CONFIGURED",
    statusType: "not-configured",
    sourceOwner: "Source owner: revenue ops",
    subType: "REFERENCE ONLY",
    subTypeText: "",
  },
  {
    title: "CRM",
    status: "CONNECTED",
    statusType: "connected",
    sourceOwner: "Source owner: commercial · observed 12:55",
    subType: "REFERENCE ONLY",
    subTypeText: "",
  },
  {
    title: "ERP / finance",
    status: "CONNECTED",
    statusType: "connected",
    sourceOwner: "Source owner: finance ops · observed 14:05",
    subType: "DERIVED",
    subTypeText: "",
  },
  {
    title: "HCM / workforce",
    status: "CONNECTED",
    statusType: "connected",
    sourceOwner: "Source owner: people ops · observed 12:10",
    subType: "DERIVED",
    subTypeText: "",
  },
  {
    title: "Contract repository",
    status: "SOURCE UNAVAILABLE",
    statusType: "source-unavailable",
    sourceOwner: "Source owner: legal ops · last valid 13:48 previous day",
    subType: "DERIVED",
    subTypeText: "",
  },
  {
    title: "Identity",
    status: "CONNECTED",
    statusType: "connected",
    sourceOwner: "Source owner: IT · observed 14:06",
    subType: "DERIVED",
    subTypeText: "",
  },
  {
    title: "Network / RAN / core",
    status: "NO CONNECTION",
    statusType: "no-connection",
    sourceOwner: "Source owner: network operations",
    subType: "NO INTEGRATION",
    subTypeText: "",
  },
  {
    title: "Provisioning / SIM lifecycle",
    status: "NO CONNECTION",
    statusType: "no-connection",
    sourceOwner: "Source owner: service platforms",
    subType: "NO INTEGRATION",
    subTypeText: "",
  },
  {
    title: "Policy, decision & evidence record",
    status: "CONNECTED",
    statusType: "connected",
    sourceOwner: "Source owner: ZoikoSuite · current",
    subType: "AUTHORITATIVE",
    subTypeText: "",
  },
];

export default function IntegrationsAndCoexistenceSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-4 h-[1px]"
                style={{ backgroundColor: "#C59B3F" }}
              ></span>
              <span
                className="text-[12px] font-semibold tracking-widest uppercase font-mono"
                style={{ color: "#C59B3F" }}
              >
                INTEGRATIONS AND COEXISTENCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1]">
              Source ownership, stated per system
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              Every connected system declares whether ZoikoSuite is
              authoritative, derived or reference-only for it.
            </p>
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {systems.map((item, index) => {
            // Determine border color for card based on status/type
            let borderColor = "border-gray-200";
            if (
              item.statusType === "no-connection" ||
              item.statusType === "source-unavailable"
            ) {
              borderColor = "border-[#C29B9B]";
            } else if (item.statusType === "authoritative") {
              borderColor = "border-[#0F476A]";
            }

            // Determine badge style for top-right status
            let badgeStyle = "bg-[#EAF5F0] text-[#1E7A5A] border-[#1E7A5A]/30";
            if (item.status === "LIMITED") {
              badgeStyle = "bg-[#FBF2DF] text-[#9C6B12] border-[#9C6B12]/30";
            } else if (item.status === "NOT CONFIGURED") {
              badgeStyle = "bg-gray-100 text-gray-500 border-gray-300";
            } else if (
              item.status === "SOURCE UNAVAILABLE" ||
              item.status === "NO CONNECTION"
            ) {
              badgeStyle = "bg-[#FCE8E6] text-[#A83232] border-[#A83232]/30";
            }

            // Determine inner pill style for subType
            let innerPillStyle = "bg-[#F0F4F8] text-[#0F476A] border-[#D1E0EE]";
            if (item.subType === "NO INTEGRATION") {
              innerPillStyle = "bg-[#FCE8E6] text-[#A83232] border-[#F2C6C2]";
            } else if (item.subType === "AUTHORITATIVE") {
              innerPillStyle = "bg-[#0F476A] text-white border-[#0F476A]";
            }

            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-5 border ${borderColor} shadow-sm flex flex-col justify-between gap-4 font-mono`}
              >
                {/* Top Row: Title & Status Badge */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[13px] font-bold text-[#08222F] font-sans">
                    {item.title}
                  </h3>
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold border tracking-wider whitespace-nowrap ${badgeStyle}`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Middle: Source Owner */}
                <p className="text-[11px] text-gray-500">{item.sourceOwner}</p>

                {/* Bottom Row: SubType Box */}
                <div>
                  <div
                    className={`w-full text-start px-3 py-1.5 rounded text-[10px] font-bold border tracking-wider ${innerPillStyle}`}
                  >
                    {item.subType}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
