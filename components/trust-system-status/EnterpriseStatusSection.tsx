"use client";

import React from "react";

const enterpriseCards = [
  {
    label: "Dedicated environment",
    text: "Shared dependencies shown above; your dedicated environment may have separate status.",
  },
  {
    label: "Single-tenant enterprise",
    text: "Customer-specific environments are never exposed publicly.",
  },
  {
    label: "Sovereign / customer-controlled",
    text: "Contracted private operating-status channel applies.",
  },
];

export default function EnterpriseStatusSection() {
  return (
    <section className="w-full bg-white font-sans py-16 md:py-20 px-6 md:px-14">
      <div className="max-w-[1320px] mx-auto px-0 md:px-12">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex flex-col gap-3.5">
              <span
                className="text-xs font-normal tracking-wider"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#D4943A",
                }}
              >
                11 / ENTERPRISE
              </span>
              <h2
                className="text-3xl md:text-4xl font-semibold leading-10"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "#0D2636",
                }}
              >
                Enterprise &amp; environment-specific
                <br className="hidden md:block" />
                status
              </h2>
            </div>
            <p
              className="text-base md:text-lg font-normal leading-7 max-w-[633px] md:text-right md:pl-14"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#3E5A6B",
              }}
            >
              Public status cannot safely represent every dedicated or
              customer-controlled environment — so this page says so, clearly.
            </p>
          </div>

          {/* Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {enterpriseCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl px-7 py-7 h-32 flex flex-col justify-start"
                style={{ border: "1px solid #D6DEE3" }}
              >
                <span
                  className="text-xs font-normal uppercase tracking-wide mb-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#3E5A6B",
                  }}
                >
                  {card.label}
                </span>
                <p
                  className="text-sm font-normal leading-6"
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    color: "#0D2636",
                  }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
