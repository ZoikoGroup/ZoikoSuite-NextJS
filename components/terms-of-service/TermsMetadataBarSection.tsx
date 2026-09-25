import React from "react";
import { FONT_INTER, META_FIELDS } from "./data";

const UTILS = [
  { label: "Download PDF", href: "#" },
  { label: "Print", href: "#" },
  { label: "Prior versions", href: "#version-history" },
];

export default function TermsMetadataBarSection() {
  return (
    <section
      aria-label="Document metadata"
      className="w-full bg-[#F6F1E6] border-y border-[#DCD6C8] lg:hidden"
      style={{ fontFamily: FONT_INTER }}
    >
      {/* Mobile/Tablet Flex Layout */}
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8 py-[16px] flex flex-col gap-[12px] lg:hidden">
        {/* Meta fields */}
        <dl className="flex flex-wrap gap-x-[24px] gap-y-[22px]">
          {META_FIELDS.map((field) => (
            <div key={field.label} className="flex flex-col gap-[0.69px]">
              <dt className="text-[9.5px] font-bold leading-[15.2px] tracking-[0.475px] uppercase text-[#A8843A]">
                {field.label}
              </dt>
              <dd className="text-[12px] font-normal leading-[19.2px] text-[#4B5872]">
                {field.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Utility links */}
        <div className="flex flex-wrap gap-[16px]">
          {UTILS.map((util) => (
            <a
              key={util.label}
              href={util.href}
              className="pb-px border-b border-[#A8843A] text-[12.5px] font-bold leading-[20px] text-[#123255] whitespace-nowrap hover:text-[#A8843A]"
            >
              {util.label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-8 py-[16px] hidden lg:grid grid-cols-[260px_minmax(0,760px)] gap-x-[56px] gap-y-[12px]">
        {/* Row 1: Meta fields */}
        <dl className="flex flex-wrap gap-x-[24px] gap-y-[22px]">
          {META_FIELDS.slice(0, 2).map((field) => (
            <div key={field.label} className="flex flex-col gap-[0.69px]">
              <dt className="text-[9.5px] font-bold leading-[15.2px] tracking-[0.475px] uppercase text-[#A8843A]">
                {field.label}
              </dt>
              <dd className="text-[12px] font-normal leading-[19.2px] text-[#4B5872]">
                {field.value}
              </dd>
            </div>
          ))}
        </dl>
        <dl className="flex flex-wrap gap-x-[24px] gap-y-[22px]">
          {META_FIELDS.slice(2).map((field) => (
            <div key={field.label} className="flex flex-col gap-[0.69px]">
              <dt className="text-[9.5px] font-bold leading-[15.2px] tracking-[0.475px] uppercase text-[#A8843A]">
                {field.label}
              </dt>
              <dd className="text-[12px] font-normal leading-[19.2px] text-[#4B5872]">
                {field.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
