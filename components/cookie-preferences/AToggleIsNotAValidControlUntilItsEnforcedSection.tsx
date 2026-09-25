import React from "react";

export default function AToggleIsNotAValidControlUntilItsEnforcedSection() {
  const rows = [
    {
      step: "1. Resolve",
      systemBehavior:
        "Evaluate region/context, stored receipt, signal, current ruleset.",
      uiFeedback: "Load current effective state.",
    },
    {
      step: "2. Edit",
      systemBehavior: "User changes category/purpose state.",
      uiFeedback: "Unsaved-change indicator.",
    },
    {
      step: "3. Save",
      systemBehavior:
        "Validate allowed combination; create/update consent receipt.",
      uiFeedback: "Progress label; duplicate submit disabled.",
    },
    {
      step: "4. Enforce",
      systemBehavior:
        "Broadcast effective state to tag manager/client code/server-side systems.",
      uiFeedback: "Success is not shown before enforcement is acknowledged.",
    },
    {
      step: "5. Confirm",
      systemBehavior: "Store event/evidence with minimal data.",
      uiFeedback: '"Preferences saved" plus a summary of changed categories.',
    },
    {
      step: "6. Clean up",
      systemBehavior:
        "Stop disallowed optional technologies; remove optional storage where required.",
      uiFeedback:
        "Explains that blocking future use and deleting existing data are not always the same thing.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-[#F6F1E6] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SAVE & IMMEDIATE ENFORCEMENT
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            A toggle is not a valid control until it&apos;s enforced
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/4">Step</th>
                <th className="py-4 px-6 font-semibold w-5/12">
                  System Behavior
                </th>
                <th className="py-4 pl-6 font-semibold w-5/12">UI Feedback</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DCD6C8] bg-[#F6F1E6]"
                >
                  <td className="py-6 pr-6 text-[#0b1329] text-base font-semibold tracking-tight align-top">
                    {row.step}
                  </td>
                  <td className="py-6 px-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.systemBehavior}
                  </td>
                  <td className="py-6 pl-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.uiFeedback}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
