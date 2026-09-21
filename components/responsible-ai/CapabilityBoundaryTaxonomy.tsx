import React from "react";

type Boundary = {
  id: string;
  label: string;
  description: string;
  status: string;
  tone:
    | "observe"
    | "suggest"
    | "forecast"
    | "recommend"
    | "draft"
    | "execute"
    | "prohibited";
};

const boundaries: readonly Boundary[] = [
  {
    id: "observe",
    label: "OBSERVE",
    description:
      "Detect or classify without changing source truth. Example: an anomaly detection flag raised for review.",
    status: "IN USE",
    tone: "observe",
  },
  {
    id: "suggest",
    label: "SUGGEST",
    description:
      "Propose a candidate value, match, clause or action. Review is always required before it has effect.",
    status: "IN USE",
    tone: "suggest",
  },
  {
    id: "forecast",
    label: "FORECAST",
    description:
      "Generate a scenario-based estimate with uncertainty context. Always labelled as a projection.",
    status: "IN USE",
    tone: "forecast",
  },
  {
    id: "recommend",
    label: "RECOMMEND",
    description:
      "Rank options or surface decision support, with a rationale and evidence drawer attached.",
    status: "IN USE",
    tone: "recommend",
  },
  {
    id: "draft",
    label: "DRAFT",
    description:
      "Generate proposed text or metadata that is not authoritative. Visually separated from the approved record.",
    status: "IN USE",
    tone: "draft",
  },
  {
    id: "execute",
    label: "EXECUTE — GOVERNED",
    description:
      "Only where a separately verified policy permits an automated action with evidence and rollback. Never the default, and not depicted for material financial or legal actions.",
    status: "NOT DEPICTED — PRODUCT TRUTH UNVERIFIED",
    tone: "execute",
  },
  {
    id: "prohibited",
    label: "PROHIBITED",
    description:
      "Bypass approval, silently alter authoritative records, or remove evidence. AI is not permitted to perform these under any configuration.",
    status: "ABSOLUTE",
    tone: "prohibited",
  },
] as const;

const toneStyles = {
  observe: {
    row: "border-l-[#3f6580] bg-white",
    tag: "bg-[#e8f0f6] text-[#3f6580] border-[#c3d6e4]",
    status: "bg-[#eef2f6] text-[#5b6b7c] border-[#d5dde5]",
  },
  suggest: {
    row: "border-l-[#8a6fb0] bg-white",
    tag: "bg-[#f1ebf8] text-[#7a5aa6] border-[#d9cbe9]",
    status: "bg-[#eef2f6] text-[#5b6b7c] border-[#d5dde5]",
  },
  forecast: {
    row: "border-l-[#d9a441] bg-white",
    tag: "bg-[#fdf3dc] text-[#a9741a] border-[#ecd49a]",
    status: "bg-[#eef2f6] text-[#5b6b7c] border-[#d5dde5]",
  },
  recommend: {
    row: "border-l-[#4c6a8f] bg-white",
    tag: "bg-[#ece9f7] text-[#5a4ea3] border-[#d0caea]",
    status: "bg-[#eef2f6] text-[#5b6b7c] border-[#d5dde5]",
  },
  draft: {
    row: "border-l-[#8b97a3] bg-white",
    tag: "bg-white text-[#5b6b7c] border-[#cfd6dd]",
    status: "bg-[#eef2f6] text-[#5b6b7c] border-[#d5dde5]",
  },
  execute: {
    row: "border-l-[#e3b3ad] bg-white",
    tag: "bg-white text-[#b4443a] border-[#e3b3ad]",
    status: "bg-[#f3f0ee] text-[#7d7a78] border-[#dcd7d3]",
  },
  prohibited: {
    row: "border-l-[#a8322a] bg-white",
    tag: "bg-white text-[#b4231a] border-[#e0a7a1]",
    status: "bg-[#fbe9e7] text-[#b4231a] border-[#efc3be]",
  },
} as const;

export default function CapabilityBoundaryTaxonomy() {
  return (
    <section className="w-full bg-white px-5 py-10 sm:px-10 lg:px-[60px] lg:py-[46px]">
      <div className="mx-auto w-full max-w-6xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="block h-px w-[14px] bg-[#b08a3e]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b08a3e]">
            Capability Boundary Taxonomy
          </span>
        </div>

        {/* Header */}
        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <h1 className="max-w-[420px] text-[32px] font-bold leading-[1.12] tracking-[-0.02em] text-[#14263a] sm:text-[40px]">
            Seven boundaries, and where the line sits
          </h1>
          <p className="max-w-[500px] text-[15px] leading-[1.75] text-[#5b6b7c] lg:text-[16px]">
            Every AI capability is registered against exactly one boundary. Five
            are in current use; one is tightly gated and one is absolute.
          </p>
        </div>

        {/* Rows */}
        <ul className="mt-9 flex flex-col gap-[10px] lg:mt-11">
          {boundaries.map((item) => {
            const styles = toneStyles[item.tone];
            return (
              <li
                key={item.id}
                className={`flex flex-col gap-3 rounded-[6px] border border-l-[3px] border-[#e3e8ed] px-4 py-[14px] shadow-[0_1px_2px_rgba(20,38,58,0.04)] md:grid md:grid-cols-[150px_1fr_auto] md:items-center md:gap-5 ${styles.row}`}
              >
                <div>
                  <span
                    className={`inline-block whitespace-nowrap rounded-[3px] border px-[7px] py-[3px] font-mono text-[9px] font-medium uppercase leading-none tracking-[0.1em] ${styles.tag}`}
                  >
                    {item.label}
                  </span>
                </div>

                <p className="max-w-[640px] text-[12.5px] leading-[1.55] text-[#5b6b7c]">
                  {item.description}
                </p>

                <div className="md:justify-self-end">
                  <span
                    className={`inline-block whitespace-nowrap rounded-[3px] border px-[7px] py-[3px] font-mono text-[8.5px] font-medium uppercase leading-none tracking-[0.1em] ${styles.status}`}
                  >
                    {item.status}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
