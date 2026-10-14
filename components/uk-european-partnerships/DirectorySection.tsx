import React from "react";
import SectionHead from "./SectionHead";
import { DIRECTORY_ENTRIES, FONT_ARCHIVO, COLORS } from "./data";

export default function DirectorySection() {
  return (
    <section id="directory" className="scroll-mt-[80px] w-full bg-white flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-[56px] md:py-[78px]">
      <div className="w-full max-w-[1240px] flex flex-col gap-[18px]">
        <SectionHead
          eyebrow="Regional and alternate routes"
          title={
            <>
              The right place
              <br />
              for the right request.
            </>
          }
          body="Partnerships, sales, privacy, and support are distinct destinations. Choose your route explicitly."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px] pt-[16px]">
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
                    className={`text-[13px] ${route.bold ? "font-bold" : "font-normal"}`}
                    style={{
                      fontFamily: FONT_ARCHIVO,
                      color: route.bold ? COLORS.accentTeal : COLORS.headingTeal,
                    }}
                  >
                    {route.label}
                  </span>
                  {route.current ? (
                    <span
                      className="inline-flex items-center justify-center px-[10px] h-[18px] rounded-[10px] text-[8px] font-bold whitespace-nowrap underline"
                      style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
                    >
                      {route.tag} ↗
                    </span>
                  ) : route.tag === "Local preview" ? (
                    <span
                      className="text-[10.8px] font-normal whitespace-nowrap underline"
                      style={{ fontFamily: FONT_ARCHIVO, color: COLORS.bodyTeal }}
                    >
                      {route.tag} ↗
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
