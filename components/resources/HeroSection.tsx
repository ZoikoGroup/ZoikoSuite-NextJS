import React from "react";
import { C, FONT } from "./tokens";

const CHIPS = ["Executive briefs", "Documentation", "Knowledge Base", "Training", "Webinars & Events"];

export default function HeroSection() {
  return (
    <header className="w-full flex justify-center" style={{ background: C.azure11 }}>
      <div className="w-full max-w-[1440px] px-16 md:px-32 py-16 flex flex-col items-start">
        <div className="w-full max-w-[900px] mx-auto flex flex-col items-center gap-3.5 px-4">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-px" style={{ background: C.orange58 }} />
            <div
              className="text-xs font-semibold tracking-wide"
              style={{ color: C.orange58, fontFamily: FONT }}
            >
              RESOURCES
            </div>
          </div>
          <h1
            className="text-center text-4xl font-bold leading-10"
            style={{ color: C.white, fontFamily: FONT }}
          >
            Resources for evaluating, implementing, and
            <br />
            operating ZoikoSuite.
          </h1>
          <p
            className="text-center text-base leading-6 pt-[2px] pb-4"
            style={{ color: C.azure82, fontFamily: FONT }}
          >
            Find executive briefs, technical documentation, practical knowledge, training,
            <br />
            events, and insights — with the audience, source, and freshness clear before you
            <br />
            open a resource.
          </p>

          <div
            className="w-full max-w-[640px] p-2 rounded-2xl flex items-start gap-2"
            style={{ background: C.white, boxShadow: "0px 20px 44px 0px rgba(0,0,0,0.30)" }}
          >
            <input
              type="text"
              placeholder="Search by topic, role, resource type, or question"
              className="flex-1 px-4 py-3 rounded-[10px] text-sm outline-none"
              style={{ color: C.grey46, fontFamily: FONT }}
            />
            <button
              type="button"
              className="px-5 py-3 rounded-[10px] text-sm font-semibold"
              style={{ background: C.azure11, color: C.white, fontFamily: FONT }}
            >
              Search
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-start gap-2 pt-[3px]">
            {CHIPS.map((chip) => (
              <div
                key={chip}
                className="px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  outline: "1px solid rgba(255,255,255,0.14)",
                  outlineOffset: "-1px",
                }}
              >
                <span className="text-xs font-semibold" style={{ color: C.azure84, fontFamily: FONT }}>
                  {chip}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
