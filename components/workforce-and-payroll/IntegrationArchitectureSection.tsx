import React from "react";
import SectionHead from "./SectionHead";
import { ARCH_NODES, FONT_INTER, INTEGRATION_QA } from "./data";

export default function IntegrationArchitectureSection() {
  return (
    <section className="w-full bg-white flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[56px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[15px]">
        <SectionHead
          id="h-integ"
          title="Connect the systems that already own your records."
          body="Confirm which event types, connectors, controls and delivery models are available for your environment."
        />

        <div className="pt-[21px] flex flex-col sm:flex-row items-stretch gap-[6px]">
          {ARCH_NODES.map((node, i) => (
            <React.Fragment key={node.title}>
              <div
                className={`flex-1 flex flex-col items-center gap-[3px] px-[10px] py-[16px] rounded-[12px] border text-center ${
                  node.shaded
                    ? "bg-[#F1EDF9] border-[#DDD0EF]"
                    : "bg-white border-[#E4E1D8]"
                }`}
              >
                <span
                  className="text-[13.5px] font-bold text-[#101E2B]"
                  style={{ fontFamily: FONT_INTER }}
                >
                  {node.title}
                </span>
                <span
                  className="text-[11.5px] font-medium text-[#5D6A74]"
                  style={{ fontFamily: FONT_INTER }}
                >
                  {node.subtitle}
                </span>
              </div>
              {i < ARCH_NODES.length - 1 && (
                <div className="hidden sm:flex flex-col items-center justify-center gap-[4px] w-[70px] shrink-0 pt-[14px]">
                  <span className="text-[20px] text-[#8B959D]">→</span>
                  <span
                    className="text-[10.5px] text-center leading-[1.3] text-[#5D6A74]"
                    style={{ fontFamily: FONT_INTER }}
                  >
                    subject to verified integration
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <ul className="max-w-[860px] pt-[13px] flex flex-col gap-[10px]">
          {INTEGRATION_QA.map((item) => (
            <li
              key={item.question}
              className="bg-white border border-[#E4E1D8] rounded-[12px]"
            >
              <details className="group">
                <summary className="flex items-center justify-between gap-3 min-h-[24px] pl-[16px] pr-[16px] py-[14px] cursor-pointer list-none">
                  <span
                    className="text-[15px] font-bold text-[#101E2B]"
                    style={{ fontFamily: FONT_INTER }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 text-[#5D6A74] transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <p
                  className="px-[16px] pb-[16px] text-[14px] font-normal leading-[1.5] text-[#5D6A74]"
                  style={{ fontFamily: FONT_INTER }}
                >
                  {item.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
