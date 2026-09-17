"use client";

import React from "react";

interface SystemCard {
  name: string;
  ownerText: string;
  status:
    | "CONNECTED"
    | "LIMITED"
    | "REQUIRES SETUP"
    | "NOT CONFIGURED"
    | "SOURCE UNAVAILABLE"
    | "NO CONNECTION";
  statusVariant: "green" | "yellow" | "gray" | "red";
  boxType: "DERIVED" | "REFERENCE ONLY" | "AUTHORITATIVE" | "NO INTEGRATION";
  isHighlighted?: boolean;
}

const SYSTEMS: SystemCard[] = [
  {
    name: "POS",
    ownerText: "Source owner: retail ops · observed 14:02",
    status: "CONNECTED",
    statusVariant: "green",
    boxType: "REFERENCE ONLY",
  },
  {
    name: "E-commerce platform",
    ownerText: "Source owner: digital · observed 13:58",
    status: "CONNECTED",
    statusVariant: "green",
    boxType: "REFERENCE ONLY",
  },
  {
    name: "OMS",
    ownerText: "Source owner: fulfilment · observed 09:40",
    status: "LIMITED",
    statusVariant: "yellow",
    boxType: "REFERENCE ONLY",
  },
  {
    name: "WMS",
    ownerText: "Source owner: logistics · not yet observed",
    status: "REQUIRES SETUP",
    statusVariant: "yellow",
    boxType: "REFERENCE ONLY",
  },
  {
    name: "Marketplace",
    ownerText: "Source owner: digital · observed 11:22",
    status: "LIMITED",
    statusVariant: "yellow",
    boxType: "REFERENCE ONLY",
  },
  {
    name: "ERP / finance",
    ownerText: "Source owner: finance ops · observed 14:05",
    status: "CONNECTED",
    statusVariant: "green",
    boxType: "DERIVED",
  },
  {
    name: "HCM / workforce",
    ownerText: "Source owner: people ops · observed 12:18",
    status: "CONNECTED",
    statusVariant: "green",
    boxType: "DERIVED",
  },
  {
    name: "Contract repository",
    ownerText: "Source owner: legal ops · last valid 13:48 previous day",
    status: "SOURCE UNAVAILABLE",
    statusVariant: "red",
    boxType: "DERIVED",
  },
  {
    name: "Identity",
    ownerText: "Source owner: IT · observed 14:06",
    status: "CONNECTED",
    statusVariant: "green",
    boxType: "DERIVED",
  },
  {
    name: "Payment processing",
    ownerText: "Source owner: payment provider",
    status: "NO CONNECTION",
    statusVariant: "red",
    boxType: "NO INTEGRATION",
  },
  {
    name: "Policy, decision & evidence record",
    ownerText: "Source owner: ZoikoSuite · current",
    status: "CONNECTED",
    statusVariant: "green",
    boxType: "AUTHORITATIVE",
    isHighlighted: true,
  },
];

export default function RetailIntegrationsSection() {
  return (
    <section className="w-full bg-white text-[#08222F] py-20 px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
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
                INTEGRATIONS AND SYSTEM COEXISTENCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15]">
              Source ownership, stated per system
            </h2>
          </div>

          {/* Right Subtitle Area */}
          <div className="lg:col-span-5 flex items-start">
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              ZoikoSuite positions around the incumbent commerce stack. Every
              connected system declares its authority position.
            </p>
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SYSTEMS.map((item, index) => {
            let badgeClass = "bg-[#EFF8F4] text-[#1E7A5A] border-[#B6D8C7]";
            if (item.statusVariant === "yellow") {
              badgeClass = "bg-[#F6EDD9] text-[#A07A2E] border-[#C9B07A]";
            } else if (item.statusVariant === "red") {
              badgeClass = "bg-[#F9EDED] text-[#8A3B3B] border-[#DFA9A9]";
            } else if (item.statusVariant === "gray") {
              badgeClass = "bg-[#EEF2F5] text-[#5A6D79] border-[#DBE3E8]";
            }

            let innerBoxStyle = "bg-[#EBF3F8] text-[#2A6386] border-[#DBE3E8]";
            if (item.boxType === "AUTHORITATIVE") {
              innerBoxStyle = "bg-[#0F476A] text-white border-[#0F476A]";
            } else if (item.boxType === "NO INTEGRATION") {
              innerBoxStyle = "bg-[#EEF2F5] text-[#6B2626] border-[#DFA9A9]";
            }

            const isPaymentCard = item.name === "Payment processing";

            return (
              <div
                key={index}
                className={`rounded-xl p-5 shadow-sm border flex flex-col justify-between ${
                  isPaymentCard
                    ? "bg-[#FDF6F6] border-[#DFA9A9]"
                    : "bg-white border-[#DBE3E8]"
                } ${
                  item.isHighlighted
                    ? "border-[#2A6386] ring-1 ring-[#2A6386]"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[14px] font-bold text-[#0F172A]">
                      {item.name}
                    </h3>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${badgeClass}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-gray-500 mb-4">
                    {item.ownerText}
                  </p>
                </div>

                <div
                  className={`px-3 py-2 rounded-lg text-[10px] font-mono font-bold tracking-wider border text-center ${innerBoxStyle}`}
                >
                  {item.boxType}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
