import React from "react";

const requestRows = [
  {
    element: "Primary route",
    requirement: "Consumer Rights Request / UK privacy request route — exact approved URL only.",
  },
  {
    element: "Sign-in",
    requirement: "Marketing account creation is never required; authentication only if the approved request process requires it.",
  },
  {
    element: "Verification",
    requirement: "High-level, privacy-preserving explanation only.",
  },
  {
    element: "Request receipt",
    requirement: "Controlled by the request system — no invented promise on this page.",
  },
];

export default function SubmitRequestSection() {
  return (
    <section id="requests" className="py-5 sm:py-[26px] flex flex-col gap-4 sm:gap-5 border-t border-[#DCD6C8] scroll-mt-28">
      {/* Heading */}
      <h2
        className="text-[17px] sm:text-[18px] font-bold text-[#16223A] tracking-[-0.01em]"
        style={{
          fontFamily: "Georgia, serif",
          lineHeight: "28.8px",
        }}
      >
        How to Submit a Privacy Request
      </h2>

      {/* Row Table */}
      <div className="w-full flex flex-col border-t border-[#DCD6C8]">
        {/* Table Header */}
        <div className="hidden sm:flex flex-row items-center gap-[18px] py-[13px] pb-[10px] border-b border-[#DCD6C8]">
          <div className="w-[190px] shrink-0 text-[12.5px] font-bold uppercase tracking-[0.0504em] text-[#4B5872]">
            Element
          </div>
          <div className="flex-1 text-[12.5px] font-bold uppercase tracking-[0.0504em] text-[#4B5872]">
            Requirement
          </div>
        </div>

        {/* Data Rows */}
        {requestRows.map((row, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-start gap-1 sm:gap-[18px] py-2.5 sm:py-[13px] border-b border-[#DCD6C8]"
          >
            <div className="w-full sm:w-[190px] shrink-0 text-[12px] sm:text-[12.5px] font-bold text-[#16223A] sm:text-[#4B5872] leading-[18px] sm:leading-[20px]">
              {row.element}
            </div>
            <div className="flex-1 text-[12px] sm:text-[12.5px] font-normal text-[#4B5872] leading-[19px] sm:leading-[20px]">
              {row.requirement}
            </div>
          </div>
        ))}
      </div>

      {/* Security Callout */}
      <div className="w-full bg-[#F6F1E6] border-l-[3px] border-[#A8843A] rounded-[4px] px-3.5 sm:px-[18px] py-3 sm:py-[14px]">
        <p
          className="text-[12px] sm:text-[12.5px] font-normal text-[#4B5872] leading-[18px] sm:leading-[20px]"
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
          }}
        >
          Security vulnerabilities route to the approved Security Disclosure channel, never to privacy request intake.
        </p>
      </div>
    </section>
  );
}
