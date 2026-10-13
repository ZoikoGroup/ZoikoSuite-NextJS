import React from "react";
import SectionHead from "./SectionHead";
import { PATHWAYS, FONT_ARCHIVO, COLORS } from "./data";

export default function PathwaysSection() {
  return (
    <section
      className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[53px] md:py-[78px]"
      style={{ backgroundColor: COLORS.pageCream }}
    >
      <div className="w-full max-w-[1240px] flex flex-col gap-[34px]">
        <SectionHead
          eyebrow="Find your collaboration route"
          title={
            <>
              What kind of partnership
              <br />
              do you have in mind?
            </>
          }
          body="Explore six enquiry pathways. Each includes useful prompts to help you share the context that matters."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[8fr_4fr] gap-[45px] items-start">
          <ul className="flex flex-col gap-[12px]">
            {PATHWAYS.map((pathway) => (
              <li
                key={pathway.number}
                className="bg-white border rounded-[5px]"
                style={{ borderColor: COLORS.border }}
              >
                <details className="group">
                  <summary className="flex items-center gap-[20px] min-h-[100px] p-[23px] cursor-pointer list-none">
                    <span
                      className="text-[11px] font-bold shrink-0 pt-[3px]"
                      style={{ fontFamily: FONT_ARCHIVO, color: COLORS.accentTeal }}
                    >
                      {pathway.number}
                    </span>
                    <span className="flex-1 flex flex-col gap-[6px]">
                      <span
                        className="text-[18px] font-bold leading-[1.4]"
                        style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
                      >
                        {pathway.title}
                      </span>
                      <span
                        className="text-[13px] font-bold leading-[1.5]"
                        style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
                      >
                        {pathway.subtitle}
                      </span>
                    </span>
                    <span
                      className="shrink-0 text-[23px] leading-none transition-transform group-open:rotate-45"
                      style={{ color: COLORS.accentTeal }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                </details>
              </li>
            ))}
          </ul>

          <aside
            className="rounded-[5px] p-[28px] flex flex-col gap-[11px]"
            style={{ backgroundColor: COLORS.darkBg }}
          >
            <div className="flex items-center gap-[12px]">
              <span className="block h-[2px] w-[22px] shrink-0" style={{ backgroundColor: COLORS.gold }} />
              <span
                className="text-[10px] font-bold uppercase tracking-[2px]"
                style={{ fontFamily: FONT_ARCHIVO, color: COLORS.goldOnDark }}
              >
                Choose the right destination
              </span>
            </div>
            <h3
              className="text-[18px] font-bold leading-[1.35] text-white pt-[6px]"
              style={{ fontFamily: FONT_ARCHIVO }}
            >
              Regional intent.
              <br />
              Clear expectations.
            </h3>
            <p
              className="text-[13px] font-normal leading-[1.65]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.sidebarBody }}
            >
              These pathways describe enquiries for review. They do not
              establish partner programs, status, commercial terms, or
              eligible territories.
            </p>
            <p
              className="text-[13px] font-normal leading-[1.65] pt-[1px]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.sidebarBody }}
            >
              Already working with Zoiko? Select Existing relationship so your
              enquiry can be directed appropriately.
            </p>

            <a
              href="/european-enterprise-sales"
              className="text-[13px] font-normal leading-[1.65] pt-[6px] hover:underline"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.gold }}
            >
              Buying for your organization?
              <br />
              European enterprise sales →
            </a>
            <a
              href="#"
              className="text-[13px] font-normal leading-[1.65] pt-[6px] hover:underline"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.gold }}
            >
              Looking beyond the UK or Europe?
              <br />
              Global partner enquiries →
            </a>
            <a
              href="#directory"
              className="text-[13px] font-normal leading-[1.65] pt-[6px] hover:underline"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.gold }}
            >
              Privacy assistance or support?
              <br />
              Contact directory →
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
