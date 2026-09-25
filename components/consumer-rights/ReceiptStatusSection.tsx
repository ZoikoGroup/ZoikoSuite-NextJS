"use client"
import React, { useState } from "react";

export default function ReceiptStatusSection() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const statuses = [
    {
      title: "Submitted",
      description:
        "Reference ID, timestamp, request type, contact channel, next step.",
    },
    {
      title: "Verification needed",
      description:
        "Explains exactly what is needed and why; secure action link.",
    },
    {
      title: "Received",
      description: "Confirms intake and routing.",
    },
    {
      title: "In review",
      description:
        "Being evaluated/fulfilled — no misleading progress percentage.",
    },
    {
      title: "Action required",
      description: "Specific user action with deadline if applicable.",
    },
    {
      title: "Extended",
      description:
        "More time needed; reason/timing shown only after Legal validation.",
    },
    {
      title: "Partially fulfilled",
      description:
        "Separates fulfilled items from withheld/excepted items; explains next steps.",
    },
    {
      title: "Fulfilled",
      description: "Summarizes outcome and secure delivery/access method.",
    },
    {
      title: "Denied",
      description:
        "Plain-language reason category, legal basis/reference if approved, and appeal path where applicable.",
    },
    {
      title: "Withdrawn",
      description:
        "Confirms withdrawal and what records of the request are retained.",
    },
    {
      title: "Closed",
      description: "Closure reason and support path.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            RECEIPT, REFERENCE & STATUS EXPERIENCE
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight max-w-3xl">
            Immediate trust after submission
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {statuses.map((status, index) => {
            const isSelected = selectedCard === status.title;
            return (
              <div
                key={index}
                onClick={() => setSelectedCard(status.title)}
                style={{ borderRadius: "12px" }}
                className={`bg-white border p-6 flex flex-col justify-between shadow-sm cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-[#0b1329] ring-1 ring-[#0b1329]"
                    : "border-[#DCD6C8] hover:border-[#A8843A]"
                }`}
              >
                <div>
                  <h2 className="text-base font-semibold text-[#0b1329] tracking-tight mb-2">
                    {status.title}
                  </h2>
                  <p className="text-gray-600 font-light leading-relaxed text-[14px]">
                    {status.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
