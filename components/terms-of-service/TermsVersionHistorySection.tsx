import React from "react";
import { FONT_GEORGIA, FONT_INTER, VERSION_ROWS } from "./data";

const HEADERS = ["Version", "Effective date", "Status", "Change summary", "Actions"];

// Stacked cells below lg (768 frame), 5-column table from lg up.
const ROW = "flex flex-col lg:grid lg:grid-cols-[1.1fr_1.1fr_0.8fr_1.6fr_1.4fr]";
const CELL = "px-[16px] py-[12px] lg:border-r lg:border-[#DCD6C8] lg:last:border-r-0";

function StatusBadge({ status }: { status: "Current" | "Superseded" }) {
  const current = status === "Current";
  return (
    <span
      className={`inline-flex px-[9px] py-[3px] rounded-full text-[10px] font-extrabold leading-[16px] whitespace-nowrap ${
        current ? "bg-[#E9F2EC] text-[#3D7A52]" : "bg-[#F6F1E6] text-[#4B5872]"
      }`}
    >
      {status}
    </span>
  );
}

export default function TermsVersionHistorySection() {
  return (
    <section
      id="version-history"
      aria-labelledby="version-history-title"
      className="scroll-mt-[120px] w-full pt-[40px] mb-[56px] border-t border-[#DCD6C8] flex flex-col gap-[5px] lg:hidden"
      style={{ fontFamily: FONT_INTER }}
    >
      <h2
        id="version-history-title"
        className="text-[22px] font-bold leading-[35.2px] tracking-[-0.22px] text-[#16223A]"
        style={{ fontFamily: FONT_GEORGIA }}
      >
        Version History
      </h2>
      <p className="pb-[0.8px] text-[13px] font-normal leading-[20.8px] text-[#4B5872]">
        Published versions are immutable. Corrections create a new version or a
        documented correction record.
      </p>

      <div
        role="table"
        aria-label="Version history"
        className="mt-[19px] w-full overflow-hidden border border-[#DCD6C8] rounded-[8px]"
      >
        {/* Header row */}
        <div role="row" className={`${ROW} bg-[#F6F1E6]`}>
          {HEADERS.map((h) => (
            <div
              key={h}
              role="columnheader"
              className={`${CELL} text-[12.5px] font-bold leading-[20px] tracking-[0.55px] uppercase text-[#4B5872]`}
            >
              {h}
            </div>
          ))}
        </div>

        {/* Data rows */}
        {VERSION_ROWS.map((row) => (
          <div
            key={row.version}
            role="row"
            className={`${ROW} border-t border-[#DCD6C8] text-[12.5px] font-normal leading-[20px] text-[#16223A]`}
          >
            <div role="cell" className={CELL}>
              {row.version}
            </div>
            <div role="cell" className={CELL}>
              {row.effective}
            </div>
            <div role="cell" className={CELL}>
              <StatusBadge status={row.status} />
            </div>
            <div role="cell" className={CELL}>
              {row.summary}
            </div>
            <div role="cell" className={CELL}>
              {row.actions.map((action, i) => (
                <React.Fragment key={action}>
                  {i > 0 && " · "}
                  <a href="#" className="hover:text-[#A8843A]">
                    {action}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
