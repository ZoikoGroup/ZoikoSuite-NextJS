import React from "react";

export default function RetentionSection() {
  return (
    <section id="retention" className="py-5 sm:py-[26px] pb-7 sm:pb-9 flex flex-col gap-2.5 sm:gap-3 border-t border-[#DCD6C8] scroll-mt-28">
      {/* Heading */}
      <h2
        className="text-[17px] sm:text-[18px] font-bold text-[#16223A] tracking-[-0.01em]"
        style={{
          fontFamily: "Georgia, serif",
          lineHeight: "28.8px",
        }}
      >
        Retention
      </h2>

      {/* Paragraph */}
      <p
        className="text-[13px] sm:text-[13.5px] font-normal text-[#4B5872] leading-[20px] sm:leading-[21.6px]"
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
        }}
      >
        Uses an approved duration only when Legal/data governance provides one; otherwise uses approved criteria. Retention can vary — the structured mapping is shown rather than one blanket duration. An unknown state blocks the required row rather than falling back to generic &quot;as long as necessary&quot; filler.
      </p>
    </section>
  );
}
