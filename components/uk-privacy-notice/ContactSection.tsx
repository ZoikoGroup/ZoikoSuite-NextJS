import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-5 sm:py-[26px] pb-7 sm:pb-9 flex flex-col gap-2.5 sm:gap-3 border-t border-[#DCD6C8] scroll-mt-28">
      {/* Heading */}
      <h2
        className="text-[17px] sm:text-[18px] font-bold text-[#16223A] tracking-[-0.01em]"
        style={{
          fontFamily: "Georgia, serif",
          lineHeight: "28.8px",
        }}
      >
        Contact
      </h2>

      {/* Paragraph */}
      <p
        className="text-[13px] sm:text-[13.5px] font-normal text-[#4B5872] leading-[20px] sm:leading-[21.6px]"
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
        }}
      >
        Uses the approved public privacy contact route/details only — this page never invents a privacy@ email, postal address, DPO name, or phone number.
      </p>
    </section>
  );
}
