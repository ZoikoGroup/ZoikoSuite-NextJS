import React from "react";
import SectionHead from "./SectionHead";
import { DISCUSSION_TOPICS, FONT_ARCHIVO, COLORS } from "./data";

export default function TopicsSection() {
  return (
    <section
      id="topics"
      className="scroll-mt-[80px] w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[56px] md:py-[78px]"
      style={{ backgroundColor: COLORS.pageCream }}
    >
      <div className="w-full max-w-[1240px] flex flex-col gap-[32px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[20px]">
          <SectionHead
            eyebrow="Start with your business need"
            title={
              <>
                What would you
                <br />
                like to discuss?
              </>
            }
          />
          <p
            className="max-w-[430px] text-[14px] font-normal leading-[1.65]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
          >
            Choose an enquiry topic to see the context worth sharing. You can
            change your selection at any point.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {DISCUSSION_TOPICS.map((topic) => (
            <li
              key={topic.code}
              className="rounded-[5px] border bg-white p-[25px] flex flex-col gap-[14px] min-h-[200px]"
              style={{ borderColor: COLORS.border }}
            >
              <span
                className="text-[11px] font-normal"
                style={{ fontFamily: FONT_ARCHIVO, color: COLORS.accentTeal }}
              >
                {topic.code}
              </span>
              <h3
                className="text-[18px] font-bold leading-[1.35]"
                style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
              >
                {topic.title}
              </h3>
              <p
                className="text-[12px] font-normal leading-[1.65]"
                style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
              >
                {topic.description}
              </p>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
          {DISCUSSION_TOPICS.map((topic) => (
            <li
              key={topic.code}
              className="rounded-[4px] border bg-white"
              style={{ borderColor: COLORS.border }}
            >
              <details className="group">
                <summary className="flex items-center justify-between gap-3 min-h-[24px] pl-[20px] pr-[20px] py-[19px] cursor-pointer list-none">
                  <span
                    className="text-[14px] font-bold"
                    style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
                  >
                    {topic.title}
                  </span>
                  <span
                    className="shrink-0 text-[20px] leading-none transition-transform group-open:rotate-45"
                    style={{ color: COLORS.accentTeal }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p
                  className="px-[20px] pb-[20px] text-[13px] font-normal leading-[1.65]"
                  style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
                >
                  {topic.description}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
