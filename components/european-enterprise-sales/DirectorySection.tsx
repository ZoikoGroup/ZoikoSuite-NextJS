import React from "react";
import { DIRECTORY_ENTRIES, FONT_ARCHIVO, COLORS } from "./data";

export default function DirectorySection() {
  return (
    <section
      className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[56px] md:py-[78px]"
      style={{ backgroundColor: COLORS.lightBg }}
    >
      <div className="w-full max-w-[1240px] flex flex-col gap-[15px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[20px]">
          <div className="flex flex-col gap-[18px]">
            <div className="flex items-center gap-[12px]">
              <span className="block h-[2px] w-[22px] shrink-0" style={{ backgroundColor: COLORS.gold }} />
              <span
                className="text-[10px] font-bold uppercase tracking-[2px]"
                style={{ fontFamily: FONT_ARCHIVO, color: COLORS.goldOnDark }}
              >
                Headquarters directory
              </span>
            </div>
            <h2
              className="text-[26px] md:text-[34px] font-bold leading-[1.18] tracking-[-1px]"
              style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
            >
              A different request?
              <br />
              Find the right destination.
            </h2>
          </div>
          <p
            className="max-w-[430px] text-[14px] font-normal leading-[1.65]"
            style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
          >
            Sales, partnerships, privacy, and support have distinct enquiry
            purposes. No information is automatically forwarded between
            destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[26px] pt-[17px]">
          {DIRECTORY_ENTRIES.map((entry) => (
            <article
              key={entry.name}
              className="bg-white rounded-[5px] border p-[30px] flex flex-col"
              style={{ borderColor: COLORS.border }}
            >
              <div className="flex items-center gap-[12px]">
                <span className="block h-[2px] w-[22px] shrink-0" style={{ backgroundColor: COLORS.gold }} />
                <span
                  className="text-[10px] font-bold uppercase tracking-[2px]"
                  style={{ fontFamily: FONT_ARCHIVO, color: COLORS.goldOnDark }}
                >
                  {entry.eyebrow}
                </span>
              </div>
              <h3
                className="text-[18px] font-bold pt-[18px]"
                style={{ fontFamily: FONT_ARCHIVO, color: COLORS.headingTeal }}
              >
                {entry.name}
              </h3>
              <address
                className="not-italic text-[12px] font-normal leading-[1.65] pt-[11px] pb-[20px]"
                style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
              >
                {entry.address.map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </address>
              {entry.routes.map((route) => (
                <div
                  key={route.label}
                  className="flex items-center justify-between gap-[12px] py-[12px] border-t"
                  style={{ borderColor: COLORS.border }}
                >
                  <span
                    className={`text-[13px] ${route.bold ? "font-bold underline" : "font-normal"}`}
                    style={{
                      fontFamily: FONT_ARCHIVO,
                      color: route.bold ? COLORS.accentTeal : COLORS.headingTeal,
                    }}
                  >
                    {route.label}
                  </span>
                  {route.current ? (
                    <span
                      className="inline-flex items-center justify-center px-[10px] h-[18px] rounded-[10px] text-[8px] font-bold whitespace-nowrap"
                      style={{ fontFamily: FONT_ARCHIVO, backgroundColor: COLORS.badgeBg, color: COLORS.bodyTeal }}
                    >
                      {route.tag}
                    </span>
                  ) : route.tag === "Local preview" ? (
                    <span
                      className="inline-flex items-center justify-center px-[10px] h-[18px] rounded-[10px] text-[8px] font-normal whitespace-nowrap"
                      style={{ fontFamily: FONT_ARCHIVO, backgroundColor: COLORS.badgeBg, color: "#47656d" }}
                    >
                      {route.tag}
                    </span>
                  ) : (
                    <span
                      className="text-[10.8px] font-normal whitespace-nowrap"
                      style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
                    >
                      {route.tag}
                    </span>
                  )}
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
