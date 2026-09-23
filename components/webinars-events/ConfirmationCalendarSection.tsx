import React from "react";

export default function ConfirmationCalendarSection() {
  return (
    <section className="w-full bg-[#f7f5f0] py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <span className="font-mono text-[11px] font-normal tracking-[0.1em] text-[#a07a2e] block mb-2">
            06 / CONFIRMATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[33px] font-semibold text-[#16262f] tracking-tight">
            Confirmation &amp; calendar
          </h2>
        </div>

        {/* Confirmation & Calendar Showcase Visual */}
        <div className="w-full rounded-xl overflow-hidden border border-[#dbe3e8] bg-white shadow-sm">
          <img
            src="/webinars-events/confirmation-calendar.png"
            alt="Confirmation and Calendar Template"
            className="w-full h-auto object-contain block"
          />
        </div>
      </div>
    </section>
  );
}
