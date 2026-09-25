import React from "react";

export default function SpecialCategorySection() {
  return (
    <section id="special" className="py-5 sm:py-[26px] flex flex-col gap-3 sm:gap-[11.3px] border-t border-[#DCD6C8] scroll-mt-28">
      {/* Heading */}
      <h2
        className="text-[17px] sm:text-[18px] font-bold text-[#16223A] tracking-[-0.01em]"
        style={{
          fontFamily: "Georgia, serif",
          lineHeight: "28.8px",
        }}
      >
        Special-Category / Criminal-Offence Data
      </h2>

      {/* Description */}
      <div className="flex flex-col gap-3 sm:gap-[14px]">
        <p
          className="text-[13px] sm:text-[13.5px] font-normal text-[#4B5872] leading-[20px] sm:leading-[21.6px]"
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
          }}
        >
          Conditional and Legal-controlled. If not applicable, this section is omitted or renders an approved neutral statement — it never claims &quot;none&quot; without confirmation.
        </p>

        {/* Conditional Note Box */}
        <div className="w-full bg-[#EFE8D8] border-l-[3px] border-[#A8843A] rounded-[6px] px-3.5 sm:px-4 py-2.5 sm:py-[11.5px]">
          <p
            className="text-[11px] sm:text-[11.5px] italic text-[#4B5872] leading-[17px] sm:leading-[18.4px]"
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
            }}
          >
            The template never infers the legal condition from the category alone — purpose, basis, and condition all require exact Legal-approved wording.
          </p>
        </div>
      </div>
    </section>
  );
}
