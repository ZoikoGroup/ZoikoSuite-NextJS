import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { FILTER_GROUPS, REGISTRY_CARDS } from "./data";

export default function AllResourcesSection() {
  return (
    <section className="w-full flex justify-center" style={{ background: C.grey95 }}>
      <div className="w-full max-w-[1200px] px-8 py-24 flex flex-col gap-9">
        <SectionHead eyebrow="ALL RESOURCES" title="Search and filter the complete registry." />

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Filter sidebar */}
          <aside
            className="w-full lg:w-80 shrink-0 px-5 pt-10 pb-7 rounded-xl flex flex-col gap-5"
            style={{ background: C.white, border: `1px solid ${C.grey95}` }}
          >
            {FILTER_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <div
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: C.grey44, fontFamily: FONT }}
                >
                  {group.title}
                </div>
                {group.options.map((option) => (
                  <label
                    key={option}
                    className="pl-1 py-[3px] flex items-center gap-2.5 cursor-pointer"
                    style={{ fontFamily: FONT }}
                  >
                    <input
                      type="checkbox"
                      className="w-3 h-3 rounded-xs"
                      style={{
                        accentColor: C.azure11,
                        background: C.white,
                        border: `1px solid ${C.grey46}`,
                      }}
                    />
                    <span className="text-xs" style={{ color: C.azure25 }}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            ))}
          </aside>

          {/* Registry grid */}
          <div className="flex-1 flex flex-col gap-7">
            <div className="flex flex-wrap items-center justify-between">
              <div className="text-xs" style={{ color: C.grey44, fontFamily: FONT }}>
                12 resources
              </div>
              <div
                className="pl-4 pr-7 py-2 rounded-lg"
                style={{ background: C.white, border: `1px solid ${C.grey95}` }}
              >
                <span className="text-xs leading-4" style={{ color: C.azure11, fontFamily: FONT }}>
                  Newest updated
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[38px] gap-y-5">
              {REGISTRY_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="min-h-64 p-5 rounded-xl flex flex-col justify-between"
                  style={{ background: C.white, border: `1px solid ${C.grey95}` }}
                >
                  <div className="pb-2.5 text-xs font-bold uppercase tracking-wide" style={{ color: C.azure25, fontFamily: FONT }}>
                    {card.eyebrow}
                  </div>
                  <div className="text-base font-bold leading-5" style={{ color: C.azure11, fontFamily: FONT }}>
                    {card.title}
                  </div>
                  <div className="flex-1 py-3 text-xs leading-5" style={{ color: C.grey44, fontFamily: FONT }}>
                    {card.body}
                  </div>
                  <div className="pb-3 flex flex-wrap gap-1.5">
                    {card.meta.map((m) => (
                      <div
                        key={m}
                        className="px-2 py-1 rounded-md text-xs font-semibold"
                        style={{ background: C.grey95, color: C.grey44, fontFamily: FONT }}
                      >
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
