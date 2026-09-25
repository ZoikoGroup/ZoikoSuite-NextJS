import React from "react";
import { FONT_GEORGIA, FONT_INTER, RELATED_DOCS } from "./data";

export default function RelatedLegalDocumentsSection() {
  return (
    <section
      aria-labelledby="related-legal-title"
      className="w-full pt-[40px] mb-[56px] border-t border-[#DCD6C8] flex flex-col gap-[24px]"
      style={{ fontFamily: FONT_INTER }}
    >
      <h2
        id="related-legal-title"
        className="text-[24px] font-bold leading-[38.4px] tracking-[-0.24px] text-[#16223A]"
        style={{ fontFamily: FONT_GEORGIA }}
      >
        Related Legal Documents
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px]">
        {RELATED_DOCS.map((doc) => (
          <a
            key={doc.name}
            href={doc.href}
            className="flex flex-col gap-[1px] px-[16px] py-[14px] border border-[#DCD6C8] rounded-[6px] hover:border-[#A8843A] hover:bg-white transition-colors"
          >
            <span className="pb-[3.5px] text-[12.5px] font-bold leading-[20px] text-[#16223A]">
              {doc.name}
            </span>
            <span className="text-[11.5px] font-normal leading-[18.4px] text-[#4B5872]">
              {doc.description}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
