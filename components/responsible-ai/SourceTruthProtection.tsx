import React from "react";

type StateTone =
  | "authoritative"
  | "proposed"
  | "assisted"
  | "accepted"
  | "rejected"
  | "superseded"
  | "invalidated";

type StateItem = {
  id: string;
  label: string;
  description: string;
  treatment: string;
  tone: StateTone;
};

const states: readonly StateItem[] = [
  {
    id: "authoritative",
    label: "AUTHORITATIVE",
    description: "System-of-record value governed by the owning domain.",
    treatment: "Standard trusted record treatment.",
    tone: "authoritative",
  },
  {
    id: "ai-proposed",
    label: "AI-PROPOSED",
    description: "Generated candidate not yet accepted.",
    treatment:
      "Outlined, tinted background, AI label and a review action. Never styled as a record.",
    tone: "proposed",
  },
  {
    id: "ai-assisted",
    label: "AI-ASSISTED / HUMAN-EDITED",
    description: "AI proposal changed by a reviewer before acceptance.",
    treatment: "Shows AI origin alongside the human edit history.",
    tone: "assisted",
  },
  {
    id: "accepted",
    label: "ACCEPTED",
    description: "Reviewed result accepted through a governed workflow.",
    treatment:
      "May become authoritative only through the owning domain's rules.",
    tone: "accepted",
  },
  {
    id: "rejected",
    label: "REJECTED",
    description: "Proposal not used.",
    treatment: "Evidence retained where required. Never disappears silently.",
    tone: "rejected",
  },
  {
    id: "superseded",
    label: "SUPERSEDED",
    description:
      "Previously accepted output replaced by a later authoritative decision.",
    treatment:
      "Lineage shown from the superseding record back to the original.",
    tone: "superseded",
  },
  {
    id: "invalidated",
    label: "INVALIDATED",
    description:
      "Output cannot be relied upon due to an incident, failed evaluation or model issue.",
    treatment: "Strong warning; reuse is blocked.",
    tone: "invalidated",
  },
] as const;

const toneStyles = {
  authoritative: {
    row: "bg-[#e8eff6] border-[#d3dfea] border-l-[3px] border-l-[#12466b]",
    tag: "bg-[#0f4467] text-white border-[#0f4467]",
  },
  proposed: {
    row: "bg-[#f6f3fb] border-[#e2dcee]",
    tag: "bg-[#f3edfa] text-[#7a5aa6] border-[#cdbfe3] border-dashed",
  },
  assisted: {
    row: "bg-white border-[#e3e8ed]",
    tag: "bg-[#f3edfa] text-[#6d4f9c] border-[#cdbfe3]",
  },
  accepted: {
    row: "bg-white border-[#e3e8ed]",
    tag: "bg-[#eaf6ef] text-[#2f7a55] border-[#b9dfc9]",
  },
  rejected: {
    row: "bg-white border-[#e3e8ed]",
    tag: "bg-[#eff1f3] text-[#6b7783] border-[#d5dade]",
  },
  superseded: {
    row: "bg-white border-[#e3e8ed]",
    tag: "bg-[#fbf0d9] text-[#8a6a1f] border-[#ebd59b]",
  },
  invalidated: {
    row: "bg-white border-[#e3e8ed]",
    tag: "bg-white text-[#a8322a] border-[#b8433a] border-[1.5px]",
  },
} as const;

export default function SourceTruthProtection() {
  return (
    <section className="w-full bg-white px-5 py-10 sm:px-10 lg:px-[42px] lg:py-[46px]">
      <div className="mx-auto w-full max-w-6xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="block h-px w-[10px] bg-[#b08a3e]" />
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#b08a3e]">
            Source-Truth Protection
          </span>
        </div>

        {/* Header */}
        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <h1 className="max-w-[420px] text-[32px] font-bold leading-[1.12] tracking-[-0.02em] text-[#14263a] sm:text-[38px]">
            Seven states that must never look alike
          </h1>
          <p className="max-w-[420px] text-[15px] leading-[1.7] text-[#5b6b7c] lg:mt-1 lg:text-[16px]">
            AI-generated content is never visually identical to an authoritative
            business record before governed acceptance. This is the core trust
            signal on the whole page.
          </p>
        </div>

        {/* Rows */}
        <ul className="mt-9 flex flex-col gap-[6px] lg:mt-11">
          {states.map((item) => {
            const styles = toneStyles[item.tone];
            return (
              <li
                key={item.id}
                className={`flex flex-col gap-2 rounded-[6px] border px-[10px] py-[11px] shadow-[0_1px_2px_rgba(20,38,58,0.04)] md:grid md:grid-cols-[130px_1fr_1fr] md:items-center md:gap-6 lg:grid-cols-[130px_340px_1fr] ${styles.row}`}
              >
                <div>
                  <span
                    className={`inline-block whitespace-nowrap rounded-[3px] border px-[7px] py-[3px] font-mono text-[8px] font-medium uppercase leading-none tracking-[0.1em] ${styles.tag}`}
                  >
                    {item.label}
                  </span>
                </div>

                <p className="text-[11.5px] leading-[1.5] text-[#5b6b7c]">
                  {item.description}
                </p>

                <p className="text-[11px] italic leading-[1.5] text-[#6b5a1e]">
                  {item.treatment}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
