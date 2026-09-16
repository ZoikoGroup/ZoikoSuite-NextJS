"use client";

import React from "react";

export default function OrganizationTypeExplanation() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans flex justify-center items-center px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div
          className="bg-white border-t-4 border-t-[#D0AA55] border border-[#D0AA55] rounded-2xl p-8 md:p-12 shadow-sm relative"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-tight mb-4">
            What does Organization Type mean here?
          </h3>
          <p className="text-sm md:text-base text-[#16262F] leading-relaxed max-w-4xl">
            Organization Type is a governed evaluation hub showing how one
            ZoikoSuite operating architecture serves different structural and
            accountability contexts. Nine organization patterns describe how an
            organization is structured and governed — how authority is
            delegated, where accountability sits, how many entities and
            jurisdictions are in scope, and what oversight applies. Every
            pattern uses the same fit contract, so they can be compared on equal
            terms.
          </p>
        </div>
      </div>
    </section>
  );
}
