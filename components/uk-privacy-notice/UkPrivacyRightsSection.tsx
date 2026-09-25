import React from "react";

export default function UkPrivacyRightsSection() {
  return (
    <section id="rights" className="py-5 sm:py-[26px] flex flex-col gap-3 border-t border-[#DCD6C8] scroll-mt-28">
      {/* Heading */}
      <h2
        className="text-[17px] sm:text-[18px] font-bold text-[#16223A] tracking-[-0.01em]"
        style={{
          fontFamily: "Georgia, serif",
          lineHeight: "28.8px",
        }}
      >
        UK Privacy Rights
      </h2>

      <div className="flex flex-col gap-3 sm:gap-[14px]">
        {/* Intro */}
        <p
          className="text-[13px] sm:text-[13.5px] font-normal text-[#4B5872] leading-[20px] sm:leading-[21.6px]"
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
          }}
        >
          Sourced from the Rights &amp; Requests Registry tied to this notice&apos;s current version.
        </p>

        {/* Rights List */}
        <div className="w-full flex flex-col pt-1 sm:pt-1.5">
          {/* Right Item 1 */}
          <div className="flex flex-col gap-1.5 py-3.5 sm:py-4 pb-[18.6px]">
            <h3
              className="text-[13.5px] sm:text-[14px] font-bold text-[#4B5872] leading-[20px] sm:leading-[22.4px]"
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
              }}
            >
              [ Exact Legal-approved right label ]
            </h3>
            <p className="text-[12px] sm:text-[12.5px] text-[#4B5872] leading-[19px] sm:leading-[20px]">
              <span className="font-bold text-[#16223A] sm:text-[#4B5872]">Who may use it:</span>{" "}
              <span className="font-normal">[ Approved eligibility/scope statement. ]</span>
            </p>
            <p className="text-[12px] sm:text-[12.5px] text-[#4B5872] leading-[19px] sm:leading-[20px]">
              <span className="font-bold text-[#16223A] sm:text-[#4B5872]">What it does:</span>{" "}
              <span className="font-normal">[ Legal-approved plain-language description. ]</span>
            </p>
            <p className="text-[12px] sm:text-[12.5px] text-[#4B5872] leading-[19px] sm:leading-[20px] pb-1">
              <span className="font-bold text-[#16223A] sm:text-[#4B5872]">Limitations:</span>{" "}
              <span className="font-normal">[ Only approved legal language. ]</span>
            </p>
            <div className="pt-0.5">
              <a
                href="#requests"
                className="inline-block py-1 text-[12px] font-bold text-[#123255] border-b border-[#A8843A] leading-[19.2px] hover:opacity-80 transition-opacity"
              >
                Submit a request →
              </a>
            </div>
          </div>

          {/* Right Item 2 */}
          <div className="flex flex-col gap-1.5 py-3.5 sm:py-4 pb-[18.6px] border-t border-[#DCD6C8]">
            <h3
              className="text-[13.5px] sm:text-[14px] font-bold text-[#4B5872] leading-[20px] sm:leading-[22.4px]"
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
              }}
            >
              [ Exact Legal-approved right label ]
            </h3>
            <p className="text-[12px] sm:text-[12.5px] text-[#4B5872] leading-[19px] sm:leading-[20px]">
              <span className="font-bold text-[#16223A] sm:text-[#4B5872]">Who may use it:</span>{" "}
              <span className="font-normal">[ Eligibility statement ]</span>
            </p>
            <p className="text-[12px] sm:text-[12.5px] text-[#4B5872] leading-[19px] sm:leading-[20px] pb-1">
              <span className="font-bold text-[#16223A] sm:text-[#4B5872]">What it does:</span>{" "}
              <span className="font-normal">[ Description ]</span>
            </p>
            <div className="pt-0.5">
              <a
                href="#requests"
                className="inline-block py-1 text-[12px] font-bold text-[#123255] border-b border-[#A8843A] leading-[19.2px] hover:opacity-80 transition-opacity"
              >
                Submit a request →
              </a>
            </div>
          </div>
        </div>

        {/* Conditional Note */}
        <div className="w-full bg-[#EFE8D8] border-l-[3px] border-[#A8843A] rounded-[6px] px-3.5 sm:px-4 py-2.5 sm:py-3">
          <p
            className="text-[11px] sm:text-[11.5px] italic text-[#4B5872] leading-[17px] sm:leading-[18.4px]"
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
            }}
          >
            Response/status timing is published only as approved operational/legal wording — no invented SLA. Complaint/escalation is conditional and Legal - approved.
          </p>
        </div>
      </div>
    </section>
  );
}
