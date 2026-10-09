import React from "react";
import EyebrowHeading from "./EyebrowHeading";
import { DETAIL_MODULES, FONT_ARCHIVO, FONT_INTER } from "./data";

export default function DetailsSection() {
  return (
    <section className="w-full bg-[#F6F5F1] flex justify-center px-4 md:px-8 lg:px-[170px] pt-[52px] md:pt-[69px] pb-[52px] md:pb-[70px]">
      <div className="w-full max-w-[1100px] flex flex-col gap-[25px]">
        <EyebrowHeading
          eyebrow="Six finance review questions"
          title="A clearer financial-control narrative."
        />

        <ul className="flex flex-col gap-[10px]">
          {DETAIL_MODULES.map((module) => (
            <li
              key={module.id}
              id={module.id}
              className="bg-white border border-[#DBE3E7] rounded-[6px]"
            >
              <details className="group">
                <summary
                  className="flex items-center gap-[15px] min-h-[44px] px-[20px] py-[18px] cursor-pointer list-none"
                  style={{ fontFamily: FONT_ARCHIVO }}
                >
                  <span
                    className="shrink-0 w-[10px] h-[10px] rounded-full bg-[#DBE3E7] group-open:bg-[#D0A644] transition-colors"
                    aria-hidden="true"
                  />
                  <span className="shrink-0 text-[11px] font-bold text-[#B08B3E]">
                    {module.code}
                  </span>
                  <span className="text-[15px] font-bold text-[#243943]">
                    {module.title}
                  </span>
                </summary>

                <div className="px-[20px] pb-[20px] pl-[65px] flex flex-col gap-[14px]">
                  {module.summary && (
                    <p
                      className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-[#748087]"
                      style={{ fontFamily: FONT_INTER }}
                    >
                      {module.summary}
                    </p>
                  )}
                  {module.definitions && (
                    <dl className="flex flex-col gap-[14px]">
                      {module.definitions.map((def) => (
                        <div key={def.term}>
                          <dt
                            className="text-[14px] font-normal text-[#527A8D]"
                            style={{ fontFamily: FONT_INTER }}
                          >
                            {def.term}
                          </dt>
                          <dd
                            className="text-[14px] font-normal leading-[1.6] text-[#748087]"
                            style={{ fontFamily: FONT_INTER }}
                          >
                            {def.detail}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
