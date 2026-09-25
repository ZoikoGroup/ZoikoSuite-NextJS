import React from "react";
import { CONTACT_ROWS, FONT_GEORGIA, FONT_INTER } from "./data";

export default function TermsContactSection() {
  return (
    <section
      aria-labelledby="terms-contact-title"
      className="w-full pt-[40px] pb-[20px] border-t border-[#DCD6C8] flex flex-col gap-[20px] lg:hidden"
      style={{ fontFamily: FONT_INTER }}
    >
      <h2
        id="terms-contact-title"
        className="text-[24px] font-bold leading-[38.4px] tracking-[-0.24px] text-[#16223A]"
        style={{ fontFamily: FONT_GEORGIA }}
      >
        Contact &amp; Legal Notices
      </h2>

      <ul className="flex flex-col gap-[14px]">
        {CONTACT_ROWS.map((row) => (
          <li
            key={row.label}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-[16px] py-[12px] border border-[#DCD6C8] rounded-[6px]"
          >
            <span className="text-[13px] font-normal leading-[20.8px] text-[#16223A]">
              {row.label}
            </span>
            <a
              href={row.href}
              className="self-start sm:self-auto border-b border-[#A8843A] text-[12px] font-bold leading-[19.2px] text-[#123255] hover:text-[#A8843A]"
            >
              {row.linkLabel}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
