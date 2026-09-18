import React from "react";

export default function CommunicationsSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-7 sm:px-14 md:px-28 py-16 bg-white flex flex-col justify-start items-start gap-8 overflow-hidden">
      {/* Section Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3.5">
        <div className="inline-flex justify-start items-center gap-2.5">
          <div className="w-5 h-0.5 bg-[#C44242]" />
          <span className="text-[#C44242] text-xs font-medium font-['JetBrains_Mono'] uppercase tracking-wider">
            Communications · #communications
          </span>
        </div>
        <h2 className="w-full text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight sm:leading-10">
          Attributable references, not an invented channel.
        </h2>
        <p className="w-full text-gray-500 text-base font-normal font-['Manrope'] leading-6">
          Communication context appears only when disclosure is approved and the
          reference is current.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full min-h-[192px] flex flex-col lg:flex-row justify-start items-stretch gap-5">
        {/* Card 1: Attribution */}
        <div className="flex-1 lg:h-44 p-6 bg-white rounded-2xl border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
          <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
            Attribution
          </h3>
          <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
            Actor or role, time, visibility and audience, with source or channel
            only when approved.
          </p>
        </div>

        {/* Card 2: Scope */}
        <div className="flex-1 lg:h-44 p-6 bg-white rounded-2xl border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
          <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
            Scope
          </h3>
          <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
            Case scope; native, external or direction only when current;
            correction and withdrawal history.
          </p>
        </div>

        {/* Card 3: Unavailable by design */}
        <div className="flex-1 p-6 bg-white rounded-2xl border border-[#0A2029]/10 flex flex-col justify-start items-start gap-3">
          <h3 className="w-full text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
            Unavailable by design
          </h3>
          <p className="w-full text-gray-500 text-sm font-normal font-['Manrope'] leading-5">
            Restricted or unavailable references remain labeled. No claim of
            chat, email, threads, mentions, templates, notifications, portals,
            transcripts, attachments or external participants.
          </p>
        </div>
      </div>
    </section>
  );
}
