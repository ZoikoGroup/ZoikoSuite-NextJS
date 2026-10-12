"use client";

import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { FONT_INTER, ROLE_PANELS, ROLE_TABS } from "./data";

export default function ScenarioRoleHandoffsSection() {
  const [activeRole, setActiveRole] = useState(ROLE_TABS[0]);
  const panel = ROLE_PANELS[activeRole];

  return (
    <section className="w-full bg-[#F6F5F0] flex justify-center px-4 md:px-8 lg:px-[120px] py-[40px] md:py-[76px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[15px]">
        <SectionHead
          title="One decision, different responsibilities."
          body="Select a role to see how it looks at the same decision. Role pages are separate destinations and are not yet published."
        />

        <div className="pt-[21px] flex flex-wrap gap-[8px]">
          {ROLE_TABS.map((role) => {
            const isActive = role === activeRole;
            return (
              <button
                key={role}
                type="button"
                onClick={() => setActiveRole(role)}
                aria-pressed={isActive}
                className={`inline-flex items-center min-h-[44px] px-[16px] rounded-full border transition-colors ${
                  isActive
                    ? "bg-[#08222F] border-[#08222F] text-white"
                    : "bg-white border-[#E4E1D8] text-[#33424D] hover:border-[#CDA85B]"
                }`}
                style={{ fontFamily: FONT_INTER }}
              >
                <span className="text-[13.5px] font-semibold">{role}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-white border border-[#E4E1D8] rounded-[14px] px-[24px] pt-[29px] pb-[24px] grid grid-cols-1 md:grid-cols-2 gap-[28px]">
          <div className="flex flex-col gap-[5px]">
            <span
              className="text-[11px] font-bold tracking-[0.66px] uppercase text-[#B8913F]"
              style={{ fontFamily: FONT_INTER }}
            >
              Decision lens
            </span>
            <h3
              className="text-[19px] font-bold tracking-[-0.19px] text-[#101E2B]"
              style={{ fontFamily: FONT_INTER }}
            >
              {panel.decisionLens}
            </h3>
            <p
              className="pt-[2px] text-[14.5px] font-normal leading-[1.5] text-[#33424D]"
              style={{ fontFamily: FONT_INTER }}
            >
              {panel.description}
            </p>
          </div>
          <div className="flex flex-col gap-[7px]">
            <span
              className="text-[11px] font-bold tracking-[0.66px] uppercase text-[#5D6A74]"
              style={{ fontFamily: FONT_INTER }}
            >
              Role page
            </span>
            <p
              className="text-[14.5px] font-normal text-[#33424D]"
              style={{ fontFamily: FONT_INTER }}
            >
              {activeRole} page: not yet published.
            </p>
            <p
              className="text-[12.5px] font-normal text-[#5D6A74]"
              style={{ fontFamily: FONT_INTER }}
            >
              ○ No link is shown until the destination is approved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
