import React from "react";
import SectionHead from "./SectionHead";
import { C, FONT } from "./tokens";
import { COMPLIANCE_CARDS, type ComplianceCard } from "./data";

const badgeStyle = (tone: ComplianceCard["badgeTone"]) => {
  if (tone === "current") return { background: C.green86, color: C.green34, border: "none" as const };
  if (tone === "restricted") return { background: C.orange82, color: C.orange48, border: "none" as const };
  return { background: C.grey96, color: C.grey58, border: "none" as const };
};

export default function ComplianceSection() {
  return (
    <section className="w-full flex justify-center" style={{ background: C.grey96 }}>
      <div className="w-full max-w-[1200px] px-8 py-16 flex flex-col gap-7">
        <div className="flex flex-wrap items-end justify-between">
          <SectionHead eyebrow="COMPLIANCE & CERTIFICATIONS" title="Scope matters as much as the standard." />
          <p className="w-full lg:w-[480px] pr-6 pt-3.5 pb-5 text-base leading-6 whitespace-nowrap" style={{ color: C.grey58, fontFamily: FONT }}>
            Certifications/attestations are kept separate from
            <br />
            regulatory support, framework alignment, and customer
            <br />
            responsibilities. A logo alone is never sufficient proof.
          </p>
        </div>

        <div className="pt-2.5 flex flex-wrap gap-5">
          {COMPLIANCE_CARDS.map((card) => {
            const badge = badgeStyle(card.badgeTone);
            return (
              <div
                key={card.title}
                className="flex-1 min-w-60 p-5 rounded-xl flex flex-col gap-1.5"
                style={{ background: C.white, border: `1px solid ${C.grey95}` }}
              >
                <div className="text-base font-bold" style={{ color: C.azure11, fontFamily: FONT }}>
                  {card.title}
                </div>
                <div className="pb-2.5 text-xs leading-5 whitespace-pre-line" style={{ color: C.grey58, fontFamily: FONT }}>
                  {card.body}
                </div>
                <div
                  className="self-start px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight"
                  style={{ ...badge, fontFamily: FONT }}
                >
                  {card.badge}
                </div>
                <div className="pt-1 text-base whitespace-pre-wrap" style={{ color: C.azure11, fontFamily: FONT }}>
                  {card.foot}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
