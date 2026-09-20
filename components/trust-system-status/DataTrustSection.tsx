"use client";

import React from "react";

const cards = [
  {
    label: "Freshness state",
    text: "Live · Delayed · Stale · Unknown. Stale/unknown suppresses confident \"operational\" language and shows the last verified timestamp instead.",
  },
  {
    label: "Public scope",
    text: "Shared multi-tenant services and published regions. Beta/private preview and dedicated environments are explicitly excluded.",
  },
  {
    label: "Methodology",
    text: "How component status is derived and how incidents are published.",
    linkText: "Read methodology →",
  },
];

export default function DataTrustSection() {
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
              02 / DATA TRUST
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold leading-10"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#0D2636",
              }}
            >
              Status freshness, scope &amp; methodology
            </h2>
            <p
              className="text-base md:text-lg font-normal leading-7 max-w-[633px]"
              style={{
                fontFamily: "'Archivo', sans-serif",
                color: "#3E5A6B",
              }}
            >
              &quot;Operational&quot; without freshness and scope is incomplete.
              When telemetry is stale or unknown, this page says so — it never
              silently preserves the last green state.
            </p>
          </div>

          {/* Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl px-7 py-7 flex flex-col gap-2.5"
                style={{ border: "1px solid #D6DEE3" }}
              >
                <span
                  className="text-xs font-normal uppercase tracking-wide"
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
                  {card.linkText && (
                    <>
                      {" "}
                      <a
                        href="#"
                        className="inline-block font-semibold border-b border-black hover:opacity-75 transition-opacity"
                        style={{
                          fontFamily: "'Archivo', sans-serif",
                          color: "#173D52",
                        }}
                      >
                        {card.linkText}
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
