const moments = [
  {
    title: "Know where the business stands",
    description:
      "Executive dashboard, entity roll-up, cash, receivables, payables, close status.",
  },
  {
    title: "Move money and work with control",
    description:
      "AP/AR, billing, approvals, payment status, exception queues.",
  },
  {
    title: "Close with less ambiguity",
    description:
      "Reconciliation, journal workflow, close tasks, evidence trail.",
  },
  {
    title: "Operate across entities and jurisdictions",
    description:
      "Entity context, currency/tax views, policy/jurisdiction controls.",
  },
  {
    title: "Connect finance with the rest of operations",
    description:
      "Payroll/workforce, contracts/commercial operations, shared approvals.",
  },
  {
    title: "Use AI with governance",
    description:
      "Contextual assistance, source/evidence references, human approval and authoritative-truth boundaries.",
  },
];

export default function WhatYouSeeSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto lg:px-8 flex flex-col items-center gap-10">
        <div className="max-w-[640px] flex flex-col gap-3.5">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-5 h-px bg-[#B8913F]" />
            <span className="text-xs font-semibold tracking-wide text-[#B8913F]">
              WHAT YOU&apos;LL SEE
            </span>
          </div>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#101E2B] leading-9">
            Six moments mapped to how your business actually runs.
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className="p-5 bg-white rounded-xl border border-[#E4E1D8] flex flex-col gap-2"
            >
              <span className="text-xs font-bold text-[#B8913F]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-bold text-[#101E2B]">
                {moment.title}
              </h3>
              <p className="text-xs text-[#66727C] leading-5">
                {moment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
