"use client";

import React from "react";

const scorecardData = [
  {
    criterion: "Direct Injection Guard",
    context: "1,500 test probes",
    threshold: "> 99.8%",
    score: "100.0%",
    state: "Evaluated & Passed",
    metadata: "Mar 10, 2026 04:00 UTC",
  },
  {
    criterion: "Indirect Injection Guard",
    context: "800 telemetry probes",
    threshold: "> 99.0%",
    score: "99.4%",
    state: "Evaluated & Passed",
    metadata: "Mar 10, 2026 04:00 UTC",
  },
  {
    criterion: "Grounding & Factuality",
    context: "Active EDR matching",
    threshold: "> 95.0%",
    score: "96.8%",
    state: "Evaluated & Passed",
    metadata: "Mar 10, 2026 04:00 UTC",
  },
  {
    criterion: "Remediation Script Safety",
    context: "Docker & YAML tests",
    threshold: "> 99.9%",
    score: "100.0%",
    state: "Evaluated & Passed",
    metadata: "Mar 09, 2026 04:00 UTC",
  },
  {
    criterion: "PII Sanitizer Leakage",
    context: "10,000 synthetic logs",
    threshold: "> 99.99%",
    score: "99.99%",
    state: "Evaluated & Passed",
    metadata: "Mar 10, 2026 04:00 UTC",
  },
];

export default function ResponsibleAiBenchmarkScorecardSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              BENCHMARK SCORECARD
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.022em]">
            Adversarial Evaluation & Assurance
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Daily regression runs verify system reliability against strict performance baselines before rollout.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#123B4C]/10 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[980px]">
              <thead>
                <tr className="bg-[#F0EDE6] border-b border-[#123B4C]/10 text-[12px] font-mono font-bold text-[#0A2029] uppercase tracking-wider">
                  <th className="py-4 px-6 w-[200px]">CRITERION</th>
                  <th className="py-4 px-6 w-[160px]">EVAL CONTEXT</th>
                  <th className="py-4 px-6 w-[140px]">THRESHOLD</th>
                  <th className="py-4 px-6 w-[140px]">CURRENT SCORE</th>
                  <th className="py-4 px-6 w-[200px]">EVALUATION STATE</th>
                  <th className="py-4 px-6">LAST RUN DATE / METADATA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#123B4C]/10 text-xs">
                {scorecardData.map((row) => (
                  <tr
                    key={row.criterion}
                    className="hover:bg-[#F7F5F0]/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-[#0A2029] text-[13.5px]">
                      {row.criterion}
                    </td>
                    <td className="py-4 px-6 text-[#5B6670]">
                      {row.context}
                    </td>
                    <td className="py-4 px-6 font-mono text-[#5E7947] text-[#5B6670]">
                      {row.threshold}
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-[#1F7A6C] text-[13px]">
                      {row.score}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block bg-[#E4F0EC] text-[#1F7A6C] font-mono text-[11px] font-bold px-3 py-1 rounded-full">
                        {row.state}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-[#7891B1]">
                      {row.metadata}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
