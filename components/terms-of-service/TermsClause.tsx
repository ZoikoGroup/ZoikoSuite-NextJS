import React from "react";
import CopyLinkButton from "./CopyLinkButton";
import { type Clause, type ClauseBlock, FONT_GEORGIA, FONT_INTER } from "./data";

function Block({ block }: { block: ClauseBlock }) {
  switch (block.type) {
    case "summary":
      return (
        <p className="text-[14px] font-normal leading-[22.4px] text-[#4B5872]">
          {block.text}
        </p>
      );
    case "placeholder":
      return (
        <div className="w-full px-[16px] py-[14px] bg-white border border-dashed border-[#DCD6C8] rounded-[6px] lg:hidden">
          <p className="text-[13px] italic font-normal leading-[20.8px] text-[#8B93A8]">
            {block.text}
          </p>
        </div>
      );
    case "callout":
      return (
        <div className="w-full px-[16px] py-[12px] bg-[#F7EAE8] border-l-[3px] border-[#A8433A] rounded-[4px] lg:hidden">
          <p className="text-[12px] font-normal leading-[19.2px] text-[#4B5872]">
            {block.text}
          </p>
        </div>
      );
    case "note":
      return (
        <p className="pt-[3px] text-[12px] font-normal leading-[19.2px] text-[#4B5872] lg:hidden">
          {block.text}
        </p>
      );
    case "crosslinks":
      return (
        <p className="pt-[4px] pb-[1px] text-[12px] font-normal leading-[19.2px] text-[#4B5872] lg:hidden">
          Related:{" "}
          {block.links.map((link, i) => (
            <React.Fragment key={link.label}>
              {i > 0 && " · "}
              <a
                href={link.href}
                className="font-semibold text-[#123255] border-b border-[#A8843A] hover:text-[#A8843A]"
              >
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </p>
      );
  }
}

export default function TermsClause({ clause }: { clause: Clause }) {
  return (
    <section
      id={clause.id}
      aria-labelledby={`${clause.id}-title`}
      className="scroll-mt-[120px] w-full py-[28px] border-t border-[#DCD6C8] flex flex-col gap-[12px]"
      style={{ fontFamily: FONT_INTER }}
    >
      {/* Clause head */}
      <div className="flex items-start justify-between gap-4">
        <h2
          id={`${clause.id}-title`}
          className="text-[19px] font-bold leading-[30.4px] tracking-[-0.19px] text-[#16223A]"
          style={{ fontFamily: FONT_GEORGIA }}
        >
          {clause.title}
        </h2>
        <CopyLinkButton targetId={clause.id} />
      </div>

      {/* Clause body */}
      <div className="flex flex-col gap-[10px]">
        {clause.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </section>
  );
}
