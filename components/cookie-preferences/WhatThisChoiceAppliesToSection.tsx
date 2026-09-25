import React from "react";

export default function WhatThisChoiceAppliesToSection() {
  const rows = [
    {
      question: "What does this choice apply to?",
      answerPattern:
        "This browser/device and the stated domain scope, by default.",
    },
    {
      question: "How long is it remembered?",
      answerPattern:
        "[ Registry/ruleset-defined preference duration — stated only when verified. ]",
    },
    {
      question: "Does sign-in sync choices?",
      answerPattern:
        "Not claimed unless implemented, legally reviewed, and explicitly disclosed.",
    },
    {
      question: "What if storage is blocked?",
      answerPattern:
        "The preference may not persist; the safe default behavior applies.",
    },
    {
      question: "Does it control product telemetry?",
      answerPattern:
        "Only public/web technologies within the defined scope — authenticated product telemetry has separate governance.",
    },
  ] as const;

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        {/* Header Section */}
        <div className="mb-12 w-full">
          {/* Subtitle (Eye tag size: xs) */}
          <span className="text-[#A8843A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            SCOPE & PERSISTENCE
          </span>

          {/* Main Headline (32px for lg devices) */}
          <h1 className="text-3xl lg:text-[32px] font-bold text-[#0b1329] leading-tight tracking-tight">
            What this choice applies to
          </h1>
        </div>

        {/* Semantic HTML Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-[#DCD6C8] text-xs font-semibold tracking-[0.15em] text-[#0b1329] uppercase">
                <th className="py-4 pr-6 font-semibold w-1/3 md:w-1/4">
                  Question
                </th>
                <th className="py-4 font-semibold w-2/3 md:w-3/4">
                  Answer Pattern
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#DCD6C8] bg-white"
                >
                  <td className="py-6 pr-6 text-[#0b1329] text-base font-semibold tracking-tight align-top">
                    {row.question}
                  </td>
                  <td className="py-6 text-gray-600 font-light leading-relaxed text-[15.5px] align-top">
                    {row.answerPattern}
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
