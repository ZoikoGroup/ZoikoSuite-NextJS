import React from "react";
import SectionHead from "./SectionHead";
import { EVIDENCE_CARDS, FONT_INTER } from "./data";

export default function TrustEvidenceSection() {
  return (
    <section
      id="h-assurance"
      className="scroll-mt-[100px] w-full bg-[#F6F5F0] flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[76px]"
    >
      <div className="w-full max-w-[1200px] flex flex-col gap-[15px]">
        <SectionHead
          title="See what has been verified—and what still needs review."
          body="Each card names a control area, its scope and its status. No certification or control is asserted without an approved source."
        />

        <ul className="pt-[6px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {EVIDENCE_CARDS.map((card) => (
            <li
              key={card.title}
              className="flex flex-col gap-[8px] bg-white border border-[#E4E1D8] rounded-[12px] px-[18px] py-[16px]"
            >
              <h3
                className="text-[15.5px] font-bold tracking-[-0.155px] text-[#101E2B]"
                style={{ fontFamily: FONT_INTER }}
              >
                {card.title}
              </h3>
              <dl className="flex flex-col gap-[10px]">
                <div className="grid grid-cols-[110px_1fr] gap-[8px]">
                  <dt
                    className="text-[12.5px] font-semibold text-[#5D6A74]"
                    style={{ fontFamily: FONT_INTER }}
                  >
                    Scope
                  </dt>
                  <dd
                    className="text-[12.5px] font-semibold text-[#101E2B]"
                    style={{ fontFamily: FONT_INTER }}
                  >
                    To be stated by the approved source
                  </dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-[8px] items-start">
                  <dt
                    className="text-[12.5px] font-semibold text-[#5D6A74]"
                    style={{ fontFamily: FONT_INTER }}
                  >
                    Status
                  </dt>
                  <dd>
                    <span className="inline-flex items-center gap-[4px] px-[9px] py-[2px] bg-[#F4F3EE] border border-[#E2E0D6] rounded-full text-[11.5px] font-bold text-[#5D6A74]">
                      ○ Evidence pending
                    </span>
                  </dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-[8px]">
                  <dt
                    className="text-[12.5px] font-semibold text-[#5D6A74]"
                    style={{ fontFamily: FONT_INTER }}
                  >
                    Approved source
                  </dt>
                  <dd className="flex flex-col gap-[2px]">
                    <span
                      className="text-[12.5px] font-medium text-[#8B959D]"
                      style={{ fontFamily: FONT_INTER }}
                    >
                      Route pending
                    </span>
                    <span
                      className="text-[12.5px] font-semibold text-[#5D6A74]"
                      style={{ fontFamily: FONT_INTER }}
                    >
                      ○ Evidence pending
                    </span>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        <p
          className="text-[12.5px] font-normal leading-[1.5] text-[#5D6A74]"
          style={{ fontFamily: FONT_INTER }}
        >
          Approved Trust links will open with descriptive names once they
          exist. Until then each area reads &ldquo;Evidence pending&rdquo;.
        </p>
      </div>
    </section>
  );
}
