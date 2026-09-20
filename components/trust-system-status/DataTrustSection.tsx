"use client";

import React from "react";

export default function DataTrustSection() {
  return (
    <section className="w-full bg-[#F2F0EB] py-24 px-6 md:px-14 flex justify-center">
      <div className="w-full max-w-[1320px] px-0 md:px-12 flex flex-col justify-start items-start gap-12">
        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
            <span className="text-[#D4943A] text-xs font-normal font-['JetBrains_Mono'] leading-4 tracking-wider">
              02 / DATA TRUST
            </span>
          </div>
          <div className="self-stretch pt-[0.70px] flex flex-col justify-start items-start">
            <h2 className="text-[#0D2636] text-3xl md:text-4xl font-semibold font-['Archivo'] leading-10">
              Status freshness, scope &amp; methodology
            </h2>
          </div>
          <div className="w-full max-w-[633.16px] flex flex-col justify-start items-start">
            <p className="text-[#3E5A6B] text-base md:text-lg font-normal font-['Archivo'] leading-7">
              &quot;Operational&quot; without freshness and scope is incomplete. When telemetry is stale or
              <br />
              unknown, this page says so — it never silently preserves the last green state.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {/* Card 1: Freshness state */}
          <div className="w-full px-7 py-7 bg-white rounded-2xl border border-[#D6DEE3] flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
              <span className="text-[#3E5A6B] text-xs font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                Freshness state
              </span>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <p className="text-[#0D2636] text-sm font-normal font-['Archivo'] leading-6">
                Live · Delayed · Stale · Unknown. Stale/unknown
                <br />
                suppresses confident &quot;operational&quot; language and
                <br />
                shows the last verified timestamp instead.
              </p>
            </div>
          </div>

          {/* Card 2: Public scope */}
          <div className="w-full px-7 py-7 bg-white rounded-2xl border border-[#D6DEE3] flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
              <span className="text-[#3E5A6B] text-xs font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                Public scope
              </span>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <p className="text-[#0D2636] text-sm font-normal font-['Archivo'] leading-6">
                Shared multi-tenant services and published regions.
                <br />
                Beta/private preview and dedicated environments
                <br />
                are explicitly excluded.
              </p>
            </div>
          </div>

          {/* Card 3: Methodology */}
          <div className="w-full px-7 pt-7 pb-9 bg-white rounded-2xl border border-[#D6DEE3] flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch pb-[0.59px] flex flex-col justify-start items-start">
              <span className="text-[#3E5A6B] text-xs font-normal font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                Methodology
              </span>
            </div>
            <div className="self-stretch h-16 relative">
              <div className="w-full left-0 top-[-1px] absolute text-[#0D2636] text-sm font-normal font-['Archivo'] leading-6">
                How component status is derived and how incidents
              </div>
              <div className="left-0 top-[30.10px] absolute text-[#0D2636] text-sm font-normal font-['Archivo'] leading-6 flex items-center gap-1">
                <span>are published.</span>
                <a
                  href="#"
                  className="font-semibold text-[#173D52] hover:opacity-75 transition-opacity ml-1"
                >
                  Read methodology →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}