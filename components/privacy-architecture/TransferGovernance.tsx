"use client";

const governanceCards = [
  {
    title: "Transfer governance — this page",
    titleColor: "text-[#5B7178]",
    borderColor: "border-l-[#073B47]",
    background: "bg-white",
    badge: "Implementation status required",
    badgeClass:
      "border-[#F3B6B6] bg-[#FDECEC] text-[#9F3030]",
    items: [
      "Transfer context recorded per processing activity",
      "Cross-border movement reviewed rather than assumed",
      "Review owner named, with a review date",
      "Transfer basis reference stored, not determined",
    ],
  },
  {
    title: "Residency constraint — Data Residency",
    titleColor: "text-[#D94A4A]",
    borderColor: "border-l-orange-400",
    background: "bg-[#F5F7F7]",
    badge: "Destination not yet published",
    badgeClass:
      "border-[#B7C7CC] bg-[#F0F3F3] text-[#49636B]",
    items: [
      "Storage, processing, backup and recovery regions",
      "Key custody location and options",
      "Support-access location",
      "Lifecycle stage-by-stage behaviour",
    ],
  },
];

const privacyModes = [
  {
    title: "Multi-tenant",
    status: "Available",
    statusClass: "bg-[#F0F8F2] text-[#347A49] border-[#A8D5B4]",
    items: [
      "Region selection: at provisioning",
      "Key custody: provider-managed",
      "Restricted-field controls: standard",
      "Support access: per support model",
    ],
  },
  {
    title: "Dedicated",
    status: "By deployment",
    statusClass: "bg-[#F4F0FA] text-[#72509A] border-[#C9B8DD]",
    items: [
      "Region selection: at provisioning",
      "Key custody: provider or customer",
      "Restricted-field controls: configurable",
      "Support access: scoped per engagement",
    ],
  },
  {
    title: "Customer-managed keys",
    status: "Eligibility by region",
    statusClass: "bg-[#F4F0FA] text-[#72509A] border-[#C9B8DD]",
    items: [
      "Region selection: as underlying mode",
      "Key custody: customer holds",
      "Revocation: operational consequences apply",
      "Support access: scoped per engagement",
    ],
  },
  {
    title: "Sovereign",
    status: "Planned",
    statusClass: "bg-[#F0F3F3] text-[#49636B] border-[#B7C7CC]",
    items: [
      "Not currently available",
      "Requirements can be discussed",
      "No availability date committed",
      "No sovereign claim is made",
    ],
  },
];

export default function TransferGovernance() {
  return (
    <section className="w-full bg-[#F5F7F7]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-8 lg:px-12">
          {/* Header */}
          <div className="flex w-full flex-col items-start">
            <div className="flex flex-col items-start gap-4 pt-2.5">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <div className="h-[1.5px] w-4 bg-orange-400" />

                <span className="text-xs font-medium uppercase leading-5 tracking-widest text-orange-400">
                  Transfers, residency and privacy modes
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[850px] text-3xl font-semibold leading-tight text-[#073B47] sm:text-4xl lg:text-5xl lg:leading-[49.28px]">
                Transfer governance and
                <br className="hidden sm:block" />
                location constraint are different
                <br className="hidden sm:block" />
                things
              </h2>
            </div>

            {/* Description */}
            <p className="mt-4 max-w-[700px] text-base font-normal leading-7 text-[#5B7178] sm:text-lg lg:text-xl lg:leading-8">
              Where data sits is a residency question. Whether a movement is
              permitted, on what basis and reviewed by whom is a transfer
              question. Data Residency owns the first; this page owns the
              second.
            </p>
          </div>

          {/* Governance cards */}
          <div className="grid w-full grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:pt-8">
            {governanceCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl border border-[#DCEAEE] border-l-[3px] ${card.borderColor} ${card.background} p-6 sm:p-7`}
              >
                <div
                  className={`text-xs font-normal uppercase leading-5 tracking-wide ${card.titleColor}`}
                >
                  {card.title}
                </div>

                <div className="mt-5 pl-4">
                  <ul className="space-y-2 text-sm font-normal leading-6 text-[#073B47]">
                    {card.items.map((item) => (
                      <li key={item} className="list-disc pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <span
                    className={`inline-flex rounded-sm border px-1.5 pt-0.5 pb-[3px] text-[8.5px] font-medium uppercase leading-3 tracking-wide ${card.badgeClass}`}
                  >
                    {card.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="max-w-[700px] border-l-2 border-orange-400 pl-3.5">
            <p className="text-xs font-normal leading-5 text-[#5B7178]">
              No transfer map is shown. A world map with arrows implies a
              completeness and a legal position this page does not assert, and
              a customer&apos;s actual transfer footprint depends on their
              deployment and configuration.
            </p>
          </div>

          {/* Privacy modes heading */}
          <div className="pt-1.5">
            <span className="text-xs font-normal uppercase leading-5 tracking-wide text-[#5B7178]">
              Privacy modes by deployment
            </span>
          </div>

          {/* Privacy mode cards */}
          <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {privacyModes.map((mode) => (
              <div
                key={mode.title}
                className="flex min-h-[155px] flex-col rounded-[10px] border border-[#B7C7CC] bg-white p-3"
              >
                {/* Card header */}
                <div className="flex flex-wrap items-start justify-between gap-2 py-1.5">
                  <h3 className="text-xs font-bold leading-5 text-[#073B47]">
                    {mode.title}
                  </h3>

                  <span
                    className={`rounded-sm border px-1.5 pt-0.5 pb-[3px] text-[8.5px] font-medium uppercase leading-3 tracking-wide ${mode.statusClass}`}
                  >
                    {mode.status}
                  </span>
                </div>

                {/* Card content */}
                <div className="mt-2 pb-3">
                  <div className="space-y-0.5 text-[9px] font-normal leading-3 tracking-tight text-[#5B7178]">
                    {mode.items.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}