"use client";

const evidenceLayers = [
  {
    number: "01",
    title: "Governance decision",
    description:
      "Actor, entity, purpose, policy basis, authorization outcome, timestamp.",
    reference: "Decision card · reference ID",
  },
  {
    number: "02",
    title: "Workflow history",
    description:
      "Every transition, approver, delegation, rejection, escalation and rationale.",
    reference: "Chronological timeline",
  },
  {
    number: "03",
    title: "Document lineage",
    description:
      "Version, integrity hash, access history, signature status, retention reference.",
    reference: "Document evidence drawer",
  },
  {
    number: "04",
    title: "Access event",
    description:
      "Who accessed restricted data, for what recorded purpose, under which policy.",
    reference: "Access evidence panel",
  },
  {
    number: "05",
    title: "Evidence manifest",
    description:
      "Scenario package with controlled export, stating any restricted exclusions.",
    reference: "Package index · export control",
  },
  {
    number: "06",
    title: "Integrity controls",
    description:
      "Append-only records and tamper-evident chains, with cryptographic validation where implemented.",
    reference: "Integrity status · validation",
  },
];

export default function EvidenceReadiness() {
  return (
    <section className="w-full bg-[#F5F7F7]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-5 lg:px-12">
          {/* Header */}
          <div className="flex w-full flex-col items-start">
            <div className="flex w-full flex-col items-start gap-4 pt-2.5">
              <div className="flex items-center gap-2.5">
                <div className="h-[1.5px] w-4 bg-orange-400" />

                <span className="text-xs font-medium uppercase leading-5 tracking-widest text-orange-400">
                  Privacy evidence and incident readiness
                </span>
              </div>

              <h2 className="w-full text-3xl font-semibold leading-tight text-[#073B47] sm:text-4xl lg:text-5xl lg:leading-[49.28px]">
                Decisions and exceptions leave
                <br className="hidden sm:block" />
                evidence
              </h2>
            </div>

            <p className="mt-4 max-w-[690px] text-base font-normal leading-7 text-[#5B7178] sm:text-lg lg:text-xl lg:leading-8">
              Six layers shared with the wider evidence model, plus the
              privacy-specific escalation path.
            </p>
          </div>

          {/* Evidence layers */}
          <div className="flex w-full flex-col gap-1.5 pt-6 sm:pt-8 lg:pt-9">
            {evidenceLayers.map((item) => (
              <div
                key={item.number}
                className="flex w-full flex-col gap-4 rounded-[10px] border border-[#DCEAEE] bg-white px-3.5 py-3 sm:flex-row sm:items-center sm:gap-3.5"
              >
                {/* Number */}
                <div className="flex w-8 shrink-0 items-center justify-center rounded-[5px] bg-[#073B47] py-[3px]">
                  <span className="text-center text-[10px] font-medium leading-4 text-white">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <div className="w-full shrink-0 sm:w-48">
                  <h3 className="pt-1 text-sm font-bold leading-5 text-[#073B47]">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-normal leading-5 text-[#5B7178]">
                    {item.description}
                  </p>
                </div>

                {/* Reference */}
                <div className="w-full shrink-0 rounded-xl border border-[#DCEAEE] bg-white p-4 sm:w-auto sm:min-w-[144px] lg:min-w-[176px]">
                  <span className="text-[8.5px] font-normal uppercase leading-3 tracking-wide text-orange-400">
                    {item.reference}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}