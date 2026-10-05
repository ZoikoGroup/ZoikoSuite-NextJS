import React from "react";

export default function ProcurementReviewSection() {
  const steps = [
    {
      num: 1,
      title: "Define requirement",
      desc: "Select required assurance types/frameworks and deployment.",
    },
    {
      num: 2,
      title: "Match current records",
      desc: "System shows current, readiness, not applicable, or unavailable — no hidden mismatch.",
    },
    {
      num: 3,
      title: "Review scope",
      desc: "Verify legal entity, service, region, deployment, dates, exclusions.",
    },
    {
      num: 4,
      title: "Request restricted evidence",
      desc: "Only relevant, currently approved artifacts are selectable.",
    },
    {
      num: 5,
      title: "Route review",
      desc: "Security/Compliance/Sales Engineering receives context; duplicate requests are linked.",
    },
    {
      num: 6,
      title: "Respond",
      desc: "Approved artifacts and explanatory notes shared through a governed channel.",
    },
    {
      num: 7,
      title: "Preserve evidence",
      desc: "Request, approvals, documents shared, version and timestamps logged where supported.",
    },
  ];

  const diligenceItems = [
    {
      requirement: "Independent security assurance",
      status: "Readiness",
    },
    {
      requirement: "Privacy assurance",
      status: "Not applicable yet",
    },
    {
      requirement: "AI governance assurance",
      status: "Readiness",
    },
    {
      requirement: "Accessibility evidence",
      status: "In progress",
    },
    {
      requirement: "Penetration test",
      status: "Not available",
    },
    {
      requirement: "Business continuity evidence",
      status: "Internal testing",
    },
  ];

  return (
    <section className="w-full bg-color-white-solid py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-[1200px] px-6 sm:px-8 flex flex-col justify-start items-start gap-9">
        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2.5">
            <div className="w-5 h-px bg-color-orange-48" />
            <span className="text-color-orange-48 text-xs font-semibold font-['Inter'] tracking-wider uppercase">
              PROCUREMENT REVIEW
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start">
            <h2 className="text-color-azure-12-4 text-2xl sm:text-3xl font-bold font-['Inter'] leading-tight">
              A structured diligence entry point — not a gate on public truth.
            </h2>
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="self-stretch grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 7 Steps */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start divide-y divide-color-orange-87 border-t border-b border-color-orange-87">
            {steps.map((step) => (
              <div
                key={step.num}
                className="w-full py-4 flex items-start gap-4"
              >
                <div className="w-7 h-7 rounded-full bg-color-azure-11 text-color-white-solid shrink-0 flex items-center justify-center text-xs font-bold font-['Inter'] mt-0.5">
                  {step.num}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-color-azure-12-4 text-sm font-bold font-['Inter']">
                    {step.title}
                  </h3>
                  <p className="text-color-grey-44 text-xs font-normal font-['Inter'] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Diligence Table */}
          <div className="lg:col-span-6 w-full rounded-xl border border-color-orange-87 bg-color-white-solid overflow-hidden shadow-xs">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-color-orange-87 bg-color-grey-95-12">
                  <th className="p-3 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                    Requirement
                  </th>
                  <th className="p-3 text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                    Public status
                  </th>
                  <th className="p-3 text-center text-color-grey-44 text-xs font-bold font-['Inter'] uppercase tracking-tight">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {diligenceItems.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-color-orange-87 last:border-b-0 hover:bg-amber-50/10 transition-colors"
                  >
                    <td className="p-3 align-middle text-xs font-bold text-color-azure-12-4">
                      {item.requirement}
                    </td>
                    <td className="p-3 align-middle text-xs font-normal text-color-azure-12-4">
                      {item.status}
                    </td>
                    <td className="p-3 align-middle text-center">
                      <a
                        href="#request-evidence"
                        className="text-xs font-semibold text-color-azure-24 hover:text-color-orange-48 transition-colors"
                      >
                        Request
                      </a>
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
